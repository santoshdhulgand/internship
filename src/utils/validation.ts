import { FILE_TYPES, VALIDATION_MESSAGES } from "../constants/formConstants";

export const validateEmail = (email: string): string => {
  if (!email) return VALIDATION_MESSAGES.required;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) ? "" : VALIDATION_MESSAGES.email;
};

export const validatePhone = (phone: string): string => {
  if (!phone) return VALIDATION_MESSAGES.required;
  const phoneRegex = /^\+?[\d\s-()]{10,}$/;
  return phoneRegex.test(phone) ? "" : VALIDATION_MESSAGES.phone;
};

export const validateFile = (file: File | null): string => {
  if (!file) return VALIDATION_MESSAGES.file.required;

  const fileExtension = `.${file.name
    .split(".")
    .pop()
    ?.toLowerCase()}` as (typeof FILE_TYPES.accepted)[number];
  if (!FILE_TYPES.accepted.includes(fileExtension)) {
    return VALIDATION_MESSAGES.file.format;
  }

  if (file.size > FILE_TYPES.maxSize) {
    return VALIDATION_MESSAGES.file.size;
  }

  return "";
};

export const validateRequired = (value: string): string => {
  return value.trim() ? "" : VALIDATION_MESSAGES.required;
};
