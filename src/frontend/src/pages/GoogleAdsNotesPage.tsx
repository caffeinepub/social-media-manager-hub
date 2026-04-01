import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertTriangle,
  BarChart2,
  DollarSign,
  Globe,
  Search,
  Settings,
  ShoppingBag,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";

const biddingComparison = [
  {
    feature: "Control",
    manual: "Full control over bids",
    automated: "Google adjusts bids automatically",
  },
  {
    feature: "Bid Adjustments",
    manual: "Can adjust for devices, locations, and time",
    automated: "Limited control (Google optimizes automatically)",
  },
  {
    feature: "Optimization",
    manual: "Requires continuous monitoring",
    automated: "Uses machine learning to optimize",
  },
  {
    feature: "Time Required",
    manual: "Time-consuming, requires regular management",
    automated: "Saves time (Google manages bids)",
  },
  {
    feature: "Learning Curve",
    manual: "Requires experience and analysis",
    automated: "Easier for beginners",
  },
  {
    feature: "Performance",
    manual: "Can perform well with proper management",
    automated: "Adapts to real-time data",
  },
  {
    feature: "Flexibility",
    manual: "More flexible, allows custom adjustments",
    automated: "Less flexible, follows Google's algorithm",
  },
  {
    feature: "Best For",
    manual: "Advanced users who want precise control",
    automated: "Advertisers focusing on conversions & efficiency",
  },
  {
    feature: "Examples",
    manual: "Manual CPC (Cost Per Click)",
    automated: "Target CPA, Maximize Conversions, Target ROAS",
  },
];

const conversionBenefits = [
  "Measure Campaign Effectiveness",
  "Optimize Ad Performance",
  "Maximize ROI",
  "Enable Smart Bidding (Target CPA, ROAS)",
  "Understand Customer Behavior",
  "Refine Landing Pages",
  "Target High-Performing Keywords",
  "Lower Acquisition Costs",
  "Retarget Potential Customers",
  "Track Business Goals (sales, sign-ups, installs)",
];

const searchAdsFacts = [
  {
    num: "1",
    fact: "Google Ads Reaches 90% of Internet Users",
    detail:
      "One of the largest advertising platforms, reaching billions worldwide.",
  },
  {
    num: "2",
    fact: "Search Ads Appear at the Top of Google Results",
    detail: "Paid ads take up prime space above organic search results.",
  },
  {
    num: "3",
    fact: "Google Uses a Bidding System",
    detail: "Winner determined based on bid amount & ad quality.",
  },
  {
    num: "4",
    fact: "Quality Score Matters",
    detail:
      "Google ranks ads based on CTR, relevance, landing page experience — not just budget.",
  },
  {
    num: "5",
    fact: "You Pay Only for Clicks (PPC Model)",
    detail: "Unlike traditional ads, you only pay when someone clicks.",
  },
  {
    num: "6",
    fact: "Ad Extensions Boost Performance",
    detail:
      "Call buttons, site links, and location info make ads more clickable.",
  },
  {
    num: "7",
    fact: "Google Ads AI Improves Targeting",
    detail: "Smart bidding uses AI to optimize conversions in real-time.",
  },
  {
    num: "8",
    fact: "Mobile-First Advertising",
    detail: "Over 70% of Google searches happen on mobile devices.",
  },
  {
    num: "9",
    fact: "Negative Keywords Improve ROI",
    detail: "Filtering out irrelevant searches reduces wasted ad spend.",
  },
  {
    num: "10",
    fact: "Top Advertisers Spend Billions",
    detail: "Amazon, eBay, and Apple invest millions per month in Google Ads.",
  },
];

