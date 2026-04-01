import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useBeginnerPortfolios,
  usePortfolioProjects,
} from "@/hooks/useQueries";
import { Link } from "@tanstack/react-router";
import {
  BarChart3,
  CheckCircle2,
  ExternalLink,
  Filter,
  Lightbulb,
  Mail,
  Search,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

export default function PortfolioPage() {
  const { data: projects, isLoading } = usePortfolioProjects();
  const { data: beginnerPortfolios, isLoading: _isLoadingBeginner } =
    useBeginnerPortfolios();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = projects
    ? ["all", ...Array.from(new Set(projects.map((p) => p.serviceCategory)))]
    : ["all"];

  const filteredProjects = projects?.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      project.serviceCategory === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const beginnerPortfolio = beginnerPortfolios?.[0];

  const scrollToBeginnerPortfolio = () => {
    const element = document.getElementById("beginner-portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Placeholder project images mapping
  const projectImageMap: Record<string, string> = {
    "Local Café Social Rebrand":
      "/assets/generated/cafe-rebrand-comparison.dim_700x400.png",
    "SEO Blog Optimization Challenge":
      "/assets/generated/seo-blog-optimization.dim_500x300.png",
    "Newsletter Funnel Setup":
      "/assets/generated/newsletter-funnel-diagram.dim_600x400.png",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-blue/5 via-background to-brand-blue-light/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-medium mb-6">
              <BarChart3 className="h-4 w-4" />
              Our Work
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Portfolio & Results
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Explore real project outcomes, analytics insights, and campaign
              examples across SEO, social media, email marketing, and more. See
              the measurable impact we deliver.
            </p>
            {beginnerPortfolio && (
              <Button
                onClick={scrollToBeginnerPortfolio}
                variant="outline"
                className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                View Beginner Portfolio
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border/40 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Tabs
                value={selectedCategory}
                onValueChange={setSelectedCategory}
                className="w-full"
              >
                <TabsList className="flex-wrap h-auto">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      className="capitalize"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="shadow-soft overflow-hidden">
                  <Skeleton className="h-48 w-full" />
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-20 w-full mb-4" />
                    <Skeleton className="h-24 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredProjects && filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card
                  key={Number(project.id)}
                  className="shadow-soft hover:shadow-soft-lg transition-all overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-brand-blue/10 to-brand-blue-light/10">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <BarChart3 className="h-16 w-16 text-brand-blue/30" />
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <Badge
                        variant="outline"
                        className="text-brand-blue border-brand-blue"
                      >
                        {project.serviceCategory}
                      </Badge>
                      <Badge variant="secondary">{project.projectType}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="pt-4 border-t border-border/40">
                      <h4 className="text-sm font-semibold text-brand-blue mb-2 flex items-center gap-2">
                        <BarChart3 className="h-4 w-4" />
                        Key Results
                      </h4>
                      <div className="bg-brand-blue/5 rounded-lg p-3">
                        <p className="text-sm text-foreground leading-relaxed whitespace-pre-line">
                          {project.results}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <BarChart3 className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">
                {searchTerm || selectedCategory !== "all"
                  ? "No projects match your search criteria."
                  : "No portfolio projects available yet."}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Conversion-Driven Beginner Digital Marketing Portfolio Section */}
      {beginnerPortfolio && (
        <section
          id="beginner-portfolio"
          className="py-20 bg-gradient-to-br from-brand-blue/5 via-background to-brand-blue-light/5"
        >
          <div className="container max-w-6xl">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-medium mb-4">
                <Sparkles className="h-4 w-4" />
                Beginner Digital Marketing Portfolio
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                {beginnerPortfolio.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {beginnerPortfolio.introduction}
              </p>
            </div>

            {/* Hero Section - Conversion Focused */}
            <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12 mb-8 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground leading-tight">
                {beginnerPortfolio.hero.headline}
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {beginnerPortfolio.hero.subheadline}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  onClick={() => {
                    const projectsSection =
                      document.getElementById("beginner-projects");
                    projectsSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  size="lg"
                  className="bg-brand-blue hover:bg-brand-blue-dark text-white"
                >
                  <Target className="h-5 w-5 mr-2" />
                  {beginnerPortfolio.hero.ctaViewWork}
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                >
                  <Link to="/contact">
                    <Mail className="h-5 w-5 mr-2" />
                    {beginnerPortfolio.hero.ctaContact}
                  </Link>
                </Button>
              </div>
            </div>

            {/* About Me Section - Story Focused */}
            <div className="bg-white rounded-2xl shadow-soft p-8 md:p-10 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-brand-blue" />
                About Me
              </h3>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {beginnerPortfolio.about.bio}
                </p>
                <div className="bg-brand-blue/5 rounded-lg p-4 border-l-4 border-brand-blue">
                  <p className="font-medium text-foreground">
                    <span className="text-brand-blue font-semibold">
                      Current Focus:
                    </span>{" "}
                    {beginnerPortfolio.about.focus}
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Section - Three Column Proof-Based Layout */}
            <div className="bg-white rounded-2xl shadow-soft p-8 md:p-10 mb-8">
              <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-brand-blue" />
                Skills & Experience
              </h3>
              <div className="space-y-6">
                {beginnerPortfolio.skills.map((skill, index) => (
                  <div
                    // biome-ignore lint/suspicious/noArrayIndexKey: static list without stable id
                    key={index}
                    className="border border-border/40 rounded-lg p-6 hover:border-brand-blue/40 transition-colors"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold text-brand-blue mb-2 uppercase tracking-wide">
                          Skill
                        </h4>
                        <p className="font-semibold text-foreground text-lg">
                          {skill.name}
                        </p>
                        <Badge
                          variant="outline"
                          className="mt-2 text-brand-blue border-brand-blue"
                        >
                          {skill.category}
                        </Badge>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-brand-blue mb-2 uppercase tracking-wide">
                          How I Learned It
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {skill.description.split(".")[0]}.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-brand-blue mb-2 uppercase tracking-wide">
                          How I Applied It
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {skill.description
                            .split(".")
                            .slice(1)
                            .join(".")
                            .trim() ||
                            "Applied in real-world projects and practice scenarios."}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Section - With Placeholder Images */}
            <div
              id="beginner-projects"
              className="bg-white rounded-2xl shadow-soft p-8 md:p-10 mb-8"
            >
              <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-2">
                <Target className="h-6 w-6 text-brand-blue" />
                Projects & Practice Work
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {beginnerPortfolio.projects.map((project, index) => (
                  <Card
                    // biome-ignore lint/suspicious/noArrayIndexKey: static list without stable id
                    key={index}
                    className="shadow-soft hover:shadow-soft-lg transition-all overflow-hidden"
                  >
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-brand-blue/10 to-brand-blue-light/10">
                      {projectImageMap[project.title] ? (
                        <img
                          src={projectImageMap[project.title]}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Target className="h-16 w-16 text-brand-blue/30" />
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-brand-blue mb-1 flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3" />
                          Objective
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {project.objective}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-brand-blue mb-1 flex items-center gap-1">
                          <Lightbulb className="h-3 w-3" />
                          Strategy
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {project.strategy}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-brand-blue mb-1 flex items-center gap-1">
                          <TrendingUp className="h-3 w-3" />
                          Execution
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {project.execution}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-border/40">
                        <h4 className="text-sm font-semibold text-brand-blue mb-1">
                          Key Learnings
                        </h4>
                        <p className="text-sm text-foreground font-medium">
                          {project.outcome}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Case Study Section - Template Format */}
            {beginnerPortfolio._caseStudy && (
              <div className="bg-white rounded-2xl shadow-soft p-8 md:p-10 mb-8">
                <h3 className="text-2xl font-bold mb-2 text-foreground flex items-center gap-2">
                  <BarChart3 className="h-6 w-6 text-brand-blue" />
                  Case Study Spotlight
                </h3>
                <p className="text-lg font-semibold text-brand-blue mb-8">
                  {beginnerPortfolio._caseStudy.title}
                </p>

                <div className="space-y-6">
                  {/* Problem → Research → Strategy → Execution → Outcomes Flow */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-5">
                      <h4 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-500 text-white text-xs font-bold">
                          1
                        </span>
                        Problem
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {beginnerPortfolio._caseStudy.problem}
                      </p>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5">
                      <h4 className="text-lg font-semibold text-blue-700 mb-3 flex items-center gap-2">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white text-xs font-bold">
                          2
                        </span>
                        Research
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {beginnerPortfolio._caseStudy.research}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-5">
                      <h4 className="text-lg font-semibold text-purple-700 mb-3 flex items-center gap-2">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-500 text-white text-xs font-bold">
                          3
                        </span>
                        Strategy
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {beginnerPortfolio._caseStudy.strategy}
                      </p>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-5">
                      <h4 className="text-lg font-semibold text-green-700 mb-3 flex items-center gap-2">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-xs font-bold">
                          4
                        </span>
                        Execution
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {beginnerPortfolio._caseStudy.execution}
                      </p>
                    </div>
                  </div>

                  <div className="bg-brand-blue/5 border-l-4 border-brand-blue rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-brand-blue mb-3 flex items-center gap-2">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-blue text-white text-xs font-bold">
                        5
                      </span>
                      Learnings & Future Improvements
                    </h4>
                    <p className="text-foreground leading-relaxed">
                      {beginnerPortfolio._caseStudy.learnings}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Tools Stack Section - Icon Grid */}
            <div className="bg-white rounded-2xl shadow-soft p-8 md:p-10 mb-8">
              <h3 className="text-2xl font-bold mb-8 text-foreground">
                Tools Stack
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {beginnerPortfolio.tools.map((tool, index) => (
                  <div
                    // biome-ignore lint/suspicious/noArrayIndexKey: static list without stable id
                    key={index}
                    className="flex flex-col items-center gap-3 p-4 rounded-lg border border-border/40 hover:border-brand-blue/40 hover:bg-brand-blue/5 transition-all"
                  >
                    <div className="text-4xl">{tool.icon}</div>
                    <p className="text-sm font-medium text-center text-foreground">
                      {tool.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning & Certifications Section */}
            <div className="bg-white rounded-2xl shadow-soft p-8 md:p-10 mb-8">
              <h3 className="text-2xl font-bold mb-8 text-foreground">
                Learning & Certifications
              </h3>
              <div className="space-y-3">
                {beginnerPortfolio.certifications.map((cert, index) => (
                  <div
                    // biome-ignore lint/suspicious/noArrayIndexKey: static list without stable id
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg border border-border/40 hover:border-brand-blue/40 hover:bg-brand-blue/5 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="h-5 w-5 text-brand-blue" />
                      </div>
                      <span className="font-medium text-foreground">
                        {cert.title}
                      </span>
                    </div>
                    {cert.url && (
                      <Button asChild variant="ghost" size="sm">
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA Section */}
            <div className="bg-gradient-to-br from-brand-blue to-brand-blue-dark rounded-2xl shadow-soft p-8 md:p-12 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">
                {beginnerPortfolio.contactCta.headline}
              </h3>
              <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
                Open to internships, freelance projects, and collaborations.
                Whether you're a recruiter looking for fresh talent or a small
                business owner seeking affordable marketing help, let's connect.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-brand-blue hover:bg-white/90"
              >
                <Link to={beginnerPortfolio.contactCta.contactUrl}>
                  <Mail className="h-5 w-5 mr-2" />
                  {beginnerPortfolio.contactCta.ctaText}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
