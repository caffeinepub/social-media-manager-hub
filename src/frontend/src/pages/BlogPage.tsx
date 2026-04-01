import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useBlogPosts, useSearchBlogPosts } from "@/hooks/useQueries";
import { Calendar, Search, Tag, User } from "lucide-react";
import { useState } from "react";

export default function BlogPage() {
  const { data: allPosts = [], isLoading } = useBlogPosts();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { data: searchResults = [] } = useSearchBlogPosts(searchTerm);

  const displayPosts = searchTerm ? searchResults : allPosts;
  const filteredPosts = selectedCategory
    ? displayPosts.filter((post) => post.category === selectedCategory)
    : displayPosts;

  const categories = Array.from(new Set(allPosts.map((post) => post.category)));

  const formatDate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) / 1000000);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isLoading) {
    return (
      <div className="container py-12">
        <div className="max-w-5xl mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-1/3" />
            <div className="h-4 bg-muted rounded w-2/3" />
            <div className="space-y-4 mt-8">
              {[1, 2, 3].map((i) => (
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
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Marketing Insights Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert tutorials, industry insights, and actionable strategies to
              level up your digital marketing game.
            </p>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Category Filter */}
          {categories.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center gap-2 flex-wrap">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(null)}
                  className={
                    selectedCategory === null
                      ? "bg-brand-blue hover:bg-brand-blue/90"
                      : ""
                  }
                >
                  All
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={
                      selectedCategory === category
                        ? "bg-brand-blue hover:bg-brand-blue/90"
                        : ""
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Blog Posts */}
          {filteredPosts.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">
                  {searchTerm
                    ? "No articles found matching your search."
                    : "No blog posts available yet. Check back soon!"}
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {filteredPosts.map((post) => (
                <Card
                  key={post.id.toString()}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <Badge className="bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20">
                        <Tag className="h-3 w-3 mr-1" />
                        {post.category}
                      </Badge>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDate(post.timestamp)}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {post.author}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3 mb-4">
                      {post.content}
                    </p>
                    <Button
                      variant="link"
                      className="text-brand-blue p-0 h-auto"
                    >
                      Read more →
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
