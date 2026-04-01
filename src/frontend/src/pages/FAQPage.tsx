import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useFAQs, useSearchFAQs } from "@/hooks/useQueries";
import { useNavigate } from "@tanstack/react-router";
import { HelpCircle, MessageCircle, Search } from "lucide-react";
import { useState } from "react";

export default function FAQPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const { data: allFAQs, isLoading: allLoading } = useFAQs();
  const { data: searchResults, isLoading: searchLoading } =
    useSearchFAQs(searchTerm);

  const isLoading = searchTerm ? searchLoading : allLoading;
  const faqs = searchTerm ? searchResults : allFAQs;

  const categories = faqs
    ? ["all", ...Array.from(new Set(faqs.map((f) => f.category)))]
    : ["all"];

  const filteredFAQs = faqs?.filter((faq) => {
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    return matchesCategory && faq.isVisible;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-blue/5 via-background to-brand-blue-light/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-medium mb-6">
              <HelpCircle className="h-4 w-4" />
              Help Center
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Find answers to common questions about The Social Jay, digital
              marketing strategies, small business growth, and our service
              delivery process.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-14 text-lg shadow-soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 border-b border-border/40 bg-white">
        <div className="container">
          <Tabs
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="w-full"
          >
            <TabsList className="flex-wrap h-auto justify-center">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize"
                >
                  {category === "all" ? "All Questions" : category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container max-w-4xl">
          {isLoading ? (
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Card key={i} className="p-6 shadow-soft">
                  <Skeleton className="h-6 w-3/4 mb-4" />
                  <Skeleton className="h-20 w-full" />
                </Card>
              ))}
            </div>
          ) : filteredFAQs && filteredFAQs.length > 0 ? (
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <AccordionItem
                  key={Number(faq.id)}
                  value={`item-${index}`}
                  className="border border-border/40 rounded-lg px-6 shadow-soft hover:shadow-soft-lg transition-shadow"
                >
                  <AccordionTrigger className="text-left hover:text-brand-blue">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-brand-blue mt-1 flex-shrink-0" />
                      <span className="font-semibold">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pl-8 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-12">
              <HelpCircle className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground mb-6">
                {searchTerm
                  ? "No FAQs match your search. Try different keywords."
                  : "No FAQs available in this category."}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-brand-blue/5 to-brand-blue-light/5">
        <div className="container">
          <Card className="max-w-2xl mx-auto p-8 shadow-soft-lg text-center">
            <MessageCircle className="h-12 w-12 text-brand-blue mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Can't find the answer you're looking for? Our team is here to help
              you succeed.
            </p>
            <Button
              onClick={() => navigate({ to: "/contact" })}
              className="bg-brand-blue hover:bg-brand-blue-dark text-white shadow-soft"
            >
              Contact Us
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}
