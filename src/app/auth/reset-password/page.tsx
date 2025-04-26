import ResetPasswordForm from "@/components/form/resetPasswordForm";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ResetPassword = () => {
  return (
    <div className="-mb-10 flex flex-col items-center px-[3.5%]">
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle>Reset your password</CardTitle>
          <CardDescription>Enter your new password to reset your password</CardDescription>
        </CardHeader>
        <CardContent>
          <ResetPasswordForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPassword;
