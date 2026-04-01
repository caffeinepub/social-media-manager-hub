import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckSquare,
  ExternalLink,
  Globe,
  Image,
  Link,
  MousePointer,
  Search,
  Settings,
  TrendingUp,
  Users,
} from "lucide-react";

const modules = [
  { name: "CLICK", icon: <MousePointer className="h-4 w-4" /> },
  { name: "IMPRESSION", icon: <TrendingUp className="h-4 w-4" /> },
  { name: "CTR", icon: <TrendingUp className="h-4 w-4" /> },
  { name: "SEARCH ENGINE", icon: <Search className="h-4 w-4" /> },
  { name: "BROWSER", icon: <Globe className="h-4 w-4" /> },
  { name: "USER", icon: <Users className="h-4 w-4" /> },
  { name: "TRAFFIC", icon: <TrendingUp className="h-4 w-4" /> },
  { name: "KEYWORD", icon: <Search className="h-4 w-4" /> },
  { name: "UI/UX", icon: <Settings className="h-4 w-4" /> },
  { name: "SEARCH", icon: <Search className="h-4 w-4" /> },
  { name: "KEYWORD VOLUME", icon: <TrendingUp className="h-4 w-4" /> },
  { name: "CONTENT", icon: <CheckSquare className="h-4 w-4" /> },
  { name: "WEBPAGE", icon: <Globe className="h-4 w-4" /> },
  { name: "WEBSITE", icon: <Globe className="h-4 w-4" /> },
  { name: "SERP", icon: <Search className="h-4 w-4" /> },
];

const ctrData = [
  { website: "A", impression: 1000, click: 1500, ctr: "150%", quality: "high" },
  { website: "B", impression: 1000, click: 1000, ctr: "100%", quality: "high" },
  { website: "C", impression: 1000, click: 200, ctr: "20%", quality: "medium" },
  { website: "D", impression: 1000, click: 10, ctr: "1%", quality: "low" },
];

const rankingFactors = [
  {
    factor: "Profile",
    percent: 36,
    detail: "Proximity, Category, Keywords in Business title",
  },
  {
    factor: "Review",
    percent: 17,
    detail: "Review quality, velocity, diversity",
  },
  { factor: "On Page", percent: 16, detail: "NAP Presence, Website DA" },
  { factor: "Link Signals", percent: 13, detail: "Inbound link authority" },
  { factor: "Citations Signals", percent: 7, detail: "Citation volumes" },
  {
    factor: "Behavioral Signals",
    percent: 7,
    detail: "CTR, Call, Map click, Msg",
  },
  { factor: "Personalization", percent: 4, detail: "Area specific targeting" },
];

const gmbTools = [
  {
    name: "GeoImgr",
    url: "https://www.geoimgr.com/",
    desc: "Geo-tag your business images",
  },
  {
    name: "Localo",
    url: "https://app.localo.com/",
    desc: "GMB rank tracking & analysis",
  },
  {
    name: "BrightLocal",
    url: "https://www.brightlocal.com/",
    desc: "Business listing & citations",
  },
  {
    name: "LocalFalcon",
    url: "https://www.localfalcon.com",
    desc: "Google Maps rank tracker",
  },
  {
    name: "TechnicalSEO",
    url: "https://technicalseo.com",
    desc: "Technical SEO tools",
  },
  {
    name: "GridMyBusiness",
    url: "https://gridmybusiness.com/dashboard/analysis",
    desc: "GMB crush & analysis",
  },
];

const backlinksTypes = [
  "No Follow",
  "Do Follow",
  "Influencer",
  "EAT",
  "Link Juice",
  "Brand Mentions",
  "Citations",
  "Social Media",
  "Profile Creation",
  "Guest Posting",
  "Image Submission",
  "Video Submission",
  "Article Submission",
  "Q&A",
  "Webinar",
  "Document",
  "Gov Links",
  "PPT",
  "PDF",
  "Web 2.0",
  "Editorial",
  "Search Engine Sub",
  "Commenting",
  "Forum",
  "Infographic",
  "Business Listing",
  "Directory",
  "Ping",
  "Badge Backlink",
  "Classified",
  "Press Release",
  "UGC Link",
  "Testimonial",
  "Footer Link",
  "Bookmarking",
  "PBN Backlinks",
];

