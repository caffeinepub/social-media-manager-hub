import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  BookOpen,
  Box,
  CheckCircle,
  ExternalLink,
  FileText,
  Globe,
  Package,
  Search,
  ShoppingCart,
  Store,
  Truck,
  Users,
} from "lucide-react";

const flowSteps = [
  {
    num: 1,
    label: "Customer",
    desc: "Places an order on your store",
    icon: Users,
  },
  {
    num: 2,
    label: "Store",
    desc: "Receives the order, forwards to supplier",
    icon: Store,
  },
  {
    num: 3,
    label: "Order",
    desc: "Order is processed and confirmed",
    icon: ShoppingCart,
  },
  {
    num: 4,
    label: "Ship",
    desc: "Supplier prepares and ships the product",
    icon: Truck,
  },
  {
    num: 5,
    label: "Deliver",
    desc: "Product is delivered to customer",
    icon: Package,
  },
  {
    num: 6,
    label: "Supplier",
    desc: "Handles inventory and fulfillment",
    icon: Box,
  },
  {
    num: 7,
    label: "Customer",
    desc: "Receives product, feedback loop begins",
    icon: Users,
  },
];

const startSteps = [
  {
    step: "Step 1",
    title: "Store Setup",
    desc: "Choose your CMS (Shopify recommended), set up your storefront, payment gateway, and branding.",
  },
  {
    step: "Step 2",
    title: "Adding Supplier",
    desc: "Research and connect with reliable suppliers. Verify product quality, shipping time, and reliability.",
  },
  {
    step: "Step 3",
    title: "Product Research",
    desc: "Use organic and inorganic research methods to identify trending, high-demand, low-competition products.",
  },
  {
    step: "Step 4",
    title: "Brand Design",
    desc: "Create a cohesive brand identity — logo, color palette, tone of voice, and product presentation.",
  },
];

const indianSuppliers = [
  {
    name: "Meesho Supplier",
    url: "https://supplier.meesho.com",
    desc: "Large India-focused marketplace with thousands of product categories. Great for fashion, home, and lifestyle.",
  },
  {
    name: "Flipkart Seller",
    url: "https://seller.flipkart.com/",
    desc: "India's largest e-commerce platform. High traffic and trust, excellent for electronics, fashion, and more.",
  },
  {
    name: "Amazon Seller Central",
    url: "https://sellercentral.amazon.com/",
    desc: "Global reach with strong Indian customer base. Trusted brand, FBA options available for seamless fulfillment.",
  },
];

const researchTools = [
  {
    name: "Meta Ad Library",
    desc: "Browse all running Facebook/Instagram ads to identify winning products and creatives.",
    badge: "Free",
  },
  {
    name: "Instagram",
    desc: "Explore trending hashtags, Reels, and influencer content to spot product demand signals.",
    badge: "Organic",
  },
  {
    name: "Facebook (My Ad Finder)",
    desc: "Use the My Ad Finder Chrome extension to see ads targeted specifically to you based on interests.",
    badge: "Tool",
  },
];

