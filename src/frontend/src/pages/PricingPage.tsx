import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { usePricingGuidelines, usePricingPackages } from "@/hooks/useQueries";
import { useNavigate } from "@tanstack/react-router";
import {
  AlertCircle,
  ArrowRight,
  BookOpen,
  Check,
  DollarSign,
  Rocket,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";

export default function PricingPage() {
  const navigate = useNavigate();
  const { data: packages, isLoading } = usePricingPackages();
  const { data: guidelines, isLoading: isLoadingGuidelines } =
    usePricingGuidelines();

  const getPackageIcon = (name: string) => {
    const nameLower = name.toLowerCase();
    if (nameLower.includes("starter")) return Zap;
    if (nameLower.includes("growth")) return TrendingUp;
    if (nameLower.includes("scale")) return Rocket;
    return Zap;
  };

  const getPackageColor = (index: number) => {
    const colors = ["brand-blue", "brand-blue-light", "brand-blue-dark"];
    return colors[index % colors.length];
  };

  const formatPrice = (price: bigint) => {
    const priceNum = Number(price);
    return `₹${priceNum.toLocaleString("en-IN")}`;
  };

  // Group pricing items by service type
  const groupPricingByService = (items: any[]) => {
    const grouped: { [key: string]: any[] } = {};
    for (const item of items) {
      const serviceType = item.service.split(" - ")[0] || item.service;
      if (!grouped[serviceType]) {
        grouped[serviceType] = [];
      }
      grouped[serviceType].push(item);
    }
    return grouped;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-blue/5 via-background to-brand-blue-light/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-medium mb-6">
              <Zap className="h-4 w-4" />
              Transparent Pricing
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Choose Your Growth Plan
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Select the perfect package for your business needs. All plans
              include expert guidance, proven strategies, and measurable
              results.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="shadow-soft">
                  <CardHeader>
                    <Skeleton className="h-8 w-3/4 mb-2" />
                    <Skeleton className="h-6 w-1/2 mb-4" />
                    <Skeleton className="h-4 w-full" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-32 w-full mb-4" />
                    <Skeleton className="h-10 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : packages && packages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, index) => {
                const Icon = getPackageIcon(pkg.name);
                const isPopular = index === 1;

                return (
                  <Card
                    key={Number(pkg.id)}
                    className={`shadow-soft hover:shadow-soft-lg transition-all relative ${
                      isPopular ? "border-2 border-brand-blue scale-105" : ""
                    }`}
                  >
                    {isPopular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <Badge className="bg-brand-blue text-white px-4 py-1">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-8">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${getPackageColor(index)}/10 mx-auto mb-4`}
                      >
                        <Icon
                          className={`h-8 w-8 text-${getPackageColor(index)}`}
                        />
                      </div>
                      <CardTitle className="text-2xl mb-2">
                        {pkg.name}
                      </CardTitle>
                      <div className="text-4xl font-bold text-brand-blue mb-2">
                        {formatPrice(pkg.price)}
                      </div>
                      {pkg.recommendedForSmallBusiness && (
                        <Badge
                          variant="outline"
                          className="text-brand-blue border-brand-blue"
                        >
                          Perfect for Small Business
                        </Badge>
                      )}
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <ul className="space-y-3">
                        {pkg.features.map((feature, featureIndex) => (
                          <li
                            // biome-ignore lint/suspicious/noArrayIndexKey: static list without stable id
                            key={featureIndex}
                            className="flex items-start gap-3"
                          >
                            <Check className="h-5 w-5 text-brand-blue flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4">
                        <Button
                          onClick={() => navigate({ to: "/contact" })}
                          className={`w-full ${
                            isPopular
                              ? "bg-brand-blue hover:bg-brand-blue-dark text-white"
                              : "bg-secondary hover:bg-secondary/80 text-brand-blue"
                          } shadow-soft`}
                        >
                          {index === 0
                            ? `Get Started - ${formatPrice(pkg.price)}`
                            : index === 1
                              ? `Book a Call - ${formatPrice(pkg.price)}`
                              : `Contact Us - ${formatPrice(pkg.price)}`}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <Zap className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">
                No pricing packages available yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Freelance Digital Marketing Pricing Guide */}
      <section
        id="pricing-guide"
        className="py-20 bg-gradient-to-br from-brand-blue/5 to-background relative overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 opacity-5">
          <img
            src="/assets/generated/pricing-bg.dim_800x400.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container max-w-6xl relative z-10">
          {/* Guide Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              Complete Pricing Guide
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Freelance Digital Marketing Pricing Guide (India)
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive pricing guide for freelance digital marketing
              services in the Indian market. Understand industry standards, set
              competitive rates, and position your services effectively.
            </p>
          </div>

          {isLoadingGuidelines ? (
            <div className="space-y-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="shadow-soft">
                  <CardHeader>
                    <Skeleton className="h-8 w-1/3 mb-2" />
                    <Skeleton className="h-4 w-2/3" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-64 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : guidelines && guidelines.length > 0 ? (
            <div className="space-y-16">
              {guidelines.map((guideline, guidelineIndex) => {
                const groupedServices = groupPricingByService(
                  guideline.section.pricingItems,
                );

                return (
                  <div key={Number(guideline.id)} className="space-y-8">
                    {/* Skill Level Header Card */}
                    <Card className="shadow-soft border-2 border-brand-blue/20 bg-gradient-to-br from-brand-blue/5 to-background">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-2xl md:text-3xl text-brand-blue mb-2">
                              {guideline.section.title}
                            </CardTitle>
                            <p className="text-muted-foreground text-base leading-relaxed">
                              {guideline.section.description}
                            </p>
                          </div>
                          <Badge className="bg-brand-blue text-white px-4 py-2 text-sm">
                            {guideline.section.currency}
                          </Badge>
                        </div>
                      </CardHeader>
                    </Card>

                    {/* Service-Specific Pricing Sections */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-brand-blue" />
                        Service Pricing Breakdown
                      </h3>

                      <Accordion
                        type="single"
                        collapsible
                        className="space-y-4"
                      >
                        {Object.entries(groupedServices).map(
                          ([serviceType, items], serviceIndex) => (
                            <AccordionItem
                              // biome-ignore lint/suspicious/noArrayIndexKey: static list without stable id
                              key={serviceIndex}
                              value={`service-${guidelineIndex}-${serviceIndex}`}
                              className="border rounded-lg shadow-soft bg-card"
                            >
                              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                                <div className="flex items-center justify-between w-full pr-4">
                                  <span className="text-lg font-semibold text-foreground">
                                    {serviceType}
                                  </span>
                                  <Badge
                                    variant="outline"
                                    className="text-brand-blue border-brand-blue"
                                  >
                                    {items.length}{" "}
                                    {items.length === 1
                                      ? "Package"
                                      : "Packages"}
                                  </Badge>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="px-6 pb-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                  {items.map((item) => (
                                    <div
                                      key={Number(item.id)}
                                      className="p-5 rounded-lg bg-secondary/30 border border-border hover:border-brand-blue/50 transition-colors"
                                    >
                                      <div className="flex items-start justify-between mb-3">
                                        <h4 className="font-semibold text-foreground text-base">
                                          {item.service}
                                        </h4>
                                        <Badge
                                          variant="outline"
                                          className="text-brand-blue border-brand-blue text-xs"
                                        >
                                          {item.skillLevel}
                                        </Badge>
                                      </div>
                                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                        {item.description}
                                      </p>
                                      <div className="flex items-baseline gap-2">
                                        <span className="text-2xl font-bold text-brand-blue">
                                          {item.priceRange}
                                        </span>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          ),
                        )}
                      </Accordion>
                    </div>

                    {/* Pricing Comparison Table */}
                    {guideline.section.pricingItems.length > 0 && (
                      <Card className="shadow-soft">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div>
                              <CardTitle className="text-xl mb-2">
                                Complete Pricing Comparison
                              </CardTitle>
                              <p className="text-sm text-muted-foreground">
                                Compare pricing across all services at this
                                skill level
                              </p>
                            </div>
                            <img
                              src="/assets/generated/pricing-comparison-table.dim_600x400.png"
                              alt="Pricing comparison"
                              className="hidden md:block w-24 h-16 object-cover rounded-lg opacity-50"
                            />
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="overflow-x-auto">
                            <Table>
                              <TableHeader>
                                <TableRow className="bg-brand-blue/5">
                                  <TableHead className="font-semibold text-foreground">
                                    Service Type
                                  </TableHead>
                                  <TableHead className="font-semibold text-foreground">
                                    Description
                                  </TableHead>
                                  <TableHead className="font-semibold text-foreground">
                                    Skill Level
                                  </TableHead>
                                  <TableHead className="font-semibold text-foreground text-right">
                                    Price Range
                                  </TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {guideline.section.pricingItems.map(
                                  (item, idx) => (
                                    <TableRow
                                      key={Number(item.id)}
                                      className={
                                        idx % 2 === 0 ? "bg-secondary/20" : ""
                                      }
                                    >
                                      <TableCell className="font-medium">
                                        {item.service}
                                      </TableCell>
                                      <TableCell className="text-sm text-muted-foreground max-w-xs">
                                        {item.description}
                                      </TableCell>
                                      <TableCell>
                                        <Badge
                                          variant="outline"
                                          className="text-brand-blue border-brand-blue"
                                        >
                                          {item.skillLevel}
                                        </Badge>
                                      </TableCell>
                                      <TableCell className="text-right font-semibold text-brand-blue whitespace-nowrap">
                                        {item.priceRange}
                                      </TableCell>
                                    </TableRow>
                                  ),
                                )}
                              </TableBody>
                            </Table>
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {/* Quick Takeaways */}
                    {guideline.takeaways.length > 0 && (
                      <Card className="shadow-soft bg-gradient-to-br from-brand-blue/10 to-brand-blue-light/5 border-brand-blue/30">
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-brand-blue/10">
                              <Target className="h-6 w-6 text-brand-blue" />
                            </div>
                            <div>
                              <CardTitle className="text-xl">
                                Quick Takeaways
                              </CardTitle>
                              <p className="text-sm text-muted-foreground">
                                Key insights for pricing your services
                              </p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-4">
                            {guideline.takeaways.map((takeaway, index) => (
                              <li
                                // biome-ignore lint/suspicious/noArrayIndexKey: static list without stable id
                                key={index}
                                className="flex items-start gap-3 p-3 rounded-lg bg-background/50"
                              >
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center mt-0.5">
                                  <Check className="h-4 w-4 text-brand-blue" />
                                </div>
                                <span className="text-sm text-foreground leading-relaxed flex-1">
                                  {takeaway}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    )}

                    {/* Brutal Reality Check */}
                    {guideline.realityCheckPoints.length > 0 && (
                      <Card className="shadow-soft border-2 border-destructive/30 bg-gradient-to-br from-destructive/5 to-background">
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-destructive/10">
                              <AlertCircle className="h-6 w-6 text-destructive" />
                            </div>
                            <div>
                              <CardTitle className="text-xl text-destructive">
                                Brutal Reality Check
                              </CardTitle>
                              <p className="text-sm text-muted-foreground">
                                Honest insights about the freelance digital
                                marketing industry
                              </p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-4">
                            {guideline.realityCheckPoints.map(
                              (point, index) => (
                                <li
                                  // biome-ignore lint/suspicious/noArrayIndexKey: static list without stable id
                                  key={index}
                                  className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-destructive/20"
                                >
                                  <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                                  <span className="text-sm text-foreground leading-relaxed flex-1">
                                    {point}
                                  </span>
                                </li>
                              ),
                            )}
                          </ul>
                        </CardContent>
                      </Card>
                    )}

                    {guidelineIndex < guidelines.length - 1 && (
                      <Separator className="my-12" />
                    )}
                  </div>
                );
              })}

              {/* CTA Section */}
              <Card className="shadow-soft-lg bg-gradient-to-br from-brand-blue via-brand-blue-dark to-brand-blue text-white border-0 overflow-hidden relative">
                <div className="absolute inset-0 bg-grid-white/5" />
                <CardContent className="py-16 text-center relative z-10">
                  <div className="max-w-2xl mx-auto">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
                      <DollarSign className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                      Ready to Start Your Marketing Plan?
                    </h3>
                    <p className="text-white/90 mb-8 text-lg leading-relaxed">
                      Every business is unique. Let's discuss your specific
                      needs and create a tailored pricing plan that delivers
                      maximum value for your investment.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        onClick={() => navigate({ to: "/contact" })}
                        size="lg"
                        className="bg-white text-brand-blue hover:bg-white/90 shadow-soft-lg"
                      >
                        Get a Custom Quote
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                      <Button
                        onClick={() => navigate({ to: "/quiz" })}
                        size="lg"
                        variant="outline"
                        className="border-2 border-white text-white hover:bg-white/10"
                      >
                        Take Strategy Quiz
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card className="shadow-soft">
              <CardContent className="py-16 text-center">
                <BookOpen className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Pricing Guide Coming Soon
                </h3>
                <p className="text-muted-foreground">
                  We're preparing comprehensive pricing guidelines for you.
                  Check back soon!
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-brand-blue/5 to-brand-blue-light/5">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Common Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-soft hover:shadow-soft-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">
                  What's included in each package?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Each package includes tailored strategies, ongoing support,
                  and access to our educational resources. Higher tiers offer
                  more intensive support and advanced features.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-soft hover:shadow-soft-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Can I upgrade later?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Absolutely! You can upgrade your package at any time as your
                  business grows. We'll help you transition smoothly to the next
                  tier.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-soft hover:shadow-soft-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">
                  Do you offer custom packages?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Yes! If none of our standard packages fit your needs, we can
                  create a custom solution tailored to your specific goals and
                  budget.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-soft hover:shadow-soft-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">
                  What results can I expect?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Results vary by industry and starting point, but our clients
                  typically see significant improvements in traffic, engagement,
                  and conversions within 3-6 months.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
