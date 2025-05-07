// src/components/LoginWithGoogle.js
import { supabase } from "../lib/supabaseClient";
import { HugeiconsIcon } from "@hugeicons/react";
import { GoogleIcon } from "@hugeicons/core-free-icons";

const LoginWithGoogle = () => {
  const handleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/preview`,
        },
      });

      if (error) {
        console.error("OAuth login error:", error.message);
        return;
      }

      console.log("OAuth flow initiated successfully");
    } catch (error) {
      console.error("Unexpected error during login:", error);
    }
  };

  return (
    <button
      onClick={handleLogin}
      className="w-fit h-fit bg-gray-100 hover:bg-gray-200 hover-transition rounded-md p-4 text-md font-semibold hover:cursor-pointer"
    >
      <HugeiconsIcon icon={GoogleIcon} />
    </button>
  );
};

export { LoginWithGoogle };
