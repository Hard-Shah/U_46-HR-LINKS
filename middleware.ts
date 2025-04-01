import { authMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/sign-in", "/sign-up"],
  ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\\.[\\w]+$)", "/favicon.ico"],
  debug: false,
  afterAuth(auth, req, evt) {
    // Optional: Redirect if user is not signed in and trying to access protected page
    if (!auth.userId && req.nextUrl.pathname !== "/sign-in") {
      const signInUrl = new URL("/sign-in", req.url);
      signInUrl.searchParams.set("redirect_url", req.url);
      return NextResponse.redirect(signInUrl);
    }
  }
});

export const config = {
  matcher: ["/((?!_next|static|favicon.ico).*)"],
};
