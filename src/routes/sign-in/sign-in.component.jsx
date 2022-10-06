import { useState } from "react";
import Button from "../../components/button/button.component";
import FormInput from "../../components/form-input/form-input.component";
import {
  SignInContainer,
  SignInText,
  SignInTitle,
  SignInDescription,
  SignInForm,
} from "./sign-in.styles";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <SignInContainer>
      <SignInText>
        <SignInTitle>Login</SignInTitle>
        <SignInDescription>
          Get access to your Orders, Wishlist and Recommendation.
        </SignInDescription>
      </SignInText>
      <SignInForm>
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />
        <Button onClick={resetFormFields}>Sign in</Button>
      </SignInForm>
    </SignInContainer>
  );
};

export default SignIn;
