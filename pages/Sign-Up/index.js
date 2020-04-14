import Layout from "../../Components/Layout";
import TitlePage from "../../Components/TitlePage";
import SignUpForm from "./Components/SignUpForm";

const SignUp = () => {
  return (
    <Layout>
      <TitlePage title="Request An Account" />
      <SignUpForm />
    </Layout>
  );
};
export default SignUp;
