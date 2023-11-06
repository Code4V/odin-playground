import FormInput from "./formInput";

export default function Form() {
  const form = document.createElement("form");
  form.classList.add("form");

  const emailInput = FormInput("email", "Email").EmailField({
    isRequired: true,
    placeholder: "Enter your Email Address",
  });
  const countryInput = FormInput("country", "Country").InputField({
    isRequired: true,
    placeholder: "Select Country",
  });
  const zipInput = FormInput("zip", "Zip Code").InputField({
    isRequired: true,
    placeholder: "Enter Zip Code",
  });
  const passInput = FormInput("password", "Password").PasswordField({
    isRequired: true,
    placeholder: "Enter your Password",
  });
  const cpassInput = FormInput("cpassword", "Confirm Password").PasswordField({
    isRequired: true,
    placeholder: "Confirm Password",
  });
  const submitButton = FormInput("submit", "Submit").SubmitForm({
    placeholder: "Submit",
  });

  form.append(
    emailInput,
    countryInput,
    zipInput,
    passInput,
    cpassInput,
    submitButton
  );

  const inputElements = [
    emailInput,
    countryInput,
    zipInput,
    passInput,
    cpassInput,
  ].map((element) => {
    return element.childNodes[2];
  });
  submitButton.addEventListener("click", (ev) => {
    ev.preventDefault();

    const formData = new FormData(form);

    const formEntries = Object.fromEntries(formData);

    inputElements.forEach((element) => {

        console.log(element.id, element.validity)
        if (!element.checkValidity())
          document.querySelector("#invalid" + element.id).textContent =
            element.validationMessage;
        else document.querySelector("#invalid" + element.id).textContent = "";
    });
  });

  return form;
}
