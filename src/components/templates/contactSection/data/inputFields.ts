import type { InputField } from "@/components/templates/contactSection/types";

const inputFields: InputField[] = [
  { id: 1, name: "fullName", type: "text", label: "نام و نام خانوادگی" },
  { id: 2, name: "phone", type: "text", label: "شماره تلفن همراه", dir: "ltr" },
  { id: 3, name: "email", type: "email", label: "ادرس ایمیل", dir: "ltr" },
  { id: 4, name: "subject", type: "text", label: "عنوان" },
  {
    id: 5,
    name: "text",
    type: "textarea",
    label: "متن پیام",
    className: "md:col-start-1 md:col-end-3",
  },
];

export default inputFields;
