import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import EngineerSummary from "@/components/EngineerSummary";
import SpecTable from "@/components/SpecTable";

export const metadata: Metadata = {
  title: "Winding Machine Motors | Precision Torque Control | EMO Motors",
  description: "Precision induction motors for cone winding, cheese winding, and rewinding machines. Constant tension control, IE3/IE4 efficiency, CE certified.",
  keywords: ["winding machine motor", "textile motor", "cone winding", "cheese winding", "precision torque motor"],
};

const specs = [
  { label: "Speed Range", value: "500 - 6,000 RPM" },
  { label: "Power Range", value: "0.55 kW to 15 kW" },
  { label: "Efficiency Class", value: "IE3 / IE4 (IEC 60034-30-1)" },
  { label: "Voltage Options", value: "380-415V / 440-480V / 50-60Hz" },
  { label: "IP Rating", value: "IP55 / IP66" },
  { label: "Insulation Class", value: "Class F (155°C) / Class H (180°C)" },
  { label: "Cooling Method", value: "IC411 (TEFC) / IC416 (forced cooling)" },
  { label: "Duty Cycle", value: "S1 Continuous / S4, S5 intermittent" },
  { label: "Mounting", value: "B3 / B5 / B14 / B35 (IEC/NEMA)" },
  { label: "Speed Regulation", value: "±0.5% with encoder feedback" },
  { label: "Certifications", value: "CE, BIS, IEC, ISO 9001" },
];

const benefits = [
  {
    title: "Constant Tension Control",
    description: "Smooth torque delivery across the entire speed range ensures consistent yarn tension and uniform package density.",
    metric: "±2% tension"
  },
  {
    title: "Precise Speed Regulation",
    description: "Optional encoder feedback enables ±0.5% speed accuracy for critical winding applications requiring exact traverse ratios.",
    metric: "±0.5% accuracy"
  },
  {
    title: "Wide Speed Range",
    description: "10:1 constant torque speed range with VFD allows optimization for different yarn types and package sizes.",
    metric: "10:1 range"
  },
  {
    title: "Low Cogging Torque",
    description: "Optimized stator slot design minimizes torque ripple for smooth low-speed operation and soft yarn handling.",
    metric: "Smooth operation"
  },
  {
    title: "Brake Motor Option",
    description: "Integrated DC brake system available for applications requiring quick stops and precise positioning.",
    metric: "0.3s stop time"
  },
  {
    title: "Energy Efficiency",
    description: "IE4 super premium efficiency reduces electricity costs by 20-25% compared to standard motors.",
    metric: "20-25% savings"
  },
];

export default function WindingMachinesPage() {
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
                <span className="text-accent">Winding Machines</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-xl mb-8">
                Precision torque-controlled motors for cone winding, cheese winding, and 
                rewinding applications. Delivering consistent tension for perfect packages.
              </p>
              
              {/* Key Stats */}
              <div className="flex flex-wrap items-center gap-8 mb-8">
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-bold text-accent">10:1</span>
                  <span className="text-gray-400">Speed<br/>Range</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-bold text-white">±2%</span>
                  <span className="text-gray-400">Tension<br/>Control</span>
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
                  src="/images/winding-motor.png"
                  alt="EMO Winding Machine Motor - Precision Torque Control"
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
            EMO winding motors: 0.55-15kW, 500-6000 RPM. IE3/IE4 per IEC 60034-30-1, 10:1 constant 
            torque range, ±0.5% speed regulation with encoder. Low cogging for soft yarn handling. 
            Brake motor option (0.3s stop). CE, BIS certified. Suits Murata, Schlafhorst, Savio frames.
          </EngineerSummary>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section">
        <div className="container">
          <span className="section-label block mb-4">Key Benefits</span>
          <h2 className="mb-12">
            Engineered for <span className="text-accent">Perfect Packages</span>
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
                Optimized for <span className="text-accent">Winding Excellence</span>
              </h3>
              
              <div className="space-y-4 mb-8">
                {[
                  "Cone winding with taper build optimization",
                  "Cheese winding with precision patterning",
                  "Yarn rewinding and transfer winding",
                  "Dye package winding with soft wind options",
                  "Technical yarn winding (glass, carbon fiber)",
                  "Film and tape winding applications"
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
              { name: "Murata", country: "Japan" },
              { name: "Schlafhorst", country: "Germany" },
              { name: "Savio", country: "Italy" },
              { name: "SSM", country: "Switzerland" },
              { name: "Peass", country: "India" },
              { name: "Veejay Lakshmi", country: "India" },
              { name: "Himson", country: "India" },
              { name: "Fadis", country: "Italy" },
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
              <h3 className="text-white mb-2">Need motors for your winding application?</h3>
              <p className="text-gray-400">Get expert guidance on motor selection and system integration.</p>
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
