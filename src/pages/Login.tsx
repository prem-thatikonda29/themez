import { Card } from "@/components/ui/card";
import { LoginWithGoogle } from "@/Auth";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-[400px] p-8">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Welcome to Themez</h1>
            <p className="text-muted-foreground">
              Sign in to access beautiful themes and templates
            </p>
          </div>

          <div className="flex justify-center">
            <LoginWithGoogle />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;
