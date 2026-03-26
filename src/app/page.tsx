import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Features } from "@/components/Features";
import { Benefits } from "@/components/Benefits";
import { SocialProof } from "@/components/SocialProof";
import { Differentiation } from "@/components/Differentiation";
import { Pricing } from "@/components/Pricing";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Benefits />
        <SocialProof />
        <Differentiation />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
