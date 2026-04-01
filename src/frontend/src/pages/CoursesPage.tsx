import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle,
  Clock,
  GraduationCap,
  Target,
  Users,
} from "lucide-react";

export default function CoursesPage() {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      icon: "/assets/generated/marketing-fundamentals-icon.dim_80x80.png",
      title: "Marketing Fundamentals",
      description:
        "Master the core principles of marketing, buyer personas, and the 4 Ps framework. Build a solid foundation for your digital marketing journey.",
      duration: "4 weeks",
      level: "Beginner",
      lessons: 12,
      enrolled: 2847,
      rating: 4.9,
      progress: 0,
      path: "/learn",
      outcomes: [
        "Understand the 4 Ps of Marketing",
        "Create detailed buyer personas",
        "Map customer journey funnels",
        "Apply marketing fundamentals to real scenarios",
      ],
      prerequisites: "None - perfect for beginners",
    },
    {
      id: 2,
      icon: "/assets/generated/digital-channels-icon.dim_80x80.png",
      title: "Digital Channels Mastery",
      description:
        "Deep dive into SEO, paid advertising, social media, and email marketing strategies. Learn to leverage multiple channels effectively.",
      duration: "6 weeks",
      level: "Intermediate",
      lessons: 18,
      enrolled: 1923,
      rating: 4.8,
      progress: 0,
      path: "/learn",
      outcomes: [
        "Master SEO basics and optimization",
        "Create effective paid ad campaigns",
        "Develop social media strategies",
        "Build email marketing funnels",
      ],
      prerequisites: "Marketing Fundamentals recommended",
    },
    {
      id: 3,
      icon: "/assets/generated/growth-scaling-icon.dim_80x80.png",
      title: "Growth & Scaling",
      description:
        "Learn analytics, automation, content strategy, and conversion optimization. Take your marketing to the next level with data-driven decisions.",
      duration: "5 weeks",
      level: "Advanced",
      lessons: 15,
      enrolled: 1456,
      rating: 4.9,
      progress: 0,
      path: "/learn",
      outcomes: [
        "Implement analytics and tracking",
        "Automate marketing workflows",
        "Optimize conversion rates",
        "Scale campaigns effectively",
      ],
      prerequisites: "Digital Channels Mastery required",
    },
    {
      id: 4,
      icon: "/assets/generated/monetization-icon.dim_80x80.png",
      title: "Monetization Strategies",
      description:
        "Implement revenue streams, build authority, and scale your marketing efforts. Focus on ROI and sustainable growth strategies.",
      duration: "4 weeks",
      level: "Advanced",
      lessons: 10,
      enrolled: 1089,
      rating: 4.8,
      progress: 0,
      path: "/learn",
      outcomes: [
        "Develop multiple revenue streams",
        "Build personal and brand authority",
        "Create monetization funnels",
        "Maximize marketing ROI",
      ],
      prerequisites: "Growth & Scaling required",
    },
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description:
        "Structured lessons covering every aspect of digital marketing",
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description:
        "Learn from industry professionals with proven track records",
    },
    {
      icon: Award,
      title: "Certificates",
      description: "Earn certificates upon completion to showcase your skills",
    },
    {
      icon: Target,
      title: "Practical Projects",
      description:
        "Apply your learning with real-world projects and case studies",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-brand-blue via-brand-blue-dark to-brand-blue text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/generated/hero-section-bg.dim_1200x600.png')] opacity-10 bg-cover bg-center" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 border-white/30 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              🎓 Professional Courses & Programs
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Master Digital Marketing with Expert-Led Courses
            </h1>
            <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
              Choose from our comprehensive range of courses designed to take
              you from beginner to expert. Learn at your own pace with lifetime
              access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-brand-blue hover:bg-white/90 shadow-soft-xl transition-all text-lg px-8 py-6 font-semibold"
                onClick={() => navigate({ to: "/learn" })}
              >
                <GraduationCap className="mr-2 h-5 w-5" />
                Start Learning
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 shadow-soft hover:shadow-soft-lg transition-all text-lg px-8 py-6 font-semibold"
                onClick={() => navigate({ to: "/roadmap" })}
              >
                View Roadmap
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white border-b border-border/40">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                // biome-ignore lint/suspicious/noArrayIndexKey: static list without stable id
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-blue/10 mb-4">
                    <Icon className="h-7 w-7 text-brand-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-blue mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background to-brand-blue/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-blue">
              Available Courses
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive programs designed to build your digital marketing
              expertise step by step
            </p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {courses.map((course) => (
              <Card
                key={course.id}
                className="overflow-hidden hover:shadow-soft-xl transition-all border-border/50 bg-white"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Course Image & Info */}
                  <div className="lg:col-span-1 bg-gradient-to-br from-brand-blue/10 to-brand-blue/5 p-8 flex flex-col items-center justify-center relative">
                    <img
                      src={course.icon}
                      alt={course.title}
                      className="w-24 h-24 object-contain mb-4"
                    />
                    <Badge variant="secondary" className="mb-2">
                      {course.level}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4 text-brand-blue" />
                      <span>{course.enrolled.toLocaleString()} enrolled</span>
                    </div>
                    <div className="flex items-center gap-1 mt-2">
                      <Award className="h-4 w-4 text-brand-blue fill-brand-blue" />
                      <span className="text-sm font-semibold text-brand-blue">
                        {course.rating}
                      </span>
                    </div>
                  </div>

                  {/* Course Details */}
                  <div className="lg:col-span-2 p-8">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-3xl text-brand-blue mb-3">
                        {course.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {course.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      {/* Course Stats */}
                      <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-brand-blue" />
                          <span>{course.lessons} lessons</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-brand-blue" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Target className="h-4 w-4 text-brand-blue" />
                          <span>{course.prerequisites}</span>
                        </div>
                      </div>

                      {/* Learning Outcomes */}
                      <div>
                        <h4 className="text-sm font-semibold text-brand-blue mb-3">
                          What You'll Learn:
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {course.outcomes.map((outcome, index) => (
                            <li
                              // biome-ignore lint/suspicious/noArrayIndexKey: static list without stable id
                              key={index}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <CheckCircle className="h-4 w-4 text-brand-blue flex-shrink-0 mt-0.5" />
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Progress Bar (if enrolled) */}
                      {course.progress > 0 && (
                        <div>
                          <div className="flex items-center justify-between text-sm mb-2">
                            <span className="text-muted-foreground">
                              Your Progress
                            </span>
                            <span className="font-semibold text-brand-blue">
                              {course.progress}%
                            </span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                      )}

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <Button
                          className="bg-brand-blue hover:bg-brand-blue-dark text-white shadow-soft hover:shadow-soft-lg transition-all"
                          onClick={() => navigate({ to: course.path })}
                        >
                          {course.progress > 0
                            ? "Continue Learning"
                            : "Start Course"}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          className="border-brand-blue text-brand-blue hover:bg-brand-blue/10"
                          onClick={() => navigate({ to: "/roadmap" })}
                        >
                          View in Roadmap
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-brand-blue via-brand-blue-dark to-brand-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/generated/hero-section-bg.dim_1200x600.png')] opacity-10 bg-cover bg-center" />
        <div className="container text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of students and transform your digital marketing
            skills today. Get instant access to all courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-brand-blue hover:bg-white/90 shadow-soft-xl transition-all text-lg px-8 py-6 font-semibold"
              onClick={() => navigate({ to: "/contact" })}
            >
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
