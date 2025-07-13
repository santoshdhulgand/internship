export const EDUCATION_OPTIONS = [
  { value: "high_school", label: "High School" },
  { value: "bachelors", label: "Bachelor's Degree" },
  { value: "masters", label: "Master's Degree" },
  { value: "phd", label: "Ph.D." },
] as const;

export const POSITION_OPTIONS = [
  { value: "software_dev", label: "Software Development" },
  { value: "data_science", label: "Data Science" },
  { value: "design", label: "UI/UX Design" },
  { value: "marketing", label: "Digital Marketing" },
] as const;

export const VALIDATION_MESSAGES = {
  required: "This field is required",
  email: "Please enter a valid email address",
  phone: "Please enter a valid phone number",
  file: {
    required: "Please upload your resume",
    format: "Only PDF, DOC, and DOCX files are allowed",
    size: "File size must be less than 5MB",
  },
} as const;

export const FILE_TYPES = {
  accepted: [".pdf", ".doc", ".docx"],
  maxSize: 5 * 1024 * 1024, // 5MB in bytes
} as const;
