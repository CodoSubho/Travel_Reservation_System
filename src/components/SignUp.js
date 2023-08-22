import SignUpStyles from "./SignUpStyles.css";
import ReactDOM from "react-dom";

function SignUp() {
  return (
    <div className="from-container">
      <h1> Join us....</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="E-mail" />
        <input placeholder="Adhar Number" />
        <textarea placeholder="Visa" rows="2"></textarea>
        <textarea placeholder="Favourite Spot" rows="2"></textarea>
        <textarea placeholder="Gender" />
        <textarea placeholder="Age" />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
