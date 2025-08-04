"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Globe,
  Users,
  Award,
  BookOpen,
  Target,
  Heart,
  Lightbulb,
  Star,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  CheckCircle,
  Building,
  Briefcase,
  TrendingUp,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CosmoversityLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const programs = [
    {
      title: "Global Dual-Degree MBA",
      description:
        "Our flagship program offering dual degrees from UK and international institutions",
      duration: "18-24 months",
      mode: "Blended Learning",
      accreditation: "UK Accredited",
      featured: true,
    },
    {
      title: "Higher National Diplomas (HNDs)",
      description: "Pearson-accredited HNDs across various disciplines",
      duration: "2 years",
      mode: "Flexible Delivery",
      accreditation: "Pearson",
    },
    {
      title: "Executive Qualifications",
      description: "Professional qualifications from CMI, CIM, and ILM",
      duration: "6-12 months",
      mode: "Executive Format",
      accreditation: "CMI/CIM/ILM",
    },
    {
      title: "Faculty Development Programs",
      description: "Specialized programs for university staff development",
      duration: "Customized",
      mode: "Workshop Based",
      accreditation: "SQA",
    },
  ];

  const leadership = [
    {
      name: "Dr. Sarah Al-Mansouri",
      position: "Chief Executive Officer",
      education: "PhD Education Management, Cambridge",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Prof. James Mitchell",
      position: "Academic Director",
      education: "PhD Business Administration, Oxford",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Priya Sharma",
      position: "Director of International Relations",
      education: "PhD International Business, LSE",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Mr. Ahmed Hassan",
      position: "Director of Operations",
      education: "MBA Operations Management, INSEAD",
      image: "/placeholder.svg?height=300&width=300",
    },
  ];

  const testimonials = [
    {
      name: "Fatima Al-Zahra",
      position: "MBA Graduate, Dubai",
      content:
        "The Global Dual-Degree MBA transformed my career. The UK accreditation and international exposure opened doors I never imagined.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Rajesh Kumar",
      position: "HND Graduate, Mumbai",
      content:
        "Cosmoversity's flexible delivery model allowed me to study while working. The quality of education is exceptional.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Dr. Mary Johnson",
      position: "University Faculty, Nairobi",
      content:
        "The Faculty Development Program enhanced my teaching methodologies significantly. Highly recommended for academic professionals.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
  ];

  const partners = [
    { name: "Pearson", logo: "/placeholder.svg?height=60&width=120" },
    {
      name: "Scottish Qualifications Authority",
      logo: "/placeholder.svg?height=60&width=120",
    },
    {
      name: "Chartered Management Institute",
      logo: "/placeholder.svg?height=60&width=120",
    },
    {
      name: "Chartered Institute of Marketing",
      logo: "/placeholder.svg?height=60&width=120",
    },
    {
      name: "Institute of Leadership & Management",
      logo: "/placeholder.svg?height=60&width=120",
    },
    {
      name: "University of Cambridge",
      logo: "/placeholder.svg?height=60&width=120",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center space-x-2">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Cosmoversity"
                  width={120}
                  height={120}
                  className="cursor-pointer"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/about"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                About
              </Link>
              <Link
                href="#programs"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Programs
              </Link>
              <Link
                href="#leadership"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Leadership
              </Link>
              <Link
                href="#partners"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Partners
              </Link>
              <Link
                href="#testimonials"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Testimonials
              </Link>
              <Button asChild>
                <Link href="#enquiry">Get Started</Link>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="#about"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="#programs"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Programs
                </Link>
                <Link
                  href="#leadership"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Leadership
                </Link>
                <Link
                  href="#partners"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Partners
                </Link>
                <Link
                  href="#testimonials"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Testimonials
                </Link>
                <Button asChild className="w-fit">
                  <Link href="#enquiry">Get Started</Link>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                  UK-Accredited Education Provider
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Elevate Your Future with{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Global Education
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Sharjah-based, UK-accredited education provider offering
                  globally recognized qualifications through flexible blended
                  delivery across UAE, India, Africa, and Nepal.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Explore Programs
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Download Brochure
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">
                    10,000+
                  </div>
                  <div className="text-sm text-gray-600">Graduates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-3xl opacity-20"></div>
              <Image
                src="/graduation.png"
                alt="Cosmoversity Campus"
                width={800}
                height={600}
                className="relative rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Cosmoversity
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to delivering world-class education that bridges
              global standards with local accessibility, empowering learners to
              achieve their academic and professional aspirations.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To provide accessible, high-quality UK-accredited education
                  that empowers individuals and institutions globally, fostering
                  innovation and excellence in learning.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Excellence, Innovation, Accessibility, and Global Perspective
                  drive everything we do, ensuring our students receive
                  world-class education with personalized support.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Why Choose Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  UK accreditation, flexible delivery, global recognition,
                  expert faculty, and comprehensive support services make us the
                  preferred choice for quality education.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Global Reach, Local Impact
                </h3>
                <p className="text-blue-100 mb-6">
                  With presence across UAE, India, Africa, and Nepal, we bring
                  world-class UK education to your doorstep through innovative
                  blended learning approaches.
                </p>
                <div className="flex items-center space-x-4">
                  <Globe className="h-8 w-8" />
                  <span className="text-lg font-semibold">
                    Serving 4 Continents
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <Building className="h-8 w-8 mx-auto mb-2" />
                  <div className="font-bold">UAE</div>
                  <div className="text-sm text-blue-100">Headquarters</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <Users className="h-8 w-8 mx-auto mb-2" />
                  <div className="font-bold">India</div>
                  <div className="text-sm text-blue-100">Major Hub</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <Globe className="h-8 w-8 mx-auto mb-2" />
                  <div className="font-bold">Africa</div>
                  <div className="text-sm text-blue-100">Growing Presence</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <Award className="h-8 w-8 mx-auto mb-2" />
                  <div className="font-bold">Nepal</div>
                  <div className="text-sm text-blue-100">Expanding Market</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Programs
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of UK-accredited programs
              designed to meet diverse educational and professional development
              needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-300 ${
                  program.featured
                    ? "ring-2 ring-blue-500 bg-gradient-to-br from-blue-50 to-purple-50"
                    : "bg-white"
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2 group-hover:text-blue-600 transition-colors">
                        {program.title}
                      </CardTitle>
                      {program.featured && (
                        <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-2">
                          Flagship Program
                        </Badge>
                      )}
                      <CardDescription className="text-gray-600">
                        {program.description}
                      </CardDescription>
                    </div>
                    <BookOpen className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-sm text-gray-500">Duration</div>
                      <div className="font-semibold">{program.duration}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Mode</div>
                      <div className="font-semibold">{program.mode}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className="text-green-600 border-green-600"
                    >
                      {program.accreditation}
                    </Badge>
                    <Button
                      variant="ghost"
                      className="group-hover:bg-blue-600 group-hover:text-white transition-colors"
                    >
                      Learn More
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="leadership" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Leadership{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our experienced leadership team committed to delivering
              excellence in global education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 text-center border-0 bg-white"
              >
                <CardHeader>
                  <div className="relative mx-auto mb-4">
                    <Image
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      width={200}
                      height={200}
                      className="rounded-full mx-auto group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {leader.name}
                  </CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">
                    {leader.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{leader.education}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons to Choose */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Cosmoversity
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "UK Accreditation",
                description:
                  "All programs are accredited by prestigious UK bodies including Pearson, SQA, CMI, CIM, and ILM",
              },
              {
                icon: Globe,
                title: "Global Recognition",
                description:
                  "Qualifications recognized worldwide, opening doors to international career opportunities",
              },
              {
                icon: Users,
                title: "Expert Faculty",
                description:
                  "Learn from industry experts and academic professionals with global experience",
              },
              {
                icon: Briefcase,
                title: "Industry Connections",
                description:
                  "Strong partnerships with leading organizations for internships and career placement",
              },
              {
                icon: TrendingUp,
                title: "Career Advancement",
                description:
                  "98% of our graduates report career advancement within 12 months of completion",
              },
              {
                icon: CheckCircle,
                title: "Flexible Learning",
                description:
                  "Blended delivery model accommodates working professionals and diverse schedules",
              },
            ].map((reason, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <reason.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {reason.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Partners
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proud to partner with world-renowned institutions and
              accreditation bodies.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="group">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="mx-auto grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Student{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our graduates who have transformed their careers through
              our programs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-lg">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription>{testimonial.position}</CardDescription>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Section */}
      <section
        id="enquiry"
        className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 to-purple-600"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 text-white">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Start Your Journey Today
              </h2>
              <p className="text-xl text-blue-100">
                Ready to elevate your career with globally recognized
                qualifications? Get in touch with our admissions team.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white text-xl">
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="First Name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                    />
                    <Input
                      placeholder="Last Name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                    />
                  </div>
                  <Input
                    placeholder="Email Address"
                    type="email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />
                  <Input
                    placeholder="Phone Number"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />
                  <Input
                    placeholder="Program of Interest"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />
                  <Textarea
                    placeholder="Your Message"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                    rows={4}
                  />
                  <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                    Send Message
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <div className="space-y-8 text-white">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold">Headquarters</div>
                        <div className="text-blue-100">
                          Sharjah, United Arab Emirates
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold">Phone</div>
                        <div className="text-blue-100">+971 6 XXX XXXX</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold">Email</div>
                        <div className="text-blue-100">
                          info@cosmoversity.edu
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
                  <div className="space-y-2 text-blue-100">
                    <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                    <div>Saturday: 9:00 AM - 2:00 PM</div>
                    <div>Sunday: Closed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold">Cosmoversity</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering global education through UK-accredited programs and
                innovative learning solutions.
              </p>
              <div className="flex space-x-4">
                {/* Social media icons would go here */}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Global Dual-Degree MBA
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Higher National Diplomas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Executive Qualifications
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Faculty Development
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Student Recruitment
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Internship Programs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    University Partnerships
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Academic Consulting
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Sharjah, UAE</li>
                <li>+971 6 XXX XXXX</li>
                <li>info@cosmoversity.edu</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 Cosmoversity. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
