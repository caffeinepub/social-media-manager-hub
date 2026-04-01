import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitContact, useSubscribeNewsletter } from "@/hooks/useQueries";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const submitContact = useSubmitContact();
  const subscribeNewsletter = useSubscribeNewsletter();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !contactForm.name ||
      !contactForm.email ||
      !contactForm.subject ||
      !contactForm.message
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    const id = BigInt(Date.now());
    submitContact.mutate(
      {
        id,
        name: contactForm.name,
        email: contactForm.email,
        subject: contactForm.subject,
        message: contactForm.message,
      },
      {
        onSuccess: () => {
          toast.success("Your message has been sent successfully!");
          setContactForm({ name: "", email: "", subject: "", message: "" });
        },
        onError: () => {
          toast.error("Failed to send message. Please try again.");
        },
      },
    );
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newsletterEmail) {
      toast.error("Please enter your email address");
      return;
    }

    subscribeNewsletter.mutate(newsletterEmail, {
      onSuccess: () => {
        toast.success("Successfully subscribed to our newsletter!");
        setNewsletterEmail("");
      },
      onError: (error: any) => {
        const errorMessage =
          error?.message || "Failed to subscribe. Please try again.";
        toast.error(errorMessage);
      },
    });
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-brand-blue leading-tight">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have questions about digital marketing? Want to share feedback?
              We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <Card className="border-border/50 shadow-soft-lg bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-brand-blue text-2xl">
                  <MessageSquare className="h-6 w-6" />
                  Send Us a Message
                </CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below and we'll respond within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base">
                      Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={contactForm.name}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, name: e.target.value })
                      }
                      required
                      className="h-12 text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={contactForm.email}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          email: e.target.value,
                        })
                      }
                      required
                      className="h-12 text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-base">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="What is this about?"
                      value={contactForm.subject}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          subject: e.target.value,
                        })
                      }
                      required
                      className="h-12 text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-base">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us what's on your mind..."
                      rows={6}
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          message: e.target.value,
                        })
                      }
                      required
                      className="text-base"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white shadow-soft hover:shadow-soft-lg transition-all h-12 text-base"
                    disabled={submitContact.isPending}
                  >
                    {submitContact.isPending ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Newsletter & Info */}
            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-brand-blue/10 to-brand-blue/5 border-brand-blue/20 shadow-soft-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-brand-blue text-2xl">
                    <Mail className="h-6 w-6" />
                    Subscribe to Our Newsletter
                  </CardTitle>
                  <CardDescription className="text-base">
                    Get the latest digital marketing tips and insights delivered
                    to your inbox
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleNewsletterSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="newsletter-email" className="text-base">
                        Email Address
                      </Label>
                      <Input
                        id="newsletter-email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        required
                        className="h-12 text-base bg-white"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white shadow-soft hover:shadow-soft-lg transition-all h-12 text-base"
                      disabled={subscribeNewsletter.isPending}
                    >
                      {subscribeNewsletter.isPending
                        ? "Subscribing..."
                        : "Subscribe"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-soft bg-white">
                <CardHeader>
                  <CardTitle className="text-brand-blue text-2xl">
                    Why Learn with The Social Jay?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-base">
                  <p className="text-muted-foreground leading-relaxed">
                    ✓ Structured learning path from beginner to expert
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    ✓ Practical, actionable strategies you can implement today
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    ✓ Curated resources and tools to accelerate your growth
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    ✓ Regular updates with the latest marketing trends
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-soft bg-white">
                <CardHeader>
                  <CardTitle className="text-brand-blue text-2xl">
                    Quick Links
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-base">
                  <p>
                    <a
                      href="/roadmap"
                      className="text-brand-blue hover:underline font-medium"
                    >
                      View Learning Roadmap
                    </a>
                  </p>
                  <p>
                    <a
                      href="/learn"
                      className="text-brand-blue hover:underline font-medium"
                    >
                      Start Learning
                    </a>
                  </p>
                  <p>
                    <a
                      href="/resources"
                      className="text-brand-blue hover:underline font-medium"
                    >
                      Browse Resources
                    </a>
                  </p>
                  <p>
                    <a
                      href="/blog"
                      className="text-brand-blue hover:underline font-medium"
                    >
                      Read Our Blog
                    </a>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
