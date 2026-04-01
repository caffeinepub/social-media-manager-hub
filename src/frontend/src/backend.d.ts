import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export interface Testimonial {
    id: bigint;
    serviceCategory: string;
    clientName: string;
    quote: string;
    beforeAfter: string;
    resultMetrics: string;
}
export interface PricingTier {
    id: bigint;
    features: Array<string>;
    name: string;
    price: bigint;
    recommendedForSmallBusiness: boolean;
}
export interface FAQ {
    id: bigint;
    question: string;
    createdAt: bigint;
    answer: string;
    updatedAt: bigint;
    isVisible: boolean;
    category: string;
    _private: boolean;
}
export interface TransformationOutput {
    status: bigint;
    body: Uint8Array;
    headers: Array<http_header>;
}
export interface PortfolioProject {
    id: bigint;
    title: string;
    serviceCategory: string;
    projectType: string;
    description: string;
    results: string;
    image: string;
}
export interface MediaAsset {
    id: bigint;
    file: ExternalBlob;
    type: string;
    description: string;
}
export interface QuizQuestion {
    id: bigint;
    question: string;
    answersText: string;
    answers: Array<string>;
    isActive: boolean;
    correctAnswerIndex: bigint;
    roadmapSuggestion?: string;
    recommendedTierId?: bigint;
}
export interface ContactSubmission {
    id: bigint;
    subject: string;
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
}
export interface BeginnerPortfolioTool {
    icon: string;
    name: string;
}
export interface BeginnerPortfolioSkill {
    name: string;
    description: string;
    category: string;
}
export interface BeginnerPortfolioProject {
    title: string;
    objective: string;
    strategy: string;
    execution: string;
    outcome: string;
}
export interface SkillExperience {
    application: string;
    skill: string;
    learningMethod: string;
}
export interface Phase {
    id: bigint;
    title: string;
    completed: boolean;
    description: string;
    image: string;
}
export interface BeginnerPortfolioContactCta {
    headline: string;
    contactUrl: string;
    ctaText: string;
}
export interface BeginnerPortfolio {
    id: bigint;
    title: string;
    tools: Array<BeginnerPortfolioTool>;
    about: BeginnerPortfolioAbout;
    projects: Array<BeginnerPortfolioProject>;
    hero: BeginnerPortfolioHero;
    contactCta: BeginnerPortfolioContactCta;
    introduction: string;
    _caseStudy?: BeginnerPortfolioCaseStudy;
    certifications: Array<BeginnerPortfolioCertification>;
    skills: Array<BeginnerPortfolioSkill>;
}
export interface TransformationInput {
    context: Uint8Array;
    response: http_request_result;
}
export interface BeginnerPortfolioHero {
    headline: string;
    ctaViewWork: string;
    ctaContact: string;
    subheadline: string;
}
export interface PricingGuideline {
    id: bigint;
    title: string;
    takeaways: Array<string>;
    section: PricingGuideSection;
    realityCheckPoints: Array<string>;
}
export interface Portfolio {
    id: bigint;
    title: string;
    tools: Array<Tool>;
    focusArea: string;
    about: string;
    projects: Array<Project>;
    headline: string;
    caseStudies: Array<CaseStudy>;
    certifications: Array<Certification>;
    subheadline: string;
    skillsExperiences: Array<SkillExperience>;
}
export interface BeginnerPortfolioCertification {
    url: string;
    title: string;
}
export interface BeginnerPortfolioCaseStudy {
    title: string;
    research: string;
    strategy: string;
    learnings: string;
    execution: string;
    problem: string;
}
export interface BlogPost {
    id: bigint;
    title: string;
    content: string;
    author: string;
    timestamp: bigint;
    category: string;
}
export interface BeginnerPortfolioAbout {
    bio: string;
    focus: string;
}
export interface CaseStudy {
    id: bigint;
    title: string;
    serviceCategory: string;
    projectType: string;
    description: string;
    results: string;
}
export interface QuizResult {
    id: bigint;
    _categoryAnalysis?: string;
    tierRecommendation?: bigint;
    score: bigint;
    roadmapPhaseRecommendation?: bigint;
}
export interface PricingGuideItem {
    id: bigint;
    service: string;
    description: string;
    priceRange: string;
    skillLevel: string;
}
export interface http_header {
    value: string;
    name: string;
}
export interface http_request_result {
    status: bigint;
    body: Uint8Array;
    headers: Array<http_header>;
}
export interface Certification {
    title: string;
    institution: string;
    year: bigint;
}
export interface PricingGuideSection {
    id: bigint;
    title: string;
    description: string;
    pricingItems: Array<PricingGuideItem>;
    currency: string;
}
export interface Topic {
    id: bigint;
    title: string;
    content: string;
    completed: boolean;
    sectionId: bigint;
}
export interface Resource {
    id: bigint;
    url: string;
    title: string;
    featured: boolean;
    description: string;
    isFree: boolean;
    category: string;
}
export interface Tool {
    name: string;
    iconUrl: string;
}
export interface Project {
    title: string;
    objective: string;
    strategy: string;
    imageUrl: string;
    execution: string;
    outcome: string;
}
export interface Section {
    id: bigint;
    title: string;
    content: string;
    resources: Array<bigint>;
    description: string;
    topics: Array<string>;
    phaseId: bigint;
    expanded: boolean;
}
export interface Retrospective {
    id: bigint;
    title: string;
    owner: string;
    reflections: string;
    timestamp: bigint;
    phase: string;
}
export interface backendInterface {
    addBlogPost(id: bigint, title: string, content: string, author: string, category: string): Promise<void>;
    addCaseStudy(id: bigint, title: string, description: string, results: string, serviceCategory: string, projectType: string): Promise<void>;
    addFAQ(id: bigint, question: string, answer: string, category: string): Promise<void>;
    addMediaAsset(id: bigint, file: ExternalBlob, description: string, type: string): Promise<void>;
    addPhase(id: bigint, title: string, description: string, image: string): Promise<void>;
    addPortfolioProject(id: bigint, title: string, description: string, results: string, serviceCategory: string, image: string, projectType: string): Promise<void>;
    addPricingGuideline(id: bigint, title: string, section: PricingGuideSection, takeaways: Array<string>, realityCheckPoints: Array<string>): Promise<void>;
    addPricingTier(id: bigint, name: string, features: Array<string>): Promise<void>;
    addQuizQuestion(id: bigint, question: string, answers: Array<string>, correctAnswerIndex: bigint, answersText: string, recommendedTierId: bigint | null, roadmapSuggestion: string | null): Promise<void>;
    addResource(id: bigint, title: string, url: string, isFree: boolean, description: string, category: string): Promise<void>;
    addRetrospective(id: bigint, title: string, reflections: string, phase: string, owner: string): Promise<void>;
    addSection(id: bigint, phaseId: bigint, title: string, description: string, topics: Array<string>, content: string): Promise<void>;
    addTestimonial(id: bigint, clientName: string, quote: string, resultMetrics: string, beforeAfter: string, serviceCategory: string): Promise<void>;
    addTopic(id: bigint, sectionId: bigint, title: string, content: string): Promise<void>;
    createBeginnerPortfolio(id: bigint, title: string, introduction: string, hero: BeginnerPortfolioHero, about: BeginnerPortfolioAbout, skills: Array<BeginnerPortfolioSkill>, projects: Array<BeginnerPortfolioProject>, caseStudy: BeginnerPortfolioCaseStudy | null, tools: Array<BeginnerPortfolioTool>, certifications: Array<BeginnerPortfolioCertification>, contactCta: BeginnerPortfolioContactCta): Promise<void>;
    createPortfolio(id: bigint, title: string, headline: string, subheadline: string, about: string, focusArea: string, skillsExperiences: Array<SkillExperience>, projects: Array<Project>, caseStudies: Array<CaseStudy>, certifications: Array<Certification>, tools: Array<Tool>): Promise<void>;
    getAllBeginnerPortfolios(): Promise<Array<BeginnerPortfolio>>;
    getAllBlogPosts(): Promise<Array<BlogPost>>;
    getAllCaseStudies(): Promise<Array<CaseStudy>>;
    getAllContactSubmissions(): Promise<Array<ContactSubmission>>;
    getAllPortfolioProjects(): Promise<Array<PortfolioProject>>;
    getAllPortfolios(): Promise<Array<Portfolio>>;
    getAllPricingGuidelinesForPricingPage(): Promise<Array<PricingGuideline>>;
    getAllPricingTiers(): Promise<Array<PricingTier>>;
    getAllQuizQuestions(): Promise<Array<QuizQuestion>>;
    getAllQuizResults(): Promise<Array<QuizResult>>;
    getAllResources(): Promise<Array<Resource>>;
    getAllSubscribers(): Promise<Array<string>>;
    getAllTestimonials(): Promise<Array<Testimonial>>;
    getBeginnerPortfolio(id: bigint): Promise<BeginnerPortfolio | null>;
    getBlogPostsByCategory(category: string): Promise<Array<BlogPost>>;
    getFAQsByCategory(category: string): Promise<Array<FAQ>>;
    getMediaAssetsByType(type: string): Promise<Array<MediaAsset>>;
    getPhases(): Promise<Array<Phase>>;
    getPortfolio(id: bigint): Promise<Portfolio | null>;
    getRandomImages(count: bigint): Promise<Array<MediaAsset>>;
    getRetrospectivesByOwner(owner: string): Promise<Array<Retrospective>>;
    getRetrospectivesByPhase(phase: string): Promise<Array<Retrospective>>;
    getSectionsByPhase(phaseId: bigint): Promise<Array<Section>>;
    getTierPriceInRupees(tierId: bigint): Promise<bigint>;
    getTopicsBySection(sectionId: bigint): Promise<Array<Topic>>;
    initializePricingTiers(): Promise<void>;
    saveQuizResult(id: bigint, score: bigint, tierRecommendation: bigint | null, roadmapPhaseRecommendation: bigint | null): Promise<void>;
    searchBlogPosts(searchTerm: string): Promise<Array<BlogPost>>;
    searchFAQs(searchTerm: string): Promise<Array<FAQ>>;
    submitContactForm(id: bigint, name: string, email: string, subject: string, message: string): Promise<void>;
    subscribeToNewsletter(email: string): Promise<void>;
    transform(input: TransformationInput): Promise<TransformationOutput>;
    updatePricingGuideSection(guidelineId: bigint, section: PricingGuideSection): Promise<void>;
}
