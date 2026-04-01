import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAllResources } from "@/hooks/useQueries";
import { ExternalLink } from "lucide-react";

export default function ResourcesPage() {
  const { data: allResources = [], isLoading } = useAllResources();

  if (isLoading) {
    return (
      <div className="container py-12">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-muted rounded w-1/3" />
            <div className="h-4 bg-muted rounded w-2/3" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-48 bg-muted rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-20">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-blue">
              Resource Hub
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Curated collection of the best digital marketing tools and
              resources to help you succeed.
            </p>
          </div>

          {/* Banner */}
          <div className="mb-12">
            <img
              src="/assets/generated/resource-hub-banner.dim_800x200.png"
              alt="Resource Hub"
              className="rounded-lg shadow-soft-lg w-full"
            />
          </div>

          {/* Resources Grid */}
          {allResources.length === 0 ? (
            <Card className="shadow-soft border-border/50 bg-white">
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">
                  No resources available yet. Check back soon!
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allResources.map((resource) => (
                <Card
                  key={resource.id.toString()}
                  className="hover:shadow-soft-lg transition-all shadow-soft border-border/50 bg-white flex flex-col"
                >
                  <CardHeader className="flex-1">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <CardTitle className="text-xl text-brand-blue leading-tight">
                        {resource.title}
                      </CardTitle>
                      <Badge
                        variant={resource.isFree ? "default" : "secondary"}
                        className={
                          resource.isFree
                            ? "bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20 border-brand-blue/20 shrink-0"
                            : "shrink-0"
                        }
                      >
                        {resource.isFree ? "Free" : "Paid"}
                      </Badge>
                    </div>

                    <CardDescription className="leading-relaxed text-sm">
                      {resource.description}
                    </CardDescription>

                    {resource.category && (
                      <div className="mt-2">
                        <span className="text-xs text-muted-foreground">
                          Category: {resource.category}
                        </span>
                      </div>
                    )}
                  </CardHeader>

                  <CardContent className="pt-0">
                    <Button
                      variant="outline"
                      className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue/10"
                      asChild
                    >
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        Visit Resource
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
