'use client';

import { useState } from 'react';
import { school } from '@/data/school';
import { Send, CheckCircle2, Mail } from 'lucide-react';

interface FormData {
  parentName: string;
  childName: string;
  childAge: string;
  program: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  parentName?: string;
  childName?: string;
  childAge?: string;
  program?: string;
  phone?: string;
  email?: string;
}

const initialData: FormData = {
  parentName: '',
  childName: '',
  childAge: '',
  program: '',
  phone: '',
  email: '',
  message: '',
};

export default function EnquiryForm() {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.parentName.trim()) newErrors.parentName = 'Parent name is required.';
    if (!formData.childName.trim()) newErrors.childName = 'Child name is required.';
    if (!formData.childAge.trim()) newErrors.childAge = 'Child age or date of birth is required.';
    if (!formData.program) newErrors.program = 'Please select a program.';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const body = `Admission Enquiry for InnoTots Preschool\n\nParent Name: ${formData.parentName}\nChild Name: ${formData.childName}\nChild Age: ${formData.childAge}\nProgram of Interest: ${formData.program}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message || 'No additional note provided.'}`;
    const mailtoLink = `mailto:${school.email}?subject=Admission Enquiry – ${encodeURIComponent(formData.childName)}&body=${encodeURIComponent(body)}`;
    
    // Hand off to parent's email client
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 text-center shadow-xs border border-gray-100 flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-2xl bg-[#FFF0F3] text-[#FF3F68] flex items-center justify-center mb-5 shadow-xs">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="text-2xl sm:text-3xl font-semibold mb-3 text-[#07194F]" style={{ fontFamily: 'var(--font-fredoka)' }}>
          Enquiry Formatted
        </h3>
        <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto leading-relaxed mb-6" style={{ fontFamily: 'var(--font-nunito)' }}>
          Your enquiry details have been prepared and handed off to your device&apos;s email client addressed to <strong className="text-[#07194F]">{school.email}</strong>. Please click send in your email application to deliver your message.
        </p>
        <button
          onClick={() => { setFormData(initialData); setSubmitted(false); }}
          className="px-6 py-2.5 rounded-full text-xs font-bold text-[#FF3F68] bg-[#FFF0F3] hover:bg-[#FFE0E8] transition-colors cursor-pointer"
          style={{ fontFamily: 'var(--font-nunito)' }}
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  const baseInput = "w-full px-4 py-3 rounded-2xl border bg-gray-50/50 text-base sm:text-sm text-[#07194F] placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-3 focus:ring-[#FF3F68]/15 transition-all";
  const labelClass = "block text-xs font-bold uppercase tracking-wider text-[#07194F] mb-1.5";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-3xl p-5 sm:p-8 lg:p-10 shadow-xs border border-gray-100"
    >
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-[#FF3F68] bg-[#FFF0F3] px-3 py-1 rounded-full inline-block mb-2" style={{ fontFamily: 'var(--font-nunito)' }}>
          Online Admissions
        </span>
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#07194F]" style={{ fontFamily: 'var(--font-fredoka)' }}>
          Parent Enquiry Form
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-1" style={{ fontFamily: 'var(--font-nunito)' }}>
          Fill in the details below. Submitted enquiries open directly in your mail application to send to our admissions desk.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Parent Name */}
        <div>
          <label htmlFor="parentName" className={labelClass} style={{ fontFamily: 'var(--font-nunito)' }}>
            Parent Name <span className="text-[#FF3F68]">*</span>
          </label>
          <input
            id="parentName"
            name="parentName"
            type="text"
            value={formData.parentName}
            onChange={handleChange}
            className={`${baseInput} ${errors.parentName ? 'border-[#FF3F68] bg-[#FFF0F3]/30' : 'border-gray-200'}`}
            placeholder="Your full name"
            aria-describedby={errors.parentName ? 'parentName-error' : undefined}
            style={{ fontFamily: 'var(--font-nunito)' }}
          />
          {errors.parentName && <p id="parentName-error" className="text-xs text-[#FF3F68] mt-1 font-semibold" role="alert">{errors.parentName}</p>}
        </div>

        {/* Child Name */}
        <div>
          <label htmlFor="childName" className={labelClass} style={{ fontFamily: 'var(--font-nunito)' }}>
            Child Name <span className="text-[#FF3F68]">*</span>
          </label>
          <input
            id="childName"
            name="childName"
            type="text"
            value={formData.childName}
            onChange={handleChange}
            className={`${baseInput} ${errors.childName ? 'border-[#FF3F68] bg-[#FFF0F3]/30' : 'border-gray-200'}`}
            placeholder="Child's full name"
            aria-describedby={errors.childName ? 'childName-error' : undefined}
            style={{ fontFamily: 'var(--font-nunito)' }}
          />
          {errors.childName && <p id="childName-error" className="text-xs text-[#FF3F68] mt-1 font-semibold" role="alert">{errors.childName}</p>}
        </div>

        {/* Child Age */}
        <div>
          <label htmlFor="childAge" className={labelClass} style={{ fontFamily: 'var(--font-nunito)' }}>
            Child Age <span className="text-[#FF3F68]">*</span>
          </label>
          <input
            id="childAge"
            name="childAge"
            type="text"
            value={formData.childAge}
            onChange={handleChange}
            className={`${baseInput} ${errors.childAge ? 'border-[#FF3F68] bg-[#FFF0F3]/30' : 'border-gray-200'}`}
            placeholder="e.g. 2.5 years or DD/MM/YYYY"
            aria-describedby={errors.childAge ? 'childAge-error' : undefined}
            style={{ fontFamily: 'var(--font-nunito)' }}
          />
          {errors.childAge && <p id="childAge-error" className="text-xs text-[#FF3F68] mt-1 font-semibold" role="alert">{errors.childAge}</p>}
        </div>

        {/* Interested Program */}
        <div>
          <label htmlFor="program" className={labelClass} style={{ fontFamily: 'var(--font-nunito)' }}>
            Interested Program <span className="text-[#FF3F68]">*</span>
          </label>
          <select
            id="program"
            name="program"
            value={formData.program}
            onChange={handleChange}
            className={`${baseInput} ${errors.program ? 'border-[#FF3F68] bg-[#FFF0F3]/30' : 'border-gray-200'}`}
            aria-describedby={errors.program ? 'program-error' : undefined}
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            <option value="">Select a program...</option>
            <option value="Playgroup">Playgroup (Age ~1.5 – 2.5)</option>
            <option value="Nursery">Nursery (Age ~2.5 – 3.5)</option>
            <option value="LKG">LKG (Age ~3.5 – 4.5)</option>
            <option value="UKG">UKG (Age ~4.5 – 5.5)</option>
          </select>
          {errors.program && <p id="program-error" className="text-xs text-[#FF3F68] mt-1 font-semibold" role="alert">{errors.program}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className={labelClass} style={{ fontFamily: 'var(--font-nunito)' }}>
            Phone Number <span className="text-[#FF3F68]">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className={`${baseInput} ${errors.phone ? 'border-[#FF3F68] bg-[#FFF0F3]/30' : 'border-gray-200'}`}
            placeholder="10-digit mobile number"
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            style={{ fontFamily: 'var(--font-nunito)' }}
          />
          {errors.phone && <p id="phone-error" className="text-xs text-[#FF3F68] mt-1 font-semibold" role="alert">{errors.phone}</p>}
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className={labelClass} style={{ fontFamily: 'var(--font-nunito)' }}>
            Email Address <span className="text-[#FF3F68]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`${baseInput} ${errors.email ? 'border-[#FF3F68] bg-[#FFF0F3]/30' : 'border-gray-200'}`}
            placeholder="parent@example.com"
            aria-describedby={errors.email ? 'email-error' : undefined}
            style={{ fontFamily: 'var(--font-nunito)' }}
          />
          {errors.email && <p id="email-error" className="text-xs text-[#FF3F68] mt-1 font-semibold" role="alert">{errors.email}</p>}
        </div>
      </div>

      {/* Message */}
      <div className="mt-5">
        <label htmlFor="message" className={labelClass} style={{ fontFamily: 'var(--font-nunito)' }}>
          Message / Specific Questions (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className={`${baseInput} border-gray-200 resize-none`}
          placeholder="Any specific questions, preferred campus visit timing, etc."
          style={{ fontFamily: 'var(--font-nunito)' }}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-6 w-full py-4 rounded-full text-white font-bold text-base shadow-sm hover:shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
        style={{ backgroundColor: '#FF3F68', fontFamily: 'var(--font-nunito)' }}
      >
        <Send size={18} />
        <span>Submit Enquiry via Email</span>
      </button>
    </form>
  );
}
