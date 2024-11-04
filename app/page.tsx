"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Introduction from "@/components/Introduction";
import GlobalStatus from "@/components/GlobalStatus";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Impact from "@/components/Impact";
import Method from "@/components/Method";
import Solution from "@/components/Solution";

export default function Home() {
  const [activeSection, setActiveSection] = useState("intro");

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Introduction />
        <GlobalStatus />
        <Impact/>
        <Method/>
        <Solution/>
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}