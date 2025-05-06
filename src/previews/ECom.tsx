import { useState } from "react";
import {
  ShoppingBag,
  Search,
  Menu,
  X,
  Heart,
  User,
  ChevronRight,
  ChevronDown,
  Star,
  ArrowRight,
  Send,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface Theme {}

export default function EcommerceLandingPage({ theme }: { theme: Theme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const featuredProducts = [
    {
      id: 1,
      name: "Modern Lounge Chair",
      price: "$249.99",
      category: "Furniture",
      image: "https://placehold.co/500x500",
      rating: 4.8,
      reviewCount: 124,
    },
    {
      id: 2,
      name: "Minimalist Table Lamp",
      price: "$89.99",
      category: "Lighting",
      image: "https://placehold.co/500x500",
      rating: 4.6,
      reviewCount: 98,
    },
    {
      id: 3,
      name: "Ceramic Plant Pot",
      price: "$34.99",
      category: "Home Decor",
      image: "https://placehold.co/500x500",
      rating: 4.9,
      reviewCount: 156,
    },
    {
      id: 4,
      name: "Wool Throw Blanket",
      price: "$59.99",
      category: "Textiles",
      image: "https://placehold.co/500x500",
      rating: 4.7,
      reviewCount: 87,
    },
  ];

  const collections = [
    {
      name: "Summer Essentials",
      description: "Refresh your space for the season",
      image: "https://placehold.co/600x400",
    },
    {
      name: "Workspace Solutions",
      description: "Elevate your home office setup",
      image: "https://placehold.co/600x400",
    },
    {
      name: "Outdoor Living",
      description: "Transform your outdoor spaces",
      image: "https://placehold.co/600x400",
    },
  ];

  const categories = [
    "Furniture",
    "Lighting",
    "Home Decor",
    "Textiles",
    "Kitchen",
    "Bath",
    "Outdoor",
    "Office",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
        Free shipping on orders over $75 • 30-day returns
      </div>

      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <button
              className="md:hidden flex items-center text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-foreground">NOVI</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {categories.slice(0, 5).map((category) => (
                <a
                  key={category}
                  href="#"
                  className="text-foreground hover:text-primary text-sm font-medium"
                >
                  {category}
                </a>
              ))}
              <div className="relative group">
                <button className="text-foreground hover:text-primary text-sm font-medium flex items-center">
                  More <ChevronDown size={16} className="ml-1" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-card rounded-md shadow-lg hidden group-hover:block">
                  {categories.slice(5).map((category) => (
                    <a
                      key={category}
                      href="#"
                      className="block px-4 py-2 text-sm text-card-foreground hover:bg-accent"
                    >
                      {category}
                    </a>
                  ))}
                </div>
              </div>
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <button className="text-foreground hover:text-primary">
                <Search size={20} />
              </button>
              <button className="text-foreground hover:text-primary">
                <User size={20} />
              </button>
              <button className="text-foreground hover:text-primary">
                <Heart size={20} />
              </button>
              <button className="text-foreground hover:text-primary relative">
                <ShoppingBag size={20} />
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-4 py-2 space-y-1">
              {categories.map((category) => (
                <a
                  key={category}
                  href="#"
                  className="block py-2 text-foreground hover:text-primary text-sm font-medium"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-secondary h-96 md:h-screen max-h-[700px]">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                Modern designs for modern living
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Discover our curated collection of contemporary furniture and
                home decor
              </p>
              <div className="flex space-x-4">
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors">
                  Shop Now
                </button>
                <button className="border border-border text-foreground px-6 py-3 rounded-md font-medium hover:bg-accent transition-colors">
                  View Collections
                </button>
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-0 w-1/2 h-full hidden md:block">
            <img
              src="https://placehold.co/800x800"
              alt="Modern living room setup"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Shop by Category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category, index) => (
                <a
                  key={index}
                  href="#"
                  className="group relative overflow-hidden rounded-lg h-48"
                >
                  <img
                    src={`https://placehold.co/400x400`}
                    alt={category}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-white font-medium text-lg">
                      {category}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-accent">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-foreground">
                New Arrivals
              </h2>
              <a
                href="#"
                className="text-primary flex items-center hover:underline"
              >
                View All <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                    <button className="absolute top-4 right-4 bg-background rounded-full p-2 hover:bg-accent transition-colors">
                      <Heart size={20} className="text-foreground" />
                    </button>
                  </div>
                  <div className="p-4">
                    <span className="text-sm text-muted-foreground">
                      {product.category}
                    </span>
                    <h3 className="font-medium text-foreground mt-1">
                      {product.name}
                    </h3>
                    <div className="flex items-center mt-2">
                      <div className="flex items-center text-yellow-500">
                        <Star size={16} fill="currentColor" strokeWidth={0} />
                        <span className="ml-1 text-sm text-foreground">
                          {product.rating}
                        </span>
                      </div>
                      <span className="mx-2 text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">
                        {product.reviewCount} reviews
                      </span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span className="font-bold text-foreground">
                        {product.price}
                      </span>
                      <button className="bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-medium hover:bg-opacity-90 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Collections */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Shop Our Collections
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {collections.map((collection, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg group"
                >
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-80 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-white font-bold text-xl">
                      {collection.name}
                    </h3>
                    <p className="text-white/80 mb-4">
                      {collection.description}
                    </p>
                    <button className="bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-medium hover:bg-opacity-90 transition-colors flex items-center">
                      Explore <ArrowRight size={16} className="ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
              Don't just take our word for it — see what customers are saying
              about our products and service.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-card p-6 rounded-lg shadow-sm">
                  <div className="flex text-yellow-500 mb-4 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                  <p className="text-card-foreground mb-6">
                    "The quality of the products exceeded my expectations. The
                    customer service was exceptional, and delivery was prompt.
                    I'll definitely be shopping here again!"
                  </p>
                  <div>
                    <p className="font-medium text-foreground">Sarah T.</p>
                    <p className="text-sm text-muted-foreground">
                      Verified Customer
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Join Our Newsletter
              </h2>
              <p className="text-muted-foreground mb-8">
                Sign up to receive updates on new arrivals, special offers, and
                styling inspiration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ring bg-card"
                />
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center">
                  Subscribe <Send size={16} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { title: "Free Shipping", desc: "On all orders over $75" },
                { title: "30-Day Returns", desc: "Hassle-free returns policy" },
                {
                  title: "Secure Payments",
                  desc: "Protected by industry standards",
                },
                { title: "24/7 Support", desc: "We're here to help anytime" },
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center">
                  <h3 className="font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Offer Alert */}
        <div className="container mx-auto px-4 py-8">
          <Alert className="bg-accent border-primary">
            <AlertTitle className="text-foreground font-medium">
              Special Offer!
            </AlertTitle>
            <AlertDescription className="text-muted-foreground">
              Use code WELCOME15 for 15% off your first order. Limited time
              only!
            </AlertDescription>
          </Alert>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card text-card-foreground mt-auto pt-16 pb-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-lg mb-4">NOVI</h3>
              <p className="text-muted-foreground mb-4">
                Curated modern furniture and home decor for thoughtful living
                spaces.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-4">Shop</h4>
              <ul className="space-y-2">
                {categories.slice(0, 5).map((category) => (
                  <li key={category}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary"
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                {["About Us", "Sustainability", "Careers", "Press", "Blog"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Help</h4>
              <ul className="space-y-2">
                {[
                  "FAQ",
                  "Shipping & Returns",
                  "Store Locations",
                  "Contact Us",
                  "Privacy Policy",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2025 NOVI. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
