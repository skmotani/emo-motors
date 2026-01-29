import Link from "next/link";
import { Metadata } from "next";
import EngineerSummary from "@/components/EngineerSummary";

export const metadata: Metadata = {
  title: "Engineering Hub | EMO Motors - CAD Downloads & Technical Resources",
  description: "Download CAD files (STEP/DWG), technical datasheets, and use ROI calculators for EMO motor selection. Complete engineering resources.",
};

const cadCategories = [
  {
    title: "IE3 & IE4 Motors",
    formats: ["STEP", "DWG", "PDF"],
    sizes: "Frame 71-315",
  },
  {
    title: "VFD-Compatible Motors",
    formats: ["STEP", "DWG", "PDF"],
    sizes: "Frame 71-280",
  },
  {
    title: "Brake Motors",
    formats: ["STEP", "DWG", "PDF"],
    sizes: "Frame 71-160",
  },
];

const resources = [
  { title: "Product Catalog 2026", type: "PDF", size: "12 MB" },
  { title: "Motor Selection Guide", type: "PDF", size: "4 MB" },
  { title: "VFD Application Notes", type: "PDF", size: "2 MB" },
  { title: "Efficiency Comparison Chart", type: "PDF", size: "1 MB" },
  { title: "Installation Manual", type: "PDF", size: "8 MB" },
  { title: "Maintenance Guide", type: "PDF", size: "3 MB" },
];

export default function EngineeringPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 bg-dark">
        <div className="container">
          <span className="section-label text-gray-400 block mb-4">Technical Resources</span>
          <h1 className="text-white mb-4">
            <span className="text-accent">Engineering</span> Hub
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Access CAD files, technical documentation, and engineering tools 
            for motor selection and integration into your textile machinery.
          </p>
        </div>
      </section>

      {/* Engineer Summary */}
      <section className="section pb-0">
        <div className="container">
          <EngineerSummary>
            Download 3D CAD files (STEP format) and 2D drawings (DWG) for all EMO motor 
            series. Technical resources include product catalogs, selection guides, 
            application notes, and an ROI calculator for efficiency upgrades.
          </EngineerSummary>
        </div>
      </section>

      {/* CAD Downloads */}
      <section id="cad" className="section">
        <div className="container">
          <span className="section-label block mb-4">CAD Downloads</span>
          <h2 className="mb-8">
            <span className="text-accent">3D</span> & 2D Drawings
          </h2>
          
          <div className="grid-3">
            {cadCategories.map((category, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-bold text-dark mb-2">{category.title}</h3>
                <p className="text-muted text-sm mb-4">{category.sizes}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {category.formats.map((format) => (
                    <span key={format} className="bg-gray-100 text-dark text-xs font-medium px-3 py-1 rounded">
                      {format}
                    </span>
                  ))}
                </div>
                
                <button className="btn-secondary w-full justify-center text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download CAD Pack
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label block mb-4">ROI Calculator</span>
              <h2 className="mb-4">
                Calculate Your <span className="text-accent">Energy</span> Savings
              </h2>
              <p className="text-muted mb-6">
                Estimate the return on investment when upgrading from standard IE1 motors 
                to EMO IE3 or IE4 super premium efficiency motors. Input your current 
                motor specifications and operating conditions.
              </p>
              
              <div className="space-y-3">
                {[
                  "Compare IE1 vs IE3 vs IE4 efficiency",
                  "Calculate annual energy cost savings",
                  "Determine payback period",
                  "Estimate CO2 reduction"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="card bg-gradient-to-br from-dark to-gray-700 text-white">
              <h4 className="font-bold text-lg mb-6">Quick ROI Estimate</h4>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Motor Power (kW)</label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white">
                    <option value="5.5">5.5 kW</option>
                    <option value="7.5">7.5 kW</option>
                    <option value="11">11 kW</option>
                    <option value="15">15 kW</option>
                    <option value="22">22 kW</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Operating Hours/Year</label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white">
                    <option value="4000">4,000 hrs (2 shifts)</option>
                    <option value="6000">6,000 hrs (3 shifts)</option>
                    <option value="8000">8,000 hrs (continuous)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Electricity Cost (₹/kWh)</label>
                  <input 
                    type="number" 
                    defaultValue="8" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                  />
                </div>
                
                <button className="btn-primary w-full justify-center mt-4">
                  Calculate Savings
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Resources */}
      <section className="section">
        <div className="container">
          <span className="section-label block mb-4">Documentation</span>
          <h2 className="mb-8">
            Technical <span className="text-accent">Resources</span>
          </h2>
          
          <div className="grid-2">
            {resources.map((resource, index) => (
              <div key={index} className="card flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-dark">{resource.title}</h4>
                    <p className="text-muted text-sm">{resource.type} • {resource.size}</p>
                  </div>
                </div>
                <button className="text-accent hover:text-dark transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark">
        <div className="container text-center">
          <h3 className="text-white mb-4">Need Custom Technical Support?</h3>
          <p className="text-gray-400 mb-6">
            Our engineering team can provide specific documentation and CAD files for your application.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Engineering Team
          </Link>
        </div>
      </section>
    </div>
  );
}
