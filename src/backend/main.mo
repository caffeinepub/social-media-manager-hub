import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Text "mo:core/Text";
import Int "mo:core/Int";
import List "mo:core/List";
import Time "mo:core/Time";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Storage "blob-storage/Storage";
import MixinStorage "blob-storage/Mixin";
import OutCall "http-outcalls/outcall";

actor {
  // DIGITAL MARKETING ROADMAP MODULE
  include MixinStorage();

  // Type Definitions

  // Roadmap Types
  type Phase = {
    id : Nat;
    title : Text;
    description : Text;
    image : Text;
    completed : Bool;
  };

  type Section = {
    id : Nat;
    phaseId : Nat;
    title : Text;
    description : Text;
    topics : [Text];
    content : Text;
    resources : [Nat]; // Resource references
    expanded : Bool;
  };

  type Topic = {
    id : Nat;
    sectionId : Nat;
    title : Text;
    content : Text;
    completed : Bool;
  };

  // Testimonial & Case Study Types
  public type Testimonial = {
    id : Nat;
    clientName : Text;
    quote : Text;
    resultMetrics : Text;
    beforeAfter : Text;
    serviceCategory : Text;
  };

  public type CaseStudy = {
    id : Nat;
    title : Text;
    description : Text;
    results : Text;
    serviceCategory : Text;
    projectType : Text; // Added projectType field
  };

  // Portfolio & Project Types
  public type PortfolioProject = {
    id : Nat;
    title : Text;
    description : Text;
    results : Text;
    serviceCategory : Text;
    image : Text;
    projectType : Text;
  };

  // FAQ Types (Expanded)
  public type FAQ = {
    id : Nat;
    question : Text;
    answer : Text;
    category : Text;
    isVisible : Bool; // Added isVisible field
    createdAt : Int; // Added createdAt field
    updatedAt : Int; // Added updatedAt field
    _private : Bool; // Added _private field
  };

  public type PricingTier = {
    id : Nat;
    name : Text;
    price : Int; // Always store price as 5000
    features : [Text];
    recommendedForSmallBusiness : Bool;
  };

  public type PricingTierFeature = {
    id : Nat;
    description : Text;
    isPremium : Bool;
    tierId : Nat;
  };

  // Interactive Quiz Types (Expanded)
  public type QuizQuestion = {
    id : Nat;
    question : Text;
    answers : [Text];
    correctAnswerIndex : Int;
    answersText : Text;
    recommendedTierId : ?Nat;
    roadmapSuggestion : ?Text;
    isActive : Bool;
  };

  public type QuizResult = {
    id : Nat;
    score : Nat;
    tierRecommendation : ?Nat;
    roadmapPhaseRecommendation : ?Nat;
    _categoryAnalysis : ?Text;
  };

  // Resource & Asset Types
  public type Resource = {
    id : Nat;
    title : Text;
    url : Text;
    isFree : Bool;
    description : Text;
    category : Text;
    featured : Bool;
  };

  public type ResourceCategory = {
    id : Nat;
    name : Text;
    description : Text;
    isActive : Bool;
  };

  // Blog Post Types
  public type BlogPost = {
    id : Nat;
    title : Text;
    content : Text;
    author : Text;
    timestamp : Int;
    category : Text;
  };

  // Contact Submission Types
  public type ContactSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
    timestamp : Int;
  };

  // Media Asset Types
  public type MediaAsset = {
    id : Nat;
    file : Storage.ExternalBlob;
    description : Text;
    type_ : Text;
  };

  // Retrospective Data Types
  public type Retrospective = {
    id : Nat;
    title : Text;
    reflections : Text;
    timestamp : Int;
    phase : Text;
    owner : Text;
  };

  // Beginner Portfolio Types
  public type BeginnerPortfolio = {
    id : Nat;
    title : Text;
    introduction : Text;
    hero : BeginnerPortfolioHero;
    about : BeginnerPortfolioAbout;
    skills : [BeginnerPortfolioSkill];
    projects : [BeginnerPortfolioProject];
    _caseStudy : ?BeginnerPortfolioCaseStudy;
    tools : [BeginnerPortfolioTool];
    certifications : [BeginnerPortfolioCertification];
    contactCta : BeginnerPortfolioContactCta;
  };

  public type BeginnerPortfolioHero = {
    headline : Text;
    subheadline : Text;
    ctaViewWork : Text;
    ctaContact : Text;
  };

  public type BeginnerPortfolioAbout = {
    bio : Text;
    focus : Text;
  };

  public type BeginnerPortfolioSkill = {
    name : Text;
    description : Text;
    category : Text;
  };

  public type BeginnerPortfolioProject = {
    title : Text;
    objective : Text;
    strategy : Text;
    execution : Text;
    outcome : Text;
  };

  public type BeginnerPortfolioCaseStudy = {
    title : Text;
    problem : Text;
    research : Text;
    strategy : Text;
    execution : Text;
    learnings : Text;
  };

  public type BeginnerPortfolioTool = {
    name : Text;
    icon : Text;
  };

  public type BeginnerPortfolioCertification = {
    title : Text;
    url : Text;
  };

  public type BeginnerPortfolioContactCta = {
    headline : Text;
    ctaText : Text;
    contactUrl : Text;
  };

  public type Portfolio = {
    id : Nat;
    title : Text;
    headline : Text;
    subheadline : Text;
    about : Text;
    focusArea : Text;
    skillsExperiences : [SkillExperience];
    projects : [Project];
    caseStudies : [CaseStudy];
    certifications : [Certification];
    tools : [Tool];
  };

  public type SkillExperience = {
    skill : Text;
    learningMethod : Text;
    application : Text;
  };

  public type Project = {
    title : Text;
    objective : Text;
    strategy : Text;
    execution : Text;
    outcome : Text;
    imageUrl : Text;
  };

  public type Tool = {
    name : Text;
    iconUrl : Text;
  };

  public type Certification = {
    title : Text;
    institution : Text;
    year : Nat;
  };

  // Freelance Digital Marketing Pricing Guide Types
  public type PricingGuideSection = {
    id : Nat;
    title : Text;
    description : Text;
    pricingItems : [PricingGuideItem];
    currency : Text;
  };

  public type PricingGuideItem = {
    id : Nat;
    service : Text;
    description : Text;
    priceRange : Text;
    skillLevel : Text;
  };

  public type PricingGuideline = {
    id : Nat;
    title : Text;
    section : PricingGuideSection;
    takeaways : [Text];
    realityCheckPoints : [Text];
  };

  // Data Stores using persistent Map and List
  let phases = Map.fromIter<Nat, Phase>([].values());
  let sections = Map.fromIter<Nat, Section>([].values());
  let topics = Map.fromIter<Nat, Topic>([].values());
  let testimonials = Map.fromIter<Nat, Testimonial>([].values());
  let caseStudies = Map.fromIter<Nat, CaseStudy>([].values());
  let portfolioProjects = Map.fromIter<Nat, PortfolioProject>([].values());
  let faqs = Map.fromIter<Nat, FAQ>([].values());
  let pricingTiers = Map.fromIter<Nat, PricingTier>([].values());
  let pricingTierFeatures = Map.fromIter<Nat, PricingTierFeature>([].values());
  let quizQuestions = Map.fromIter<Nat, QuizQuestion>([].values());
  let quizResults = Map.fromIter<Nat, QuizResult>([].values());
  let resources = Map.fromIter<Nat, Resource>([].values());
  let resourceCategories = Map.fromIter<Nat, ResourceCategory>([].values());
  let blogPosts = Map.fromIter<Nat, BlogPost>([].values());
  let contactSubmissions = Map.fromIter<Nat, ContactSubmission>([].values());
  let mediaAssets = Map.fromIter<Nat, MediaAsset>([].values());
  let retrospectives = Map.fromIter<Nat, Retrospective>([].values());
  let beginnerPortfolios = Map.fromIter<Nat, BeginnerPortfolio>([].values());
  let portfolios = Map.fromIter<Nat, Portfolio>([].values());
  let newsletterSubscribers = List.empty<Text>();
  let pricingGuidelines = Map.fromIter<Nat, PricingGuideline>([].values());

  // Initial Pricing Tier Data
  public shared ({ caller }) func initializePricingTiers() : async () {
    let starterTier : PricingTier = {
      id = 1;
      name = "Starter";
      price = 5000;
      features = [
        "Basic digital marketing roadmap",
        "Marketing fundamentals",
        "SEO basics",
        "Analytics setup",
      ];
      recommendedForSmallBusiness = true;
    };

    let growthTier : PricingTier = {
      id = 2;
      name = "Growth";
      price = 5000;
      features = [
        "Advanced digital roadmap",
        "Social media marketing",
        "Paid advertising guidance",
        "Content marketing strategies",
      ];
      recommendedForSmallBusiness = true;
    };

    let scaleTier : PricingTier = {
      id = 3;
      name = "Scale";
      price = 5000;
      features = [
        "Comprehensive digital roadmap",
        "Conversion optimization",
        "Revenue stream strategies",
        "Automation tools",
      ];
      recommendedForSmallBusiness = true;
    };

    pricingTiers.add(1, starterTier);
    pricingTiers.add(2, growthTier);
    pricingTiers.add(3, scaleTier);
  };

  // Roadmap Phase Management
  public shared ({ caller }) func addPhase(id : Nat, title : Text, description : Text, image : Text) : async () {
    let phase : Phase = {
      id;
      title;
      description;
      image;
      completed = false;
    };
    phases.add(id, phase);
  };

  public query ({ caller }) func getPhases() : async [Phase] {
    phases.values().toArray();
  };

  // Roadmap Section Management
  public shared ({ caller }) func addSection(id : Nat, phaseId : Nat, title : Text, description : Text, topics : [Text], content : Text) : async () {
    let section : Section = {
      id;
      phaseId;
      title;
      description;
      topics;
      content;
      resources = [];
      expanded = false;
    };
    sections.add(id, section);
  };

  public query ({ caller }) func getSectionsByPhase(phaseId : Nat) : async [Section] {
    sections.values().toArray().filter(func(section) { section.phaseId == phaseId });
  };

  // Roadmap Topic Management
  public shared ({ caller }) func addTopic(id : Nat, sectionId : Nat, title : Text, content : Text) : async () {
    let topic : Topic = {
      id;
      sectionId;
      title;
      content;
      completed = false;
    };
    topics.add(id, topic);
  };

  public query ({ caller }) func getTopicsBySection(sectionId : Nat) : async [Topic] {
    topics.values().toArray().filter(func(topic) { topic.sectionId == sectionId });
  };

  // Testimonial Management
  public shared ({ caller }) func addTestimonial(id : Nat, clientName : Text, quote : Text, resultMetrics : Text, beforeAfter : Text, serviceCategory : Text) : async () {
    let testimonial : Testimonial = {
      id;
      clientName;
      quote;
      resultMetrics;
      beforeAfter;
      serviceCategory;
    };
    testimonials.add(id, testimonial);
  };

  public query ({ caller }) func getAllTestimonials() : async [Testimonial] {
    testimonials.values().toArray();
  };

  // Case Study Management
  public shared ({ caller }) func addCaseStudy(id : Nat, title : Text, description : Text, results : Text, serviceCategory : Text, projectType : Text) : async () {
    let caseStudy : CaseStudy = {
      id;
      title;
      description;
      results;
      serviceCategory;
      projectType;
    };
    caseStudies.add(id, caseStudy);
  };

  public query ({ caller }) func getAllCaseStudies() : async [CaseStudy] {
    caseStudies.values().toArray();
  };

  // Portfolio Project Management
  public shared ({ caller }) func addPortfolioProject(id : Nat, title : Text, description : Text, results : Text, serviceCategory : Text, image : Text, projectType : Text) : async () {
    let project : PortfolioProject = {
      id;
      title;
      description;
      results;
      serviceCategory;
      image;
      projectType;
    };
    portfolioProjects.add(id, project);
  };

  public query ({ caller }) func getAllPortfolioProjects() : async [PortfolioProject] {
    portfolioProjects.values().toArray();
  };

  // FAQ Management (Expanded)
  public shared ({ caller }) func addFAQ(id : Nat, question : Text, answer : Text, category : Text) : async () {
    let faq : FAQ = {
      id;
      question;
      answer;
      category;
      isVisible = true;
      createdAt = Time.now();
      updatedAt = Time.now();
      _private = false;
    };
    faqs.add(id, faq);
  };

  public query ({ caller }) func getFAQsByCategory(category : Text) : async [FAQ] {
    faqs.values().toArray().filter(func(faq) { Text.equal(faq.category, category) });
  };

  public query ({ caller }) func searchFAQs(searchTerm : Text) : async [FAQ] {
    let termLower = searchTerm.toLower();
    faqs.entries().toArray().filter(
      func((_, faq)) {
        faq.question.toLower().contains(#text (termLower)) or faq.answer.toLower().contains(#text (termLower));
      }
    ).map(func((_, faq)) { faq });
  };

  // Pricing Tier Management (Always ₹5,000)
  public shared ({ caller }) func addPricingTier(id : Nat, name : Text, features : [Text]) : async () {
    let tier : PricingTier = {
      id;
      name;
      price = 5000; // Always store price as 5000
      features;
      recommendedForSmallBusiness = true;
    };
    pricingTiers.add(id, tier);
  };

  public query ({ caller }) func getAllPricingTiers() : async [PricingTier] {
    pricingTiers.values().toArray();
  };

  public query ({ caller }) func getTierPriceInRupees(tierId : Nat) : async Int {
    switch (pricingTiers.get(tierId)) {
      case (null) { 0 };
      case (?tier) { tier.price };
    };
  };

  // Interactive Quiz Management
  public shared ({ caller }) func addQuizQuestion(id : Nat, question : Text, answers : [Text], correctAnswerIndex : Int, answersText : Text, recommendedTierId : ?Nat, roadmapSuggestion : ?Text) : async () {
    let quizQuestion : QuizQuestion = {
      id;
      question;
      answers;
      correctAnswerIndex;
      answersText;
      recommendedTierId;
      roadmapSuggestion;
      isActive = true;
    };
    quizQuestions.add(id, quizQuestion);
  };

  public query ({ caller }) func getAllQuizQuestions() : async [QuizQuestion] {
    quizQuestions.values().toArray().filter(func(q) { q.isActive });
  };

  public shared ({ caller }) func saveQuizResult(id : Nat, score : Nat, tierRecommendation : ?Nat, roadmapPhaseRecommendation : ?Nat) : async () {
    let quizResult : QuizResult = {
      id;
      score;
      tierRecommendation;
      roadmapPhaseRecommendation;
      _categoryAnalysis = null;
    };
    quizResults.add(id, quizResult);
  };

  public query ({ caller }) func getAllQuizResults() : async [QuizResult] {
    quizResults.values().toArray();
  };

  // Resource Management
  public shared ({ caller }) func addResource(id : Nat, title : Text, url : Text, isFree : Bool, description : Text, category : Text) : async () {
    let resource : Resource = {
      id;
      title;
      url;
      isFree;
      description;
      category;
      featured = false;
    };
    resources.add(id, resource);
  };

  public query ({ caller }) func getAllResources() : async [Resource] {
    resources.values().toArray();
  };

  // Blog Post Management
  public shared ({ caller }) func addBlogPost(id : Nat, title : Text, content : Text, author : Text, category : Text) : async () {
    let post : BlogPost = {
      id;
      title;
      content;
      author;
      timestamp = Time.now();
      category;
    };
    blogPosts.add(id, post);
  };

  module BlogPost {
    public func compareByTimestamp(post1 : BlogPost, post2 : BlogPost) : Order.Order {
      Int.compare(post2.timestamp, post1.timestamp);
    };
  };

  public query ({ caller }) func getAllBlogPosts() : async [BlogPost] {
    blogPosts.values().toArray().sort(BlogPost.compareByTimestamp);
  };

  public query ({ caller }) func getBlogPostsByCategory(category : Text) : async [BlogPost] {
    blogPosts.values().toArray().filter(
      func(post) { Text.equal(post.category, category) }
    );
  };

  // Contact Form Management with Email Sending
  public shared ({ caller }) func submitContactForm(id : Nat, name : Text, email : Text, subject : Text, message : Text) : async () {
    let submission : ContactSubmission = {
      id;
      name;
      email;
      subject;
      message;
      timestamp = Time.now();
    };

    contactSubmissions.add(id, submission);

    let emailBody = "Name: " # name # "\nEmail: " # email # "\nSubject: " # subject # "\nMessage: " # message;

    let emailApiUrl = "https://api.mailersend.com/v1/email";
    let apiKey = "api_key";
    let headers = [
      { name = "Content-Type"; value = "application/json" },
      { name = "Authorization"; value = "Bearer " # apiKey },
      { name = "X-Api-Key"; value = apiKey },
    ];

    let jsonPayload = "{
      \"from\": {
        \"email\": \"socialjay@protonmail.com\",
        \"name\": \"The Social Jay Contact Form\"
      },
      \"reply_to\": {
        \"email\": " # "\"" # email # "\"" # ",
        \"name\": " # "\"" # name # "\"" # "
      },
      \"to\": [{
        \"email\": \"ng5949186@gmail.com\",
        \"name\": \"ng5949186\"
      }],
      \"subject\": " # "\"" # subject # "\"" # ",
      \"text\": " # "\"" # emailBody # "\"" # "
    }";

    let result = await OutCall.httpPostRequest(emailApiUrl, headers, jsonPayload, transform);

    let payloadStr = "{\"reply_to\": {\"email\": " # "\"" # email # "\"" # ", \"name\": " # "\"" # name # "\"" # "}}";
    if (not (result.contains(#text("202")) or result.contains(#text("201")))) {};
  };

  // Transform function for HTTP outcalls
  public query ({ caller }) func transform(input : OutCall.TransformationInput) : async OutCall.TransformationOutput {
    OutCall.transform(input);
  };

  public query ({ caller }) func getAllContactSubmissions() : async [ContactSubmission] {
    contactSubmissions.values().toArray();
  };

  // Newsletter Subscription Management
  public shared ({ caller }) func subscribeToNewsletter(email : Text) : async () {
    if (newsletterSubscribers.values().contains(email)) { return };
    newsletterSubscribers.add(email);
  };

  public query ({ caller }) func getAllSubscribers() : async [Text] {
    newsletterSubscribers.toArray();
  };

  // Search Blog Posts
  public query ({ caller }) func searchBlogPosts(searchTerm : Text) : async [BlogPost] {
    let termLower = searchTerm.toLower();
    blogPosts.entries().toArray().filter(
      func((_, post)) {
        post.title.toLower().contains(#text (termLower)) or post.content.toLower().contains(#text (termLower));
      }
    ).map(func((_, post)) { post });
  };

  // Media Asset Management
  public shared ({ caller }) func addMediaAsset(id : Nat, file : Storage.ExternalBlob, description : Text, type_ : Text) : async () {
    let asset : MediaAsset = {
      id;
      file;
      description;
      type_;
    };
    mediaAssets.add(id, asset);
  };

  public query ({ caller }) func getMediaAssetsByType(type_ : Text) : async [MediaAsset] {
    mediaAssets.values().toArray().filter(
      func(asset) { asset.type_ == type_ }
    );
  };

  // Get Random Images
  public shared ({ caller }) func getRandomImages(count : Nat) : async [MediaAsset] {
    let images = mediaAssets.values().toArray().filter(
      func(asset) { asset.type_ == "image" }
    );
    images.sliceToArray(0, if (count > images.size()) { images.size() } else { count });
  };

  // Retrospective Management
  public shared ({ caller }) func addRetrospective(id : Nat, title : Text, reflections : Text, phase : Text, owner : Text) : async () {
    let retrospective : Retrospective = {
      id;
      title;
      reflections;
      timestamp = Time.now();
      phase;
      owner;
    };
    retrospectives.add(id, retrospective);
  };

  public query ({ caller }) func getRetrospectivesByPhase(phase : Text) : async [Retrospective] {
    retrospectives.values().toArray().filter(
      func(retrospective) { retrospective.phase == phase }
    );
  };

  public query ({ caller }) func getRetrospectivesByOwner(owner : Text) : async [Retrospective] {
    retrospectives.values().toArray().filter(
      func(retrospective) { retrospective.owner == owner }
    );
  };

  // Beginner Digital Marketing Portfolio Management
  public shared ({ caller }) func createBeginnerPortfolio(
    id : Nat,
    title : Text,
    introduction : Text,
    hero : BeginnerPortfolioHero,
    about : BeginnerPortfolioAbout,
    skills : [BeginnerPortfolioSkill],
    projects : [BeginnerPortfolioProject],
    caseStudy : ?BeginnerPortfolioCaseStudy,
    tools : [BeginnerPortfolioTool],
    certifications : [BeginnerPortfolioCertification],
    contactCta : BeginnerPortfolioContactCta,
  ) : async () {
    let portfolio : BeginnerPortfolio = {
      id;
      title;
      introduction;
      hero;
      about;
      skills;
      projects;
      _caseStudy = caseStudy;
      tools;
      certifications;
      contactCta;
    };

    beginnerPortfolios.add(id, portfolio);
  };

  public query ({ caller }) func getBeginnerPortfolio(id : Nat) : async ?BeginnerPortfolio {
    beginnerPortfolios.get(id);
  };

  public query ({ caller }) func getAllBeginnerPortfolios() : async [BeginnerPortfolio] {
    beginnerPortfolios.values().toArray();
  };

  // Optimized Portfolio Management
  public shared ({ caller }) func createPortfolio(
    id : Nat,
    title : Text,
    headline : Text,
    subheadline : Text,
    about : Text,
    focusArea : Text,
    skillsExperiences : [SkillExperience],
    projects : [Project],
    caseStudies : [CaseStudy],
    certifications : [Certification],
    tools : [Tool],
  ) : async () {
    let portfolio : Portfolio = {
      id;
      title;
      headline;
      subheadline;
      about;
      focusArea;
      skillsExperiences;
      projects;
      caseStudies;
      certifications;
      tools;
    };

    portfolios.add(id, portfolio);
  };

  public query ({ caller }) func getPortfolio(id : Nat) : async ?Portfolio {
    portfolios.get(id);
  };

  public query ({ caller }) func getAllPortfolios() : async [Portfolio] {
    portfolios.values().toArray();
  };

  // NEW: Freelance Digital Marketing Pricing Guide Methods
  public shared ({ caller }) func addPricingGuideline(
    id : Nat,
    title : Text,
    section : PricingGuideSection,
    takeaways : [Text],
    realityCheckPoints : [Text],
  ) : async () {
    let guideline : PricingGuideline = {
      id;
      title;
      section;
      takeaways;
      realityCheckPoints;
    };
    pricingGuidelines.add(id, guideline);
  };

  public shared ({ caller }) func updatePricingGuideSection(guidelineId : Nat, section : PricingGuideSection) : async () {
    switch (pricingGuidelines.get(guidelineId)) {
      case (null) { () };
      case (?guideline) {
        let updatedGuideline : PricingGuideline = {
          guideline with section
        };
        pricingGuidelines.add(guidelineId, updatedGuideline);
      };
    };
  };

  public query ({ caller }) func getAllPricingGuidelinesForPricingPage() : async [PricingGuideline] {
    pricingGuidelines.values().toArray();
  };
};