export default function SEONotesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <div className="max-w-3xl">
            <Badge className="bg-white/20 text-white border-0 mb-4">
              Complete Reference Guide
            </Badge>
            <h1 className="text-4xl font-bold mb-4">SEO Notes</h1>
            <p className="text-xl text-primary-foreground/80">
              Comprehensive digital marketing and SEO reference — from
              foundations to technical execution.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <Tabs defaultValue="overview" data-ocid="seo_notes.tab">
          <TabsList className="flex flex-wrap h-auto gap-1 mb-8 bg-secondary/50 p-1 rounded-xl">
            <TabsTrigger value="overview" className="text-xs sm:text-sm">
              Digital Marketing
            </TabsTrigger>
            <TabsTrigger value="concepts" className="text-xs sm:text-sm">
              Key Concepts
            </TabsTrigger>
            <TabsTrigger value="gmb" className="text-xs sm:text-sm">
              GMB & Local SEO
            </TabsTrigger>
            <TabsTrigger value="onpage" className="text-xs sm:text-sm">
              On-Page SEO
            </TabsTrigger>
            <TabsTrigger value="technical" className="text-xs sm:text-sm">
              Technical SEO
            </TabsTrigger>
            <TabsTrigger value="backlinks" className="text-xs sm:text-sm">
              Backlinks
            </TabsTrigger>
            <TabsTrigger value="tools" className="text-xs sm:text-sm">
              Tools
            </TabsTrigger>
          </TabsList>

          {/* ─── Section 1: Digital Marketing Overview ─── */}
          <TabsContent value="overview" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="brand-blue text-2xl">
                  What is Digital Marketing?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-foreground/80">
                  Digital marketing is the component of marketing that uses the{" "}
                  <strong>
                    Internet and online-based digital technologies
                  </strong>{" "}
                  such as desktop computers, mobile phones, and other digital
                  media and platforms to promote products and services.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="brand-blue">
                    Product / Service Checklist
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Audience",
                      "Location",
                      "Budget",
                      "Content",
                      "Platform",
                      "Strategy (Micro, Macro)",
                      "Competitor",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckSquare className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="brand-blue">Core Modules</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {modules.map((mod) => (
                      <div
                        key={mod.name}
                        className="flex items-center gap-2 bg-primary text-primary-foreground rounded-lg px-3 py-2 text-xs font-semibold"
                      >
                        {mod.icon}
                        <span className="leading-tight">{mod.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* ─── Section 2: Key Concepts ─── */}
          <TabsContent value="concepts" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="brand-blue text-2xl">
                  CTR Comparison Table
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-primary text-primary-foreground">
                        <th className="text-left p-3 rounded-tl-lg">Website</th>
                        <th className="text-right p-3">Impressions</th>
                        <th className="text-right p-3">Clicks</th>
                        <th className="text-right p-3 rounded-tr-lg">CTR</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ctrData.map((row, i) => (
                        <tr
                          key={row.website}
                          className={i % 2 === 0 ? "bg-secondary/30" : ""}
                        >
                          <td className="p-3 font-bold">{row.website}</td>
                          <td className="p-3 text-right">
                            {row.impression.toLocaleString()}
                          </td>
                          <td className="p-3 text-right">
                            {row.click.toLocaleString()}
                          </td>
                          <td className="p-3 text-right">
                            <Badge
                              className={
                                row.quality === "high"
                                  ? "bg-green-100 text-green-800 border-0"
                                  : row.quality === "medium"
                                    ? "bg-yellow-100 text-yellow-800 border-0"
                                    : "bg-red-100 text-red-800 border-0"
                              }
                            >
                              {row.ctr}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Formula:{" "}
                  <code className="bg-foreground/10 px-2 py-0.5 rounded font-mono">
                    CTR = Clicks ÷ Impressions × 100
                  </code>
                </p>
              </CardContent>
            </Card>

            <Accordion type="multiple" className="space-y-2">
              {[
                {
                  term: "CLICK",
                  def: "Select especially in a computer interface by pressing a button on a control device (such as a mouse).",
                },
                {
                  term: "IMPRESSION",
                  def: "Impressions are the total number of times your content is displayed, no matter if it was clicked or not.",
                },
                {
                  term: "CTR (Click Through Rate)",
                  def: "CTR is the number of clicks that your ad receives divided by the number of times your ad is shown: clicks ÷ impressions = CTR. Example: 5 clicks and 100 impressions = 5% CTR.",
                },
                {
                  term: "SEARCH ENGINE",
                  def: "A search engine is a software system that provides hyperlinks to web pages and other relevant information on the Web in response to a user's query.",
                },
                {
                  term: "BROWSER",
                  def: "A web browser is an application for accessing websites. When a user requests a web page from a particular website, the browser retrieves its files from a web server and then displays the page on the user's screen.",
                },
                {
                  term: "USER",
                  def: "A user is a person who utilizes a computer or network service.",
                },
              ].map((item) => (
                <AccordionItem
                  key={item.term}
                  value={item.term}
                  className="border border-border rounded-xl px-4"
                >
                  <AccordionTrigger className="font-semibold brand-blue text-left">
                    {item.term}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 pb-4">
                    {item.def}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>

          {/* ─── Section 3: GMB & Local SEO ─── */}
          <TabsContent value="gmb" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="brand-blue">
                    GMB Profile Checklist
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      "Business Title (Banned keywords avoided)",
                      "Business Description / Category",
                      "Business Images (Without Contact Detail)",
                      "Business Logo",
                      "Product",
                      "Category",
                      "Event Offer",
                      "Business Hours",
                      "Contact Number",
                      "Services",
                      "Location",
                      "Reviews",
                      "Post",
                      "Business Address",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckSquare className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="brand-blue">
                    Local Ranking Factors
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {rankingFactors.map((f) => (
                    <div key={f.factor}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-semibold">
                          {f.factor}
                        </span>
                        <Badge className="bg-primary text-primary-foreground border-0 text-xs">
                          {f.percent}%
                        </Badge>
                      </div>
                      <Progress value={f.percent} className="h-2 mb-1" />
                      <p className="text-xs text-muted-foreground">
                        {f.detail}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="brand-blue">GMB Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {gmbTools.map((tool) => (
                    <a
                      key={tool.name}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-4 border border-border rounded-xl hover:border-primary/50 hover:bg-secondary/30 transition-all group"
                    >
                      <ExternalLink className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                          {tool.name}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {tool.desc}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-200 bg-amber-50">
              <CardHeader>
                <CardTitle className="text-amber-800">
                  ⚠️ Why Contact Numbers May Not Show
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-900 text-sm space-y-2">
                <p>
                  If Google didn't get any number in database then Google
                  disapproves contact, and does not approve till the database is
                  updated.
                </p>
                <p>
                  <strong>Check presence:</strong> Search{" "}
                  <code className="bg-amber-100 px-1 rounded">
                    [9898989898]
                  </code>{" "}
                  on Google
                </p>
                <p>
                  Search your business on different devices and click suggested
                  link or request Google for suggestion.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ─── Section 4: On-Page SEO ─── */}
          <TabsContent value="onpage" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="brand-blue text-2xl">
                  On-Page SEO Checklist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "URL Structure & Hosting",
                    "Meta Title & Description",
                    "Image Optimization",
                    "Alt Text",
                    "Heading Tags (H1–H6)",
                    "Internal & External Linking",
                    "Site Speed",
                    "Responsiveness",
                    "Crawling",
                    "Keyword Research",
                    "Content (Image, Video, Text)",
                    "Broken Links Fix",
                    "Schema Markup",
                    "EAT (Expertise, Authority, Trust)",
                    "Content Length",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 p-3 bg-secondary/30 rounded-lg"
                    >
                      <CheckSquare className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Accordion type="multiple" className="space-y-2">
              <AccordionItem
                value="url"
                className="border border-border rounded-xl px-4"
              >
                <AccordionTrigger className="font-semibold brand-blue">
                  URL Structure
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pb-4">
                  <p className="text-sm text-muted-foreground">
                    Example:{" "}
                    <code className="bg-foreground/10 px-2 py-0.5 rounded font-mono">
                      https://www.facebook.com/friends
                    </code>
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-primary text-primary-foreground">
                          <th className="text-left p-3">Part</th>
                          <th className="text-left p-3">Example</th>
                          <th className="text-left p-3">Weight</th>
                          <th className="text-left p-3">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            part: "SSL",
                            ex: "https://",
                            weight: "30%",
                            desc: "Secure Sockets Layer — encrypted connection",
                          },
                          {
                            part: "Global (WWW)",
                            ex: "www.",
                            weight: "AUTO",
                            desc: "World Wide Web prefix",
                          },
                          {
                            part: "Domain",
                            ex: "facebook.com",
                            weight: "40%",
                            desc: "Your brand/domain name",
                          },
                          {
                            part: "TLD",
                            ex: ".com",
                            weight: "20%",
                            desc: "Top-level domain extension",
                          },
                          {
                            part: "Slug",
                            ex: "/friends",
                            weight: "10%",
                            desc: "Page path / URL slug",
                          },
                        ].map((row, i) => (
                          <tr
                            key={row.part}
                            className={i % 2 === 0 ? "bg-secondary/30" : ""}
                          >
                            <td className="p-3 font-semibold">{row.part}</td>
                            <td className="p-3 font-mono text-primary">
                              {row.ex}
                            </td>
                            <td className="p-3">
                              <Badge className="bg-primary/10 text-primary border-0">
                                {row.weight}
                              </Badge>
                            </td>
                            <td className="p-3 text-muted-foreground">
                              {row.desc}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4 mt-4">
                    {[
                      {
                        term: "SSL",
                        def: "SSL stands for Secure Sockets Layer, a security protocol that creates an encrypted link between a web server and a web browser. Needed to secure online transactions.",
                      },
                      {
                        term: "WWW",
                        def: "The World Wide Web (W3) refers to all the public websites that users can access on their devices through the internet, interconnected by hyperlinks.",
                      },
                      {
                        term: "TLD",
                        def: "A top-level domain is one of the domains at the highest level in the hierarchical Domain Name System of the Internet after the root domain (e.g., .com, .org, .net).",
                      },
                    ].map((item) => (
                      <div
                        key={item.term}
                        className="p-4 bg-secondary/30 rounded-xl border border-border"
                      >
                        <p className="font-bold brand-blue text-lg mb-2">
                          {item.term}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {item.def}
                        </p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="images"
                className="border border-border rounded-xl px-4"
              >
                <AccordionTrigger className="font-semibold brand-blue">
                  Image Optimization
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pb-4">
                  <p className="text-sm text-foreground/80">
                    Image optimization refers to the process of modifying and
                    delivering high-quality images in the optimal format,
                    dimension, and resolution for the device accessing them,
                    while keeping the smallest possible file size.
                  </p>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <Image className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium text-blue-900">
                        Compression Tool
                      </p>
                      <a
                        href="https://tinypng.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                      >
                        tinypng.com — Use WebP format for best results{" "}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold mb-2">
                      Alt Text HTML Example:
                    </p>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-xl text-sm font-mono overflow-x-auto">{`<img src="img_girl.jpg" alt="Girl in a jacket">`}</pre>
                  </div>

                  <div className="overflow-x-auto">
                    <p className="text-sm font-semibold mb-2">
                      File Size Reference:
                    </p>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-primary text-primary-foreground">
                          <th className="text-left p-2">Unit</th>
                          <th className="text-left p-2">Abbrev.</th>
                          <th className="text-left p-2">Equivalent</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { unit: "Bit", abbrev: "b", eq: "1" },
                          { unit: "Nibble", abbrev: "—", eq: "4 bits" },
                          { unit: "Byte", abbrev: "B", eq: "8 bits" },
                          { unit: "Kilobyte", abbrev: "KB", eq: "1,024 Bytes" },
                          {
                            unit: "Megabyte",
                            abbrev: "MB",
                            eq: "1,024 Kilobytes",
                          },
                          {
                            unit: "Gigabyte",
                            abbrev: "GB",
                            eq: "1,024 Megabytes",
                          },
                          {
                            unit: "Terabyte",
                            abbrev: "TB",
                            eq: "1,024 Gigabytes",
                          },
                        ].map((row, i) => (
                          <tr
                            key={row.unit}
                            className={i % 2 === 0 ? "bg-secondary/30" : ""}
                          >
                            <td className="p-2 font-medium">{row.unit}</td>
                            <td className="p-2 font-mono text-primary">
                              {row.abbrev}
                            </td>
                            <td className="p-2 text-muted-foreground">
                              {row.eq}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="headings"
                className="border border-border rounded-xl px-4"
              >
                <AccordionTrigger className="font-semibold brand-blue">
                  Heading Tags H1–H6
                </AccordionTrigger>
                <AccordionContent className="space-y-2 pb-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    Use one H1 per page. Structure content hierarchically with
                    H2–H6.
                  </p>
                  {[1, 2, 3, 4, 5, 6].map((level) => {
                    const sizes = [
                      "text-3xl",
                      "text-2xl",
                      "text-xl",
                      "text-lg",
                      "text-base",
                      "text-sm",
                    ];
                    const weights = [
                      "font-bold",
                      "font-bold",
                      "font-semibold",
                      "font-semibold",
                      "font-medium",
                      "font-medium",
                    ];
                    return (
                      <div
                        key={level}
                        className="flex items-center gap-4 p-3 bg-secondary/30 rounded-lg"
                      >
                        <Badge className="bg-primary text-primary-foreground border-0 font-mono min-w-[2.5rem] text-center">
                          H{level}
                        </Badge>
                        <span
                          className={`${sizes[level - 1]} ${weights[level - 1]} brand-blue`}
                        >
                          Heading {level} Example
                        </span>
                      </div>
                    );
                  })}
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-xl text-xs font-mono overflow-x-auto mt-4">{`<h1>Main Page Title</h1>
<h2>Section Heading</h2>
<h3>Sub-section</h3>
<h4>Sub-sub-section</h4>
<h5>Minor heading</h5>
<h6>Smallest heading</h6>`}</pre>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          {/* ─── Section 5: Technical SEO ─── */}
          <TabsContent value="technical" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="brand-blue text-2xl">
                  Technical SEO Checklist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "Sitemap",
                    "Robots.txt",
                    "Google Search Console",
                    "Google Analytics",
                    "Canonical Tags",
                    "Broken Links Fix",
                    "Page Redirection",
                    "HTTP Errors",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 p-3 bg-secondary/30 rounded-lg"
                    >
                      <Settings className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Accordion type="multiple" className="space-y-2">
              <AccordionItem
                value="robots"
                className="border border-border rounded-xl px-4"
              >
                <AccordionTrigger className="font-semibold brand-blue">
                  Robots.txt
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pb-4">
                  <p className="text-sm text-foreground/80">
                    A robots.txt file tells search engine crawlers which pages
                    or files the crawler can or can't request from your site.
                  </p>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-sm">
                    <p className="font-semibold text-blue-900 mb-2">
                      Upload via cPanel:
                    </p>
                    <p className="text-blue-800 font-mono text-xs">
                      cPanel → File Manager → public_html → Website folder →
                      Upload file
                    </p>
                  </div>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-xl text-sm font-mono overflow-x-auto">{`User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/

Sitemap: https://yoursite.com/sitemap.xml`}</pre>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="sitemap"
                className="border border-border rounded-xl px-4"
              >
                <AccordionTrigger className="font-semibold brand-blue">
                  Sitemap.xml
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pb-4">
                  <p className="text-sm text-foreground/80">
                    Search engines like Google read this file to crawl your site
                    more efficiently. A sitemap tells search engines which pages
                    and files are important, and provides information such as
                    when the page was last updated.
                  </p>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-xl text-xs font-mono overflow-x-auto">{`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yoursite.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>`}</pre>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="canonical"
                className="border border-border rounded-xl px-4"
              >
                <AccordionTrigger className="font-semibold brand-blue">
                  Canonical Tag
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pb-4">
                  <p className="text-sm text-foreground/80">
                    A canonical tag (rel canonical) is a tag in the source code
                    of a page that indicates to search engines that a master
                    copy of the page exists. Used to avoid duplicate content
                    issues.
                  </p>
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                    <p className="text-sm font-semibold text-yellow-900 mb-2">
                      Duplicate URL Problem:
                    </p>
                    <ul className="text-xs font-mono space-y-1 text-yellow-800">
                      <li>https://www.astroupdate.com</li>
                      <li>https://astroupdate.com</li>
                      <li>www.astroupdate.com</li>
                      <li>astroupdate.com</li>
                    </ul>
                    <p className="text-xs text-yellow-700 mt-2">
                      All 4 URLs point to the same content — Google needs a
                      canonical to know the "true" URL.
                    </p>
                  </div>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-xl text-sm font-mono overflow-x-auto">{`<link rel="canonical" href="https://www.yoursite.com/page/" />`}</pre>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="redirect"
                className="border border-border rounded-xl px-4"
              >
                <AccordionTrigger className="font-semibold brand-blue">
                  URL Redirection
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pb-4">
                  <p className="text-sm text-foreground/80">
                    Use 301 redirects to permanently forward old URLs to new
                    ones, preserving SEO value.
                  </p>
                  <div className="space-y-2">
                    {[
                      "Download and install the plugin",
                      'Go to the "Redirects" section',
                      "Add the old URL and the new, target URL",
                      "Test the redirect",
                    ].map((step, stepIdx) => (
                      <div
                        key={step}
                        className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg"
                      >
                        <span className="bg-primary text-primary-foreground rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                          {stepIdx + 1}
                        </span>
                        <span className="text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Plugins: <strong>YoastSEO</strong>,{" "}
                    <strong>Redirection</strong>,{" "}
                    <strong>301 Redirects – Easy Redirect Manager</strong>
                  </p>
                  <a
                    href="https://www.semrush.com/blog/wordpress-redirects/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    SEMrush WordPress Redirects Guide{" "}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          {/* ─── Section 6: Backlinks ─── */}
          <TabsContent value="backlinks" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="brand-blue text-2xl">
                  What Are Backlinks?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-foreground/80">
                  Backlinks are links on websites other than your own that go
                  back to a page on your website. Also called{" "}
                  <strong>inbound links</strong> because they represent another
                  website's traffic coming to your own site. The quality and
                  quantity of your backlinks can help you rank higher in search
                  engines such as Google and Bing.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="brand-blue">
                    Do Follow vs No Follow
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                    <p className="font-bold text-green-800 mb-1">
                      ✅ Do Follow
                    </p>
                    <p className="text-sm text-green-700">
                      Passes link juice / SEO authority to the linked page.
                      Default link type. Boosts rankings.
                    </p>
                    <code className="text-xs bg-green-100 px-2 py-1 rounded block mt-2 font-mono">{`<a href="url">Link</a>`}</code>
                  </div>
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="font-bold text-red-800 mb-1">🚫 No Follow</p>
                    <p className="text-sm text-red-700">
                      Does not pass link juice. Tells search engines to ignore
                      the link for ranking purposes.
                    </p>
                    <code className="text-xs bg-red-100 px-2 py-1 rounded block mt-2 font-mono">{`<a href="url" rel="nofollow">Link</a>`}</code>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="brand-blue">
                    Types of Backlinks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {backlinksTypes.map((type) => (
                      <Badge
                        key={type}
                        variant="outline"
                        className="text-xs border-primary/30 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {type}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="brand-blue">
                  Ways to Create Backlinks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "Profile Creation",
                    "Article Submission",
                    "Blog Submission",
                    "Classified Submission",
                    "WEB 2.0",
                    "Infographic Submission",
                    "Ping Submission",
                    "Search Engine Submission",
                    "Image Submission",
                    "Video Submission",
                    "Document Submission",
                    "PPT Submission",
                    "Guest Posting Submission",
                    "Bookmarking Submission",
                    "Q&A (Question & Answer)",
                    "Commenting",
                    "Business Listing",
                    "Forum Posting",
                  ].map((way) => (
                    <div
                      key={way}
                      className="flex items-center gap-2 p-3 bg-secondary/30 rounded-lg"
                    >
                      <Link className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{way}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ─── Section 7: Tools & Resources ─── */}
          <TabsContent value="tools" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="brand-blue">
                    Free Image Sources
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    {
                      name: "Unsplash",
                      url: "https://unsplash.com/",
                      desc: "High quality free photos",
                    },
                    {
                      name: "Freepik",
                      url: "https://www.freepik.com/",
                      desc: "Free vectors, photos, PSD files",
                    },
                  ].map((site) => (
                    <a
                      key={site.name}
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 border border-border rounded-xl hover:border-primary/50 hover:bg-secondary/30 transition-all group"
                    >
                      <Image className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                          {site.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {site.desc}
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto" />
                    </a>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="brand-blue">
                    Graphic Design — Canva
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-foreground/80">
                    Canva is an online graphic design app for creating social
                    media graphics and presentations. Founded in Perth by
                    Melanie Perkins, Cliff Obrecht, and Cameron Adams on January
                    1, 2013.
                  </p>
                  <div className="space-y-2">
                    {[
                      "750,000+ users in first year",
                      "60,000+ free templates available",
                      "75M premium files for Pro subscribers",
                      "Video editing tool launched 2021",
                      "$200M raised in September 2021",
                      "Canva for Education — free for schools",
                      "Partnership with FedEx Office (2020)",
                      "#1 Best Place to Work in Australia (2018)",
                    ].map((fact) => (
                      <div key={fact} className="flex items-start gap-2">
                        <span className="text-primary font-bold text-sm mt-0.5">
                          →
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {fact}
                        </span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="https://www.canva.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline font-medium"
                  >
                    Visit Canva <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="brand-blue">
                  QR Code & Content Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary/30 rounded-xl">
                    <p className="font-semibold mb-1">Generate QR Codes</p>
                    <p className="text-sm text-muted-foreground">
                      Use Canva's built-in QR code generator for free. Perfect
                      for linking to your website, landing pages, or contact
                      info.
                    </p>
                  </div>
                  <div className="p-4 bg-secondary/30 rounded-xl">
                    <p className="font-semibold mb-1">
                      Content Writing Reference
                    </p>
                    <a
                      href="https://docs.google.com/document/d/1Q12Q5e104vk0BO_q0_HYvjwALKiBL1LHeysXyq8vJiU/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline flex items-center gap-1"
                    >
                      Google Docs Content Writing Guide{" "}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
