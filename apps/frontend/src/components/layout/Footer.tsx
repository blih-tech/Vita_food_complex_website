'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@frontend/navigation';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-[#050505] text-white py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8 col-span-1 md:col-span-2">
            <h2 className="heading-footer-brand uppercase">
                Vita Food
            </h2>
            <p className="text-xl text-white/40 max-w-sm">
                {t('tagline')}
            </p>
            <div className="flex gap-4">
                {/* Social Placeholders */}
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">FB</div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">IG</div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">TW</div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">LN</div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="heading-footer-section uppercase">
                {t('columns.products')}
            </h3>
            <ul className="space-y-4">
                <li><Link href="/products" className="text-white/40 hover:text-white transition-colors">Biscuits</Link></li>
                <li><Link href="/products" className="text-white/40 hover:text-white transition-colors">Wheat Flour</Link></li>
                <li><Link href="/products" className="text-white/40 hover:text-white transition-colors">Bora Series</Link></li>
                <li><Link href="/products" className="text-white/40 hover:text-white transition-colors">Kiyu Series</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="heading-footer-section uppercase">
                {t('columns.company')}
            </h3>
            <ul className="space-y-4">
                <li><Link href="/about" className="text-white/40 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/factory" className="text-white/40 hover:text-white transition-colors">Factory Tour</Link></li>
                <li><Link href="/quality" className="text-white/40 hover:text-white transition-colors">Quality Control</Link></li>
                <li><Link href="/contact" className="text-white/40 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-white/40 text-sm">
            <p>{t('copyright')}</p>
            <div className="flex gap-8">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
