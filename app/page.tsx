"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useRef, useEffect } from "react"

const CalendlyLink = "https://calendly.com/albaraa-pipeline-automations/30min"

const useCase = [
  {
    icon: "💬",
    title: "WhatsApp/SMS AI Assistant",
    description: "Automate customer messaging with AI-powered WhatsApp and SMS responses.",
  },
  {
    icon: "🌐",
    title: "Website AI Booking Widget",
    description: "Embed an intelligent booking widget on your website to capture leads automatically.",
  },
  {
    icon: "🌙",
    title: "After-Hours Automation",
    description: "Never miss a customer inquiry with 24/7 AI handling of messages and calls.",
  },
  {
    icon: "📅",
    title: "Scheduling + Job Intake",
    description: "Streamline appointment booking and job intake with automated workflows.",
  },
  {
    icon: "⚙️",
    title: "Process Automation",
    description: "Eliminate manual tasks and connect your tools with intelligent AI automations.",
  },
  {
    icon: "📱",
    title: "Multi-Channel Sync",
    description: "Keep your data synchronized across CRM, email, SMS, and messaging platforms.",
  },
]

const benefits = [
  { label: "10x faster", detail: "Automate repetitive tasks in seconds" },
  { label: "Save 20+ hours", detail: "Per team member per week" },
  { label: "99% accuracy", detail: "AI-powered decision making" },
  { label: "24/7 active", detail: "Your automations work while you sleep" },
]

