import Link from "next/link";
import { Metadata } from "next";
import EngineerSummary from "@/components/EngineerSummary";
import SpecTable from "@/components/SpecTable";

export const metadata: Metadata = {
  title: "Textile Brake Motors | EMO Motors",
  description: "Precision brake motors with integrated DC brake systems. Quick response and high holding torque for textile positioning applications.",
};

const specs = [
  { label: "Brake Type", value: "Spring-Applied DC Electromagnetic" },
  { label: "Brake Voltage", value: "180-205V DC" },
  { label: "Response Time", value: "< 30ms engagement" },
  { label: "Power Range", value: "0.37 kW to 22 kW" },
  { label: "IP Rating", value: "IP55" },
  { label: "Insulation Class", value: "Class F (155°C)" },
  { label: "Manual Release", value: "Standard on all models" },
  { label: "Brake Life", value: "> 1 million operations" },
];

export default function BrakeMotorsPage() {
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
          
          <span className="section-label text-gray-400 block mb-4">Brake Motor Series</span>
          <h1 className="text-white mb-4">
            Textile<br />
            <span className="text-accent">Brake Motors</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-8">
            Precision brake motors featuring integrated DC brake systems for applications 
            requiring instant stopping and accurate positioning.
          </p>
          
          <div className="flex items-center gap-6">
            <span className="text-5xl font-bold text-accent">&lt;30</span>
            <span className="text-gray-400">Milliseconds<br/>Response Time</span>
          </div>
        </div>
      </section>

      {/* Engineer Summary */}
      <section className="section pb-0">
        <div className="container">
          <EngineerSummary>
            EMO brake motors feature spring-applied DC electromagnetic brakes with &lt;30ms 
            response time and &gt;1 million operation life cycle. Available from 0.37kW to 22kW 
            with standard manual release and IP55 protection rating.
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
                Instant <span className="text-accent">Stop</span> Precision
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Quick Response Brake",
                    description: "Less than 30ms engagement time for precise stopping and positioning control."
                  },
                  {
                    title: "High Holding Torque",
                    description: "Reliable load holding even during power failure with spring-applied design."
                  },
                  {
                    title: "Manual Release",
                    description: "Standard manual release lever for safe maintenance and emergency situations."
                  },
                  {
                    title: "Long Service Life",
                    description: "Brake disc rated for over 1 million operations with minimal maintenance."
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
                  Request Quote for Brake Motors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section bg-white">
        <div className="container">
          <span className="section-label block mb-4">Applications</span>
          <h2 className="mb-8">
            Ideal for <span className="text-accent">Precision</span> Applications
          </h2>
          
          <div className="grid-4">
            {[
              "Warp Beam Drives",
              "Take-Up Rolls",
              "Traverse Systems",
              "Creel Drives",
              "Doffing Systems",
              "Slasher Drives",
              "Conveyor Systems",
              "Positioning Systems"
            ].map((app) => (
              <div key={app} className="card text-center py-6">
                <span className="text-dark font-medium">{app}</span>
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
              <h3 className="text-white mb-2">Need precise stopping control?</h3>
              <p className="text-gray-400">Get the right brake motor for your application.</p>
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
