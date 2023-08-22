import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/8.jpg";
import Footer from "../components/Footer";
import SignUp from "../components/SignUp";

function SignUp1() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Sign Up"
        btnClass="hide"
      />
      <SignUp />
      <Footer />
    </>
  );
}
export default SignUp1;
