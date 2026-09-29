import { submitContact } from "./services/contact.service";

export const ENQUIRY_SERVICES = [
  "Personal Loan",
  "Business Loan",
  "Home Loan",
  "Loan Against Property",
  "Gold Loan",
  "Insurance",
  "Investments",
  "Other",
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_REGEX = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;
const MOBILE_REGEX = /^\d{10}$/;

export const EMPTY_ENQUIRY = {
  name: "",
  mobile: "",
  email: "",
  service: "",
  message: "",
  consent: false,
};

export function validateEnquiry(values) {
  const errors = {};
  const name = values.name.trim().replace(/\s+/g, " ");

  if (!name) errors.name = "Please enter Full Name.";
  else if (!NAME_REGEX.test(name)) errors.name = "Please enter a valid Full Name.";

  const mobile = values.mobile.replace(/\D/g, "");
  if (!mobile) errors.mobile = "Please enter Mobile Number.";
  else if (!MOBILE_REGEX.test(mobile)) errors.mobile = "Please enter a valid Mobile Number.";

  const email = values.email.trim();
  if (!email) errors.email = "Please enter Email Address.";
  else if (!EMAIL_REGEX.test(email)) errors.email = "Please enter a valid email address.";

  if (!values.service) errors.service = "Please select a service.";
  else if (!ENQUIRY_SERVICES.includes(values.service)) errors.service = "Please select a valid service.";

  const message = values.message.trim();
  if (!message) errors.message = "Please enter Message.";
  else if (message.length < 5) errors.message = "Please enter at least 5 characters.";
  else if (message.length > 500) errors.message = "Message must not exceed 500 characters.";

  if (!values.consent) errors.consent = "Please accept the privacy policy to continue.";

  return errors;
}

function isImmediateEnquiryFailure(key, values) {
  if (key === "name") {
    const name = values.name.trim().replace(/\s+/g, " ");
    return Boolean(name) && !NAME_REGEX.test(name);
  }
  if (key === "mobile") {
    const mobile = values.mobile.replace(/\D/g, "");
    return mobile.length >= 10 && !MOBILE_REGEX.test(mobile);
  }
  if (key === "email") {
    const email = values.email.trim();
    return Boolean(email) && (/\s/.test(email) || email.includes("@")) && !EMAIL_REGEX.test(email);
  }
  if (key === "service") {
    return Boolean(values.service) && !ENQUIRY_SERVICES.includes(values.service);
  }
  if (key === "message") {
    const message = values.message.trim();
    return message.length > 0 && (message.length < 5 || message.length > 500);
  }
  return false;
}

export function applyEnquiryFieldError(errors, key, values, touched) {
  const message = validateEnquiry(values)[key] || "";
  const show = touched || isImmediateEnquiryFailure(key, values);
  if (!show || !message) {
    if (!errors[key]) return errors;
    const next = { ...errors };
    delete next[key];
    return next;
  }
  if (errors[key] === message) return errors;
  return { ...errors, [key]: message };
}

export async function submitEnquiry(values, branch = {}) {
  try {
    const data = await submitContact({
      name: values.name.trim().replace(/\s+/g, " "),
      email: values.email.trim(),
      phone: values.mobile.replace(/\D/g, ""),
      phoneCode: "+91",
      product: values.service,
      message: values.message.trim(),
      consent: true,
      branchSlug: branch.branchSlug || "",
      branchName: branch.branchName || "",
      branchCode: branch.branchCode || "",
    });

    if (!data?.success) {
      const error = new Error(data?.message || "Unable to submit your enquiry. Please try again.");
      error.fields = data?.fields || {};
      throw error;
    }

    return data;
  } catch (error) {
    const fields = error?.fields || error?.data?.fields || {};
    if (fields && Object.keys(fields).length) {
      error.fields = fields;
      throw error;
    }
    const wrapped = new Error("Unable to submit your enquiry. Please try again.");
    wrapped.fields = {};
    throw wrapped;
  }
}
