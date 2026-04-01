import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart2,
  Database,
  ExternalLink,
  FileText,
  Link,
  Settings,
  Zap,
} from "lucide-react";

const ga4vsUA = [
  {
    feature: "Data Model",
    ga4: "Event-based (each interaction is an event)",
    ua: "Session-based (interactions grouped by session)",
  },
  {
    feature: "Measurement",
    ga4: "Cross-device & cross-platform",
    ua: "Different devices/platforms measured separately",
  },
  {
    feature: "Machine Learning",
    ga4: "AI fills in gaps in event data",
    ua: "Limited ML capabilities",
  },
  {
    feature: "Data Privacy",
    ga4: "Data deletion, consent mode, enhanced retention",
    ua: "Basic privacy controls",
  },
  {
    feature: "Reports",
    ga4: "Engagement + monetization; split acquisition reports",
    ua: "Standard reports, combined acquisition",
  },
  {
    feature: "Customization",
    ga4: "Rearrange data cards freely",
    ua: "Limited customization",
  },
  {
    feature: "Bounce Rate",
    ga4: "Session 10+ sec = Engaged Session (no interaction needed)",
    ua: "Single-page session with no interaction = bounce",
  },
];

const stats = [
  { value: "83.5%", label: "of all websites use GA or similar tools" },
  { value: "43.35%", label: "of top 10,000 highest-ranking websites use GA" },
  { value: "42.23%", label: "of top 100,000 most-visited websites use GA" },
  { value: "33.65%", label: "of top million websites by traffic use GA4" },
];

const adminSettings = [
  {
    title: "Account Access Management",
    desc: "Add user access and manage permissions across your account.",
  },
  {
    title: "Data Collection",
    desc: "Set Data Retention \u2014 choose how many days you want to save your data.",
  },
  {
    title: "Data Stream",
    desc: "Used to get the Measurement ID for future configurations.",
  },
  {
    title: "Data Display",
    desc: "Set up custom Events Dashboard. Use lowercase + underscore in event names.",
  },
];

const bigquerySteps = [
  { num: 1, text: "In your GA4 property, click Admin, then BigQuery Linking." },
  { num: 2, text: "Click Link to create a new connection." },
  { num: 3, text: "Select a BigQuery project from the list." },
  { num: 4, text: "Choose a data location." },
  { num: 5, text: "Select the frequency of the data export." },
  { num: 6, text: "Review the settings and click Submit." },
];

const gtmSteps = [
  {
    num: 1,
    text: "Go to tagmanager.google.com and sign in to your Google Account.",
  },
  { num: 2, text: "Select the Accounts tab, then choose your container." },
  { num: 3, text: "In the Workspaces tab, select Tags, then click New." },
  { num: 4, text: "Name your tag and select Google Tag as the tag type." },
  { num: 5, text: "Enter your Tag ID (Measurement ID from GA4)." },
  {
    num: 6,
    text: "Go to analytics.google.com and select the account you want to track.",
  },
  { num: 7, text: "Click Admin, then Tracking Info, then Tracking Code." },
  {
    num: 8,
    text: "Copy the UA-XXXXXX-XX code and paste it into the Tag Manager Tracking ID field.",
  },
  { num: 9, text: "Select All Pages trigger and click Create tag." },
  { num: 10, text: "Click Publish in the top right side." },
];

const ga4SetupSteps = [
  { num: 1, text: "Login into Google Analytics (analytics.google.com)." },
  { num: 2, text: "Go to Admin >> Create New Account." },
  { num: 3, text: "Fill in account, property, and data stream details." },
  { num: 4, text: "Copy the Measurement ID (G-XXXXXXXXXX)." },
  {
    num: 5,
    text: "Open GTM and go to Tags, Select Analytics, paste the Measurement ID with trigger (All Pages).",
  },
  { num: 6, text: "Test through GTM Preview mode and submit the code." },
  {
    num: 7,
    text: "Install Google Tag Assistant Companion extension in Chrome for verification.",
  },
];

