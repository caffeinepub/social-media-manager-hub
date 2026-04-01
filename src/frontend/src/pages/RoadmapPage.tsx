import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  ChevronUp,
  DollarSign,
  ExternalLink,
  Target,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

export default function RoadmapPage() {
  const navigate = useNavigate();

  const phases = [
    {
      id: 1,
      title: "Foundations",
      subtitle: "Marketing Fundamentals",
      icon: BookOpen,
      color: "text-brand-blue",
      bgColor: "bg-brand-blue/5",
      image: "/assets/generated/marketing-fundamentals-hero.dim_600x300.png",
      description:
        "Build a solid foundation in marketing principles, understand your audience, and master the core concepts that drive successful campaigns.",
      sections: [
        {
          title: "Marketing Fundamentals",
          topics: [
            {
              name: "The 4 Ps of Marketing",
              content:
                "Master Product, Price, Place, and Promotion - the foundational framework for any marketing strategy. Learn how to position your offerings effectively in the market.",
            },
            {
              name: "Buyer Personas",
              content:
                "Create detailed customer profiles to understand your target audience's needs, pain points, and behaviors. Learn research methods and persona development techniques.",
            },
            {
              name: "Marketing Funnel",
              content:
                "Understand the customer journey from awareness to conversion. Learn how to optimize each stage: Awareness, Interest, Consideration, Intent, Evaluation, and Purchase.",
            },
          ],
        },
        {
          title: "Market Research",
          topics: [
            {
              name: "Competitive Analysis",
              content:
                "Learn to analyze competitors, identify market gaps, and position your brand uniquely. Use tools like SWOT analysis and competitive matrices.",
            },
            {
              name: "Customer Research",
              content:
                "Conduct surveys, interviews, and focus groups to gather insights. Learn qualitative and quantitative research methods.",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Skill Building",
      subtitle: "Digital Channels Mastery",
      icon: Target,
      color: "text-brand-blue",
      bgColor: "bg-brand-blue/8",
      image: "/assets/generated/digital-channels-overview.dim_600x300.png",
      description:
        "Deep dive into digital marketing channels and develop practical skills across SEO, paid advertising, social media, email marketing, and content strategy.",
      sections: [
        {
          title: "Search Engine Optimization (SEO)",
          topics: [
            {
              name: "On-Page SEO",
              content:
                "Master keyword research, meta tags, header optimization, internal linking, and content optimization. Learn to create SEO-friendly content that ranks.",
            },
            {
              name: "Technical SEO",
              content:
                "Understand site structure, crawlability, indexing, site speed, mobile optimization, and Core Web Vitals. Implement schema markup and XML sitemaps.",
            },
            {
              name: "Off-Page SEO",
              content:
                "Build high-quality backlinks, develop link-building strategies, and understand domain authority. Learn outreach and relationship building.",
            },
          ],
        },
        {
          title: "Paid Advertising",
          topics: [
            {
              name: "Google Ads",
              content:
                "Create and optimize search, display, and shopping campaigns. Master keyword bidding, ad copy, quality score, and conversion tracking.",
            },
            {
              name: "Social Media Ads",
              content:
                "Run effective campaigns on Facebook, Instagram, LinkedIn, and Twitter. Learn audience targeting, creative best practices, and A/B testing.",
            },
            {
              name: "Retargeting",
              content:
                "Implement pixel tracking and create retargeting campaigns to re-engage visitors. Understand audience segmentation and frequency capping.",
            },
          ],
        },
        {
          title: "Social Media Marketing",
          topics: [
            {
              name: "Platform Strategy",
              content:
                "Develop platform-specific strategies for Facebook, Instagram, LinkedIn, Twitter, TikTok, and Pinterest. Understand each platform's unique audience and content formats.",
            },
            {
              name: "Content Creation",
              content:
                "Create engaging posts, stories, reels, and videos. Learn visual design principles, copywriting, and hashtag strategies.",
            },
            {
              name: "Community Management",
              content:
                "Build and engage your community, respond to comments, handle customer service, and foster brand loyalty.",
            },
          ],
        },
        {
          title: "Email Marketing",
          topics: [
            {
              name: "List Building",
              content:
                "Grow your email list through lead magnets, opt-in forms, and landing pages. Understand GDPR and email compliance.",
            },
            {
              name: "Campaign Creation",
              content:
                "Design effective email campaigns, write compelling subject lines, and optimize for mobile. Learn segmentation and personalization.",
            },
            {
              name: "Automation",
              content:
                "Set up welcome sequences, drip campaigns, and behavioral triggers. Master email automation platforms and workflows.",
            },
          ],
        },
        {
          title: "Content Marketing",
          topics: [
            {
              name: "Content Strategy",
              content:
                "Develop a comprehensive content plan aligned with business goals. Learn content pillars, editorial calendars, and distribution strategies.",
            },
            {
              name: "Blogging",
              content:
                "Write SEO-optimized blog posts that drive traffic and engagement. Master storytelling, formatting, and calls-to-action.",
            },
            {
              name: "Video Marketing",
              content:
                "Create engaging video content for YouTube, social media, and websites. Learn scripting, filming, editing, and optimization.",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Growth & Scaling",
      subtitle: "Analytics & Optimization",
      icon: TrendingUp,
      color: "text-brand-blue",
      bgColor: "bg-brand-blue/5",
      image: "/assets/generated/analytics-dashboard.dim_600x400.png",
      description:
        "Master data-driven decision making, implement advanced analytics, optimize conversion rates, and scale your marketing efforts effectively.",
      sections: [
        {
          title: "Analytics Implementation",
          topics: [
            {
              name: "Google Analytics 4",
              content:
                "Set up GA4, understand events and conversions, create custom reports, and analyze user behavior. Master attribution models and data analysis.",
            },
            {
              name: "Tag Management",
              content:
                "Implement Google Tag Manager for tracking pixels, events, and conversions. Learn tag triggers, variables, and debugging.",
            },
            {
              name: "Data Visualization",
              content:
                "Create dashboards in Google Data Studio, Tableau, or Power BI. Learn to present data insights effectively to stakeholders.",
            },
          ],
        },
        {
          title: "Conversion Rate Optimization",
          topics: [
            {
              name: "A/B Testing",
              content:
                "Design and run split tests on landing pages, emails, and ads. Learn statistical significance and test interpretation.",
            },
            {
              name: "Landing Page Optimization",
              content:
                "Create high-converting landing pages with compelling headlines, clear CTAs, and persuasive copy. Understand user psychology and design principles.",
            },
            {
              name: "User Experience (UX)",
              content:
                "Improve website usability, navigation, and user flow. Conduct user testing and implement feedback.",
            },
          ],
        },
        {
          title: "Marketing Automation",
          topics: [
            {
              name: "Automation Platforms",
              content:
                "Master tools like HubSpot, Marketo, or ActiveCampaign. Set up workflows, lead scoring, and nurture campaigns.",
            },
            {
              name: "CRM Integration",
              content:
                "Connect marketing tools with CRM systems. Understand lead management and sales alignment.",
            },
            {
              name: "Workflow Optimization",
              content:
                "Design efficient automation workflows that save time and improve results. Learn trigger-based marketing.",
            },
          ],
        },
        {
          title: "Advanced SEO",
          topics: [
            {
              name: "Content Clusters",
              content:
                "Implement pillar pages and topic clusters for SEO dominance. Learn semantic SEO and entity optimization.",
            },
            {
              name: "International SEO",
              content:
                "Optimize for multiple languages and regions. Understand hreflang tags and geo-targeting.",
            },
            {
              name: "Voice Search Optimization",
              content:
                "Optimize for voice assistants and featured snippets. Learn conversational keywords and question-based content.",
            },
          ],
        },
        {
          title: "Scaling Strategies",
          topics: [
            {
              name: "Budget Allocation",
              content:
                "Optimize marketing spend across channels. Learn ROI calculation and budget forecasting.",
            },
            {
              name: "Team Building",
              content:
                "Build and manage marketing teams. Understand roles, responsibilities, and collaboration tools.",
            },
            {
              name: "Process Documentation",
              content:
                "Create SOPs, playbooks, and training materials. Systematize your marketing operations.",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Monetization & Authority",
      subtitle: "Revenue & Influence",
      icon: DollarSign,
      color: "text-brand-blue",
      bgColor: "bg-brand-blue/8",
      image: "/assets/generated/marketing-roadmap.dim_800x400.png",
      description:
        "Implement advanced monetization strategies, build your authority in the industry, and create sustainable revenue streams from your marketing expertise.",
      sections: [
        {
          title: "Revenue Streams",
          topics: [
            {
              name: "Affiliate Marketing",
              content:
                "Build profitable affiliate partnerships, create review content, and optimize commission rates. Learn disclosure requirements and ethical promotion.",
            },
            {
              name: "Digital Products",
              content:
                "Create and sell courses, ebooks, templates, and tools. Learn product development, pricing strategies, and launch tactics.",
            },
            {
              name: "Consulting Services",
              content:
                "Package your expertise into consulting offers. Learn client acquisition, pricing, and service delivery.",
            },
          ],
        },
        {
          title: "Authority Building",
          topics: [
            {
              name: "Personal Branding",
              content:
                "Build your reputation as an industry expert. Develop your unique voice, positioning, and thought leadership.",
            },
            {
              name: "Speaking & Webinars",
              content:
                "Secure speaking opportunities, host webinars, and create presentations. Learn public speaking and audience engagement.",
            },
            {
              name: "Publishing",
              content:
                "Write guest posts, contribute to industry publications, and potentially author a book. Build credibility through content.",
            },
          ],
        },
        {
          title: "Advanced Monetization",
          topics: [
            {
              name: "Membership Sites",
              content:
                "Create recurring revenue through membership communities. Learn retention strategies and member engagement.",
            },
            {
              name: "Sponsorships",
              content:
                "Attract and negotiate brand partnerships. Create sponsorship packages and maintain sponsor relationships.",
            },
            {
              name: "Agency Model",
              content:
                "Build a marketing agency or freelance business. Learn client management, team scaling, and service delivery.",
            },
          ],
        },
        {
          title: "Product Launches",
          topics: [
            {
              name: "Launch Strategy",
              content:
                "Plan and execute successful product launches. Learn pre-launch, launch, and post-launch tactics.",
            },
            {
              name: "Sales Funnels",
              content:
                "Build high-converting sales funnels with upsells, downsells, and order bumps. Master funnel psychology.",
            },
            {
              name: "Email Sequences",
              content:
                "Create persuasive launch email sequences. Learn storytelling, urgency, and scarcity tactics.",
            },
          ],
        },
        {
          title: "Scaling Revenue",
          topics: [
            {
              name: "Pricing Optimization",
              content:
                "Test and optimize pricing strategies. Learn value-based pricing and psychological pricing tactics.",
            },
            {
              name: "Lifetime Value",
              content:
                "Increase customer lifetime value through retention, upsells, and cross-sells. Build loyalty programs.",
            },
            {
              name: "Partnership Development",
              content:
                "Create strategic partnerships and joint ventures. Learn collaboration and revenue sharing models.",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-background to-brand-blue/10" />
        <div className="container relative">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-6 bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20 border-brand-blue/20 px-4 py-1.5 text-sm font-medium shadow-soft">
              Complete Learning Path
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-brand-blue leading-tight">
              Roadmap
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              Your comprehensive guide to mastering digital marketing. Follow
              this structured roadmap from fundamentals to advanced monetization
              strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brand-blue hover:bg-brand-blue-dark text-white shadow-soft-lg hover:shadow-soft-xl transition-all"
                onClick={() => navigate({ to: "/learn" })}
              >
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue/10 shadow-soft hover:shadow-soft-lg transition-all"
                onClick={() => navigate({ to: "/resources" })}
              >
                View Resources
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Phases */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl">
          <div className="space-y-16">
            {phases.map((phase, phaseIndex) => {
              const Icon = phase.icon;
              return (
                <div key={phase.id} className="relative">
                  {/* Phase Header */}
                  <Card className="overflow-hidden shadow-soft-lg border-border/50 bg-white mb-8">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-6">
                          <div
                            className={`w-16 h-16 rounded-2xl ${phase.bgColor} flex items-center justify-center shadow-soft`}
                          >
                            <Icon className={`h-8 w-8 ${phase.color}`} />
                          </div>
                          <div>
                            <Badge className="mb-2 bg-brand-blue/10 text-brand-blue border-brand-blue/20">
                              Phase {phase.id}
                            </Badge>
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">
                              {phase.title}
                            </h2>
                          </div>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                          {phase.description}
                        </p>
                        <div className="flex gap-3">
                          <Button
                            className="bg-brand-blue hover:bg-brand-blue-dark text-white shadow-soft"
                            onClick={() => navigate({ to: "/learn" })}
                          >
                            Start Learning
                          </Button>
                          {phaseIndex < phases.length - 1 && (
                            <Button
                              variant="outline"
                              className="border-brand-blue text-brand-blue hover:bg-brand-blue/10"
                              onClick={() => {
                                const nextPhase = document.getElementById(
                                  `phase-${phase.id + 1}`,
                                );
                                nextPhase?.scrollIntoView({
                                  behavior: "smooth",
                                  block: "start",
                                });
                              }}
                            >
                              Go to Next Phase
                            </Button>
                          )}
                        </div>
                      </div>
                      <div className="relative h-64 md:h-auto">
                        <img
                          src={phase.image}
                          alt={phase.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </Card>

                  {/* Phase Sections */}
                  <div id={`phase-${phase.id}`} className="space-y-6">
                    {phase.sections.map((section, sectionIndex) => (
                      <Card
                        // biome-ignore lint/suspicious/noArrayIndexKey: static list without stable id
                        key={sectionIndex}
                        className="shadow-soft border-border/50 bg-white"
                      >
                        <CardHeader>
                          <CardTitle className="text-2xl text-brand-blue flex items-center gap-3">
                            <div
                              className={`w-10 h-10 rounded-lg ${phase.bgColor} flex items-center justify-center`}
                            >
                              <span className="text-brand-blue font-bold">
                                {sectionIndex + 1}
                              </span>
                            </div>
                            {section.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                          >
                            {section.topics.map((topic, topicIndex) => (
                              <AccordionItem
                                // biome-ignore lint/suspicious/noArrayIndexKey: static list without stable id
                                key={topicIndex}
                                value={`topic-${topicIndex}`}
                              >
                                <AccordionTrigger className="text-left hover:text-brand-blue">
                                  <span className="font-semibold">
                                    {topic.name}
                                  </span>
                                </AccordionTrigger>
                                <AccordionContent>
                                  <div className="pt-2 pb-4 px-4 bg-accent/30 rounded-lg">
                                    <p className="text-muted-foreground leading-relaxed">
                                      {topic.content}
                                    </p>
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                          </Accordion>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Phase Divider */}
                  {phaseIndex < phases.length - 1 && (
                    <div className="flex items-center justify-center my-16">
                      <div className="flex items-center gap-4">
                        <div className="h-px w-20 bg-gradient-to-r from-transparent to-brand-blue/30" />
                        <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center">
                          <ChevronDown className="h-6 w-6 text-brand-blue" />
                        </div>
                        <div className="h-px w-20 bg-gradient-to-l from-transparent to-brand-blue/30" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-brand-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-dark/50 to-transparent" />
        <div className="container text-center relative z-10 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Begin with Phase 1 and work your way through each stage. Access
            detailed lessons, practical exercises, and curated resources to
            accelerate your learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-brand-blue hover:bg-white/90 shadow-soft-lg hover:shadow-soft-xl transition-all"
              onClick={() => navigate({ to: "/learn" })}
            >
              Start Learning Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 shadow-soft hover:shadow-soft-lg transition-all"
              onClick={() => navigate({ to: "/blog" })}
            >
              Read Our Blog
            </Button>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-brand-blue/5 to-background">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-blue">
              Explore More Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complement your learning with additional tools, guides, and
              community support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-soft-lg border-border/50 bg-white hover:shadow-soft-xl transition-all">
              <CardHeader>
                <CardTitle className="text-xl text-brand-blue">
                  Resource Hub
                </CardTitle>
                <CardDescription>
                  Access curated tools and learning materials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue/10"
                  onClick={() => navigate({ to: "/resources" })}
                >
                  Browse Resources
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft-lg border-border/50 bg-white hover:shadow-soft-xl transition-all">
              <CardHeader>
                <CardTitle className="text-xl text-brand-blue">
                  Educational Content
                </CardTitle>
                <CardDescription>
                  Deep dive into specific marketing topics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue/10"
                  onClick={() => navigate({ to: "/learn" })}
                >
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft-lg border-border/50 bg-white hover:shadow-soft-xl transition-all">
              <CardHeader>
                <CardTitle className="text-xl text-brand-blue">
                  Get Support
                </CardTitle>
                <CardDescription>
                  Have questions? We're here to help
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue/10"
                  onClick={() => navigate({ to: "/contact" })}
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
