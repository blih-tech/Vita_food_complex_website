import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v2 as cloudinary } from 'cloudinary';
import { Readable } from 'stream';

@Injectable()
export class CloudinaryService {
  constructor(private config: ConfigService) {
    cloudinary.config({
      cloud_name: config.get('CLOUDINARY_CLOUD_NAME'),
      api_key: config.get('CLOUDINARY_API_KEY'),
      api_secret: config.get('CLOUDINARY_API_SECRET'),
    });
  }

  uploadBuffer(
    buffer: Buffer,
    options: {
      folder?: string;
      resource_type?: 'auto' | 'image' | 'raw' | 'video';
    } = {},
  ): Promise<{ url: string; publicId: string }> {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: options.folder ?? 'vita',
          resource_type: options.resource_type ?? 'auto',
        },
        (error, result) => {
          if (error || !result) {
            const normalizedError =
              error instanceof Error
                ? error
                : new Error(error ? JSON.stringify(error) : 'Upload failed');
            return reject(normalizedError);
          }
          resolve({ url: result.secure_url, publicId: result.public_id });
        },
      );
      Readable.from(buffer).pipe(stream);
    });
  }

  deleteFile(
    publicId: string,
    resourceType: 'image' | 'raw' | 'video' = 'raw',
  ) {
    return cloudinary.uploader.destroy(publicId, {
      resource_type: resourceType,
    });
  }

  extractPublicIdFromUrl(url: string): string | null {
    if (!url.includes('/res.cloudinary.com/')) return null;
    try {
      const parsed = new URL(url);
      const uploadSegment = '/upload/';
      const uploadIndex = parsed.pathname.indexOf(uploadSegment);
      if (uploadIndex < 0) return null;

      let remainder = parsed.pathname.slice(uploadIndex + uploadSegment.length);
      remainder = remainder.replace(/^v\d+\//, '');
      const withoutExtension = remainder.replace(/\.[^/.]+$/, '');
      return withoutExtension || null;
    } catch {
      return null;
    }
  }

  async deleteByUrl(
    url: string,
    resourceType: 'image' | 'raw' | 'video' = 'image',
  ) {
    const publicId = this.extractPublicIdFromUrl(url);
    if (!publicId) return;
    await this.deleteFile(publicId, resourceType);
  }
}
