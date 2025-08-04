import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <SignIn />
    </main>
  );
};

export default Page;
