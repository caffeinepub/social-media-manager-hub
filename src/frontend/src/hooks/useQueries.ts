import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  BeginnerPortfolio,
  BlogPost,
  CaseStudy,
  ContactSubmission,
  FAQ,
  Phase,
  PortfolioProject,
  PricingGuideline,
  PricingTier,
  QuizQuestion,
  QuizResult,
  Resource,
  Section,
  Testimonial,
  Topic,
} from "../backend";
import { useActor } from "./useActor";

// Phases
export function usePhases() {
  const { actor, isFetching } = useActor();

  return useQuery<Phase[]>({
    queryKey: ["phases"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getPhases();
    },
    enabled: !!actor && !isFetching,
  });
}

// Sections
export function useSectionsByPhase(phaseId: bigint) {
  const { actor, isFetching } = useActor();

  return useQuery<Section[]>({
    queryKey: ["sections", phaseId.toString()],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getSectionsByPhase(phaseId);
    },
    enabled: !!actor && !isFetching,
  });
}

// Topics
export function useTopicsBySection(sectionId: bigint) {
  const { actor, isFetching } = useActor();

  return useQuery<Topic[]>({
    queryKey: ["topics", sectionId.toString()],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getTopicsBySection(sectionId);
    },
    enabled: !!actor && !isFetching,
  });
}

// Resources
export function useAllResources() {
  const { actor, isFetching } = useActor();

  return useQuery<Resource[]>({
    queryKey: ["resources", "all"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllResources();
    },
    enabled: !!actor && !isFetching,
  });
}

// Blog Posts
export function useBlogPosts() {
  const { actor, isFetching } = useActor();

  return useQuery<BlogPost[]>({
    queryKey: ["blogPosts"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllBlogPosts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSearchBlogPosts(searchTerm: string) {
  const { actor, isFetching } = useActor();

  return useQuery<BlogPost[]>({
    queryKey: ["blogPosts", "search", searchTerm],
    queryFn: async () => {
      if (!actor || !searchTerm) return [];
      return actor.searchBlogPosts(searchTerm);
    },
    enabled: !!actor && !isFetching && searchTerm.length > 0,
  });
}

// Contact Form
export function useSubmitContact() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      name,
      email,
      subject,
      message,
    }: {
      id: bigint;
      name: string;
      email: string;
      subject: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.submitContactForm(id, name, email, subject, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contactSubmissions"] });
    },
  });
}

// Newsletter
export function useSubscribeNewsletter() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (email: string) => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.subscribeToNewsletter(email);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subscribers"] });
    },
  });
}

// Testimonials
export function useTestimonials() {
  const { actor, isFetching } = useActor();

  return useQuery<Testimonial[]>({
    queryKey: ["testimonials"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllTestimonials();
    },
    enabled: !!actor && !isFetching,
  });
}

// Case Studies
export function useCaseStudies() {
  const { actor, isFetching } = useActor();

  return useQuery<CaseStudy[]>({
    queryKey: ["caseStudies"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllCaseStudies();
    },
    enabled: !!actor && !isFetching,
  });
}

// Portfolio Projects
export function usePortfolioProjects() {
  const { actor, isFetching } = useActor();

  return useQuery<PortfolioProject[]>({
    queryKey: ["portfolioProjects"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllPortfolioProjects();
    },
    enabled: !!actor && !isFetching,
  });
}

// FAQs
export function useFAQs() {
  const { actor, isFetching } = useActor();

  return useQuery<FAQ[]>({
    queryKey: ["faqs"],
    queryFn: async () => {
      if (!actor) return [];
      const allFAQs = await actor.getFAQsByCategory("");
      return allFAQs;
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSearchFAQs(searchTerm: string) {
  const { actor, isFetching } = useActor();

  return useQuery<FAQ[]>({
    queryKey: ["faqs", "search", searchTerm],
    queryFn: async () => {
      if (!actor || !searchTerm) return [];
      return actor.searchFAQs(searchTerm);
    },
    enabled: !!actor && !isFetching && searchTerm.length > 0,
  });
}

// Pricing Tiers
export function usePricingPackages() {
  const { actor, isFetching } = useActor();

  return useQuery<PricingTier[]>({
    queryKey: ["pricingTiers"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllPricingTiers();
    },
    enabled: !!actor && !isFetching,
  });
}

// Pricing Guidelines
export function usePricingGuidelines() {
  const { actor, isFetching } = useActor();

  return useQuery<PricingGuideline[]>({
    queryKey: ["pricingGuidelines"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllPricingGuidelinesForPricingPage();
    },
    enabled: !!actor && !isFetching,
  });
}

// Quiz Questions
export function useQuizQuestions() {
  const { actor, isFetching } = useActor();

  return useQuery<QuizQuestion[]>({
    queryKey: ["quizQuestions"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllQuizQuestions();
    },
    enabled: !!actor && !isFetching,
  });
}

// Quiz Results
export function useSaveQuizResult() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      score,
      tierRecommendation,
      roadmapPhaseRecommendation,
    }: {
      id: bigint;
      score: bigint;
      tierRecommendation: bigint | null;
      roadmapPhaseRecommendation: bigint | null;
    }) => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.saveQuizResult(
        id,
        score,
        tierRecommendation,
        roadmapPhaseRecommendation,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["quizResults"] });
    },
  });
}

// Beginner Portfolio
export function useBeginnerPortfolios() {
  const { actor, isFetching } = useActor();

  return useQuery<BeginnerPortfolio[]>({
    queryKey: ["beginnerPortfolios"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllBeginnerPortfolios();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useBeginnerPortfolio(id: bigint) {
  const { actor, isFetching } = useActor();

  return useQuery<BeginnerPortfolio | null>({
    queryKey: ["beginnerPortfolio", id.toString()],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getBeginnerPortfolio(id);
    },
    enabled: !!actor && !isFetching,
  });
}