const gmcSteps = [
  {
    step: 1,
    title: "Create a Google Merchant Center Account",
    details: [
      "Go to Google Merchant Center",
      "Click 'Get Started' and sign in with your Google account",
      "Enter business name, country, and time zone",
      "Agree to terms and click 'Create Account'",
    ],
  },
  {
    step: 2,
    title: "Enter Business Information",
    details: [
      "Business Name & Website — provide your official store name and URL",
      "Business Location — select the country where your business operates",
      "Contact Details — add an email address for Google updates",
    ],
  },
  {
    step: 3,
    title: "Verify and Claim Your Website",
    details: [
      "HTML File Upload — upload provided file to website root directory",
      "Meta Tag — add Google-provided meta tag to <head> section",
      "Google Analytics — verify with your GA account",
      "Google Tag Manager — verify using GTM container ID",
    ],
  },
  {
    step: 4,
    title: "Upload Your Product Feed",
    details: [
      "Go to Products tab → Click 'Add Products'",
      "Manual (few products), Google Sheets (small businesses), Scheduled Fetch (auto), or Content API (advanced)",
    ],
  },
  {
    step: 5,
    title: "Set Up Shipping & Tax Information",
    details: [
      "Go to Tools and Settings > Shipping & Returns",
      "Add shipping rates, delivery time, and return policy",
      "Configure tax settings based on your region",
    ],
  },
  {
    step: 6,
    title: "Link Google Ads (For Paid Shopping Ads)",
    details: [
      "Go to Settings > Linked Accounts",
      "Click 'Link' next to Google Ads",
      "Enter your Google Ads Customer ID",
    ],
  },
];

const productFeedSteps = [
  {
    step: 1,
    title: "Install a Product Feed Plugin",
    details: [
      "Product Feed PRO for WooCommerce (Free)",
      "CTX Feed – WooCommerce Product Feed Manager",
      "Google Listings & Ads (Google's official integration)",
      "Go to WordPress Dashboard > Plugins > Add New, search and install",
    ],
  },
  {
    step: 2,
    title: "Configure the Product Feed Plugin",
    details: [
      "Navigate to WooCommerce > Product Feed",
      "Click 'Create New Feed'",
      "Select Google Shopping as feed type",
      "Choose XML format (best for GMC)",
      "Set Feed Name and daily refresh interval",
    ],
  },
  {
    step: 3,
    title: "Map Product Attributes",
    details: [
      "Product Title → title",
      "Product Description → description",
      "Product Image → image_link",
      "Product Price → price",
      "Stock Status → availability",
      "Product Category → google_product_category",
      "Brand → brand",
      "GTIN/MPN → gtin/mpn",
    ],
  },
  {
    step: 4,
    title: "Upload Feed to Google Merchant Center",
    details: [
      "Navigate to Products > Feeds > Add Feed",
      "Select Country & Language",
      "Choose Scheduled Fetch (best for auto-updates)",
      "Enter the feed URL from your plugin settings",
      "Set fetch frequency (daily recommended) and submit",
    ],
  },
];

