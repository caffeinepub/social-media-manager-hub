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
  Award,
  BarChart3,
  BookOpen,
  CheckCircle,
  DollarSign,
  GraduationCap,
  Map as MapIcon,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

export default function HomePage() {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      icon: "/assets/generated/marketing-fundamentals-icon.dim_80x80.png",
      title: "Marketing Fundamentals",
      description:
        "Master the core principles of marketing, buyer personas, and the 4 Ps framework",
      duration: "4 weeks",
      level: "Beginner",
      lessons: 12,
      path: "/learn",
    },
    {
      id: 2,
      icon: "/assets/generated/digital-channels-icon.dim_80x80.png",
      title: "Digital Channels Mastery",
      description:
        "Deep dive into SEO, paid advertising, social media, and email marketing strategies",
      duration: "6 weeks",
      level: "Intermediate",
      lessons: 18,
      path: "/learn",
    },
    {
      id: 3,
      icon: "/assets/generated/growth-scaling-icon.dim_80x80.png",
      title: "Growth & Scaling",
      description:
        "Learn analytics, automation, content strategy, and conversion optimization",
      duration: "5 weeks",
      level: "Advanced",
      lessons: 15,
      path: "/learn",
    },
    {
      id: 4,
      icon: "/assets/generated/monetization-icon.dim_80x80.png",
      title: "Monetization Strategies",
      description:
        "Implement revenue streams, build authority, and scale your marketing efforts",
      duration: "4 weeks",
      level: "Advanced",
      lessons: 10,
      path: "/learn",
    },
  ];

  const successMetrics = [
    { value: "10,000+", label: "Students Enrolled", icon: Users },
    { value: "95%", label: "Success Rate", icon: Award },
    { value: "4.8/5", label: "Average Rating", icon: BarChart3 },
    { value: "50+", label: "Expert Instructors", icon: GraduationCap },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      quote:
        "The Social Jay transformed my understanding of digital marketing. The structured approach made complex concepts easy to grasp.",
      image: "/assets/6b8db6f0-84f5-44a6-9b39-de6aff21f103-md.jpg",
    },
    {
      name: "Michael Chen",
      role: "Small Business Owner",
      quote:
        "Within 3 months of completing the course, I saw a 200% increase in online engagement. Highly recommended!",
      image: "/assets/2196feb7a72618265dedcac78fc75394.jpg",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section - DGR Academy Style */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-brand-blue via-brand-blue-dark to-brand-blue">
        <div className="absolute inset-0 bg-[url('/assets/generated/hero-section-bg.dim_1200x600.png')] opacity-10 bg-cover bg-center" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 border-white/30 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              🎓 Professional Digital Marketing Education
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Master Digital Marketing from Zero to Hero
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              Join thousands of students learning digital marketing through our
              structured, industry-proven curriculum. From fundamentals to
              advanced monetization strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-brand-blue hover:bg-white/90 shadow-soft-xl hover:shadow-soft-xl transition-all text-lg px-8 py-6 font-semibold"
                onClick={() => navigate({ to: "/learn" })}
              >
                <GraduationCap className="mr-2 h-5 w-5" />
                Start Learning Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 shadow-soft hover:shadow-soft-lg transition-all text-lg px-8 py-6 font-semibold"
                onClick={() => navigate({ to: "/roadmap" })}
              >
                <MapIcon className="mr-2 h-5 w-5" />
                View Learning Roadmap
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics - DGR Style */}
      <section className="py-16 bg-white border-b border-border/40">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                // biome-ignore lint/suspicious/noArrayIndexKey: static list without stable id
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-blue/10 mb-4">
                    <Icon className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {metric.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Courses Section - DGR Style */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background to-brand-blue/5">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20 border-brand-blue/20 px-4 py-1.5 text-sm font-medium">
              Our Programs
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-blue">
              Featured Courses
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive programs designed to take you from beginner to
              expert in digital marketing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {courses.map((course) => (
              <Card
                key={course.id}
                className="group hover:shadow-soft-xl transition-all border-border/50 bg-white overflow-hidden"
              >
                <div className="relative h-48 bg-gradient-to-br from-brand-blue/10 to-brand-blue/5 flex items-center justify-center">
                  <img
                    src={course.icon}
                    alt={course.title}
                    className="w-20 h-20 object-contain"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="secondary"
                      className="bg-white/90 backdrop-blur-sm"
                    >
                      {course.level}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-brand-blue mb-2 group-hover:text-brand-blue-dark transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-brand-blue" />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-brand-blue" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white shadow-soft hover:shadow-soft-lg transition-all"
                    onClick={() => navigate({ to: course.path })}
                  >
                    Start Course
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue/10 shadow-soft hover:shadow-soft-lg transition-all text-lg px-8 py-6"
              onClick={() => navigate({ to: "/roadmap" })}
            >
              View Complete Learning Roadmap
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Learning Path Overview */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-blue">
              Your Learning Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Follow our proven 4-phase roadmap to build comprehensive digital
              marketing expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                phase: 1,
                icon: BookOpen,
                title: "Foundations",
                desc: "Marketing fundamentals & buyer personas",
              },
              {
                phase: 2,
                icon: Target,
                title: "Skills",
                desc: "Digital channels & strategy building",
              },
              {
                phase: 3,
                icon: TrendingUp,
                title: "Growth",
                desc: "Analytics & optimization techniques",
              },
              {
                phase: 4,
                icon: DollarSign,
                title: "Monetization",
                desc: "Revenue streams & ROI focus",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.phase} className="relative">
                  <div className="bg-gradient-to-br from-brand-blue/5 to-brand-blue/10 rounded-2xl p-6 h-full hover:shadow-soft-lg transition-all">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-brand-blue text-white mb-4 shadow-soft">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="text-sm font-semibold text-brand-blue/70 mb-2">
                      Phase {item.phase}
                    </div>
                    <h3 className="text-xl font-bold text-brand-blue mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  {item.phase < 4 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-6 w-6 text-brand-blue/30" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section - DGR Style */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-brand-blue/5 to-background">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20 border-brand-blue/20 px-4 py-1.5 text-sm font-medium">
              Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-blue">
              What Our Students Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join thousands of successful students who have transformed their
              careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                // biome-ignore lint/suspicious/noArrayIndexKey: static list without stable id
                key={index}
                className="bg-white shadow-soft-lg hover:shadow-soft-xl transition-all border-border/50"
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover shadow-soft"
                    />
                    <div>
                      <div className="font-semibold text-lg text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex gap-1 mt-4">
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

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue/10 shadow-soft hover:shadow-soft-lg transition-all text-lg px-8 py-6"
              onClick={() => navigate({ to: "/testimonials" })}
            >
              View All Success Stories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div>
              <Badge className="mb-4 bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20 border-brand-blue/20 px-4 py-1.5 text-sm font-medium">
                Why Choose Us
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-brand-blue leading-tight">
                Everything You Need to Succeed
              </h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                The Social Jay provides a complete educational ecosystem
                designed to take you from beginner to expert in digital
                marketing.
              </p>
              <ul className="space-y-5">
                {[
                  "Structured learning roadmap from basics to advanced",
                  "Interactive mind maps and visual progression tracking",
                  "Practical tools setup and implementation guides",
                  "Daily quick wins and actionable tasks",
                  "SEO-focused blog with tutorials and insights",
                  "Curated resource hub with recommended tools",
                ].map((feature, index) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: static list without stable id
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center mt-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-foreground text-lg leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-transparent rounded-3xl transform rotate-3" />
              <img
                src="/assets/generated/success-metrics-illustration.dim_600x400.png"
                alt="Success Metrics"
                className="rounded-3xl shadow-soft-xl relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - DGR Style */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-brand-blue via-brand-blue-dark to-brand-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/generated/hero-section-bg.dim_1200x600.png')] opacity-10 bg-cover bg-center" />
        <div className="container text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Transform Your Marketing Skills?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join The Social Jay today and start your journey to becoming a
            digital marketing expert. Get instant access to all courses and
            resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-brand-blue hover:bg-white/90 shadow-soft-xl hover:shadow-soft-xl transition-all text-lg px-8 py-6 font-semibold"
              onClick={() => navigate({ to: "/contact" })}
            >
              <GraduationCap className="mr-2 h-5 w-5" />
              Enroll Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 shadow-soft hover:shadow-soft-lg transition-all text-lg px-8 py-6 font-semibold"
              onClick={() => navigate({ to: "/pricing" })}
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
