import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="w-full h-svh flex justify-center items-center">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
