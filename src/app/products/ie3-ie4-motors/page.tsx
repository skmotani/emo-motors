import Link from "next/link";
import { Metadata } from "next";
import EngineerSummary from "@/components/EngineerSummary";
import SpecTable from "@/components/SpecTable";

export const metadata: Metadata = {
  title: "IE3 & IE4 Super Premium Efficiency Motors | EMO Motors",
  description: "Super premium efficiency induction motors meeting IE3 and IE4 international standards. Maximum energy savings for textile machinery applications.",
};

const motorModels = [
  { power: "0.37 kW", frame: "71M", ie3Eff: "72.1%", ie4Eff: "78.2%", weight: "6.5 kg" },
  { power: "0.75 kW", frame: "80M", ie3Eff: "77.4%", ie4Eff: "82.5%", weight: "10 kg" },
  { power: "1.5 kW", frame: "90S", ie3Eff: "82.5%", ie4Eff: "86.7%", weight: "16 kg" },
  { power: "2.2 kW", frame: "90L", ie3Eff: "84.3%", ie4Eff: "88.0%", weight: "19 kg" },
  { power: "3.0 kW", frame: "100L", ie3Eff: "85.6%", ie4Eff: "89.1%", weight: "27 kg" },
  { power: "5.5 kW", frame: "112M", ie3Eff: "87.7%", ie4Eff: "90.9%", weight: "42 kg" },
  { power: "7.5 kW", frame: "132S", ie3Eff: "88.7%", ie4Eff: "91.7%", weight: "56 kg" },
  { power: "11 kW", frame: "132M", ie3Eff: "89.8%", ie4Eff: "92.6%", weight: "72 kg" },
];

const specs = [
  { label: "Efficiency Class", value: "IE3 / IE4 (IEC 60034-30-1)" },
  { label: "Power Range", value: "0.37 kW to 315 kW" },
  { label: "Voltage", value: "380-415V / 50Hz" },
  { label: "IP Rating", value: "IP55 (IP66 optional)" },
  { label: "Insulation Class", value: "Class F (155°C) / Class H (180°C)" },
  { label: "Cooling Method", value: "IC411 / IC417 (textile-specific)" },
  { label: "Duty Cycle", value: "S1 Continuous" },
  { label: "Speed Options", value: "2, 4, 6, 8 Poles" },
  { label: "VFD Compatibility", value: "0-100Hz inverter-ready" },
  { label: "Mounting", value: "B3, B5, B14, B35" },
  { label: "Certifications", value: "BIS, IEC, CE" },
];

export default function IE3IE4MotorsPage() {
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
          
          <span className="inline-block bg-accent/20 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Most Popular
          </span>
          <h1 className="text-white mb-4">
            IE3 & IE4<br />
            <span className="text-accent">Super Premium</span> Motors
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-8">
            Maximum energy efficiency meeting international IE3 and IE4 standards. 
            Reduce operating costs while maintaining peak performance in textile applications.
          </p>
          
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-4">
              <span className="text-5xl font-bold text-accent">IE4</span>
              <span className="text-gray-400">Super Premium<br/>Efficiency</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-5xl font-bold text-white">25%</span>
              <span className="text-gray-400">Energy<br/>Savings</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-5xl font-bold text-white">6-18</span>
              <span className="text-gray-400">Month<br/>Payback</span>
            </div>
          </div>
          
          {/* Certifications */}
          <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-700">
            <span className="text-gray-500 text-sm">Certifications:</span>
            <span className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded">BIS Certified</span>
            <span className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded">IEC 60034-30-1</span>
            <span className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded">IE3/IE4</span>
          </div>
        </div>
      </section>

      {/* Engineer Summary */}
      <section className="section pb-0">
        <div className="container">
          <EngineerSummary>
            EMO IE3 and IE4 motors comply with IEC 60034-30-1 efficiency standards, delivering 
            up to 25% energy savings vs IE1 with 6-18 month payback. IC411/IC417 cooling optimized 
            for textile ring frames. Available 0.37-315kW, Class F/H insulation, IP55/IP66, S1 
            duty, VFD-ready to 100Hz. BIS certified for Indian market.
          </EngineerSummary>
        </div>
      </section>

      {/* Model Selection */}
      <section className="section">
        <div className="container">
          <span className="section-label block mb-4">Model Selection</span>
          <h2 className="mb-8">
            Choose Your <span className="text-accent">Efficiency</span> Class
          </h2>
          
          <div className="overflow-x-auto">
            <table className="spec-table">
              <thead>
                <tr>
                  <th>Power</th>
                  <th>Frame Size</th>
                  <th>IE3 Efficiency</th>
                  <th>IE4 Efficiency</th>
                  <th>Weight</th>
                </tr>
              </thead>
              <tbody>
                {motorModels.map((model, index) => (
                  <tr key={index}>
                    <td className="font-medium text-dark">{model.power}</td>
                    <td>{model.frame}</td>
                    <td>{model.ie3Eff}</td>
                    <td className="text-accent font-medium">{model.ie4Eff}</td>
                    <td>{model.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p className="text-muted text-sm mt-4">
            * 4-pole motors at 50Hz. Full range up to 315kW available. Contact sales for complete catalog.
          </p>
        </div>
      </section>

      {/* Specs & Features */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SpecTable title="Technical Specifications" specs={specs} />
            </div>
            
            <div>
              <span className="section-label block mb-4">Key Benefits</span>
              <h3 className="text-2xl font-bold text-dark mb-6">
                Why Choose <span className="text-accent">IE4</span>?
              </h3>
              
              <div className="space-y-4">
                {[
                  "20-25% lower energy consumption vs. IE1/IE2 motors",
                  "6-18 month payback through energy savings",
                  "₹2-5 Lakh annual savings per motor (typical)",
                  "IC411/IC417 cooling optimized for textile mills",
                  "Tropical climate design (up to 50°C ambient)",
                  "Lower operating temperatures extend bearing life",
                  "BIS certified for Indian market compliance",
                  "Premium build quality for 50,000+ hour service life"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-white mb-2">Ready to reduce your energy costs?</h3>
              <p className="text-gray-400">Get an ROI analysis for upgrading to IE4 motors.</p>
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
