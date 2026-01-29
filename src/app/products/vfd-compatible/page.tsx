import Link from "next/link";
import { Metadata } from "next";
import EngineerSummary from "@/components/EngineerSummary";
import SpecTable from "@/components/SpecTable";

export const metadata: Metadata = {
  title: "VFD-Compatible Motors | EMO Motors",
  description: "Inverter-duty induction motors optimized for variable frequency drive applications. Reinforced insulation and extended bearing life.",
};

const specs = [
  { label: "VFD Compatibility", value: "Inverter Duty / Vector Control Ready" },
  { label: "Frequency Range", value: "0-100Hz continuous operation" },
  { label: "Insulation System", value: "Reinforced for dV/dt (up to 1600V/μs)" },
  { label: "Speed Range", value: "10:1 Constant Torque" },
  { label: "Power Range", value: "0.37 kW to 160 kW" },
  { label: "IP Rating", value: "IP55 / IP66" },
  { label: "Insulation Class", value: "Class H (180°C)" },
  { label: "Cooling Method", value: "IC411 / IC416 (forced cooling option)" },
  { label: "Bearing System", value: "Insulated DE bearing for shaft current protection" },
  { label: "Encoder Option", value: "Resolver / Incremental Encoder mountable" },
  { label: "Certifications", value: "BIS, IEC, CE" },
];

export default function VFDCompatiblePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container relative">
          <Link href="/products" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Products
          </Link>
          
          <span className="section-label text-gray-400 block mb-4">VFD Series</span>
          <h1 className="text-white mb-4">
            <span className="text-accent">VFD-Compatible</span><br />
            Inverter Duty Motors
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-8">
            Specially designed for seamless integration with variable frequency drives. 
            Enhanced insulation and bearing systems for reliable inverter operation.
          </p>
          
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-4">
              <span className="text-5xl font-bold text-accent">10:1</span>
              <span className="text-gray-400">Speed Range<br/>Constant Torque</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-5xl font-bold text-white">100Hz</span>
              <span className="text-gray-400">Maximum<br/>Frequency</span>
            </div>
          </div>
          
          {/* Certifications */}
          <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-700">
            <span className="text-gray-500 text-sm">Certifications:</span>
            <span className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded">BIS Certified</span>
            <span className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded">Inverter Duty</span>
            <span className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded">IE3/IE4</span>
          </div>
        </div>
      </section>

      {/* Engineer Summary */}
      <section className="section pb-0">
        <div className="container">
          <EngineerSummary>
            EMO VFD-compatible motors: 0-100Hz continuous operation, reinforced insulation rated for 
            1600V/μs dV/dt, insulated bearings for shaft current protection. 10:1 constant torque 
            speed range, IC411/IC416 cooling. Compatible with Siemens, ABB, Danfoss, and all major 
            VFD brands. BIS certified for Indian market.
          </EngineerSummary>
        </div>
      </section>

      {/* Features & Specs */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="section-label block mb-4">Key Features</span>
              <h2 className="mb-8">
                Optimized for <span className="text-accent">Inverter</span> Operation
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Reinforced Insulation System",
                    description: "Corona-resistant enamel and phase insulation rated for high dV/dt stresses from modern inverters."
                  },
                  {
                    title: "Shaft Current Protection",
                    description: "Insulated drive-end bearing prevents EDM damage and extends bearing service life."
                  },
                  {
                    title: "Wide Speed Range",
                    description: "10:1 constant torque capability with independent cooling option for low-speed operation."
                  },
                  {
                    title: "Low Vibration",
                    description: "Precision balancing and optimized magnetic circuit for smooth operation across speed range."
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-dark mb-1">{feature.title}</h4>
                      <p className="text-muted text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SpecTable title="Technical Specifications" specs={specs} />
              
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Request Quote for VFD Motors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compatible VFDs */}
      <section className="section bg-white">
        <div className="container">
          <span className="section-label block mb-4">Compatibility</span>
          <h2 className="mb-8">
            Works with Leading <span className="text-accent">VFD</span> Brands
          </h2>
          
          <div className="grid-4">
            {["Siemens", "ABB", "Danfoss", "Schneider", "Yaskawa", "Mitsubishi", "Fuji", "Delta"].map((brand) => (
              <div key={brand} className="card text-center py-6">
                <span className="text-dark font-medium">{brand}</span>
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
              <h3 className="text-white mb-2">Need motors for your VFD application?</h3>
              <p className="text-gray-400">Get expert guidance on motor-VFD matching.</p>
            </div>
            <Link href="/contact" className="btn-primary whitespace-nowrap">
              Request Technical Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
