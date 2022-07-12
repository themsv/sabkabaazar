import { useState } from "react";
import Button from "../../components/button/button.component";
import FormInput from "../../components/form-input/form-input.component";
import {
  RegisterContainer,
  RegisterText,
  RegisterTitle,
  RegisterDescription,
  RegisterForm,
} from "./register.styles";

const defaultFormFields = {
  fname: "",
  lname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { fname, lname, email, password, confirmPassword } = formFields;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <RegisterContainer>
      <RegisterText>
        <RegisterTitle>Signup</RegisterTitle>
        <RegisterDescription>
          We dont share your personal details with anyone.
        </RegisterDescription>
      </RegisterText>
      <RegisterForm>
        <FormInput
          label="First Name"
          type="text"
          onChange={handleChange}
          name="fname"
          value={fname}
        />
        <FormInput
          label="Last Name"
          type="text"
          onChange={handleChange}
          name="lname"
          value={lname}
        />
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
        />{" "}
        <FormInput
          label="Confirm Password"
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button>Signup</Button>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;
