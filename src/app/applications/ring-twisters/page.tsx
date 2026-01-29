import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import EngineerSummary from "@/components/EngineerSummary";
import SpecTable from "@/components/SpecTable";

export const metadata: Metadata = {
  title: "Ring Twister Motors | High-Speed Textile Motors | EMO Motors",
  description: "High-speed induction motors for ring twisting applications. Up to 15,000 RPM, IE3/IE4 efficiency, CE certified. Trusted by Rieter, Saurer, and leading OEMs worldwide.",
  keywords: ["ring twister motor", "textile motor", "high speed motor", "yarn twisting", "IE4 motor"],
};

const specs = [
  { label: "Speed Range", value: "Up to 15,000 RPM (with VFD)" },
  { label: "Power Range", value: "0.37 kW to 7.5 kW" },
  { label: "Efficiency Class", value: "IE3 / IE4 (IEC 60034-30-1)" },
  { label: "Voltage Options", value: "380-415V / 440-480V / 50-60Hz" },
  { label: "IP Rating", value: "IP55 / IP66" },
  { label: "Insulation Class", value: "Class F (155°C) / Class H (180°C)" },
  { label: "Cooling Method", value: "IC411 (TEFC) / IC417 (textile-specific)" },
  { label: "Duty Cycle", value: "S1 Continuous (24/7 operation)" },
  { label: "Mounting", value: "B3 / B5 / B14 / B35 (IEC/NEMA)" },
  { label: "Bearing Life", value: "L10h > 40,000 hours" },
  { label: "Certifications", value: "CE, BIS, IEC, ISO 9001" },
];

const benefits = [
  {
    title: "Ultra-Low Vibration",
    description: "Precision-balanced rotors with ISO 1940 G1.0 grade ensure smooth operation at high speeds, reducing yarn breakage by up to 15%.",
    metric: "< 0.7 mm/s"
  },
  {
    title: "Extended Bearing Life",
    description: "Premium sealed bearings with synthetic lubricant rated for 40,000+ hours. Insulated DE bearing option for VFD applications.",
    metric: "40,000+ hrs"
  },
  {
    title: "VFD Optimized Design",
    description: "Corona-resistant insulation system rated for 1600V/μs dV/dt. Suitable for vector and V/f control with 0-100Hz operation.",
    metric: "0-100 Hz"
  },
  {
    title: "Compact Frame Design",
    description: "Optimized power-to-size ratio for easy retrofit into existing ring twister frames. IEC and NEMA mounting compatibility.",
    metric: "Space-efficient"
  },
  {
    title: "Tropical Climate Ready",
    description: "Designed for ambient temperatures up to 50°C and humidity up to 95% RH. Ideal for mills in South Asia, Africa, and South America.",
    metric: "Up to 50°C"
  },
  {
    title: "Energy Cost Savings",
    description: "IE4 super premium efficiency delivers 20-25% energy savings vs IE1 motors. Typical payback in 6-18 months.",
    metric: "20-25% savings"
  },
];

export default function RingTwistersPage() {
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
                <span className="text-accent">Ring Twisters</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-xl mb-8">
                High-speed precision motors engineered for yarn twisting applications. 
                Delivering stability up to 15,000 RPM with world-class energy efficiency.
              </p>
              
              {/* Key Stats */}
              <div className="flex flex-wrap items-center gap-8 mb-8">
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-bold text-accent">15K</span>
                  <span className="text-gray-400">RPM<br/>Max Speed</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-bold text-white">IE4</span>
                  <span className="text-gray-400">Super Premium<br/>Efficiency</span>
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
                  src="/images/ring-twister-motor.png"
                  alt="EMO Ring Twister Motor - High Speed Precision Motor"
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
            EMO ring twister motors: 0.37-7.5kW, up to 15,000 RPM with VFD. IE3/IE4 per IEC 60034-30-1, 
            Class F/H insulation, IC411/IC417 cooling. Vibration &lt; 0.7 mm/s (ISO 1940 G1.0). 
            L10h bearing life &gt; 40,000 hrs. CE, BIS certified. Suitable for Rieter, Saurer, LMW, Toyota frames.
          </EngineerSummary>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section">
        <div className="container">
          <span className="section-label block mb-4">Key Benefits</span>
          <h2 className="mb-12">
            Engineered for <span className="text-accent">High-Speed</span> Stability
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
                Optimized for <span className="text-accent">Ring Twisting</span>
              </h3>
              
              <div className="space-y-4 mb-8">
                {[
                  "Suitable for cotton, polyester, viscose, and blended yarn twisting",
                  "Optimized for twist levels from 200-2000 TPM",
                  "Compatible with both uptwister and downtwister configurations",
                  "Available with incremental encoder option for closed-loop control",
                  "Special shaft configurations available for direct coupling",
                  "IP66 option available for washdown environments"
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
              { name: "Saurer", country: "Germany" },
              { name: "Marzoli", country: "Italy" },
              { name: "Toyota", country: "Japan" },
              { name: "LMW", country: "India" },
              { name: "Lakshmi", country: "India" },
              { name: "Jingwei", country: "China" },
              { name: "CHTC", country: "China" },
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
              <h3 className="text-white mb-2">Ready to optimize your ring twister operation?</h3>
              <p className="text-gray-400">Get a customized motor solution with energy savings analysis.</p>
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
