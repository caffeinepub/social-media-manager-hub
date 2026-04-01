import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCaseStudies, useTestimonials } from "@/hooks/useQueries";
import {
  Award,
  BarChart3,
  Quote,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

export default function TestimonialsPage() {
  const { data: testimonials, isLoading: testimonialsLoading } =
    useTestimonials();
  const { data: caseStudies, isLoading: caseStudiesLoading } = useCaseStudies();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - DGR Style */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-brand-blue via-brand-blue-dark to-brand-blue text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/generated/enhanced-testimonial-bg.dim_500x300.png')] opacity-10 bg-cover bg-center" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 border-white/30 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              <Award className="h-4 w-4 mr-2 inline" />
              Client Success Stories
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Real Results from Real Clients
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Discover how businesses like yours have transformed their digital
              marketing with The Social Jay. From increased traffic to higher
              conversions, see the impact we deliver.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - DGR Style */}
      <section className="py-16 bg-white border-b border-border/40">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "150+", label: "Happy Clients", icon: Users },
              { value: "300%", label: "Avg. Traffic Growth", icon: TrendingUp },
              { value: "85%", label: "Client Retention", icon: Target },
              { value: "$2M+", label: "Revenue Generated", icon: BarChart3 },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                // biome-ignore lint/suspicious/noArrayIndexKey: static list without stable id
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-blue/10 mb-4">
                    <Icon className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background to-brand-blue/5">
        <div className="container">
          <Tabs defaultValue="testimonials" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 h-12">
              <TabsTrigger value="testimonials" className="text-base">
                <Quote className="h-4 w-4 mr-2" />
                Testimonials
              </TabsTrigger>
              <TabsTrigger value="case-studies" className="text-base">
                <TrendingUp className="h-4 w-4 mr-2" />
                Case Studies
              </TabsTrigger>
            </TabsList>

            {/* Testimonials Tab */}
            <TabsContent value="testimonials" className="space-y-8">
              {testimonialsLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card key={i} className="shadow-soft">
                      <CardHeader>
                        <Skeleton className="h-6 w-3/4 mb-2" />
                        <Skeleton className="h-4 w-1/2" />
                      </CardHeader>
                      <CardContent>
                        <Skeleton className="h-20 w-full mb-4" />
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-2/3" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : testimonials && testimonials.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {testimonials.map((testimonial) => (
                    <Card
                      key={Number(testimonial.id)}
                      className="shadow-soft-lg hover:shadow-soft-xl transition-all border-border/50 bg-white"
                    >
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center">
                            <Quote className="h-6 w-6 text-brand-blue" />
                          </div>
                          <Badge className="bg-brand-blue/10 text-brand-blue border-brand-blue/20">
                            {testimonial.serviceCategory}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl text-brand-blue">
                          {testimonial.clientName}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground italic leading-relaxed text-base">
                          "{testimonial.quote}"
                        </p>
                        <div className="pt-4 border-t border-border/40">
                          <div className="text-sm font-semibold text-brand-blue mb-2 flex items-center gap-2">
                            <BarChart3 className="h-4 w-4" />
                            Results:
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {testimonial.resultMetrics}
                          </p>
                        </div>
                        {testimonial.beforeAfter && (
                          <div className="pt-2">
                            <div className="text-sm font-semibold text-brand-blue mb-2">
                              Before/After:
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {testimonial.beforeAfter}
                            </p>
                          </div>
                        )}
                        <div className="flex gap-1 pt-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Award
                              key={star}
                              className="h-4 w-4 text-brand-blue fill-brand-blue"
                            />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Users className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    No testimonials available yet.
                  </p>
                </div>
              )}
            </TabsContent>

            {/* Case Studies Tab */}
            <TabsContent value="case-studies" className="space-y-8">
              {caseStudiesLoading ? (
                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="shadow-soft">
                      <CardHeader>
                        <Skeleton className="h-8 w-3/4 mb-2" />
                        <Skeleton className="h-4 w-1/2" />
                      </CardHeader>
                      <CardContent>
                        <Skeleton className="h-24 w-full mb-4" />
                        <Skeleton className="h-32 w-full" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : caseStudies && caseStudies.length > 0 ? (
                <div className="space-y-6">
                  {caseStudies.map((caseStudy) => (
                    <Card
                      key={Number(caseStudy.id)}
                      className="shadow-soft-lg hover:shadow-soft-xl transition-all border-border/50 bg-white"
                    >
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between mb-3">
                          <CardTitle className="text-3xl text-brand-blue">
                            {caseStudy.title}
                          </CardTitle>
                          <Badge className="bg-brand-blue/10 text-brand-blue border-brand-blue/20">
                            {caseStudy.serviceCategory}
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <Badge
                            variant="secondary"
                            className="bg-brand-blue/5 text-brand-blue"
                          >
                            {caseStudy.projectType}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h3 className="text-base font-semibold text-brand-blue mb-3">
                            Overview
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-base">
                            {caseStudy.description}
                          </p>
                        </div>
                        <div className="pt-4 border-t border-border/40">
                          <h3 className="text-base font-semibold text-brand-blue mb-4 flex items-center gap-2">
                            <TrendingUp className="h-5 w-5" />
                            Results & Impact
                          </h3>
                          <div className="bg-gradient-to-br from-brand-blue/5 to-brand-blue/10 rounded-xl p-6 shadow-soft">
                            <p className="text-foreground leading-relaxed whitespace-pre-line text-base">
                              {caseStudy.results}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <TrendingUp className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    No case studies available yet.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
