import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAllResources } from "@/hooks/useQueries";
import {
  BookOpen,
  Download,
  ExternalLink,
  FileText,
  Sparkles,
  Users,
} from "lucide-react";

export default function CommunityHubPage() {
  const { data: resources, isLoading } = useAllResources();

  const featuredResources = resources?.filter((r) => r.featured) || [];
  const downloadableResources =
    resources?.filter(
      (r) =>
        r.category.toLowerCase().includes("template") ||
        r.category.toLowerCase().includes("toolkit"),
    ) || [];
  const guideResources =
    resources?.filter((r) => r.category.toLowerCase().includes("guide")) || [];
  const toolResources =
    resources?.filter(
      (r) =>
        !r.category.toLowerCase().includes("template") &&
        !r.category.toLowerCase().includes("toolkit") &&
        !r.category.toLowerCase().includes("guide"),
    ) || [];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-blue/5 via-background to-brand-blue-light/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-medium mb-6">
              <Users className="h-4 w-4" />
              Community Resources
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Community & Resource Hub
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Access downloadable templates, toolkits, curated guides, and
              recommended resources to accelerate your digital marketing
              success.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      {featuredResources.length > 0 && (
        <section className="py-12 border-b border-border/40 bg-white">
          <div className="container">
            <div className="flex items-center gap-2 mb-8">
              <Sparkles className="h-6 w-6 text-brand-blue" />
              <h2 className="text-2xl font-bold">Featured Resources</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredResources.slice(0, 3).map((resource) => (
                <Card
                  key={Number(resource.id)}
                  className="shadow-soft hover:shadow-soft-lg transition-all border-2 border-brand-blue/20"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge className="bg-brand-blue text-white">
                        Featured
                      </Badge>
                      {resource.isFree && <Badge variant="outline">Free</Badge>}
                    </div>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <CardDescription>{resource.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {resource.description}
                    </p>
                    <Button
                      asChild
                      className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white"
                    >
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Access Resource
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Resource Categories */}
      <section className="py-16">
        <div className="container">
          <Tabs defaultValue="templates" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="templates">
                <Download className="h-4 w-4 mr-2" />
                Templates
              </TabsTrigger>
              <TabsTrigger value="guides">
                <BookOpen className="h-4 w-4 mr-2" />
                Guides
              </TabsTrigger>
              <TabsTrigger value="tools">
                <FileText className="h-4 w-4 mr-2" />
                Tools
              </TabsTrigger>
            </TabsList>

            {/* Templates Tab */}
            <TabsContent value="templates" className="space-y-6">
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card key={i} className="shadow-soft">
                      <CardHeader>
                        <Skeleton className="h-6 w-3/4 mb-2" />
                        <Skeleton className="h-4 w-1/2" />
                      </CardHeader>
                      <CardContent>
                        <Skeleton className="h-20 w-full mb-4" />
                        <Skeleton className="h-10 w-full" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : downloadableResources.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {downloadableResources.map((resource) => (
                    <Card
                      key={Number(resource.id)}
                      className="shadow-soft hover:shadow-soft-lg transition-shadow"
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Download className="h-5 w-5 text-brand-blue" />
                          {resource.isFree && (
                            <Badge variant="outline">Free</Badge>
                          )}
                        </div>
                        <CardTitle className="text-lg">
                          {resource.title}
                        </CardTitle>
                        <CardDescription>{resource.category}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {resource.description}
                        </p>
                        <Button
                          asChild
                          variant="outline"
                          className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue/10"
                        >
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Download className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    No templates available yet.
                  </p>
                </div>
              )}
            </TabsContent>

            {/* Guides Tab */}
            <TabsContent value="guides" className="space-y-6">
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <Card key={i} className="shadow-soft">
                      <CardHeader>
                        <Skeleton className="h-6 w-3/4 mb-2" />
                        <Skeleton className="h-4 w-1/2" />
                      </CardHeader>
                      <CardContent>
                        <Skeleton className="h-24 w-full mb-4" />
                        <Skeleton className="h-10 w-full" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : guideResources.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {guideResources.map((resource) => (
                    <Card
                      key={Number(resource.id)}
                      className="shadow-soft hover:shadow-soft-lg transition-shadow"
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <BookOpen className="h-5 w-5 text-brand-blue" />
                          {resource.isFree && (
                            <Badge variant="outline">Free</Badge>
                          )}
                        </div>
                        <CardTitle className="text-lg">
                          {resource.title}
                        </CardTitle>
                        <CardDescription>{resource.category}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {resource.description}
                        </p>
                        <Button
                          asChild
                          variant="outline"
                          className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue/10"
                        >
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <BookOpen className="h-4 w-4 mr-2" />
                            Read Guide
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <BookOpen className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    No guides available yet.
                  </p>
                </div>
              )}
            </TabsContent>

            {/* Tools Tab */}
            <TabsContent value="tools" className="space-y-6">
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card key={i} className="shadow-soft">
                      <CardHeader>
                        <Skeleton className="h-6 w-3/4 mb-2" />
                        <Skeleton className="h-4 w-1/2" />
                      </CardHeader>
                      <CardContent>
                        <Skeleton className="h-20 w-full mb-4" />
                        <Skeleton className="h-10 w-full" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : toolResources.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {toolResources.map((resource) => (
                    <Card
                      key={Number(resource.id)}
                      className="shadow-soft hover:shadow-soft-lg transition-shadow"
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <FileText className="h-5 w-5 text-brand-blue" />
                          {resource.isFree && (
                            <Badge variant="outline">Free</Badge>
                          )}
                        </div>
                        <CardTitle className="text-lg">
                          {resource.title}
                        </CardTitle>
                        <CardDescription>{resource.category}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {resource.description}
                        </p>
                        <Button
                          asChild
                          variant="outline"
                          className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue/10"
                        >
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Visit Tool
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <FileText className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    No tools available yet.
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
