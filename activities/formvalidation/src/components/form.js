import FormInput from "./formInput";

export default function Form () {
  const form = document.createElement("form");
  form.classList.add('form');

  form.append(
    FormInput("email", "Email").InputField({
      isRequired: true,
      placeholder: "Enter your Email Address",
    }),
    FormInput("country", "Country").InputField({
      isRequired: true,
      placeholder: "Select Country",
    }),
    FormInput("zip", "Zip Code").InputField({
      isRequired: true,
      placeholder: "Enter Zip Code",
    }),
    FormInput("password", "Password").InputField({
      isRequired: true,
      placeholder: "Enter your Password",
    }),
    FormInput("cpassword", "Confirm Password").InputField({
      isRequired: true,
      placeholder: "Confirm Password",
    })
  );

  return form;
};
