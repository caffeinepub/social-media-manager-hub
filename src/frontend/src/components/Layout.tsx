import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Heart, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Layout() {
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Courses", path: "/courses" },
    { label: "Roadmap", path: "/roadmap" },
    {
      label: "Learn",
      path: null,
      submenu: [
        { label: "Educational Content", path: "/learn" },
        { label: "SEO Notes", path: "/seo-notes" },
        { label: "Blog", path: "/blog" },
      ],
    },
    {
      label: "Services",
      path: null,
      submenu: [
        { label: "Testimonials", path: "/testimonials" },
        { label: "Portfolio", path: "/portfolio" },
        { label: "Pricing", path: "/pricing" },
      ],
    },
    { label: "Resources", path: "/resources" },
    { label: "Contact", path: "/contact" },
  ];

  const handleNavigation = (path: string) => {
    navigate({ to: path });
    setMobileMenuOpen(false);
  };

  const isActiveSubmenu = (submenu: { path: string }[]) => {
    return submenu.some((item) => currentPath === item.path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/95 shadow-xs">
        <div className="container flex h-20 items-center justify-between">
          <button
            type="button"
            className="flex items-center gap-3 cursor-pointer bg-transparent border-none p-0"
            onClick={() => handleNavigation("/")}
          >
            <img
              src="/assets/file_0000000056f871fab7addb18f64ff21b-019d47eb-6048-752d-9f66-e24d5c00c8b9.png"
              alt="The Social Jay"
              className="h-12 w-12 rounded-full object-cover shadow-soft"
            />
            <span className="font-bold text-xl brand-blue">The Social Jay</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) =>
              item.submenu ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <button
                      type="button"
                      className={`text-sm font-medium transition-colors hover:text-primary relative flex items-center gap-1 ${
                        isActiveSubmenu(item.submenu)
                          ? "brand-blue"
                          : "text-foreground/70"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="h-3 w-3" />
                      {isActiveSubmenu(item.submenu) && (
                        <span className="absolute -bottom-[1.35rem] left-0 right-0 h-0.5 bg-primary rounded-full" />
                      )}
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    {item.submenu.map((subItem) => (
                      <DropdownMenuItem
                        key={subItem.path}
                        onClick={() => handleNavigation(subItem.path)}
                        className={
                          currentPath === subItem.path
                            ? "bg-primary/10 text-primary"
                            : ""
                        }
                      >
                        {subItem.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <button
                  type="button"
                  key={item.path}
                  onClick={() => handleNavigation(item.path!)}
                  className={`text-sm font-medium transition-colors hover:text-primary relative ${
                    currentPath === item.path
                      ? "brand-blue"
                      : "text-foreground/70"
                  }`}
                >
                  {item.label}
                  {currentPath === item.path && (
                    <span className="absolute -bottom-[1.35rem] left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </button>
              ),
            )}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover:bg-primary/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border/40 bg-card shadow-soft-lg">
            <nav className="container py-4 flex flex-col gap-2">
              {navItems.map((item) =>
                item.submenu ? (
                  <div key={item.label} className="space-y-1">
                    <div className="px-4 py-2 text-sm font-semibold brand-blue">
                      {item.label}
                    </div>
                    {item.submenu.map((subItem) => (
                      <button
                        type="button"
                        key={subItem.path}
                        onClick={() => handleNavigation(subItem.path)}
                        className={`w-full text-left px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                          currentPath === subItem.path
                            ? "bg-primary/10 text-primary"
                            : "text-foreground/70 hover:bg-secondary hover:text-primary"
                        }`}
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                ) : (
                  <button
                    type="button"
                    key={item.path}
                    onClick={() => handleNavigation(item.path!)}
                    className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      currentPath === item.path
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/70 hover:bg-secondary hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </button>
                ),
              )}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border/40 bg-card mt-20">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/assets/file_0000000056f871fab7addb18f64ff21b-019d47eb-6048-752d-9f66-e24d5c00c8b9.png"
                  alt="The Social Jay"
                  className="h-10 w-10 rounded-full object-cover shadow-soft"
                />
                <span className="font-bold text-lg brand-blue">
                  The Social Jay
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your complete digital marketing education platform. Learn, grow,
                and succeed with structured guidance.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 brand-blue">Learn</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <button
                    type="button"
                    onClick={() => handleNavigation("/courses")}
                    className="hover:text-primary transition-colors"
                  >
                    Courses
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNavigation("/roadmap")}
                    className="hover:text-primary transition-colors"
                  >
                    Roadmap
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNavigation("/learn")}
                    className="hover:text-primary transition-colors"
                  >
                    Educational Content
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNavigation("/seo-notes")}
                    className="hover:text-primary transition-colors"
                  >
                    SEO Notes
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNavigation("/blog")}
                    className="hover:text-primary transition-colors"
                  >
                    Blog & Insights
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 brand-blue">Services</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <button
                    type="button"
                    onClick={() => handleNavigation("/testimonials")}
                    className="hover:text-primary transition-colors"
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNavigation("/portfolio")}
                    className="hover:text-primary transition-colors"
                  >
                    Portfolio
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNavigation("/pricing")}
                    className="hover:text-primary transition-colors"
                  >
                    Pricing
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNavigation("/faq")}
                    className="hover:text-primary transition-colors"
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 brand-blue">Resources</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <button
                    type="button"
                    onClick={() => handleNavigation("/resources")}
                    className="hover:text-primary transition-colors"
                  >
                    Tools & Resources
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNavigation("/community")}
                    className="hover:text-primary transition-colors"
                  >
                    Community Hub
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNavigation("/contact")}
                    className="hover:text-primary transition-colors"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()}. Built with{" "}
            <Heart className="inline h-4 w-4 text-primary fill-primary mx-1" />{" "}
            using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