export default function DropshippingNotesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Hero */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <div className="flex items-center gap-3 mb-4">
            <ShoppingCart className="h-8 w-8 opacity-80" />
            <Badge variant="secondary" className="text-sm font-semibold">
              Complete Course Notes
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Dropshipping: A Complete End-To-End Course
          </h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Introduction to Dropshipping in India — from concept to execution.
            Build, launch, and scale your dropshipping business with zero
            inventory.
          </p>
        </div>
      </div>

      <div className="container py-10">
        <Tabs defaultValue="introduction" className="w-full">
          <TabsList className="flex flex-wrap h-auto gap-1 mb-8 bg-muted/50 p-1.5 rounded-xl">
            <TabsTrigger
              value="introduction"
              className="rounded-lg"
              data-ocid="dropshipping.tab"
            >
              Introduction
            </TabsTrigger>
            <TabsTrigger
              value="flow"
              className="rounded-lg"
              data-ocid="dropshipping.tab"
            >
              Flow
            </TabsTrigger>
            <TabsTrigger
              value="documentation"
              className="rounded-lg"
              data-ocid="dropshipping.tab"
            >
              Documentation
            </TabsTrigger>
            <TabsTrigger
              value="product-research"
              className="rounded-lg"
              data-ocid="dropshipping.tab"
            >
              Product Research
            </TabsTrigger>
            <TabsTrigger
              value="build-store"
              className="rounded-lg"
              data-ocid="dropshipping.tab"
            >
              Build Your Store
            </TabsTrigger>
            <TabsTrigger
              value="suppliers"
              className="rounded-lg"
              data-ocid="dropshipping.tab"
            >
              Suppliers
            </TabsTrigger>
          </TabsList>

          {/* TAB 1: INTRODUCTION */}
          <TabsContent value="introduction" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <Badge
                      variant="outline"
                      className="text-primary border-primary/40"
                    >
                      Definition
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">
                    What is Dropshipping?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    A retail fulfillment method where a store doesn't keep
                    products in stock. Instead, when you sell a product, you
                    purchase it from a third party and have it shipped directly
                    to the customer.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="h-5 w-5 text-primary" />
                    <Badge
                      variant="outline"
                      className="text-primary border-primary/40"
                    >
                      India Market
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">
                    How it works in India?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Dropshipping in India involves suppliers shipping products
                    directly to customers, minimizing inventory costs for
                    retailers. The Indian e-commerce market is growing rapidly,
                    offering significant opportunity.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <Badge
                      variant="outline"
                      className="text-primary border-primary/40"
                    >
                      Pros & Cons
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">
                    Benefits & Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Benefits include low startup costs and flexibility.
                    Challenges involve intense competition and supplier
                    reliability. Knowing both sides before you start is critical
                    for long-term success.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-2">
                3 Segments of Dropshipping
              </h2>
              <p className="text-muted-foreground mb-6">
                Every dropshipping business operates across three core segments.
                Understand all three to build a resilient business.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-primary text-primary-foreground border-0">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Users className="h-6 w-6 opacity-80" />
                      <CardTitle>The Customer</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="opacity-85 text-sm leading-relaxed">
                      The end buyer who places orders on your store. Their
                      experience, trust, and satisfaction drive your store's
                      reputation and repeat revenue.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/30 bg-primary/5">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Store className="h-6 w-6 text-primary" />
                      <CardTitle className="text-primary">Your Store</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Can be created on any CMS — mostly Shopify is used. Your
                      store handles the customer-facing side, marketing, and
                      order forwarding.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="secondary">Organic Marketing</Badge>
                      <Badge variant="secondary">Paid Marketing</Badge>
                      <Badge variant="secondary">Shopify</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/30 bg-primary/5">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Box className="h-6 w-6 text-primary" />
                      <CardTitle className="text-primary">
                        The Supplier
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Handles inventory and ships directly to the customer. We
                      have limited supplier options in India — research
                      thoroughly before committing.
                    </p>
                    <Badge
                      variant="outline"
                      className="mt-3 border-yellow-500/50 text-yellow-600 bg-yellow-50"
                    >
                      ⚠ Limited Suppliers in India
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* TAB 2: FLOW */}
          <TabsContent value="flow" className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-2">
                Dropshipping Flow
              </h2>
              <p className="text-muted-foreground mb-8">
                The complete 7-step journey from customer order to final
                delivery.
              </p>
              <div className="relative">
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
                  {flowSteps.map((step, idx) => {
                    const Icon = step.icon;
                    return (
                      <div
                        key={step.num}
                        className="flex flex-col items-center text-center relative"
                      >
                        <div className="flex items-center w-full justify-center mb-2">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-md">
                            {step.num}
                          </div>
                          {idx < flowSteps.length - 1 && (
                            <ArrowRight className="hidden lg:block absolute right-0 translate-x-1/2 h-5 w-5 text-primary/40" />
                          )}
                        </div>
                        <Icon className="h-5 w-5 text-primary mb-1" />
                        <p className="font-semibold text-sm">{step.label}</p>
                        <p className="text-xs text-muted-foreground mt-1 leading-tight">
                          {step.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-2">
                Steps to Start The Process
              </h2>
              <p className="text-muted-foreground mb-6">
                Follow these 4 foundational steps to launch your dropshipping
                business.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {startSteps.map((s) => (
                  <Card
                    key={s.step}
                    className="border-primary/20 hover:border-primary/50 transition-colors"
                  >
                    <CardHeader>
                      <Badge
                        className="w-fit mb-2 bg-primary/10 text-primary border-primary/20"
                        variant="outline"
                      >
                        {s.step}
                      </Badge>
                      <CardTitle className="text-base">{s.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {s.desc}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* TAB 3: DOCUMENTATION */}
          <TabsContent value="documentation" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-2">
                Documentation
              </h2>
              <p className="text-muted-foreground mb-8">
                Pick which market you want to enter. Different markets require
                different legal documentation. Get this right before launching
                your store.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-primary/30">
                <CardHeader className="bg-primary/5 rounded-t-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <Badge className="mb-1" variant="outline">
                        Option 1
                      </Badge>
                      <CardTitle>Indian Documents</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <p className="text-muted-foreground text-sm">
                    For selling within India, you'll need:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "GST Registration (mandatory for e-commerce)",
                      "PAN Card (personal or business)",
                      "Current Bank Account (for payments)",
                      "Business Registration (Sole Proprietor / LLP / Pvt Ltd)",
                      "MSME Registration (optional but beneficial)",
                      "Marketplace Seller Agreement (Flipkart, Amazon, Meesho)",
                    ].map((doc) => (
                      <li key={doc} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/30">
                <CardHeader className="bg-primary/5 rounded-t-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <Badge className="mb-1" variant="outline">
                        Option 2
                      </Badge>
                      <CardTitle>International Documents (Doola)</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <p className="text-muted-foreground text-sm">
                    For international markets (USA/global), use Doola to
                    register a US LLC:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "US LLC Registration via Doola (doola.com)",
                      "US EIN (Employer Identification Number)",
                      "US Business Bank Account (Mercury, Relay)",
                      "Stripe/PayPal Business Account (USD payments)",
                      "Shopify Store with US business details",
                      "International Shipping & Return Policy",
                    ].map((doc) => (
                      <li key={doc} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <p className="text-xs text-blue-700 font-medium">
                      💡 Doola helps Indian founders register US LLCs remotely.
                      Ideal for Shopify + AliExpress dropshipping targeting
                      US/EU markets.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* TAB 4: PRODUCT RESEARCH */}
          <TabsContent value="product-research" className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-2">
                Product Research
              </h2>
              <p className="text-muted-foreground mb-6">
                Finding the right product is the most critical skill in
                dropshipping. Two core approaches:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-green-600">01</Badge>
                    <Badge
                      variant="outline"
                      className="border-green-400 text-green-700"
                    >
                      Organic
                    </Badge>
                  </div>
                  <CardTitle className="text-green-800">
                    Organic Research
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700 text-sm leading-relaxed mb-4">
                    Product research in dropshipping involves identifying
                    trending items and assessing market demand using organic
                    methods like social media and keyword analysis.
                  </p>
                  <ul className="space-y-1">
                    {[
                      "Instagram trending Reels",
                      "TikTok viral product videos",
                      "Google Trends analysis",
                      "Pinterest trending boards",
                      "Reddit community discussions",
                    ].map((m) => (
                      <li
                        key={m}
                        className="flex items-center gap-2 text-sm text-green-700"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 border-purple-200">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-purple-600">02</Badge>
                    <Badge
                      variant="outline"
                      className="border-purple-400 text-purple-700"
                    >
                      In-Organic
                    </Badge>
                  </div>
                  <CardTitle className="text-purple-800">
                    In-Organic Research
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-700 text-sm leading-relaxed mb-4">
                    Analyzing market trends and consumer demand to select
                    profitable products without relying on paid advertising.
                    Uses data tools and competitor analysis.
                  </p>
                  <ul className="space-y-1">
                    {[
                      "Meta Ad Library competitor analysis",
                      "Spy tools (Minea, AdSpy)",
                      "Amazon Best Sellers data",
                      "Keyword research (Ubersuggest)",
                      "AliExpress order counts",
                    ].map((m) => (
                      <li
                        key={m}
                        className="flex items-center gap-2 text-sm text-purple-700"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-6">
                Main Elements
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-primary/20">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Store className="h-6 w-6 text-primary" />
                      <CardTitle>Store</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      A store in dropshipping sells products online without
                      holding inventory, relying on suppliers to fulfill
                      customer orders directly. Your store is the
                      customer-facing brand.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-primary/20">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Box className="h-6 w-6 text-primary" />
                      <CardTitle>Supplier</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      A supplier in dropshipping provides products directly to
                      customers on behalf of the retailer, without inventory
                      management. Supplier reliability is everything — vet them
                      thoroughly.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-6">
                Tools for Product Research
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {researchTools.map((tool) => (
                  <Card
                    key={tool.name}
                    className="border-primary/20 hover:border-primary/50 transition-colors"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Search className="h-5 w-5 text-primary" />
                        <Badge variant="secondary">{tool.badge}</Badge>
                      </div>
                      <CardTitle className="text-base mt-2">
                        {tool.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {tool.desc}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* TAB 5: BUILD YOUR STORE */}
          <TabsContent value="build-store" className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-2">
                Build Your Store
              </h2>
              <p className="text-muted-foreground mb-8">
                Two phases to setting up your dropshipping store. Do both right
                before you touch marketing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-primary/30">
                <CardHeader className="bg-primary/5 rounded-t-xl">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-bold p-0">
                      1
                    </Badge>
                    <CardTitle>Create Store</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground text-sm mb-4">
                    Choose your CMS platform and set up your store
                    infrastructure.
                  </p>
                  <ul className="space-y-3">
                    {[
                      {
                        name: "Shopify",
                        desc: "Most recommended. Easiest setup, best app ecosystem, built for dropshipping.",
                        best: true,
                      },
                      {
                        name: "WooCommerce",
                        desc: "WordPress-based. More control, requires hosting. Good for tech-savvy users.",
                        best: false,
                      },
                      {
                        name: "Wix eCommerce",
                        desc: "Simple drag-drop builder. Good for beginners with limited budget.",
                        best: false,
                      },
                    ].map((p) => (
                      <li
                        key={p.name}
                        className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-sm">
                              {p.name}
                            </span>
                            {p.best && (
                              <Badge
                                className="text-xs bg-green-100 text-green-700 border-green-200"
                                variant="outline"
                              >
                                Recommended
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            {p.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/30">
                <CardHeader className="bg-primary/5 rounded-t-xl">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-bold p-0">
                      2
                    </Badge>
                    <CardTitle>Install App</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground text-sm mb-4">
                    Install a dropshipping app to connect your store with
                    suppliers automatically.
                  </p>
                  <ul className="space-y-3">
                    {[
                      {
                        name: "DSers",
                        desc: "Official AliExpress partner. Free plan available. Best for beginners.",
                        best: true,
                      },
                      {
                        name: "AutoDS",
                        desc: "Advanced automation. Auto-pricing, order fulfillment, inventory sync.",
                        best: false,
                      },
                      {
                        name: "Spocket",
                        desc: "US/EU suppliers. Faster shipping times than AliExpress.",
                        best: false,
                      },
                      {
                        name: "Zendrop",
                        desc: "US-based products + custom branding. Great for branded dropshipping.",
                        best: false,
                      },
                    ].map((a) => (
                      <li
                        key={a.name}
                        className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-sm">
                              {a.name}
                            </span>
                            {a.best && (
                              <Badge
                                className="text-xs bg-blue-100 text-blue-700 border-blue-200"
                                variant="outline"
                              >
                                Popular
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            {a.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-6">
                Store Marketing Options
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <Badge className="w-fit bg-green-600">Organic</Badge>
                    <CardTitle className="text-green-800 mt-2">
                      Organic Marketing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-700 text-sm mb-4">
                      Free traffic driven by content. Slower but sustainable and
                      compounding over time.
                    </p>
                    <ul className="space-y-1">
                      {[
                        "Instagram Reels & Posts",
                        "TikTok / YouTube Shorts",
                        "Pinterest boards",
                        "SEO (product descriptions + blog)",
                        "WhatsApp & Telegram communities",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-green-700"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader>
                    <Badge className="w-fit bg-blue-600">Paid</Badge>
                    <CardTitle className="text-blue-800 mt-2">
                      Paid Marketing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-700 text-sm mb-4">
                      Faster results but requires budget. Needs testing and
                      optimization to be profitable.
                    </p>
                    <ul className="space-y-1">
                      {[
                        "Facebook & Instagram Ads",
                        "Google Shopping Ads",
                        "YouTube Ads",
                        "Influencer collaborations",
                        "TikTok Ads (high ROAS potential)",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-blue-700"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* TAB 6: SUPPLIERS */}
          <TabsContent value="suppliers" className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-2">
                Find Your Suppliers
              </h2>
              <p className="text-muted-foreground mb-2">
                Suppliers are the backbone of your dropshipping business. In
                India, options are limited compared to global markets — choose
                carefully and always test before scaling.
              </p>
              <Badge
                variant="outline"
                className="border-yellow-500/60 text-yellow-700 bg-yellow-50"
              >
                ⚠ India has limited supplier options — research and vet
                thoroughly
              </Badge>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">
                Indian Supplier Platforms
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {indianSuppliers.map((supplier) => (
                  <Card
                    key={supplier.name}
                    className="border-primary/20 hover:border-primary/50 transition-all hover:shadow-md"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Truck className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">
                          {supplier.name}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {supplier.desc}
                      </p>
                      <a
                        href={supplier.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline font-medium"
                        data-ocid="dropshipping.link"
                      >
                        Visit Platform <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-primary">
                  Tips for Evaluating Supplier Reliability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      tip: "Order a sample first",
                      desc: "Always test product quality before selling to real customers.",
                    },
                    {
                      tip: "Check shipping timelines",
                      desc: "Confirm realistic delivery estimates. Slow shipping = bad reviews.",
                    },
                    {
                      tip: "Communicate response time",
                      desc: "A supplier who takes days to respond is a liability at scale.",
                    },
                    {
                      tip: "Review return/refund policy",
                      desc: "Know the process before a customer complains.",
                    },
                    {
                      tip: "Check product consistency",
                      desc: "Order the same item twice to verify consistent quality.",
                    },
                    {
                      tip: "Avoid single-supplier dependency",
                      desc: "Always have a backup supplier for your top products.",
                    },
                  ].map((t) => (
                    <div key={t.tip} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">{t.tip}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {t.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
