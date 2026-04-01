import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Target, Wrench, Zap } from "lucide-react";

export default function LearnPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-brand-blue leading-tight">
              Educational Content
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive guides and tutorials to master digital marketing
              fundamentals and advanced strategies.
            </p>
          </div>

          {/* Content Tabs */}
          <Tabs defaultValue="fundamentals" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto mb-12 bg-white shadow-soft p-2 rounded-2xl">
              <TabsTrigger
                value="fundamentals"
                className="flex items-center gap-2 py-4 rounded-xl data-[state=active]:bg-brand-blue/10 data-[state=active]:text-brand-blue data-[state=active]:shadow-soft transition-all"
              >
                <BookOpen className="h-5 w-5" />
                <span className="hidden sm:inline font-medium">
                  Fundamentals
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="channels"
                className="flex items-center gap-2 py-4 rounded-xl data-[state=active]:bg-brand-blue/10 data-[state=active]:text-brand-blue data-[state=active]:shadow-soft transition-all"
              >
                <Target className="h-5 w-5" />
                <span className="hidden sm:inline font-medium">Channels</span>
              </TabsTrigger>
              <TabsTrigger
                value="tools"
                className="flex items-center gap-2 py-4 rounded-xl data-[state=active]:bg-brand-blue/10 data-[state=active]:text-brand-blue data-[state=active]:shadow-soft transition-all"
              >
                <Wrench className="h-5 w-5" />
                <span className="hidden sm:inline font-medium">Tools</span>
              </TabsTrigger>
              <TabsTrigger
                value="quickwins"
                className="flex items-center gap-2 py-4 rounded-xl data-[state=active]:bg-brand-blue/10 data-[state=active]:text-brand-blue data-[state=active]:shadow-soft transition-all"
              >
                <Zap className="h-5 w-5" />
                <span className="hidden sm:inline font-medium">Quick Wins</span>
              </TabsTrigger>
            </TabsList>

            {/* Marketing Fundamentals */}
            <TabsContent value="fundamentals" className="mt-0">
              <div className="mb-12">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent rounded-3xl transform -rotate-1" />
                  <img
                    src="/assets/generated/marketing-fundamentals-hero.dim_600x300.png"
                    alt="Marketing Fundamentals"
                    className="rounded-3xl shadow-soft-xl w-full relative z-10"
                  />
                </div>
              </div>

              <div className="space-y-8">
                <Card className="border-border/50 shadow-soft hover:shadow-soft-lg transition-all bg-white">
                  <CardHeader>
                    <CardTitle className="text-brand-blue text-2xl">
                      The 4 Ps of Marketing
                    </CardTitle>
                    <CardDescription className="text-base">
                      Product, Price, Place, and Promotion
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="prose prose-sm max-w-none">
                    <p className="text-foreground text-base leading-relaxed">
                      The 4 Ps framework is the foundation of marketing
                      strategy. Understanding how to balance these elements is
                      crucial for success.
                    </p>
                    <ul className="text-foreground space-y-3 mt-4">
                      <li className="text-base">
                        <strong className="text-brand-blue">Product:</strong>{" "}
                        What you're selling—features, benefits, and unique value
                        proposition
                      </li>
                      <li className="text-base">
                        <strong className="text-brand-blue">Price:</strong>{" "}
                        Pricing strategy that reflects value and market
                        positioning
                      </li>
                      <li className="text-base">
                        <strong className="text-brand-blue">Place:</strong>{" "}
                        Distribution channels and where customers can access
                        your product
                      </li>
                      <li className="text-base">
                        <strong className="text-brand-blue">Promotion:</strong>{" "}
                        How you communicate value and reach your target audience
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-border/50 shadow-soft hover:shadow-soft-lg transition-all bg-white">
                  <CardHeader>
                    <CardTitle className="text-brand-blue text-2xl">
                      Buyer Personas
                    </CardTitle>
                    <CardDescription className="text-base">
                      Understanding your ideal customer
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="prose prose-sm max-w-none">
                    <p className="text-foreground text-base leading-relaxed">
                      A buyer persona is a semi-fictional representation of your
                      ideal customer based on market research and real data.
                    </p>
                    <h4 className="text-foreground font-semibold mt-6 mb-3 text-lg">
                      Key Components:
                    </h4>
                    <ul className="text-foreground space-y-3">
                      <li className="text-base">
                        Demographics (age, location, income, education)
                      </li>
                      <li className="text-base">Goals and challenges</li>
                      <li className="text-base">
                        Buying behavior and decision-making process
                      </li>
                      <li className="text-base">
                        Preferred communication channels
                      </li>
                      <li className="text-base">Pain points and motivations</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-border/50 shadow-soft hover:shadow-soft-lg transition-all bg-white">
                  <CardHeader>
                    <CardTitle className="text-brand-blue text-2xl">
                      Marketing Funnels
                    </CardTitle>
                    <CardDescription className="text-base">
                      The customer journey from awareness to conversion
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="prose prose-sm max-w-none">
                    <p className="text-foreground text-base leading-relaxed">
                      The marketing funnel visualizes the customer journey and
                      helps you create targeted content for each stage.
                    </p>
                    <div className="space-y-4 mt-6">
                      <div className="p-5 bg-brand-blue/5 rounded-2xl border border-brand-blue/20 shadow-soft">
                        <h5 className="font-semibold text-brand-blue text-lg mb-1">
                          Awareness
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          Customer discovers your brand or product
                        </p>
                      </div>
                      <div className="p-5 bg-brand-blue/8 rounded-2xl border border-brand-blue/20 shadow-soft">
                        <h5 className="font-semibold text-brand-blue text-lg mb-1">
                          Interest
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          Customer shows interest and seeks more information
                        </p>
                      </div>
                      <div className="p-5 bg-brand-blue/10 rounded-2xl border border-brand-blue/20 shadow-soft">
                        <h5 className="font-semibold text-brand-blue text-lg mb-1">
                          Consideration
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          Customer evaluates your offering against alternatives
                        </p>
                      </div>
                      <div className="p-5 bg-brand-blue/15 rounded-2xl border border-brand-blue/20 shadow-soft">
                        <h5 className="font-semibold text-brand-blue text-lg mb-1">
                          Conversion
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          Customer makes a purchase decision
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Digital Channels */}
            <TabsContent value="channels" className="mt-0">
              <div className="mb-12">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent rounded-3xl transform rotate-1" />
                  <img
                    src="/assets/generated/digital-channels-overview.dim_600x300.png"
                    alt="Digital Channels"
                    className="rounded-3xl shadow-soft-xl w-full relative z-10"
                  />
                </div>
              </div>

              <div className="space-y-8">
                <Card className="border-border/50 shadow-soft hover:shadow-soft-lg transition-all bg-white">
                  <CardHeader>
                    <CardTitle className="text-brand-blue text-2xl">
                      Search Engine Optimization (SEO)
                    </CardTitle>
                    <CardDescription className="text-base">
                      Organic visibility and search rankings
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="prose prose-sm max-w-none">
                    <p className="text-foreground text-base leading-relaxed">
                      SEO is the practice of optimizing your website to rank
                      higher in search engine results pages (SERPs).
                    </p>
                    <h4 className="text-foreground font-semibold mt-6 mb-3 text-lg">
                      Key Areas:
                    </h4>
                    <ul className="text-foreground space-y-3">
                      <li className="text-base">
                        <strong className="text-brand-blue">
                          On-Page SEO:
                        </strong>{" "}
                        Content optimization, meta tags, headers, internal
                        linking
                      </li>
                      <li className="text-base">
                        <strong className="text-brand-blue">
                          Technical SEO:
                        </strong>{" "}
                        Site speed, mobile-friendliness, crawlability,
                        structured data
                      </li>
                      <li className="text-base">
                        <strong className="text-brand-blue">
                          Off-Page SEO:
                        </strong>{" "}
                        Backlinks, domain authority, social signals
                      </li>
                      <li className="text-base">
                        <strong className="text-brand-blue">Local SEO:</strong>{" "}
                        Google Business Profile, local citations, reviews
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-border/50 shadow-soft hover:shadow-soft-lg transition-all bg-white">
                  <CardHeader>
                    <CardTitle className="text-brand-blue text-2xl">
                      Paid Advertising
                    </CardTitle>
                    <CardDescription className="text-base">
                      PPC, display ads, and paid social
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="prose prose-sm max-w-none">
                    <p className="text-foreground text-base leading-relaxed">
                      Paid advertising allows you to reach targeted audiences
                      quickly and measure ROI precisely.
                    </p>
                    <h4 className="text-foreground font-semibold mt-6 mb-3 text-lg">
                      Popular Platforms:
                    </h4>
                    <ul className="text-foreground space-y-3">
                      <li className="text-base">
                        <strong className="text-brand-blue">Google Ads:</strong>{" "}
                        Search, display, shopping, and video campaigns
                      </li>
                      <li className="text-base">
                        <strong className="text-brand-blue">
                          Facebook/Instagram Ads:
                        </strong>{" "}
                        Highly targeted social media advertising
                      </li>
                      <li className="text-base">
                        <strong className="text-brand-blue">
                          LinkedIn Ads:
                        </strong>{" "}
                        B2B focused professional network advertising
                      </li>
                      <li className="text-base">
                        <strong className="text-brand-blue">TikTok Ads:</strong>{" "}
                        Short-form video advertising for younger demographics
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-border/50 shadow-soft hover:shadow-soft-lg transition-all bg-white">
                  <CardHeader>
                    <CardTitle className="text-brand-blue text-2xl">
                      Social Media Marketing
                    </CardTitle>
                    <CardDescription className="text-base">
                      Building communities and engagement
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="prose prose-sm max-w-none">
                    <p className="text-foreground text-base leading-relaxed">
                      Social media marketing involves creating and sharing
                      content to achieve marketing and branding goals.
                    </p>
                    <h4 className="text-foreground font-semibold mt-6 mb-3 text-lg">
                      Best Practices:
                    </h4>
                    <ul className="text-foreground space-y-3">
                      <li className="text-base">
                        Consistent posting schedule and brand voice
                      </li>
                      <li className="text-base">
                        Engaging with your audience through comments and
                        messages
                      </li>
                      <li className="text-base">
                        Using platform-specific features (Stories, Reels, Live)
                      </li>
                      <li className="text-base">
                        Analyzing metrics to optimize content strategy
                      </li>
                      <li className="text-base">
                        Building authentic relationships with followers
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-border/50 shadow-soft hover:shadow-soft-lg transition-all bg-white">
                  <CardHeader>
                    <CardTitle className="text-brand-blue text-2xl">
                      Email Marketing
                    </CardTitle>
                    <CardDescription className="text-base">
                      Direct communication with your audience
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="prose prose-sm max-w-none">
                    <p className="text-foreground text-base leading-relaxed">
                      Email marketing remains one of the highest ROI channels
                      for nurturing leads and retaining customers.
                    </p>
                    <h4 className="text-foreground font-semibold mt-6 mb-3 text-lg">
                      Campaign Types:
                    </h4>
                    <ul className="text-foreground space-y-3">
                      <li className="text-base">
                        <strong className="text-brand-blue">
                          Welcome Series:
                        </strong>{" "}
                        Onboard new subscribers
                      </li>
                      <li className="text-base">
                        <strong className="text-brand-blue">
                          Newsletters:
                        </strong>{" "}
                        Regular updates and valuable content
                      </li>
                      <li className="text-base">
                        <strong className="text-brand-blue">
                          Promotional:
                        </strong>{" "}
                        Sales, offers, and product launches
                      </li>
                      <li className="text-base">
                        <strong className="text-brand-blue">
                          Abandoned Cart:
                        </strong>{" "}
                        Recover lost sales
                      </li>
                      <li className="text-base">
                        <strong className="text-brand-blue">
                          Re-engagement:
                        </strong>{" "}
                        Win back inactive subscribers
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-border/50 shadow-soft hover:shadow-soft-lg transition-all bg-white">
                  <CardHeader>
                    <CardTitle className="text-brand-blue text-2xl">
                      Content Marketing
                    </CardTitle>
                    <CardDescription className="text-base">
                      Creating valuable content that attracts and retains
                      customers
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="prose prose-sm max-w-none">
                    <p className="text-foreground text-base leading-relaxed">
                      Content marketing focuses on creating and distributing
                      valuable, relevant content to attract a defined audience.
                    </p>
                    <h4 className="text-foreground font-semibold mt-6 mb-3 text-lg">
                      Content Formats:
                    </h4>
                    <ul className="text-foreground space-y-3">
                      <li className="text-base">Blog posts and articles</li>
                      <li className="text-base">Videos and webinars</li>
                      <li className="text-base">
                        Infographics and visual content
                      </li>
                      <li className="text-base">Podcasts and audio content</li>
                      <li className="text-base">E-books and whitepapers</li>
                      <li className="text-base">
                        Case studies and testimonials
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Tools Setup */}
            <TabsContent value="tools" className="mt-0">
              <div className="mb-12">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent rounded-3xl transform -rotate-1" />
                  <img
                    src="/assets/generated/tools-setup-illustration.dim_600x300.png"
                    alt="Tools Setup"
                    className="rounded-3xl shadow-soft-xl w-full relative z-10"
                  />
                </div>
              </div>

              <div className="space-y-8">
                <Card className="border-border/50 shadow-soft hover:shadow-soft-lg transition-all bg-white">
                  <CardHeader>
                    <CardTitle className="text-brand-blue text-2xl">
                      Analytics Platforms
                    </CardTitle>
                    <CardDescription className="text-base">
                      Measure, analyze, and optimize your marketing efforts
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="prose prose-sm max-w-none">
                    <h4 className="text-foreground font-semibold text-lg mb-3">
                      Google Analytics 4 Setup:
                    </h4>
                    <ol className="text-foreground space-y-3">
                      <li className="text-base">
                        Create a Google Analytics account
                      </li>
                      <li className="text-base">
                        Set up a property for your website
                      </li>
                      <li className="text-base">
                        Install the tracking code on your site
                      </li>
                      <li className="text-base">
                        Configure conversion events and goals
                      </li>
                      <li className="text-base">
                        Set up custom reports and dashboards
                      </li>
                    </ol>
                    <p className="text-foreground mt-6 text-base">
                      <strong className="text-brand-blue">
                        Key Metrics to Track:
                      </strong>{" "}
                      Sessions, users, bounce rate, conversion rate, average
                      session duration, traffic sources
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/50 shadow-soft hover:shadow-soft-lg transition-all bg-white">
                  <CardHeader>
                    <CardTitle className="text-brand-blue text-2xl">
                      Social Media Management Tools
                    </CardTitle>
                    <CardDescription className="text-base">
                      Schedule, publish, and analyze social content
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="prose prose-sm max-w-none">
                    <h4 className="text-foreground font-semibold text-lg mb-3">
                      Recommended Tools:
                    </h4>
                    <ul className="text-foreground space-y-4">
                      <li className="text-base">
                        <strong className="text-brand-blue">Buffer:</strong>{" "}
                        Simple scheduling and analytics for multiple platforms
                      </li>
                      <li className="text-base">
                        <strong className="text-brand-blue">Hootsuite:</strong>{" "}
                        Comprehensive social media management suite
                      </li>
                      <li className="text-base">
                        <strong className="text-brand-blue">Later:</strong>{" "}
                        Visual content planning, especially for Instagram
                      </li>
                      <li className="text-base">
                        <strong className="text-brand-blue">
                          Sprout Social:
                        </strong>{" "}
                        Advanced analytics and team collaboration
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-border/50 shadow-soft hover:shadow-soft-lg transition-all bg-white">
                  <CardHeader>
                    <CardTitle className="text-brand-blue text-2xl">
                      SEO Tools
                    </CardTitle>
                    <CardDescription className="text-base">
                      Research keywords, track rankings, and audit your site
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="prose prose-sm max-w-none">
                    <h4 className="text-foreground font-semibold text-lg mb-3">
                      Essential SEO Tools:
                    </h4>
                    <ul className="text-foreground space-y-4">
                      <li className="text-base">
                        <strong className="text-brand-blue">
                          Google Search Console:
                        </strong>{" "}
                        Monitor site performance in Google search (Free)
                      </li>
                      <li className="text-base">
                        <strong className="text-brand-blue">Ahrefs:</strong>{" "}
                        Comprehensive SEO toolkit for backlinks and keyword
                        research
                      </li>
                      <li className="text-base">
                        <strong className="text-brand-blue">SEMrush:</strong>{" "}
                        All-in-one marketing toolkit with SEO, PPC, and content
                        tools
                      </li>
                      <li className="text-base">
                        <strong className="text-brand-blue">Moz:</strong> SEO
                        software with keyword research and site audits
                      </li>
                      <li className="text-base">
                        <strong className="text-brand-blue">
                          Screaming Frog:
                        </strong>{" "}
                        Technical SEO site crawler
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Quick Wins */}
            <TabsContent value="quickwins" className="mt-0">
              <div className="space-y-8">
                <Card className="bg-gradient-to-br from-brand-blue/10 to-brand-blue/5 border-brand-blue/20 shadow-soft-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-brand-blue text-2xl">
                      <Zap className="h-6 w-6" />
                      Daily Quick Wins
                    </CardTitle>
                    <CardDescription className="text-base">
                      Small, actionable tasks you can complete today to improve
                      your marketing
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Consistency is key. Complete these daily tasks to build
                      momentum and see real results.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/50 shadow-soft hover:shadow-soft-lg transition-all bg-white">
                  <CardHeader>
                    <CardTitle className="text-brand-blue text-2xl">
                      Week 1: Foundation Tasks
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-5">
                      <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-1 shadow-soft">
                          <span className="text-sm font-semibold text-brand-blue">
                            1
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-brand-blue text-lg mb-1">
                            Audit Your Current Presence
                          </h4>
                          <p className="text-base text-muted-foreground leading-relaxed">
                            Review all your digital properties (website, social
                            profiles) and note areas for improvement
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-1 shadow-soft">
                          <span className="text-sm font-semibold text-brand-blue">
                            2
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-brand-blue text-lg mb-1">
                            Set Up Google Analytics
                          </h4>
                          <p className="text-base text-muted-foreground leading-relaxed">
                            Install tracking code and configure basic goals
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-1 shadow-soft">
                          <span className="text-sm font-semibold text-brand-blue">
                            3
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-brand-blue text-lg mb-1">
                            Create Your First Buyer Persona
                          </h4>
                          <p className="text-base text-muted-foreground leading-relaxed">
                            Document your ideal customer's demographics, goals,
                            and pain points
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-border/50 shadow-soft hover:shadow-soft-lg transition-all bg-white">
                  <CardHeader>
                    <CardTitle className="text-brand-blue text-2xl">
                      Week 2: Content & SEO
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-5">
                      <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-1 shadow-soft">
                          <span className="text-sm font-semibold text-brand-blue">
                            1
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-brand-blue text-lg mb-1">
                            Keyword Research
                          </h4>
                          <p className="text-base text-muted-foreground leading-relaxed">
                            Identify 10 relevant keywords for your business
                            using free tools
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-1 shadow-soft">
                          <span className="text-sm font-semibold text-brand-blue">
                            2
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-brand-blue text-lg mb-1">
                            Optimize One Page
                          </h4>
                          <p className="text-base text-muted-foreground leading-relaxed">
                            Update title tags, meta descriptions, and headers on
                            your homepage
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-1 shadow-soft">
                          <span className="text-sm font-semibold text-brand-blue">
                            3
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-brand-blue text-lg mb-1">
                            Write Your First Blog Post
                          </h4>
                          <p className="text-base text-muted-foreground leading-relaxed">
                            Create valuable content targeting one of your
                            researched keywords
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-border/50 shadow-soft hover:shadow-soft-lg transition-all bg-white">
                  <CardHeader>
                    <CardTitle className="text-brand-blue text-2xl">
                      Week 3: Social Media
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-5">
                      <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-1 shadow-soft">
                          <span className="text-sm font-semibold text-brand-blue">
                            1
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-brand-blue text-lg mb-1">
                            Optimize Social Profiles
                          </h4>
                          <p className="text-base text-muted-foreground leading-relaxed">
                            Update bios, profile images, and links across all
                            platforms
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-1 shadow-soft">
                          <span className="text-sm font-semibold text-brand-blue">
                            2
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-brand-blue text-lg mb-1">
                            Create a Content Calendar
                          </h4>
                          <p className="text-base text-muted-foreground leading-relaxed">
                            Plan 2 weeks of social media posts in advance
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-1 shadow-soft">
                          <span className="text-sm font-semibold text-brand-blue">
                            3
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-brand-blue text-lg mb-1">
                            Engage Daily
                          </h4>
                          <p className="text-base text-muted-foreground leading-relaxed">
                            Spend 15 minutes responding to comments and engaging
                            with your audience
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-border/50 shadow-soft hover:shadow-soft-lg transition-all bg-white">
                  <CardHeader>
                    <CardTitle className="text-brand-blue text-2xl">
                      Week 4: Analytics & Optimization
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-5">
                      <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-1 shadow-soft">
                          <span className="text-sm font-semibold text-brand-blue">
                            1
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-brand-blue text-lg mb-1">
                            Review Analytics
                          </h4>
                          <p className="text-base text-muted-foreground leading-relaxed">
                            Analyze your first month of data and identify trends
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-1 shadow-soft">
                          <span className="text-sm font-semibold text-brand-blue">
                            2
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-brand-blue text-lg mb-1">
                            A/B Test Something
                          </h4>
                          <p className="text-base text-muted-foreground leading-relaxed">
                            Test two versions of a headline, CTA, or social post
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-1 shadow-soft">
                          <span className="text-sm font-semibold text-brand-blue">
                            3
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-brand-blue text-lg mb-1">
                            Document Learnings
                          </h4>
                          <p className="text-base text-muted-foreground leading-relaxed">
                            Write down what worked, what didn't, and your plan
                            for next month
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
