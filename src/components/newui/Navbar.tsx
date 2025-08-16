import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Travaky
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-brand-accent transition-colors">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-brand-accent transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-brand-accent transition-colors">
              Contact
            </a>
            <a href="#dashboard" className="text-foreground hover:text-brand-accent transition-colors">
              Dashboard
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-foreground hover:text-brand-accent">
              Login
            </Button>
            <Button className="bg-gradient-accent text-white hover:opacity-90 shadow-medium">
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-brand-accent transition-colors">
                Home
              </a>
              <a href="#about" className="text-foreground hover:text-brand-accent transition-colors">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-brand-accent transition-colors">
                Contact
              </a>
              <a href="#dashboard" className="text-foreground hover:text-brand-accent transition-colors">
                Dashboard
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="justify-start">
                  Login
                </Button>
                <Button className="bg-gradient-accent text-white hover:opacity-90">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;