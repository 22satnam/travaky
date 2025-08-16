'use client'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function FooterSection() {
  return (
    <footer className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-lg text-muted-foreground mb-4">Have questions? Our support team is here to help 24/7.</p>
          <Button size="lg" className="bg-gradient-accent text-white hover:opacity-90 shadow-medium">
            Contact Us
          </Button>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">&copy; 2025 Travaky. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