export default function Home() {
  const bookingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)
  }, [])

  const scrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (bookingRef.current) {
      bookingRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <span className="text-xl font-bold text-foreground">Pipeline Automations</span>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            AI Automations That <span className="text-primary">Scale Your Business</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto">
            Stop wasting time on repetitive tasks. Automate customer communications, booking, and operations with AI.
            Book a demo today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 text-lg font-semibold shadow-lg shadow-primary/50 transition-all duration-200 hover:shadow-xl hover:shadow-primary/70 rounded-full"
            >
              <a href="#booking" onClick={scrollToBooking}>
                Schedule 15-Min Demo
              </a>
            </Button>
            <Button asChild variant="outline" className="px-10 py-4 text-lg font-semibold bg-transparent rounded-full">
              <a href="#features">See What We Do</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{benefit.label}</div>
                <p className="text-sm sm:text-base text-muted-foreground">{benefit.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">What We Automate</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're in sales, marketing, support, or operations, we have solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCase.map((item) => (
              <Card
                key={item.title}
                className="border-border bg-card hover:bg-muted/50 transition-colors flex flex-col"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{item.description}</p>
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-4 text-base font-semibold shadow-lg shadow-primary/50 transition-all duration-200 hover:shadow-xl hover:shadow-primary/70 rounded-full"
                  >
                    <a href="#booking" onClick={scrollToBooking}>
                      Learn More
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Widget Section */}
      <section id="booking" ref={bookingRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-16">Ready to Get Started?</h2>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Widget Container */}
            <div className="flex-1 w-full">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/albaraa-pipeline-automations/30min"
                style={{ minWidth: "320px", height: "700px" }}
              ></div>
            </div>

            <div className="flex-1 w-full lg:pt-0">
              <div className="space-y-8">
                {/* Header */}
                <div>
                  <p className="text-sm font-bold text-primary mb-2 tracking-wide">SCHEDULE YOUR FREE DEMO</p>
                  <h3 className="text-4xl font-bold text-foreground leading-tight mb-6">Free 15-Minute Demo Call</h3>
                </div>

                {/* Description */}
                <div className="space-y-4 text-lg leading-relaxed">
                  <p className="text-muted-foreground">
                    By the end of this demo call, you will have a clear understanding of how Pipeline Automations can
                    streamline your operations and drive growth.
                  </p>
                  <p className="text-muted-foreground">
                    Find a time on our calendar to schedule your call today and we look forward to speaking with you
                    soon!
                  </p>
                </div>

                {/* Perfect For Section */}
                <div>
                  <h4 className="text-lg font-bold text-primary mb-4">THIS DEMO IS PERFECT FOR:</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3 items-start">
                      <span className="text-primary text-xl flex-shrink-0 pt-1">✓</span>
                      <span className="text-muted-foreground leading-relaxed">
                        Businesses looking to automate customer messaging and support workflows
                      </span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-primary text-xl flex-shrink-0 pt-1">✓</span>
                      <span className="text-muted-foreground leading-relaxed">
                        Teams seeking to reduce manual tasks and improve efficiency
                      </span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-primary text-xl flex-shrink-0 pt-1">✓</span>
                      <span className="text-muted-foreground leading-relaxed">
                        Organizations wanting to understand their automation potential
                      </span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-primary text-xl flex-shrink-0 pt-1">✓</span>
                      <span className="text-muted-foreground leading-relaxed">
                        Companies looking for a reliable partner to build their AI solutions
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-16">How It Works</h2>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "We understand your business, challenges, and goals during a brief discovery call.",
              },
              {
                step: "2",
                title: "Custom Design",
                description: "Our team designs AI automations tailored to your specific workflows and systems.",
              },
              {
                step: "3",
                title: "Implementation",
                description: "We build, test, and deploy your automations with zero disruption to your business.",
              },
              {
                step: "4",
                title: "Optimization",
                description: "Continuous monitoring and refinement ensure your automations deliver maximum ROI.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 text-lg font-semibold shadow-lg shadow-primary/50 transition-all duration-200 hover:shadow-xl hover:shadow-primary/70 rounded-full"
            >
              <a href="#booking" onClick={scrollToBooking}>
                Start Your Automation Journey
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "How long does implementation take?",
                a: "Most automations are live within 1-2 weeks. Complex systems may take 3-4 weeks. We provide a clear timeline during your consultation.",
              },
              {
                q: "Do you integrate with my existing tools?",
                a: "Yes! We integrate with CRMs, email platforms, payment processors, databases, and 1000+ other apps via Zapier and native integrations.",
              },
              {
                q: "What if I need changes later?",
                a: "We provide ongoing support and optimization. Changes and adjustments are straightforward and can be made quickly as your business evolves.",
              },
              {
                q: "How much does this cost?",
                a: "Pricing varies based on complexity and scale. We customize solutions to fit your budget. Schedule a demo to discuss pricing for your specific needs.",
              },
              {
                q: "Will this replace my team?",
                a: "No, automations amplify your team's capabilities. They handle repetitive tasks so your team can focus on strategic work that drives growth.",
              },
            ].map((item, idx) => (
              <div key={idx} className="border-b border-border pb-6 last:border-b-0">
                <h3 className="text-lg font-bold text-foreground mb-3">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Automate Your Business?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Book a free 15-minute consultation with our automation experts. No pressure, no sales pitch.
          </p>
          <Button
            asChild
            className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary rounded-full px-10 py-4 text-lg font-semibold shadow-lg shadow-primary/50 transition-all duration-200 hover:shadow-xl hover:shadow-primary/70"
          >
            <a href="#booking" onClick={scrollToBooking}>
              <span className="font-bold">Schedule Your Demo Now</span>
              <span className="block text-sm font-normal">Speak To Our Team Today</span>
            </a>
          </Button>
        </div>
      </section>

      {/* Have A General Inquiry? */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Have A General Inquiry?</h2>
          <p className="text-lg mb-8 text-muted-foreground">
            If you have a general inquiry and would like to speak to our expert team, you can contact us via email at
            albaraa@pipelineautomations.com or schedule a call below.
          </p>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-4 text-lg font-semibold shadow-lg shadow-primary/50 transition-all duration-200 hover:shadow-xl hover:shadow-primary/70"
          >
            <a href="#booking" onClick={scrollToBooking}>
              <span className="font-bold">Schedule Your FREE Demo Call Now</span>
              <span className="block text-sm font-normal">Speak To Our Team Today</span>
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Product Column */}
            <div>
              <h4 className="font-bold text-foreground mb-6 text-lg">Services</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <a href="#features" className="hover:text-primary transition">
                    WhatsApp/SMS AI Assistant
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-primary transition">
                    Website Booking Widget
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-primary transition">
                    After-Hours Automation
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-primary transition">
                    Scheduling & Job Intake
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-primary transition">
                    Process Automation
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-primary transition">
                    Multi-Channel Sync
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="font-bold text-foreground mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <a href="#booking" className="hover:text-primary transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#booking" className="hover:text-primary transition">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#booking" className="hover:text-primary transition">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#booking" className="hover:text-primary transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#booking" className="hover:text-primary transition">
                    Partnerships
                  </a>
                </li>
              </ul>
            </div>

            {/* Help Column */}
            <div>
              <h4 className="font-bold text-foreground mb-6 text-lg">Support</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <a href="#booking" className="hover:text-primary transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#booking" className="hover:text-primary transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#booking" className="hover:text-primary transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#booking" className="hover:text-primary transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#booking" className="hover:text-primary transition">
                    Status Page
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>All Rights Reserved | All Wrongs Reversed © 2025</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
