import { Card } from "@/components/ui/card";
import { LoginWithGoogle } from "@/auth/GoogleAuth";
import Auth from "@/auth/EmailAuth";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-[400px] p-8 shadow-lg">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">
              Welcome to Themez
            </h1>
            <p className="text-muted-foreground text-sm">
              Sign in to access beautiful themes and templates
            </p>
          </div>

          <Auth />

          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="flex justify-center">
              <LoginWithGoogle />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;
