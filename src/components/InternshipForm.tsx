import React, { useState } from "react";
import Input from "./Input";
import Select from "./Select";
import {
  EDUCATION_OPTIONS,
  POSITION_OPTIONS,
} from "../constants/formConstants";
import {
  validateEmail,
  validatePhone,
  validateFile,
  validateRequired,
} from "../utils/validation";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  education: string;
  major: string;
  graduationYear: string;
  position: string;
  resume: File | null;
}

interface FormErrors {
  [key: string]: string;
}

const InternshipForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    education: "",
    major: "",
    graduationYear: "",
    position: "",
    resume: null,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      resume: file,
    }));
    if (file) {
      const fileError = validateFile(file);
      setErrors((prev) => ({
        ...prev,
        resume: fileError,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      fullName: validateRequired(formData.fullName),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      education: validateRequired(formData.education),
      major: validateRequired(formData.major),
      graduationYear: validateRequired(formData.graduationYear),
      position: validateRequired(formData.position),
      resume: validateFile(formData.resume),
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle form submission
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Full Name"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleInputChange}
          error={errors.fullName}
          placeholder="John Doe"
        />

        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          error={errors.email}
          placeholder="john@example.com"
        />

        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleInputChange}
          error={errors.phone}
          placeholder="12345-67890"
        />

        <Select
          label="Position of Interest"
          name="position"
          value={formData.position}
          onChange={handleInputChange}
          options={POSITION_OPTIONS}
          error={errors.position}
        />

        <Select
          label="Education Level"
          name="education"
          value={formData.education}
          onChange={handleInputChange}
          options={EDUCATION_OPTIONS}
          error={errors.education}
        />

        <Input
          label="Major/Field of Study"
          name="major"
          type="text"
          value={formData.major}
          onChange={handleInputChange}
          error={errors.major}
          placeholder="Computer Science"
        />

        <Input
          label="Graduation Year"
          name="graduationYear"
          type="text"
          value={formData.graduationYear}
          onChange={handleInputChange}
          error={errors.graduationYear}
          placeholder="2024"
        />

        <div className="mb-4">
          <label className="form-label">Resume/CV</label>
          <input
            type="file"
            name="resume"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90"
            accept=".pdf,.doc,.docx"
          />
          {errors.resume && (
            <p className="mt-1 text-sm text-red-500">{errors.resume}</p>
          )}
        </div>

        <button type="submit" className="btn-primary w-full">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default InternshipForm;
