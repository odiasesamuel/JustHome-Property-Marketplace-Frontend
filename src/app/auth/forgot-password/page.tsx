import ForgotPasswordForm from "@/components/form/forgetPasswordForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ForgetPassword = () => {
  return (
    <div className="-mb-10 flex flex-col items-center px-[3.5%]">
      <Card className="mb-10 w-[350px] 2xs:w-[380px] xs:w-[460px] sm:mb-0 sm:w-[600px]">
        <CardHeader>
          <CardTitle>Reset your password</CardTitle>
          <CardDescription>Enter your email address and we would send you instructions to reset your password</CardDescription>
        </CardHeader>
        <CardContent>
          <ForgotPasswordForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgetPassword;
