import "../styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();

  return (
    <ClerkProvider>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}
