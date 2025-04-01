// // pages/sign-in.tsx
// import { SignIn } from "@clerk/nextjs";

// export default function SignInPage() {
//   return (
//     <div className="min-h-screen flex justify-center items-center">
//       <SignIn path="/sign-in" routing="path" />
//     </div>
//   );
// }

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <SignIn path="/sign-in" routing="path" signUpUrl="/" />
    </div>
  );
}
