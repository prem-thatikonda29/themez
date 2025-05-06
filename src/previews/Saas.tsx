import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  CheckCircle,
  Palette,
  Rocket,
  BarChart,
  Shield,
  Zap,
  Users,
  Globe,
  Clock,
  Mail,
  Phone,
  MessageSquare,
  ArrowRight,
  ChevronRight,
  Star,
  BadgeCheck,
  Cloud,
  Cpu,
  Database,
  GitBranch,
  Server,
} from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent -z-10" />
      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Rocket className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">
              Version 3.0 just launched!
            </span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl text-foreground">
            <span className="bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
              Enterprise-grade
            </span>{" "}
            SaaS Solution
          </h1>
          <p className="mt-6 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
            Accelerate your business growth with our all-in-one platform trusted
            by over 10,000 companies worldwide.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="group">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              <Phone className="mr-2 h-4 w-4" />
              Book Demo
            </Button>
          </div>
          <div className="mt-12 flex items-center justify-center gap-x-8">
            <div className="flex items-center gap-x-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-background bg-primary/20"
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                Join 1,000+ businesses
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                4.8/5 (2,000+ reviews)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LogoCloud = () => {
  const logos = [
    { name: "TechCorp" },
    { name: "InnovateCo" },
    { name: "StartupX" },
    { name: "GlobalSoft" },
    { name: "DataSystems" },
  ];

  return (
    <section className="py-12 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-muted-foreground">
          Trusted by industry leaders
        </h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 items-center gap-x-8 gap-y-10">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="col-span-1 flex justify-center grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
            >
              <p className="h-12 object-contain">{logo.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const KeyFeatures = () => {
  const features = [
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Advanced Analytics",
      description:
        "Real-time dashboards with customizable metrics and reporting.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Enterprise Security",
      description:
        "SOC 2 Type II compliant with end-to-end encryption and RBAC.",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Lightning Fast",
      description:
        "Built for performance with sub-second response times at scale.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Team Collaboration",
      description: "Seamless teamwork with shared workspaces and permissions.",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Infrastructure",
      description: "Multi-region deployment with 99.99% uptime SLA.",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "24/7 Support",
      description: "Dedicated customer success team with rapid response times.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Everything you need
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built for the modern enterprise
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our platform combines powerful features with intuitive design to
            streamline your operations and drive growth.
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="p-8 bg-card border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                  {feature.icon}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "We've seen a 300% ROI since implementing this platform. The analytics alone have transformed our decision-making process.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp",
      rating: 5,
    },
    {
      quote:
        "The security features gave our compliance team peace of mind during our audit. Implementation was seamless with their support.",
      author: "Michael Chang",
      role: "CTO, FinTech Solutions",
      rating: 5,
    },
    {
      quote:
        "Our customer support team's efficiency improved by 40% after switching. The automation capabilities are game-changing.",
      author: "Emma Davis",
      role: "VP Operations, ServiceCo",
      rating: 4,
    },
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by forward-thinking teams
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Join thousands of satisfied customers who have transformed their
            businesses with our platform.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.author}
              className="p-8 bg-card border-border"
            >
              <div className="flex items-center gap-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-muted-foreground/30" />
                ))}
              </div>
              <blockquote className="text-lg leading-relaxed text-foreground">
                "{testimonial.quote}"
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-x-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </figcaption>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const tiers = [
    {
      name: "Starter",
      id: "tier-starter",
      href: "#",
      price: { monthly: "$29", annually: "$25" },
      description: "Perfect for small teams getting started.",
      features: [
        "Up to 10 users",
        "Basic analytics",
        "Email support",
        "Community access",
      ],
      mostPopular: false,
    },
    {
      name: "Professional",
      id: "tier-professional",
      href: "#",
      price: { monthly: "$99", annually: "$89" },
      description: "For growing businesses with advanced needs.",
      features: [
        "Up to 50 users",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Custom integrations",
      ],
      mostPopular: true,
    },
    {
      name: "Enterprise",
      id: "tier-enterprise",
      href: "#",
      price: { monthly: "Custom", annually: "Custom" },
      description: "For organizations with complex requirements.",
      features: [
        "Unlimited users",
        "Dedicated infrastructure",
        "24/7 premium support",
        "SLA guarantees",
        "Custom development",
        "Security audit",
      ],
      mostPopular: false,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Start for free, upgrade as you grow. No hidden fees, ever.
          </p>
        </div>
        <div className="mt-16 flex justify-center">
          <div className="inline-flex rounded-lg bg-muted p-1">
            <button
              type="button"
              className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-foreground"
            >
              Monthly
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Annually
            </button>
          </div>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.id}
              className={`p-8 border-border ${
                tier.mostPopular ? "ring-2 ring-primary" : ""
              }`}
            >
              {tier.mostPopular && (
                <div className="flex justify-center">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/30">
                    Most popular
                  </span>
                </div>
              )}
              <h3
                id={tier.id}
                className="text-2xl font-bold text-foreground mt-6 text-center"
              >
                {tier.name}
              </h3>
              <p className="mt-4 text-center text-muted-foreground">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline justify-center gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-foreground">
                  {tier.price.monthly}
                </span>
                <span className="text-sm font-semibold leading-6 text-muted-foreground">
                  /month
                </span>
              </p>
              <Button
                variant={tier.mostPopular ? "default" : "outline"}
                className="w-full mt-8 group"
              >
                Get started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <ul className="mt-10 space-y-4 text-sm leading-6 text-foreground">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckCircle className="h-6 w-5 flex-none text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  const technologies = [
    {
      name: "Cloud Infrastructure",
      icon: <Cloud className="h-6 w-6 text-primary" />,
      description: "Scalable, resilient architecture on AWS and GCP",
    },
    {
      name: "Real-time Processing",
      icon: <Cpu className="h-6 w-6 text-primary" />,
      description: "Event-driven architecture with sub-second latency",
    },
    {
      name: "Data Storage",
      icon: <Database className="h-6 w-6 text-primary" />,
      description: "Multi-model database with ACID compliance",
    },
    {
      name: "CI/CD Pipeline",
      icon: <GitBranch className="h-6 w-6 text-primary" />,
      description: "Automated deployments with zero downtime",
    },
    {
      name: "Global Edge Network",
      icon: <Globe className="h-6 w-6 text-primary" />,
      description: "100+ locations worldwide for low-latency access",
    },
    {
      name: "Kubernetes Orchestration",
      icon: <Server className="h-6 w-6 text-primary" />,
      description: "Containerized microservices with auto-scaling",
    },
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Built with modern technology
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Enterprise-grade foundation
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our platform leverages cutting-edge technologies to deliver
            reliability, security, and performance at scale.
          </p>
        </div>
        <div className="mt-20">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech) => (
              <div key={tech.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-foreground">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    {tech.icon}
                  </div>
                  {tech.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  {tech.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-primary/10 px-6 py-16 sm:rounded-3xl sm:px-16 md:py-24 lg:flex lg:gap-x-20 lg:px-24 lg:py-32">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to transform your business?
              <br />
              Start your free trial today.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              No credit card required. Get started in minutes.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Contact Sales
              </Button>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8 hidden lg:block">
            <div className="absolute left-0 top-0 w-[32rem] -translate-x-1/2 rounded-xl bg-background shadow-xl ring-1 ring-foreground/10">
              <div className="h-full w-full bg-gradient-to-br from-primary/10 to-transparent rounded-xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-x-2">
                    <div className="h-3 w-3 rounded-full bg-primary" />
                    <div className="h-3 w-3 rounded-full bg-primary/50" />
                    <div className="h-3 w-3 rounded-full bg-primary/20" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-full rounded bg-primary/10" />
                    <div className="h-4 w-3/4 rounded bg-primary/10" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 h-32 rounded bg-primary/10" />
                    <div className="col-span-1 h-32 rounded bg-primary/10" />
                  </div>
                  <div className="h-8 w-full rounded bg-primary/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const navigation = {
    product: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "Roadmap", href: "#" },
    ],
    company: [
      { name: "About", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Contact", href: "#" },
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "Community", href: "#" },
      { name: "Status", href: "#" },
    ],
    legal: [
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" },
    ],
  };

  return (
    <footer className="bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center gap-x-2">
              <Rocket className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">SaaSPro</span>
            </div>
            <p className="text-sm leading-6 text-muted-foreground">
              The complete platform for modern businesses to grow and scale.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">
                  Product
                </h3>
                <ul className="mt-6 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">
                  Company
                </h3>
                <ul className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">
                  Resources
                </h3>
                <ul className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">
                  Legal
                </h3>
                <ul className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-border pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-muted-foreground">
            &copy; 2023 SaaSPro, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

interface ThemeSwitcherProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

const ThemeSwitcher = ({ currentTheme, onThemeChange }: ThemeSwitcherProps) => {
  const themes: Theme[] = ["default", "purple", "green", "blue", "red"];

  return (
    <div className="fixed top-4 right-4 z-50 bg-background/80 backdrop-blur-sm rounded-lg p-2 border border-border shadow-sm">
      <div className="flex items-center gap-2">
        <Palette className="h-4 w-4 text-foreground" />
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

type Theme = "default" | "purple" | "green" | "blue" | "red";

interface SaasProps {
  theme: Theme;
}

function Saas({ theme }: SaasProps) {
  return (
    <div className={`min-h-screen w-full bg-background text-foreground`}>
      <div>
        <Hero />
        <LogoCloud />
        <KeyFeatures />
        <Testimonials />
        <Pricing />
        <TechStack />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

export default Saas;
