import Link from "next/link";
import { Metadata } from "next";
import EngineerSummary from "@/components/EngineerSummary";

export const metadata: Metadata = {
  title: "Quality Lab | EMO Motors - Testing & Certification",
  description: "Deep dive into EMO's quality testing protocols including thermal, vibration, and load testing. ISO 9001:2015 certified manufacturing.",
};

const testingProtocols = [
  {
    title: "Thermal Testing",
    description: "Temperature rise verification under full load conditions to ensure Class F/H insulation compliance.",
    specs: [
      "Winding temperature monitoring",
      "Bearing temperature analysis",
      "Ambient temperature simulation (up to 55°C)",
      "Thermal imaging for hot spot detection"
    ]
  },
  {
    title: "Vibration Analysis",
    description: "Precision vibration measurement and dynamic balancing to ISO 10816 standards.",
    specs: [
      "ISO 10816 compliance verification",
      "Dynamic balancing to G2.5 grade",
      "Resonance frequency analysis",
      "Structural vibration assessment"
    ]
  },
  {
    title: "Load Testing",
    description: "Full load and overload testing to verify performance characteristics and efficiency ratings.",
    specs: [
      "100% load torque verification",
      "150% overload capability test",
      "Efficiency measurement per IEC 60034-2-1",
      "Power factor verification"
    ]
  },
  {
    title: "Insulation Testing",
    description: "High voltage and insulation resistance testing for reliability in demanding environments.",
    specs: [
      "Hi-pot testing (2kV + 2 x rated voltage)",
      "Insulation resistance measurement",
      "Surge comparison test",
      "Partial discharge assessment"
    ]
  },
];

const certifications = [
  { name: "ISO 9001:2015", description: "Quality Management System" },
  { name: "IEC 60034", description: "Rotating Electrical Machines" },
  { name: "IE3/IE4", description: "Energy Efficiency Standards" },
  { name: "IP55/IP66", description: "Ingress Protection" },
];

export default function QualityLabPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 bg-dark">
        <div className="container">
          <span className="section-label text-gray-400 block mb-4">Quality Assurance</span>
          <h1 className="text-white mb-4">
            <span className="text-accent">Quality</span> Lab
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Rigorous testing protocols ensure every EMO motor meets the highest 
            standards for reliability, efficiency, and performance in textile applications.
          </p>
        </div>
      </section>

      {/* Engineer Summary */}
      <section className="section pb-0">
        <div className="container">
          <EngineerSummary>
            EMO Quality Lab conducts comprehensive testing per IEC 60034 standards including 
            thermal rise (Class F: 105K, Class H: 125K), vibration (ISO 10816, G2.5 balance), 
            and efficiency verification (IEC 60034-2-1). All motors are 100% tested before shipment.
          </EngineerSummary>
        </div>
      </section>

      {/* Testing Protocols */}
      <section className="section">
        <div className="container">
          <span className="section-label block mb-4">Testing Protocols</span>
          <h2 className="mb-12">
            Comprehensive <span className="text-accent">Quality</span> Verification
          </h2>
          
          <div className="grid-2">
            {testingProtocols.map((protocol, index) => (
              <div key={index} className="card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark">{protocol.title}</h3>
                    <p className="text-muted text-sm mt-1">{protocol.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-2 ml-16">
                  {protocol.specs.map((spec, specIndex) => (
                    <li key={specIndex} className="text-sm text-text flex items-center gap-2">
                      <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="section bg-white">
        <div className="container">
          <span className="section-label block mb-4">Quality Metrics</span>
          <h2 className="mb-12">
            Our <span className="text-accent">Commitment</span> to Excellence
          </h2>
          
          <div className="grid-4">
            {[
              { value: "100%", label: "Motors Tested" },
              { value: "<0.1%", label: "Field Failure Rate" },
              { value: "40K+", label: "Hours MTBF" },
              { value: "25+", label: "Years Experience" },
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <span className="text-4xl font-bold text-accent">{metric.value}</span>
                <p className="text-muted mt-2">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section">
        <div className="container">
          <span className="section-label block mb-4">Certifications</span>
          <h2 className="mb-8">
            International <span className="text-accent">Standards</span> Compliance
          </h2>
          
          <div className="grid-4">
            {certifications.map((cert, index) => (
              <div key={index} className="card text-center py-8">
                <div className="w-16 h-16 bg-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-bold text-dark mb-1">{cert.name}</h4>
                <p className="text-muted text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark">
        <div className="container text-center">
          <h3 className="text-white mb-4">Need Test Certificates?</h3>
          <p className="text-gray-400 mb-6">
            We provide detailed test reports and certificates with every motor shipment.
          </p>
          <Link href="/contact" className="btn-primary">
            Request Documentation
          </Link>
        </div>
      </section>
    </div>
  );
}