export default function GoogleAdsNotesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10">
          <Badge className="bg-blue-100 text-blue-800 mb-3">
            Google Ads Notes
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold brand-blue mb-3">
            Google Ads — Complete Notes
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A structured, execution-focused breakdown of Google Ads — from
            campaign hierarchy and bidding to Shopping Ads, GMC setup, and
            conversion tracking.
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="flex flex-wrap h-auto gap-1 mb-8 bg-white border border-gray-200 p-1 rounded-lg">
            <TabsTrigger value="overview" className="text-xs md:text-sm">
              Overview
            </TabsTrigger>
            <TabsTrigger value="bidding" className="text-xs md:text-sm">
              Bidding
            </TabsTrigger>
            <TabsTrigger value="search-ads" className="text-xs md:text-sm">
              Search Ads
            </TabsTrigger>
            <TabsTrigger value="shopping" className="text-xs md:text-sm">
              Shopping Ads
            </TabsTrigger>
            <TabsTrigger value="gmc" className="text-xs md:text-sm">
              GMC Setup
            </TabsTrigger>
            <TabsTrigger value="conversion" className="text-xs md:text-sm">
              Conversion
            </TabsTrigger>
            <TabsTrigger value="tools" className="text-xs md:text-sm">
              Tools & UTM
            </TabsTrigger>
          </TabsList>

          {/* OVERVIEW TAB */}
          <TabsContent value="overview">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 brand-blue">
                    <Zap className="h-5 w-5" /> What is Google Ads?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Google Ads is a{" "}
                    <strong>pay-per-click (PPC) advertising platform</strong>{" "}
                    where advertisers pay per click (or impression) on an ad.
                    It's an effective way to drive qualified traffic to your
                    business because users are actively searching for products
                    and services like yours.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold brand-blue mb-2">
                        Ad Rank Formula
                      </h4>
                      <div className="bg-white border border-blue-200 rounded p-3 text-center">
                        <span className="text-lg font-bold brand-blue">
                          AD Rank = Max. CPC × Quality Score
                        </span>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Quality Score Factors
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Expected CTR (Click-Through Rate)</li>
                        <li>• Ad Relevance to the keyword</li>
                        <li>• Landing Page Experience</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 brand-blue">
                    <Settings className="h-5 w-5" /> Campaign Hierarchy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-center">
                    {[
                      "Google Ads Account",
                      "Campaign",
                      "Ad Group",
                      "Keywords & Ads",
                    ].map((level, i) => (
                      <div key={level} className="flex items-center gap-2">
                        <div className="bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold text-sm">
                          {level}
                        </div>
                        {i < 3 && (
                          <span className="text-gray-400 font-bold hidden md:block">
                            →
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Campaign Types
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Search",
                          "Display",
                          "Shopping",
                          "Video (YouTube)",
                          "App",
                          "Performance Max",
                          "Smart",
                        ].map((t) => (
                          <Badge
                            key={t}
                            variant="outline"
                            className="border-blue-300 text-blue-700"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Campaign Objectives
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Sales",
                          "Leads",
                          "Website Traffic",
                          "Brand Awareness",
                          "App Promotion",
                          "Local Store Visits",
                        ].map((o) => (
                          <Badge
                            key={o}
                            variant="outline"
                            className="border-green-300 text-green-700"
                          >
                            {o}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 brand-blue">
                    <DollarSign className="h-5 w-5" /> Google Ads Budget
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <p className="text-sm text-gray-500 mb-1">
                        Days in Month
                      </p>
                      <p className="text-2xl font-bold brand-blue">30.41</p>
                      <p className="text-xs text-gray-500">365 ÷ 12 = 30.41</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <p className="text-sm text-gray-500 mb-1">Daily Budget</p>
                      <p className="text-2xl font-bold brand-blue">₹200/day</p>
                      <p className="text-xs text-gray-500">
                        Average Daily Budget
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <p className="text-sm text-gray-500 mb-1">
                        Max Monthly Spend
                      </p>
                      <p className="text-2xl font-bold brand-blue">₹6,082</p>
                      <p className="text-xs text-gray-500">200 × 30.41</p>
                    </div>
                  </div>
                  <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-sm text-yellow-800">
                      <strong>Over Delivery Policy:</strong> If Google spends
                      more than the monthly cap (e.g., ₹7,000 or ₹7,200), Google
                      refunds the extra charges back to the same ad account.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 brand-blue">
                    <Target className="h-5 w-5" /> Labels in Google Ads
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Labels let you{" "}
                    <strong>
                      categorize campaigns, ad groups, ads, and keywords
                    </strong>{" "}
                    to simplify your workflow. Stay organized by tagging items
                    by performance, test type, or priority — then filter and
                    analyze by label across your account.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["Campaigns", "Ad Groups", "Ads", "Keywords"].map(
                      (item) => (
                        <Badge key={item} className="bg-blue-100 text-blue-800">
                          {item}
                        </Badge>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* BIDDING TAB */}
          <TabsContent value="bidding">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 brand-blue">
                  <BarChart2 className="h-5 w-5" /> Manual vs Automated Bidding
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="p-3 text-left rounded-tl-lg">Feature</th>
                        <th className="p-3 text-left">Manual Bidding</th>
                        <th className="p-3 text-left rounded-tr-lg">
                          Automated Bidding
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {biddingComparison.map((row, i) => (
                        <tr
                          key={row.feature}
                          className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                        >
                          <td className="p-3 font-semibold text-gray-700 border-b border-gray-100">
                            {row.feature}
                          </td>
                          <td className="p-3 text-gray-600 border-b border-gray-100">
                            {row.manual}
                          </td>
                          <td className="p-3 text-gray-600 border-b border-gray-100">
                            {row.automated}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SEARCH ADS TAB */}
          <TabsContent value="search-ads">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 brand-blue">
                    <Search className="h-5 w-5" /> How Google Search Ads Work
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">
                        Step-by-Step Process
                      </h4>
                      <div className="space-y-3">
                        {[
                          {
                            step: 1,
                            text: "Advertisers bid on keywords relevant to their business",
                          },
                          {
                            step: 2,
                            text: "Users search on Google → your ad competes in an auction",
                          },
                          {
                            step: 3,
                            text: "Ad appears at the top of search results if you win",
                          },
                          {
                            step: 4,
                            text: "User clicks the ad → you pay only for the click",
                          },
                        ].map((item) => (
                          <div
                            key={item.step}
                            className="flex gap-3 items-start"
                          >
                            <div className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                              {item.step}
                            </div>
                            <p className="text-gray-700 text-sm pt-1">
                              {item.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">
                        Benefits
                      </h4>
                      <div className="space-y-2">
                        {[
                          [
                            "Highly Targeted",
                            "Show ads to users actively searching for your services",
                          ],
                          [
                            "Pay-Per-Click Model",
                            "You only pay when someone clicks on your ad",
                          ],
                          [
                            "Instant Visibility",
                            "Appear at the top of search results",
                          ],
                          [
                            "Performance Tracking",
                            "Measure clicks, conversions, and ROI easily",
                          ],
                        ].map(([title, desc]) => (
                          <div
                            key={title}
                            className="bg-green-50 rounded-lg p-3"
                          >
                            <p className="font-semibold text-green-800 text-sm">
                              {title}
                            </p>
                            <p className="text-green-700 text-xs">{desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 brand-blue">
                    <TrendingUp className="h-5 w-5" /> Interesting Facts About
                    Google Search Ads
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3">
                    {searchAdsFacts.map((item) => (
                      <div
                        key={item.num}
                        className="flex gap-3 items-start bg-gray-50 rounded-lg p-3"
                      >
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {item.num}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 text-sm">
                            {item.fact}
                          </p>
                          <p className="text-gray-600 text-xs mt-1">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 brand-blue">
                    <Search className="h-5 w-5" /> Keyword Match Types
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      {
                        type: "Broad Match",
                        symbol: "keyword",
                        desc: "Ads may show for searches related to your keyword, including synonyms and related searches.",
                        color: "blue",
                      },
                      {
                        type: "Phrase Match",
                        symbol: '"keyword"',
                        desc: "Ads show for searches that include the meaning of your keyword phrase.",
                        color: "green",
                      },
                      {
                        type: "Exact Match",
                        symbol: "[keyword]",
                        desc: "Ads show for searches that match your keyword exactly or are close variants.",
                        color: "purple",
                      },
                    ].map((item) => (
                      <div
                        key={item.type}
                        className={`bg-${item.color}-50 border border-${item.color}-200 rounded-lg p-4`}
                      >
                        <div
                          className={`font-mono text-lg font-bold text-${item.color}-700 mb-2`}
                        >
                          {item.symbol}
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          {item.type}
                        </h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-800 mb-1">
                      Negative Keywords
                    </h4>
                    <p className="text-red-700 text-sm">
                      Prevent your ads from showing for irrelevant searches.
                      Reduces wasted spend and improves ROI significantly.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* SHOPPING ADS TAB */}
          <TabsContent value="shopping">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 brand-blue">
                    <ShoppingBag className="h-5 w-5" /> What Are Google Shopping
                    Ads?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Google Shopping Ads are PPC advertisements that allow
                    businesses to showcase products directly in Google search
                    results — with{" "}
                    <strong>
                      product images, prices, store names, and other details
                    </strong>
                    . Highly visual and effective for e-commerce.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">
                        How It Works
                      </h4>
                      <div className="space-y-2">
                        {[
                          "Product Feed Setup — upload product data to Google Merchant Center",
                          "Campaign Creation — create Shopping campaigns in Google Ads",
                          "Automated Matching — Google uses feed to match ads to search queries",
                          "Ad Display — shows in Google Search, Images, and Shopping tab",
                          "Clicks & Conversions — customer clicks and lands on your website",
                        ].map((step, i) => (
                          <div key={step} className="flex gap-2 items-start">
                            <div className="w-5 h-5 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                              {i + 1}
                            </div>
                            <p className="text-gray-700 text-sm">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">
                        Benefits
                      </h4>
                      <div className="space-y-2">
                        {[
                          [
                            "Higher Visibility",
                            "Visual product ads stand out in search results",
                          ],
                          [
                            "Qualified Traffic",
                            "Customers see product details before clicking",
                          ],
                          [
                            "Automated Targeting",
                            "Ads shown based on product data, not just keywords",
                          ],
                          [
                            "Broad Reach",
                            "Appear across Search, YouTube, and Display Network",
                          ],
                        ].map(([title, desc]) => (
                          <div
                            key={title}
                            className="bg-blue-50 rounded-lg p-3"
                          >
                            <p className="font-semibold brand-blue text-sm">
                              {title}
                            </p>
                            <p className="text-gray-600 text-xs">{desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 brand-blue">
                    <Globe className="h-5 w-5" /> What Is Google Merchant Center
                    (GMC)?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    GMC is a <strong>free tool</strong> that allows businesses
                    to upload and manage product listings for Google Shopping
                    Ads, Free Listings, and other Google services. It acts as a
                    bridge between your online store and Google Ads.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Product Feed Management — upload titles, prices, images, descriptions",
                      "Free Product Listings — showcase products without paying for ads",
                      "Integration with Google Ads — run Shopping Ads and Performance Max campaigns",
                      "Price & Inventory Updates — keep data up to date automatically",
                      "Insights & Performance Tracking — analyze how products perform in search",
                      "Local Inventory Ads — promote in-store products to local shoppers",
                    ].map((feature) => (
                      <div
                        key={feature}
                        className="flex gap-2 items-start bg-gray-50 rounded p-3"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-700 text-sm">{feature}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* GMC SETUP TAB */}
          <TabsContent value="gmc">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 brand-blue">
                    <Settings className="h-5 w-5" /> How to Set Up Google
                    Merchant Center
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {gmcSteps.map((item) => (
                      <div key={item.step} className="flex gap-4 items-start">
                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                          {item.step}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 mb-2">
                            {item.title}
                          </h4>
                          <ul className="space-y-1">
                            {item.details.map((d) => (
                              <li
                                key={d}
                                className="text-gray-600 text-sm flex gap-2 items-start"
                              >
                                <span className="text-blue-400 mt-1">•</span>{" "}
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 brand-blue">
                    <ShoppingBag className="h-5 w-5" /> Product Feed Setup
                    (WooCommerce)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {productFeedSteps.map((item) => (
                      <div key={item.step} className="flex gap-4 items-start">
                        <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                          {item.step}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 mb-2">
                            {item.title}
                          </h4>
                          <ul className="space-y-1">
                            {item.details.map((d) => (
                              <li
                                key={d}
                                className="text-gray-600 text-sm flex gap-2 items-start"
                              >
                                <span className="text-green-400 mt-1">•</span>{" "}
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>CTX Feed:</strong> CTX Feed Pro is an optimized
                      WooCommerce product feed manager that makes product
                      listing approval faster, conditionally enhances product
                      info, filters unoptimized products, and keeps data updated
                      automatically.
                    </p>
                    <a
                      href="https://wordpress.org/plugins/webappick-product-feed-for-woocommerce/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 text-xs underline mt-1 block"
                    >
                      CTX Feed Plugin →
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 brand-blue">
                    <Globe className="h-5 w-5" /> How to Link GMC to Google Ads
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Open GMC Account → go to Settings → select Linked Accounts from drop-down",
                      "Scroll down to Google Ads section → click Link Account",
                      "Go to your Google Ads account → copy your Customer ID (top right corner)",
                      "Paste the Customer ID in GMC → go back to Google Ads and confirm the request",
                    ].map((step, i) => (
                      <div key={step} className="flex gap-3 items-start">
                        <div className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                          {i + 1}
                        </div>
                        <p className="text-gray-700 text-sm pt-1">{step}</p>
                      </div>
                    ))}
                  </div>
                  <a
                    href="https://optimizegoal.com/how-to-link-google-merchant-center-to-google-ads/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-blue-600 text-sm underline"
                  >
                    Full guide: optimizegoal.com →
                  </a>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* CONVERSION TAB */}
          <TabsContent value="conversion">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 brand-blue">
                    <Target className="h-5 w-5" /> What Is Conversion Tracking?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    A conversion is when a user performs a specified action
                    after clicking an ad — purchasing a product, installing an
                    app, signing up for an email list, or filling a form.
                    Conversions represent customer interactions vital to your
                    advertising goals.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {conversionBenefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex gap-2 items-start bg-green-50 rounded-lg p-3"
                      >
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-700 text-sm">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 brand-blue">
                    <Zap className="h-5 w-5" /> Conversion Linker Tag
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    The conversion linker tag{" "}
                    <strong>automatically detects ad click information</strong>{" "}
                    in your conversion page URLs. It stores this information in
                    first-party cookies and browser local storage on your domain
                    for web pages, and passes data in URLs for AMP pages.
                  </p>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <p className="text-yellow-800 text-sm">
                      Required for accurate conversion tracking. Must be placed
                      on every page of your website, not just the conversion
                      page.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 brand-blue">
                    <Settings className="h-5 w-5" /> Conversion Setup in Google
                    Ads
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[
                      "In your Google Ads account, click the Goals icon",
                      "Click the Conversions drop-down in the section menu → click Summary",
                      "In the summary, click + New conversion action",
                      "Select Website and click Next",
                      "Enter your website domain and click Scan",
                      "Configure your conversion action settings and install the tag",
                    ].map((step, i) => (
                      <div key={step} className="flex gap-3 items-start">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                          {i + 1}
                        </div>
                        <p className="text-gray-700 text-sm pt-0.5">{step}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 brand-blue">
                    <AlertTriangle className="h-5 w-5" /> Remarketing Setup
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    Remarketing allows you to re-engage users who visited your
                    website but didn't convert. Set it up via the Google Ads tag
                    or Google Analytics audience linking.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      [
                        "Standard Remarketing",
                        "Show ads to past visitors browsing the Display Network",
                      ],
                      [
                        "Dynamic Remarketing",
                        "Show ads with specific products/services users viewed",
                      ],
                      [
                        "Customer Match",
                        "Upload customer email lists to target known customers",
                      ],
                      [
                        "Similar Audiences",
                        "Reach new users similar to your best customers",
                      ],
                    ].map(([title, desc]) => (
                      <div key={title} className="bg-blue-50 rounded-lg p-3">
                        <p className="font-semibold brand-blue text-sm">
                          {title}
                        </p>
                        <p className="text-gray-600 text-xs mt-1">{desc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* TOOLS & UTM TAB */}
          <TabsContent value="tools">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 brand-blue">
                    <Globe className="h-5 w-5" /> UTM Parameters
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    UTM parameters (also called UTM codes or tags) are{" "}
                    <strong>snippets of text added to the end of a URL</strong>{" "}
                    to track where website traffic comes from. If a user clicks
                    from Facebook and lands on your page, you'll know the exact
                    source.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        5 UTM Parameters
                      </h4>
                      <div className="space-y-2">
                        {[
                          {
                            param: "utm_source",
                            example: "google",
                            desc: "Which site sent the traffic",
                          },
                          {
                            param: "utm_medium",
                            example: "cpc",
                            desc: "Marketing medium (cpc, email, organic)",
                          },
                          {
                            param: "utm_campaign",
                            example: "spring_sale",
                            desc: "Campaign name",
                          },
                          {
                            param: "utm_term",
                            example: "running+shoes",
                            desc: "Paid keyword",
                          },
                          {
                            param: "utm_content",
                            example: "logolink",
                            desc: "Differentiate ads (A/B testing)",
                          },
                        ].map((item) => (
                          <div
                            key={item.param}
                            className="bg-gray-50 rounded p-2"
                          >
                            <span className="font-mono text-blue-700 text-xs font-bold">
                              {item.param}
                            </span>
                            <span className="text-gray-500 text-xs">
                              {" "}
                              = {item.example}
                            </span>
                            <p className="text-gray-600 text-xs">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Example URL
                      </h4>
                      <div className="bg-gray-900 rounded-lg p-4">
                        <p className="text-green-400 font-mono text-xs break-all">
                          https://yoursite.com/landing?
                          <br />
                          utm_source=google&
                          <br />
                          utm_medium=cpc&
                          <br />
                          utm_campaign=brand_awareness&
                          <br />
                          utm_term=digital+marketing&
                          <br />
                          utm_content=ad_variant_a
                        </p>
                      </div>
                      <div className="mt-3 bg-blue-50 rounded-lg p-3">
                        <p className="text-blue-800 text-sm">
                          Use Google's <strong>Campaign URL Builder</strong> to
                          generate UTM links automatically without manual
                          errors.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 brand-blue">
                    <Zap className="h-5 w-5" /> Dynamic Keyword Insertion (DKI)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    DKI automatically updates your ad text to include the
                    keyword that triggered your ad. This makes ads more relevant
                    to each search query.
                  </p>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <p className="text-gray-400 text-xs mb-1">Syntax:</p>
                    <p className="text-yellow-400 font-mono text-sm">
                      {"{KeyWord:Default Text}"}
                    </p>
                    <p className="text-gray-400 text-xs mt-2">
                      Example headline:
                    </p>
                    <p className="text-green-400 font-mono text-sm">
                      {"Buy {KeyWord:Running Shoes} Online"}
                    </p>
                  </div>
                  <div className="mt-3 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <p className="text-yellow-800 text-sm">
                      <strong>Warning:</strong> If the keyword is too long to
                      fit, the default text is used instead. Test carefully and
                      set good default text.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 brand-blue">
                    <Globe className="h-5 w-5" /> Google Ads Manager Account
                    (MCC)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    A Google Ads Manager Account (previously known as My Client
                    Center / MCC) allows you to manage{" "}
                    <strong>multiple Google Ads accounts</strong> from a single
                    login. Required for Google Partner Badge.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold brand-blue mb-2">
                        Why You Need It
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Manage multiple client accounts</li>
                        <li>• Required for Google Partner certification</li>
                        <li>• Unified billing across accounts</li>
                        <li>• Cross-account reporting and alerts</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        How to Add Payment Method
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Go to Tools & Settings → Billing</li>
                        <li>• Click + Add Payment Method</li>
                        <li>• Choose Credit/Debit Card or Bank Account</li>
                        <li>• Set automatic or manual payments</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 brand-blue">
                    <Target className="h-5 w-5" /> Targeting Settings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      {
                        title: "Location Targeting",
                        items: [
                          "Country, State, City level",
                          "Radius targeting around a location",
                          "Exclude specific locations",
                          "Target people in or interested in location",
                        ],
                      },
                      {
                        title: "Language Targeting",
                        items: [
                          "Target users based on browser language",
                          "Reach speakers of specific languages",
                          "Can target multiple languages",
                          "Separate campaigns for each language recommended",
                        ],
                      },
                      {
                        title: "Audience Segments",
                        items: [
                          "In-market audiences (actively researching)",
                          "Affinity audiences (interests)",
                          "Custom intent audiences",
                          "Remarketing lists",
                          "Customer match",
                        ],
                      },
                    ].map((section) => (
                      <div
                        key={section.title}
                        className="bg-gray-50 rounded-lg p-4"
                      >
                        <h4 className="font-semibold text-gray-800 mb-2">
                          {section.title}
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {section.items.map((item) => (
                            <li key={item} className="flex gap-2 items-start">
                              <span className="text-blue-400 mt-0.5">•</span>{" "}
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
