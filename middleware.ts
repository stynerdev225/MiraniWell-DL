import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/contact", 
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhooks/stripe",
  "/about",
  "/features",
  "/pricing",
  "/resources",
  "/support",
  "/learn",
  "/leaderboard", 
  "/quests",
  "/shop",
  "/lesson(.*)",
  "/daily-checkin",
]);

export default clerkMiddleware(async (auth, request) => {
  try {
    if (!isPublicRoute(request)) {
      const { userId } = await auth();
      if (!userId) {
        return Response.redirect(new URL('/sign-in', request.url));
      }
    }
  } catch (error) {
    console.error('Middleware error:', error);
    // Allow request to continue on error to prevent 500
    return;
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
