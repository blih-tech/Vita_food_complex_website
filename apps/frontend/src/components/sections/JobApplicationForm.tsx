"use client";

import { useTranslations } from "next-intl";
import { useState, useRef, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import { CheckCircle, AlertCircle, Loader2, Upload, FileText, X } from "lucide-react";
import api from "@/lib/api";

const ACCEPTED = ".pdf,.doc,.docx,.jpg,.jpeg,.png";

interface FormState {
  firstName: string; lastName: string; email: string; phone: string; address: string;
  currentRole: string; yearsExperience: string;
  highestEducation: string; institution: string; fieldOfStudy: string;
  skills: string; coverLetter: string; additionalInfo: string;
}

const EMPTY: FormState = {
  firstName: '', lastName: '', email: '', phone: '', address: '',
  currentRole: '', yearsExperience: '',
  highestEducation: '', institution: '', fieldOfStudy: '',
  skills: '', coverLetter: '', additionalInfo: '',
};

const inputStyle: React.CSSProperties = {
  width: '100%', fontFamily: "'Outfit', sans-serif", fontWeight: 300,
  fontSize: 16, lineHeight: '1.26em', letterSpacing: '-0.064px',
  color: '#333733', padding: '8px 15.06px', borderRadius: 10.04,
  border: '1px solid rgba(0,0,0,0.2)', background: 'transparent', outline: 'none',
};

export default function JobApplicationForm() {
  const t = useTranslations("Careers");
  const params = useParams();
  const jobId = (params?.id as string) ?? '';

  const [form, setForm] = useState<FormState>(EMPTY);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => { if (sectionRef.current) obs.unobserve(sectionRef.current); };
  }, []);

  const set = useCallback((key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [key]: e.target.value })), []);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) setCvFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cvFile) { setErrorMsg('Please upload your CV.'); setStatus('error'); return; }

    setSubmitting(true);
    setErrorMsg('');
    try {
      // 1. Upload CV to Cloudinary via backend
      setUploading(true);
      const formData = new FormData();
      formData.append('file', cvFile);
      const { data: cvData } = await api.post('/applications/upload-cv', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setUploading(false);

      // 2. Submit application
      await api.post('/applications', {
        jobId,
        ...form,
        cvUrl: cvData.url,
        cvPublicId: cvData.publicId,
        cvFileName: cvData.originalName,
      });

      setStatus('success');
      setForm(EMPTY);
      setCvFile(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      setUploading(false);
      setErrorMsg(err?.response?.data?.message ?? 'Submission failed. Please try again.');
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  if (status === 'success') {
    return (
      <section className="px-4 sm:px-6 lg:px-[128px] flex justify-center items-center" style={{ paddingTop: 196, paddingBottom: 80 }}>
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-[#23B349]/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-[#23B349]" />
          </div>
          <h2 className="font-['Funnel_Display'] text-3xl font-bold text-[#23B349] mb-3">Application Submitted!</h2>
          <p className="font-['Outfit'] text-[#4A5565] text-lg">Thank you for applying. We'll review your application and get back to you soon.</p>
        </div>
      </section>
    );
  }

  const cardStyle = (i: number): React.CSSProperties => ({
    borderRadius: 24, border: '1px solid rgba(0,0,0,0.1)', background: '#FFFFFF',
    gap: 30, padding: '27.36px 30.13px 30.13px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: `all 0.8s ease-out ${i * 0.08}s`,
    display: 'flex', flexDirection: 'column' as const,
  });

  const sectionTitle = (title: string, desc: string) => (
    <div style={{ marginBottom: 20 }}>
      <p style={{ fontFamily: "'Funnel Display', sans-serif", fontWeight: 500, fontSize: 20, lineHeight: '1.25em', letterSpacing: '-0.08px', color: '#000500', marginBottom: 4 }}>{title}</p>
      <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300, fontSize: 16, lineHeight: '1.26em', color: '#717182' }}>{desc}</p>
    </div>
  );

  const label = (text: string) => (
    <label style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 18, lineHeight: '1em', letterSpacing: '-0.072px', color: '#000500' }}>{text}</label>
  );

  const field = (key: keyof FormState, placeholder: string, type = 'text', full = false) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: full ? '1 1 100%' : '1 1 0' }}>
      {label(t(`form.fields.${key}` as any) || placeholder)}
      <input type={type} style={inputStyle} placeholder={placeholder} value={(form as any)[key]} onChange={set(key)} />
    </div>
  );

  const textarea = (key: keyof FormState, placeholder: string) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: '1 1 100%' }}>
      {label(t(`form.fields.${key}` as any) || placeholder)}
      <textarea style={{ ...inputStyle, minHeight: 108, resize: 'vertical', padding: '10px 15.06px' }} placeholder={placeholder} value={(form as any)[key]} onChange={set(key)} />
    </div>
  );

  const row = (...children: React.ReactNode[]) => (
    <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' as const }}>{children}</div>
  );

  return (
    <section ref={sectionRef} className="px-4 sm:px-6 lg:px-[128px]" style={{ background: '#FFFFFF', paddingTop: 196, paddingBottom: 80 }}>
      <div className="mx-auto flex flex-col" style={{ maxWidth: 964, gap: 40 }}>
        {/* Header */}
        <div className="flex flex-col items-center" style={{ gap: 10 }}>
          <h1 style={{ fontFamily: "'Funnel Display', sans-serif", fontWeight: 500, fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: '1.506em', color: '#23B349', textAlign: 'center' }}>
            {t("form.title")}
          </h1>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 20, lineHeight: '1.26em', letterSpacing: '-0.08px', color: '#4A5565', textAlign: 'center' }}>
            {t("form.subtitle")}
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 30.13 }}>
          {/* Personal */}
          <div style={cardStyle(0)}>
            {sectionTitle(t("form.personal.title"), t("form.personal.desc"))}
            {row(field('firstName', 'John'), field('lastName', 'Doe'))}
            {row(field('email', 'john@example.com', 'email'), field('phone', '+251 91 234 5678', 'tel'))}
            {row(field('address', 'Addis Ababa, Ethiopia', 'text', true))}
          </div>

          {/* Professional */}
          <div style={cardStyle(1)}>
            {sectionTitle(t("form.professional.title"), t("form.professional.desc"))}
            {row(field('currentRole', 'e.g. Production Manager'), field('yearsExperience', 'e.g. 5'))}
          </div>

          {/* Education */}
          <div style={cardStyle(2)}>
            {sectionTitle(t("form.education.title"), t("form.education.desc"))}
            {row(field('highestEducation', 'e.g. Bachelor\'s Degree'), field('institution', 'e.g. AAU'))}
            {row(field('fieldOfStudy', 'e.g. Food Science', 'text', true))}
          </div>

          {/* CV & Skills */}
          <div style={cardStyle(3)}>
            {sectionTitle(t("form.resume.title"), t("form.resume.desc"))}

            {/* CV Upload */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {label('CV / Resume *')}
              <div
                onClick={() => fileRef.current?.click()}
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                style={{
                  height: 140, borderRadius: 12.55, border: cvFile ? '2px solid #23B349' : '2px dashed #D1D5DC',
                  background: cvFile ? 'rgba(35,179,73,0.04)' : 'transparent',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', transition: 'all 0.2s', gap: 8,
                }}
              >
                {cvFile ? (
                  <>
                    <FileText size={28} color="#23B349" />
                    <p style={{ fontFamily: "'Outfit'", fontSize: 14, color: '#23B349', fontWeight: 600 }}>{cvFile.name}</p>
                    <button type="button" onClick={(e) => { e.stopPropagation(); setCvFile(null); }}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#999', display: 'flex', alignItems: 'center', gap: 4, fontSize: 12 }}>
                      <X size={12} /> Remove
                    </button>
                  </>
                ) : (
                  <>
                    <Upload size={28} color="#23B349" />
                    <p style={{ fontFamily: "'Outfit'", fontWeight: 300, fontSize: 16, color: '#4A5565', textAlign: 'center' }}>
                      Click or drag to upload your CV
                    </p>
                    <p style={{ fontFamily: "'Outfit'", fontWeight: 300, fontSize: 13, color: '#8A8C8A' }}>PDF, Word, or Image (max 10 MB)</p>
                  </>
                )}
              </div>
              <input ref={fileRef} type="file" accept={ACCEPTED} className="hidden" onChange={(e) => setCvFile(e.target.files?.[0] ?? null)} />
            </div>

            {row(textarea('skills', 'e.g. Quality control, Food safety, ISO 22000...'))}
            {row(textarea('coverLetter', 'Tell us why you\'re a great fit for this role...'))}
          </div>

          {/* Additional */}
          <div style={cardStyle(4)}>
            {sectionTitle(t("form.additional.title"), t("form.additional.desc"))}
            {row(textarea('additionalInfo', 'Any other information you\'d like to share...'))}
          </div>

          {/* Status messages */}
          {status === 'error' && (
            <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-[12px] px-4 py-3">
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
              <p className="font-['Outfit'] text-sm text-red-700">{errorMsg}</p>
            </div>
          )}

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2 transition-all hover:shadow-lg disabled:opacity-60"
              style={{ padding: '10px 24px', minWidth: 200, height: 48, borderRadius: 24, background: '#23B349', fontFamily: "'Funnel Display', sans-serif", fontWeight: 500, fontSize: 17, color: '#FFFFFF', border: 'none', cursor: 'pointer' }}
            >
              {uploading ? <><Loader2 size={16} className="animate-spin" /> Uploading CV…</> :
               submitting ? <><Loader2 size={16} className="animate-spin" /> Submitting…</> :
               t("form.submit")}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