const wpSteps = [
  { num: 1, text: "Go to WordPress Dashboard \u2192 Plugins \u2192 Add New." },
  { num: 2, text: 'Search for "GTM4WP" and install/activate it.' },
  {
    num: 3,
    text: "Go to Settings \u2192 Google Tag Manager and enter your GTM Container ID.",
  },
  {
    num: 4,
    text: "Save settings \u2014 GTM snippet is now injected on all pages.",
  },
  { num: 5, text: "Go back to GTM and publish your GA4 tag." },
];

const conversionSteps = [
  { num: 1, text: "Go to Property \u2192 Data Display \u2192 Conversions." },
  { num: 2, text: "Click New Conversion Event." },
  {
    num: 3,
    text: "Type the exact event name (same as the event you created).",
  },
  { num: 4, text: "Click Save." },
  { num: 5, text: "The event will now appear as a conversion in reports." },
];

const collectionSteps = [
  { num: 1, text: "In GA4, go to Reports \u2192 Library." },
  { num: 2, text: "Click on Collection you want to customize." },
  { num: 3, text: "Arrange or add existing reports to the collection." },
  {
    num: 4,
    text: "Click Publish to make the collection visible in the left nav.",
  },
  { num: 5, text: "Use Add Report to include custom or pre-built reports." },
];

const whyUseGA = [
  "Understand the complete customer journey from first visit to conversion.",
  "Improve search engine optimization (SEO) results with data-backed decisions.",
  "Track KPIs that align with your business objectives \u2014 not vanity metrics.",
  "Use behavioral data to optimize website performance and UX.",
  "Connect with Google Ads, BigQuery, DV360, and other Google platforms.",
];

const eventExamples = [
  "Clicking buttons",
  "Playing videos",
  "Downloading files",
  "Submitting forms",
  "Scrolling to a certain point on a page",
];

const adsenseItems = [
  "Google AdSense \u2014 to track ad revenue on your site.",
  "Google Ads \u2014 to connect campaign data with on-site behavior.",
  "Google Ad Manager \u2014 for advanced publisher ad inventory tracking.",
];

const bigqueryPoints = [
  "BigQuery is Google Cloud\u2019s fully managed, serverless enterprise data warehouse.",
  "It can query data stored outside BigQuery \u2014 in Cloud Storage, Spanner, AWS, or Azure.",
  "Fully managed, AI-ready platform with ML, search, geospatial analysis, and BI built in.",
  "BigQuery is a cloud platform capable of storing and querying trillions of rows of data.",
];

const reportTypes = [
  {
    name: "Realtime Report",
    desc: "Monitor active users and events happening right now.",
  },
  {
    name: "User Acquisition",
    desc: "How new users find your site for the first time.",
  },
  {
    name: "Traffic Acquisition",
    desc: "How all sessions (new + returning) reach your site.",
  },
  {
    name: "Engagement Report",
    desc: "Events, engaged sessions, engagement rate, and time on site.",
  },
  {
    name: "Monetization Report",
    desc: "Revenue, purchases, and in-app purchases.",
  },
  { name: "Retention Report", desc: "How well you retain users over time." },
];

const gaResources = [
  {
    label: "GA4 Demo Account",
    href: "https://analytics.google.com/analytics/web/?utm_source=demoaccount&utm_medium=demoaccount&utm_campaign=demoaccount#/p213025502/reports/intelligenthome",
    ocid: "ga-demo-footer-link",
  },
  {
    label: "Campaign URL Builder",
    href: "https://ga-dev-tools.google/campaign-url-builder/",
    ocid: "url-builder-footer-link",
  },
  {
    label: "Google Marketing Platform",
    href: "https://marketingplatform.google.com/about/",
    ocid: "gmp-footer-link",
  },
];

export default function GoogleAnalyticsNotesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge
              variant="secondary"
              className="bg-white/20 text-white border-none"
            >
              GA4
            </Badge>
            <Badge
              variant="secondary"
              className="bg-white/20 text-white border-none"
            >
              Analytics
            </Badge>
            <a
              href="https://analytics.google.com/analytics/web/?utm_source=demoaccount&utm_medium=demoaccount&utm_campaign=demoaccount#/p213025502/reports/intelligenthome"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="ga-demo-link"
            >
              <Badge
                variant="secondary"
                className="bg-yellow-400 text-yellow-900 border-none cursor-pointer hover:bg-yellow-300 flex items-center gap-1"
              >
                <ExternalLink className="h-3 w-3" /> GA4 Demo Account
              </Badge>
            </a>
          </div>
          <h1 className="text-4xl font-bold mb-3">Google Analytics Notes</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Comprehensive GA4 guide covering setup, event tracking, admin
            settings, BigQuery integration, and reporting \u2014 built for
            real-world digital marketers.
          </p>
        </div>
      </div>

      <div className="container py-12">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="flex flex-wrap h-auto gap-1 mb-8 bg-muted p-1 rounded-xl">
            <TabsTrigger value="overview" className="flex items-center gap-1.5">
              <BarChart2 className="h-4 w-4" /> Overview
            </TabsTrigger>
            <TabsTrigger value="setup" className="flex items-center gap-1.5">
              <Settings className="h-4 w-4" /> GA4 Setup
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-1.5">
              <Zap className="h-4 w-4" /> Event Tracking
            </TabsTrigger>
            <TabsTrigger value="admin" className="flex items-center gap-1.5">
              <Settings className="h-4 w-4" /> Admin Settings
            </TabsTrigger>
            <TabsTrigger value="bigquery" className="flex items-center gap-1.5">
              <Database className="h-4 w-4" /> BigQuery & Integrations
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex items-center gap-1.5">
              <FileText className="h-4 w-4" /> Reports
            </TabsTrigger>
          </TabsList>

          {/* Tab 1: Overview */}
          <TabsContent value="overview" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="brand-blue">
                  What is Google Analytics?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-foreground/80 leading-relaxed">
                <p>
                  Google Analytics is a platform that collects data from your
                  websites and apps to create reports that provide insights into
                  your business. It gives you free tools to understand the
                  customer journey and improve marketing ROI.
                </p>
                <p>
                  GA4 KPIs are crucial insights into your website\u2019s
                  performance \u2014 they function as a compass for your digital
                  marketing strategy. Behavioral data lets you understand how
                  users, visitors, and customers interact with your site, making
                  optimization possible.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-center"
                    >
                      <div className="text-2xl font-bold brand-blue">
                        {s.value}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="brand-blue">
                  GA4 vs Universal Analytics (UA)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold brand-blue">
                        Feature
                      </TableHead>
                      <TableHead className="font-semibold text-green-700">
                        GA4
                      </TableHead>
                      <TableHead className="font-semibold text-muted-foreground">
                        Universal Analytics
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {ga4vsUA.map((row) => (
                      <TableRow key={row.feature}>
                        <TableCell className="font-medium">
                          {row.feature}
                        </TableCell>
                        <TableCell className="text-green-700 text-sm">
                          {row.ga4}
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          {row.ua}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="brand-blue">
                  Why Use Google Analytics?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {whyUseGA.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">\u2713</span>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 2: GA4 Setup */}
          <TabsContent value="setup" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="brand-blue">GA4 Account Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {ga4SetupSteps.map((step) => (
                    <li
                      key={step.num}
                      className="flex items-start gap-3 text-sm"
                    >
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                        {step.num}
                      </span>
                      <span className="text-foreground/80 leading-relaxed">
                        {step.text}
                      </span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="brand-blue">
                  How to Connect GA to Google Tag Manager
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {gtmSteps.map((step) => (
                    <li
                      key={step.num}
                      className="flex items-start gap-3 text-sm"
                    >
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                        {step.num}
                      </span>
                      <span className="text-foreground/80 leading-relaxed">
                        {step.text}
                      </span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="brand-blue">
                  GTM4WP Plugin for WordPress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-foreground/80">
                <p>
                  Install Google Tag Manager on WordPress using the{" "}
                  <strong>GTM4WP Plugin</strong>:
                </p>
                <ol className="space-y-2">
                  {wpSteps.map((step) => (
                    <li key={step.num} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-secondary text-primary rounded-full flex items-center justify-center text-xs font-bold">
                        {step.num}
                      </span>
                      <span>{step.text}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-yellow-800 text-xs font-medium">
                    \ud83d\udca1 Tip: Install the{" "}
                    <strong>Google Tag Assistant Companion</strong> Chrome
                    extension to verify GTM tags are firing correctly on your
                    site.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 3: Event Tracking */}
          <TabsContent value="events" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="brand-blue">
                  What is Event Count?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p className="text-foreground/80 leading-relaxed">
                  Event count is a metric in Google Analytics that tracks the
                  number of times users interact with a website or app during a
                  specific time period.
                </p>
                <div>
                  <p className="font-semibold mb-2">
                    Examples of tracked interactions:
                  </p>
                  <ul className="space-y-1.5">
                    {eventExamples.map((ex) => (
                      <li key={ex} className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-foreground/80">{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="brand-blue">
                  Social Media Traffic Tracking
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p className="text-foreground/80">
                  Track traffic from a specific social platform (e.g.,
                  Instagram) to a product category page:
                </p>
                <div className="bg-muted rounded-lg p-4 font-mono text-xs space-y-2">
                  <div className="text-primary font-bold">
                    CREATE EVENT &gt;&gt; CREATE
                  </div>
                  <div className="space-y-1 pl-4 text-foreground/80">
                    <div>
                      Parameter:{" "}
                      <span className="text-green-700">event_name</span> |
                      Operator: <span className="text-blue-600">Equals</span> |
                      Value: <span className="text-orange-600">page_view</span>
                    </div>
                    <div>
                      Parameter:{" "}
                      <span className="text-green-700">page_location</span> |
                      Operator: <span className="text-blue-600">Contains</span>{" "}
                      | Value:{" "}
                      <span className="text-orange-600">/product/</span>{" "}
                      (Category Slug)
                    </div>
                    <div>
                      Parameter:{" "}
                      <span className="text-green-700">page_referrer</span> |
                      Operator: <span className="text-blue-600">Equals</span> |
                      Value: <span className="text-orange-600">Instagram</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="font-semibold mb-2">Thank You Page Event:</p>
                  <div className="bg-muted rounded-lg p-4 font-mono text-xs text-foreground/80">
                    CREATE EVENT &gt;&gt; CREATE &gt;&gt; thank_you_page
                    <br />
                    Parameter: page_location | Contains | /thank-you/
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="brand-blue">Conversion Setup</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p className="text-foreground/80">
                  Mark events as conversions to track key business actions:
                </p>
                <ol className="space-y-2">
                  {conversionSteps.map((step) => (
                    <li key={step.num} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                        {step.num}
                      </span>
                      <span className="text-foreground/80 leading-relaxed">
                        {step.text}
                      </span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 4: Admin Settings */}
          <TabsContent value="admin" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {adminSettings.map((setting) => (
                <Card key={setting.title}>
                  <CardHeader>
                    <CardTitle className="brand-blue text-base">
                      {setting.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-foreground/80">
                    {setting.desc}
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="brand-blue">
                  Custom Event Naming Convention
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge className="bg-green-100 text-green-800 border-green-300">
                    \u2713 thank_you_page
                  </Badge>
                  <Badge className="bg-green-100 text-green-800 border-green-300">
                    \u2713 instagram_click
                  </Badge>
                  <Badge className="bg-green-100 text-green-800 border-green-300">
                    \u2713 form_submit
                  </Badge>
                  <Badge className="bg-red-100 text-red-800 border-red-300">
                    \u2717 ThankYouPage
                  </Badge>
                  <Badge className="bg-red-100 text-red-800 border-red-300">
                    \u2717 Instagram Click
                  </Badge>
                </div>
                <p className="text-foreground/80">
                  Always use <strong>lowercase letters</strong> and{" "}
                  <strong>underscores</strong> in event names. Avoid spaces,
                  capital letters, or special characters.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="brand-blue">
                  Adsense + Google Ads + Ad Manager
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-foreground/80 space-y-2">
                <p>
                  You can link the following Google products directly within GA4
                  Admin:
                </p>
                <ul className="space-y-1.5">
                  {adsenseItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Link className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 5: BigQuery & Integrations */}
          <TabsContent value="bigquery" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="brand-blue">What is BigQuery?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <ul className="space-y-2">
                  {bigqueryPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <Database className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="brand-blue">
                  How to Link GA4 to BigQuery
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {bigquerySteps.map((step) => (
                    <li
                      key={step.num}
                      className="flex items-start gap-3 text-sm"
                    >
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                        {step.num}
                      </span>
                      <span className="text-foreground/80 leading-relaxed">
                        {step.text}
                      </span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="brand-blue">
                  Display & Video 360 (DV360)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p className="text-foreground/80 leading-relaxed">
                  Google Display &amp; Video 360 enables marketers to manage
                  reservation, programmatic, and programmatic guaranteed
                  campaigns across display, video, TV, audio, and other channels
                  \u2014 all in one place.
                </p>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <p className="font-semibold text-orange-800 mb-1">
                    Minimum Budget
                  </p>
                  <p className="text-orange-700">
                    $50,000 per month minimum spend.
                  </p>
                  <p className="text-orange-600 text-xs mt-1">
                    Google does not publicly disclose specific DV360 pricing.
                    Costs vary based on campaign reach, targeting, and media
                    type.
                  </p>
                </div>
                <a
                  href="https://marketingplatform.google.com/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary hover:underline font-medium"
                  data-ocid="dv360-link"
                >
                  <ExternalLink className="h-4 w-4" />
                  Google Marketing Platform
                </a>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 6: Reports */}
          <TabsContent value="reports" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="brand-blue">
                  Campaign URL Builder
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p className="text-foreground/80 leading-relaxed">
                  The Google URL Builder is a tool that helps you track and
                  measure the performance of your marketing campaigns. It
                  appends UTM parameters to your URLs so GA4 can identify the
                  exact source, medium, and campaign for each visit.
                </p>
                <div className="bg-muted rounded-lg p-4 text-xs font-mono text-foreground/80">
                  <span className="text-muted-foreground">Example URL:</span>
                  <br />
                  https://yoursite.com/
                  <span className="text-primary">?utm_source=</span>newsletter
                  <span className="text-primary">&amp;utm_medium=</span>email
                  <span className="text-primary">&amp;utm_campaign=</span>
                  spring_sale
                </div>
                <a
                  href="https://ga-dev-tools.google/campaign-url-builder/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary hover:underline font-medium"
                  data-ocid="url-builder-link"
                >
                  <ExternalLink className="h-4 w-4" />
                  Open Campaign URL Builder
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="brand-blue">
                  Collection Reports Setup
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p className="text-foreground/80">
                  Create custom report collections to organize data the way you
                  need it:
                </p>
                <ol className="space-y-2">
                  {collectionSteps.map((step) => (
                    <li key={step.num} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                        {step.num}
                      </span>
                      <span className="text-foreground/80 leading-relaxed">
                        {step.text}
                      </span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="brand-blue">
                  Key Report Types in GA4
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {reportTypes.map((r) => (
                    <div
                      key={r.name}
                      className="border border-border rounded-lg p-3"
                    >
                      <p className="font-semibold text-sm brand-blue mb-1">
                        {r.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{r.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="brand-blue">
                  Useful GA4 Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {gaResources.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                    data-ocid={link.ocid}
                  >
                    <ExternalLink className="h-4 w-4" />
                    {link.label}
                  </a>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
