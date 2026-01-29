import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About EMO Motors | Meera Industries - 25 Years of Textile Excellence",
  description: "EMO Motors by Meera Industries Limited - Pioneers in twisting machines for 25+ years. Our proprietary machine designs are powered by our own engineered motors.",
  keywords: ["EMO Motors", "Meera Industries", "textile motors", "twisting machines", "India manufacturer", "proprietary design"],
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero with Factory Image */}
      <section className="py-20 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/factory.png"
            alt="Meera Industries Manufacturing Facility"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/95 to-dark/80" />
        
        <div className="container relative">
          <span className="section-label text-gray-400 block mb-4">About Us</span>
          <h1 className="text-white mb-6">
            <span className="text-accent">25 Years</span> of<br />
            Textile Excellence
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            Meera Industries Limited has been at the forefront of textile machinery 
            innovation for over two decades. Every motor we build carries the DNA of 
            our twisting machine expertise.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-4">
              <span className="text-5xl font-bold text-accent">25+</span>
              <span className="text-gray-400">Years of<br/>Excellence</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-5xl font-bold text-white">500+</span>
              <span className="text-gray-400">Machines<br/>Delivered</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-5xl font-bold text-white">50+</span>
              <span className="text-gray-400">Countries<br/>Served</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story - The Differentiator */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label block mb-4">Our Story</span>
              <h2 className="mb-6">
                Born from <span className="text-accent">Machine Building</span>
              </h2>
              <div className="prose text-muted space-y-4">
                <p className="text-lg">
                  <strong className="text-dark">Meera Industries Limited</strong> began its journey 
                  25 years ago as pioneers in twisting machine manufacturing. We didn't start as a 
                  motor company — we started as textile machinery builders who understood exactly 
                  what motors needed to do.
                </p>
                <p>
                  For years, we faced the same challenge every machine builder knows: finding motors 
                  that truly matched our specifications. Off-the-shelf motors were never quite right — 
                  the speed characteristics, the vibration levels, the mounting dimensions, the thermal 
                  performance in textile environments.
                </p>
                <p>
                  <strong className="text-dark">So we built our own.</strong>
                </p>
                <p>
                  Our proprietary motor designs were engineered specifically for our twisting machines, 
                  tested in our own production lines, and refined through thousands of hours of real-world 
                  operation. The result? Motors that don't just meet specifications — they exceed them.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-4">
                <Image
                  src="/images/engineering-team.png"
                  alt="EMO Motors Engineering Team"
                  width={600}
                  height={450}
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-xl shadow-lg">
                <span className="text-3xl font-bold block">25+</span>
                <span className="text-sm">Years Building<br/>Textile Machines</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="section bg-white">
        <div className="container">
          <span className="section-label block mb-4">Why This Matters</span>
          <h2 className="mb-12">
            Motors Designed by <span className="text-accent">Machine Builders</span>
          </h2>
          
          <div className="grid-3">
            {[
              {
                title: "Real-World Testing",
                description: "Every EMO motor is tested on actual twisting machines in our facility before shipment. We don't rely on lab data alone — we prove performance in production conditions.",
                icon: "🔬"
              },
              {
                title: "Application Expertise",
                description: "Our engineers understand ring twisters, TFO machines, and winding applications because we build them. We speak your language and solve your problems.",
                icon: "🎯"
              },
              {
                title: "Proprietary Designs",
                description: "Our motor designs are optimized specifically for textile requirements — not adapted from general industrial motors. Every detail is purpose-built.",
                icon: "⚙️"
              },
              {
                title: "Integrated Development",
                description: "Machine and motor developed together under one roof. When we identify a need in our machines, we engineer the motor solution immediately.",
                icon: "🔄"
              },
              {
                title: "25 Years of Data",
                description: "Two decades of field performance data from our own machines informs every design decision. We know what works because we've lived it.",
                icon: "📊"
              },
              {
                title: "Continuous Improvement",
                description: "Feedback from our machine installations drives constant motor refinement. Our motors get better because our machines get better.",
                icon: "📈"
              },
            ].map((item, index) => (
              <div key={index} className="card">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h4 className="text-lg font-bold text-dark mb-2">{item.title}</h4>
                <p className="text-muted text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Proof Section */}
      <section className="section bg-dark text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="section-label text-gray-400 block mb-4">The Proof</span>
            <h2 className="text-white mb-4">
              We Use These Motors in <span className="text-accent">Our Own Machines</span>
            </h2>
            <p className="text-gray-400 text-lg">
              The ultimate test of quality: we stake our machine reputation on our motors. 
              Every Meera twisting machine ships with EMO motors — because we won't trust 
              our machines to anything less.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-xl p-8 text-center">
              <span className="text-5xl font-bold text-accent block mb-2">100%</span>
              <span className="text-gray-400">Meera Machines Use<br/>EMO Motors</span>
            </div>
            <div className="bg-white/5 rounded-xl p-8 text-center">
              <span className="text-5xl font-bold text-white block mb-2">50,000+</span>
              <span className="text-gray-400">Operating Hours<br/>Average Life</span>
            </div>
            <div className="bg-white/5 rounded-xl p-8 text-center">
              <span className="text-5xl font-bold text-white block mb-2">&lt;0.5%</span>
              <span className="text-gray-400">Field Failure Rate<br/>Industry-Leading</span>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section">
        <div className="container">
          <span className="section-label block mb-4">Certifications & Standards</span>
          <h2 className="mb-8">
            <span className="text-accent">International</span> Compliance
          </h2>
          
          <div className="grid-4">
            {[
              { name: "CE", desc: "European Conformity" },
              { name: "BIS", desc: "Bureau of Indian Standards" },
              { name: "ISO 9001", desc: "Quality Management" },
              { name: "IEC 60034", desc: "Motor Standards" },
              { name: "IE3 / IE4", desc: "Efficiency Class" },
              { name: "NEMA", desc: "North American Standards" },
              { name: "ISO 14001", desc: "Environmental Management" },
              { name: "RoHS", desc: "Hazardous Substances" },
            ].map((cert) => (
              <div key={cert.name} className="card text-center py-6">
                <span className="text-dark font-bold text-xl">{cert.name}</span>
                <p className="text-muted text-xs mt-1">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="section bg-white">
        <div className="container">
          <span className="section-label block mb-4">Global Presence</span>
          <h2 className="mb-8">
            Serving Textile Mills <span className="text-accent">Worldwide</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h4 className="font-bold text-dark mb-4">Manufacturing Excellence</h4>
              <p className="text-muted mb-6">
                State-of-the-art manufacturing facility in India with advanced CNC machining, 
                automated winding lines, precision balancing equipment, and comprehensive 
                testing laboratories. Every motor undergoes 100% testing before shipment.
              </p>
              
              <h4 className="font-bold text-dark mb-4">Export Markets</h4>
              <div className="flex flex-wrap gap-2">
                {["Bangladesh", "Vietnam", "Indonesia", "Turkey", "Egypt", "Brazil", "Mexico", "Ethiopia", "Pakistan", "Thailand", "Sri Lanka", "Kenya"].map((country) => (
                  <span key={country} className="bg-gray-100 text-dark text-sm px-3 py-1 rounded-full">
                    {country}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-dark mb-4">Applications We Serve</h4>
              <ul className="space-y-3">
                {[
                  "Ring Twisting Machines (Our Specialty)",
                  "Two-for-One (TFO) Twisters",
                  "Ring Spinning Frames",
                  "Winding & Rewinding Machines",
                  "Draw Frames & Combers",
                  "Texturizing Machines",
                  "Yarn Conditioning Systems",
                ].map((industry) => (
                  <li key={industry} className="flex items-center gap-3 text-text">
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {industry}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-white mb-2">Experience the Difference</h3>
              <p className="text-gray-400">Motors engineered by machine builders, for machine builders.</p>
            </div>
            <div className="flex gap-4">
              <Link href="/contact" className="btn-primary whitespace-nowrap">
                Contact Our Team
              </Link>
              <Link href="/products" className="btn-secondary border-gray-600 text-white hover:border-white whitespace-nowrap">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
