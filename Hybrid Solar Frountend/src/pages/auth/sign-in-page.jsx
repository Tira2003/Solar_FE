import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <main className="min-h-screen w-full bg-[#f8fafc] relative flex justify-center items-center">
      {/* Bottom Fade Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #006eff70 1px, transparent 1px),
            linear-gradient(to bottom, #006eff70 1px, transparent 1px)
          `,
          backgroundSize: "20px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
        }}
      />
      <div className="relative z-10">
        <SignIn />
      </div>
    </main>
  );
};

export default SignInPage;
