import {useState} from "react";
import "./App.css";

function App() {
  /* Below are the two states we are using */
  const [formValues, setFormValues] = useState({
      firstName: "",
      lastName:  "",
      email: "",
      password: "",
      confirmPassword: "",
  })

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

/* Below Arrow function handles the change on input fields */
  const handleChange = (e) => {
     const {name , value} = e.target;
     setFormValues(prevValues => ({...prevValues, [name]:value}));
     /* console.log(formValues); */
  }

  /* Below Arrow function Validates the form */
  const validateForm = () => {
      const {firstName, lastName, email, password, confirmPassword} = formValues;

      let isValid = true;
      /* regular expression to validate email address */
      const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/ ;

      const newErrors = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }

      if(!firstName){
        newErrors.firstName = "First Name cannot be empty"
        isValid = false;
      }
      if(!lastName){
        newErrors.lastName = "last Name cannot be empty"
        isValid = false;
      }
      if (!email || !emailRegex.test(email)) {
        newErrors.email = "Invalid email address"
        isValid = false;
      }

      if(password.length < 7){
        newErrors.password ="password cannot be less than 7 characters"
        isValid = false;
      }

      if(password !== confirmPassword){
        newErrors.confirmPassword = "confirm password does not match with password";
        isValid = false;
      }

      /* here we are setting the error using state */
      setErrors(newErrors);

      return isValid;

  }

    const handleSubmit = (e) => {
      e.preventDefault();

      if(validateForm()){
        alert("Form is successfully submitted")
      }
    }

  return (
    <form onSubmit={handleSubmit}>
      <input
					data-testid="first-name-id"
					type="text"
					name="firstName"
					placeholder="First Name"
          autoComplete="off"
          value={formValues.firstName}
          onChange={handleChange}
				/>

				<p data-testid="first-name-error-id" className="error">{errors.firstName}</p>
				
        <input
					data-testid="last-name-id"
					type="text"
					name="lastName"
					placeholder="Last Name"
          autoComplete="off"
          value={formValues.lastName}
          onChange={handleChange}
				/>
				
        <p data-testid="last-name-error-id" className="error">{errors.lastName}</p>
				
        <input
					data-testid="email-id"
					type="email"
					name="email"
					placeholder="Email Address"
          autoComplete="off"
          value={formValues.email}
          onChange={handleChange}
				/>
				
        <p data-testid="email-error-id" className="error">{errors.email}</p>
				
        <input
					data-testid="password-id"
					type="password"
					name="password"
					placeholder="Password"
          autoComplete="off"
          value={formValues.password}
          onChange={handleChange}
				/>
				
        <p data-testid="password-error-id" className="error">{errors.password}</p>
				
        <input
					data-testid="confirm-password-id"
					type="password"
					name="confirmPassword"
					placeholder="Confirm Password"
          autoComplete="off"
          value={formValues.confirmPassword}
          onChange={handleChange}
				/>
				
        <p
					data-testid="confirm-password-error-id"
					className="error"
				>{errors.confirmPassword}</p>
				
        <button type="submit">Sign Up</button>
    </form>
  );
}

export default App;
