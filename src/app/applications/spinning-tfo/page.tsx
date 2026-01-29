import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import EngineerSummary from "@/components/EngineerSummary";
import SpecTable from "@/components/SpecTable";

export const metadata: Metadata = {
  title: "Spinning & TFO Motors | Heavy-Duty Textile Motors | EMO Motors",
  description: "Heavy-duty induction motors for ring spinning frames and TFO (two-for-one) twisters. 24/7 continuous duty, IE3/IE4 efficiency, CE certified.",
  keywords: ["spinning motor", "TFO motor", "ring frame motor", "textile motor", "two-for-one twister"],
};

const specs = [
  { label: "Speed Range", value: "1,000 - 18,000 RPM (TFO spindle)" },
  { label: "Power Range", value: "0.75 kW to 22 kW" },
  { label: "Efficiency Class", value: "IE3 / IE4 (IEC 60034-30-1)" },
  { label: "Voltage Options", value: "380-415V / 440-480V / 50-60Hz" },
  { label: "IP Rating", value: "IP55 / IP66 (lint protection)" },
  { label: "Insulation Class", value: "Class F (155°C) / Class H (180°C)" },
  { label: "Cooling Method", value: "IC417 (ring frame) / IC411 (standard)" },
  { label: "Duty Cycle", value: "S1 Continuous (24/7/365)" },
  { label: "Mounting", value: "B3 / B5 / B35 (custom flanges available)" },
  { label: "Designed Life", value: "50,000+ operating hours" },
  { label: "Certifications", value: "CE, BIS, IEC, ISO 9001" },
];

const benefits = [
  {
    title: "24/7 Continuous Operation",
    description: "S1 duty rating with enhanced thermal design for uninterrupted operation in spinning mills running 8,760 hours per year.",
    metric: "365 days/year"
  },
  {
    title: "Lint & Dust Protection",
    description: "IP55/IP66 enclosures with special sealing for cotton fly and lint-heavy spinning environments.",
    metric: "IP66 rated"
  },
  {
    title: "IC417 Cooling System",
    description: "Textile-specific cooling design (IC417) optimized for ring frame and TFO installations with restricted airflow.",
    metric: "Textile-specific"
  },
  {
    title: "High Starting Torque",
    description: "Optimized rotor design delivers 200-250% starting torque for reliable TFO spindle acceleration.",
    metric: "200-250% torque"
  },
  {
    title: "Vibration-Free Running",
    description: "ISO 1940 G1.0 precision balancing ensures smooth operation critical for yarn quality in spinning.",
    metric: "< 0.7 mm/s"
  },
  {
    title: "Energy Cost Reduction",
    description: "IE4 efficiency saves 20-25% on electricity vs IE1 motors. Critical savings for high-power spinning drives.",
    metric: "20-25% savings"
  },
];

export default function SpinningTFOPage() {
  return (
    <div className="pt-20">
      {/* Hero with Motor Image */}
      <section className="py-20 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link href="/products" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Products
              </Link>
              
              <span className="section-label text-gray-400 block mb-4">Textile Application</span>
              <h1 className="text-white mb-4">
                Motors for<br />
                <span className="text-accent">Spinning & TFO</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-xl mb-8">
                Heavy-duty motors built for the demanding world of ring spinning frames 
                and TFO twisters. Designed for 24/7 operation with industry-leading reliability.
              </p>
              
              {/* Key Stats */}
              <div className="flex flex-wrap items-center gap-8 mb-8">
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-bold text-accent">24/7</span>
                  <span className="text-gray-400">Continuous<br/>Operation</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-bold text-white">50K+</span>
                  <span className="text-gray-400">Hours<br/>Design Life</span>
                </div>
              </div>
              
              {/* Certifications */}
              <div className="flex items-center gap-3">
                <span className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded">CE</span>
                <span className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded">BIS</span>
                <span className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded">IEC 60034</span>
                <span className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded">ISO 9001</span>
              </div>
            </div>
            
            {/* Motor Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8">
                <Image
                  src="/images/spinning-tfo-motor.png"
                  alt="EMO Spinning & TFO Motor - Heavy Duty Continuous Operation"
                  width={500}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineer Summary */}
      <section className="section pb-0">
        <div className="container">
          <EngineerSummary>
            EMO spinning/TFO motors: 0.75-22kW, S1 continuous duty for 24/7/365 operation. 
            IE3/IE4 per IEC 60034-30-1, IC417 cooling for restricted airflow. IP66 lint protection, 
            50,000+ hour design life, 200-250% starting torque. CE, BIS certified. Suits Rieter, 
            Zinser, LMW ring frames and Volkmann, Saurer TFO machines.
          </EngineerSummary>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section">
        <div className="container">
          <span className="section-label block mb-4">Key Benefits</span>
          <h2 className="mb-12">
            Built for <span className="text-accent">Non-Stop Production</span>
          </h2>
          
          <div className="grid-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="card">
                <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {benefit.metric}
                </span>
                <h4 className="text-lg font-bold text-dark mb-2">{benefit.title}</h4>
                <p className="text-muted text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SpecTable title="Technical Specifications" specs={specs} />
            </div>
            
            <div>
              <span className="section-label block mb-4">Application Notes</span>
              <h3 className="text-2xl font-bold text-dark mb-6">
                Optimized for <span className="text-accent">Spinning Excellence</span>
              </h3>
              
              <div className="space-y-4 mb-8">
                {[
                  "Ring spinning frame main drives (5.5-22kW)",
                  "TFO (two-for-one) twister spindle drives",
                  "Open-end (rotor) spinning machines",
                  "Compact spinning and Siro spinning systems",
                  "Draw frame and comber drives",
                  "Roving frame flyer drives"
                ].map((note, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text">{note}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/contact" className="btn-primary">
                Request Technical Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compatible OEMs */}
      <section className="section">
        <div className="container">
          <span className="section-label block mb-4">OEM Compatibility</span>
          <h2 className="mb-8">
            Trusted by Leading <span className="text-accent">Machine Builders</span>
          </h2>
          
          <div className="grid-4">
            {[
              { name: "Rieter", country: "Switzerland" },
              { name: "Zinser", country: "Germany" },
              { name: "Volkmann", country: "Germany" },
              { name: "Saurer", country: "Germany" },
              { name: "LMW", country: "India" },
              { name: "Truetzschler", country: "Germany" },
              { name: "Jingwei", country: "China" },
              { name: "Savio", country: "Italy" },
            ].map((brand) => (
              <div key={brand.name} className="card text-center py-6">
                <span className="text-dark font-bold text-lg">{brand.name}</span>
                <span className="text-muted text-xs block mt-1">{brand.country}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-white mb-2">Ready to upgrade your spinning operation?</h3>
              <p className="text-gray-400">Get expert guidance on motor selection for 24/7 reliability.</p>
            </div>
            <div className="flex gap-4">
              <Link href="/contact" className="btn-primary whitespace-nowrap">
                Request Quote
              </Link>
              <Link href="/engineering" className="btn-secondary border-gray-600 text-white hover:border-white whitespace-nowrap">
                Download Datasheet
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
