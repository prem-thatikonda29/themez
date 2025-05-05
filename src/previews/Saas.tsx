import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Palette } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Transform Your Business with Our SaaS Solution
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Streamline your workflow, boost productivity, and scale your
            business with our powerful platform.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "This platform has revolutionized how we work. Incredible results!",
      author: "Sarah Johnson",
      role: "CEO, TechCorp",
    },
    {
      quote: "The best investment we've made for our business growth.",
      author: "Michael Chang",
      role: "Founder, StartupX",
    },
    {
      quote: "Outstanding support and powerful features. Highly recommended!",
      author: "Emma Davis",
      role: "CTO, InnovateCo",
    },
  ];

  return (
    <section className="py-24 px-24">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="p-6">
              <blockquote className="text-lg mb-4">
                {testimonial.quote}
              </blockquote>
              <cite className="not-italic">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-muted-foreground">{testimonial.role}</div>
              </cite>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "Easy Integration",
      description: "Connect with your favorite tools seamlessly.",
    },
    {
      title: "Real-time Analytics",
      description: "Get instant insights into your business performance.",
    },
    {
      title: "Secure Platform",
      description: "Enterprise-grade security for your peace of mind.",
    },
    {
      title: "24/7 Support",
      description: "Our team is here to help you succeed.",
    },
  ];

  return (
    <section className="py-24 bg-muted/50 px-24">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          Features That Set Us Apart
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6">
              <CheckCircle className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

interface ThemeSwitcherProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

const ThemeSwitcher = ({ currentTheme, onThemeChange }: ThemeSwitcherProps) => {
  const themes: Theme[] = ["default", "purple", "green", "blue"];

  return (
    <div className="fixed top-4 right-4 z-50 bg-background/80 backdrop-blur-sm rounded-lg p-2 border border-border">
      <div className="flex items-center gap-2">
        <Palette className="h-4 w-4" />
        {themes.map((theme) => (
          <Button
            key={theme}
            variant={currentTheme === theme ? "default" : "outline"}
            size="sm"
            onClick={() => onThemeChange(theme)}
            className="capitalize"
          >
            {theme}
          </Button>
        ))}
      </div>
    </div>
  );
};

type Theme = "default" | "purple" | "green" | "blue";

interface SaasProps {
  theme: Theme;
}

function Saas({ theme }: SaasProps) {
  return (
    <section className="min-h-screen w-full">
      <div>
        <Hero />
        <Testimonials />
        <Features />
      </div>
    </section>
  );
}

export default Saas;
