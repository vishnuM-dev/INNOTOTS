'use client';

import { useState } from 'react';
import { school } from '@/data/school';

interface FormData {
  parentName: string;
  childName: string;
  childDob: string;
  program: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  parentName?: string;
  childName?: string;
  childDob?: string;
  program?: string;
  phone?: string;
  email?: string;
}

const initialData: FormData = {
  parentName: '',
  childName: '',
  childDob: '',
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
    if (!formData.childDob) newErrors.childDob = 'Date of birth is required.';
    if (!formData.program) newErrors.program = 'Please select a program.';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Enter a valid 10-digit phone number.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.';
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

    const body = `Enquiry from InnoTots Preschool Website\n\nParent Name: ${formData.parentName}\nChild Name: ${formData.childName}\nChild Date of Birth: ${formData.childDob}\nProgram Interested In: ${formData.program}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message || 'No message provided'}`;
    const mailtoLink = `mailto:${school.email}?subject=Admission Enquiry – ${formData.childName}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  const inputClass = `w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all`;
  const inputStyle = { fontFamily: 'var(--font-nunito)', color: '#333' };
  const labelStyle = { fontFamily: 'var(--font-nunito)', color: '#444', fontSize: '0.875rem', fontWeight: 600 };
  const errorStyle = { fontFamily: 'var(--font-nunito)', color: '#FF3F68', fontSize: '0.75rem' };

  if (submitted) {
    return (
      <div className="rounded-2xl p-10 text-center" style={{ backgroundColor: '#F0FAFA' }}>
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: 'var(--font-fredoka)', color: '#07194F' }}>
          Enquiry Submitted!
        </h3>
        <p style={{ fontFamily: 'var(--font-nunito)', color: '#555' }}>
          Your email client should open with your enquiry. We look forward to hearing from you!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl p-6 md:p-8 shadow-sm" style={{ backgroundColor: '#fff', border: '1px solid #DDF3F1' }}>
      <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'var(--font-fredoka)', color: '#07194F' }}>
        Admission Enquiry Form
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Parent Name */}
        <div>
          <label htmlFor="parentName" className="block mb-1" style={labelStyle}>Parent Name <span style={{ color: '#FF3F68' }}>*</span></label>
          <input
            id="parentName"
            name="parentName"
            type="text"
            value={formData.parentName}
            onChange={handleChange}
            className={inputClass}
            style={{ ...inputStyle, borderColor: errors.parentName ? '#FF3F68' : '#ddd' }}
            placeholder="Your full name"
            aria-describedby={errors.parentName ? 'parentName-error' : undefined}
          />
          {errors.parentName && <p id="parentName-error" style={errorStyle} role="alert">{errors.parentName}</p>}
        </div>

        {/* Child Name */}
        <div>
          <label htmlFor="childName" className="block mb-1" style={labelStyle}>Child Name <span style={{ color: '#FF3F68' }}>*</span></label>
          <input
            id="childName"
            name="childName"
            type="text"
            value={formData.childName}
            onChange={handleChange}
            className={inputClass}
            style={{ ...inputStyle, borderColor: errors.childName ? '#FF3F68' : '#ddd' }}
            placeholder="Child's full name"
            aria-describedby={errors.childName ? 'childName-error' : undefined}
          />
          {errors.childName && <p id="childName-error" style={errorStyle} role="alert">{errors.childName}</p>}
        </div>

        {/* Child DOB */}
        <div>
          <label htmlFor="childDob" className="block mb-1" style={labelStyle}>Child Date of Birth <span style={{ color: '#FF3F68' }}>*</span></label>
          <input
            id="childDob"
            name="childDob"
            type="date"
            value={formData.childDob}
            onChange={handleChange}
            className={inputClass}
            style={{ ...inputStyle, borderColor: errors.childDob ? '#FF3F68' : '#ddd' }}
            aria-describedby={errors.childDob ? 'childDob-error' : undefined}
          />
          {errors.childDob && <p id="childDob-error" style={errorStyle} role="alert">{errors.childDob}</p>}
        </div>

        {/* Program */}
        <div>
          <label htmlFor="program" className="block mb-1" style={labelStyle}>Program Interested In <span style={{ color: '#FF3F68' }}>*</span></label>
          <select
            id="program"
            name="program"
            value={formData.program}
            onChange={handleChange}
            className={inputClass}
            style={{ ...inputStyle, borderColor: errors.program ? '#FF3F68' : '#ddd' }}
            aria-describedby={errors.program ? 'program-error' : undefined}
          >
            <option value="">Select a program</option>
            <option value="Playgroup">Playgroup (Age 1.5 – 2.5)</option>
            <option value="Nursery">Nursery (Age 2.5 – 3.5)</option>
            <option value="LKG">LKG (Age 3.5 – 4.5)</option>
            <option value="UKG">UKG (Age 4.5 – 5.5)</option>
          </select>
          {errors.program && <p id="program-error" style={errorStyle} role="alert">{errors.program}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block mb-1" style={labelStyle}>Phone Number <span style={{ color: '#FF3F68' }}>*</span></label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className={inputClass}
            style={{ ...inputStyle, borderColor: errors.phone ? '#FF3F68' : '#ddd' }}
            placeholder="10-digit mobile number"
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && <p id="phone-error" style={errorStyle} role="alert">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-1" style={labelStyle}>Email Address <span style={{ color: '#FF3F68' }}>*</span></label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            style={{ ...inputStyle, borderColor: errors.email ? '#FF3F68' : '#ddd' }}
            placeholder="your@email.com"
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && <p id="email-error" style={errorStyle} role="alert">{errors.email}</p>}
        </div>
      </div>

      {/* Message */}
      <div className="mt-5">
        <label htmlFor="message" className="block mb-1" style={labelStyle}>Message (Optional)</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={inputClass}
          style={{ ...inputStyle, borderColor: '#ddd', resize: 'none' }}
          placeholder="Any questions or additional information..."
        />
      </div>

      <button
        type="submit"
        className="mt-6 w-full py-4 rounded-xl text-white font-semibold text-base transition-opacity hover:opacity-90"
        style={{ backgroundColor: '#FF3F68', fontFamily: 'var(--font-nunito)' }}
      >
        Send Enquiry
      </button>
    </form>
  );
}
