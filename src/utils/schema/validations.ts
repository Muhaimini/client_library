import * as yup from "yup";
import { MESSAGE_VALIDATION } from "./constants";
import { User } from "response/user-profile";

const USER_TYPE = {
  MEMEBER: "member",
  LIBARIAN: "librarian",
};

export const SIGN_UP_SCHEMA = yup.object<Partial<User>>({
  identityId: yup
    .string()
    .trim()
    .required(MESSAGE_VALIDATION.FORMS.REQUIRED_FIELD)
    .matches(/^\+?[1-9]\d/, "Please input with numbers")
    .min(3, "Min 3 characters")
    .max(21, "Max 21 characters"),
  name: yup
    .string()
    .trim()
    .required(MESSAGE_VALIDATION.FORMS.REQUIRED_FIELD)
    .min(3, "Min 3 characters")
    .max(50, "Max 50 characters"),
  address: yup
    .string()
    .trim()
    .required(MESSAGE_VALIDATION.FORMS.REQUIRED_FIELD)
    .min(5, "Max 5 characters")
    .max(50, "Max 50 characters"),
  contact: yup
    .string()
    .trim()
    .required(MESSAGE_VALIDATION.FORMS.REQUIRED_FIELD)
    .matches(/^\+?[1-9]\d{1,14}$/, "Phone number is not valid")
    .min(5, "Min 5 characters")
    .max(13, "Max 13 characters"),
  type: yup.mixed().oneOf(Object.values(USER_TYPE)),
});

export const LOGIN_IN_SCHEMA = yup.object<Partial<User>>({
  identityId: yup
    .string()
    .trim()
    .required(MESSAGE_VALIDATION.FORMS.REQUIRED_FIELD)
    .min(3, "Min 3 characters")
    .max(21, "Max 21 characters"),
  name: yup
    .string()
    .trim()
    .required(MESSAGE_VALIDATION.FORMS.REQUIRED_FIELD)
    .min(3, "Min 3 characters")
    .max(50, "Max 50 characters"),
});
