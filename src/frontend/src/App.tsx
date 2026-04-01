import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { ThemeProvider } from "next-themes";
import Layout from "./components/Layout";
import BlogPage from "./pages/BlogPage";
import CommunityHubPage from "./pages/CommunityHubPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import FAQPage from "./pages/FAQPage";
import HomePage from "./pages/HomePage";
import LearnPage from "./pages/LearnPage";
import PortfolioPage from "./pages/PortfolioPage";
import PricingPage from "./pages/PricingPage";
import QuizPage from "./pages/QuizPage";
import ResourcesPage from "./pages/ResourcesPage";
import RoadmapPage from "./pages/RoadmapPage";
import SEONotesPage from "./pages/SEONotesPage";
import TestimonialsPage from "./pages/TestimonialsPage";

const queryClient = new QueryClient();

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const coursesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/courses",
  component: CoursesPage,
});

const roadmapRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/roadmap",
  component: RoadmapPage,
});

const learnRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/learn",
  component: LearnPage,
});

const resourcesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/resources",
  component: ResourcesPage,
});

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog",
  component: BlogPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const testimonialsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/testimonials",
  component: TestimonialsPage,
});

const portfolioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/portfolio",
  component: PortfolioPage,
});

const faqRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/faq",
  component: FAQPage,
});

const pricingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/pricing",
  component: PricingPage,
});

const quizRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/quiz",
  component: QuizPage,
});

const communityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/community",
  component: CommunityHubPage,
});

const seoNotesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/seo-notes",
  component: SEONotesPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  coursesRoute,
  roadmapRoute,
  learnRoute,
  resourcesRoute,
  blogRoute,
  contactRoute,
  testimonialsRoute,
  portfolioRoute,
  faqRoute,
  pricingRoute,
  quizRoute,
  communityRoute,
  seoNotesRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
