import Link from "next/link";
import { Metadata } from "next";
import EngineerSummary from "@/components/EngineerSummary";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Products | EMO Motors - Industrial Induction Motors",
  description: "Browse EMO's range of IE3 & IE4 super premium efficiency motors, VFD-compatible motors, and textile brake motors. Engineered for textile excellence.",
};

export default function ProductsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 bg-dark">
        <div className="container">
          <span className="section-label text-gray-400 block mb-4">Product Hub</span>
          <h1 className="text-white mb-4">
            <span className="text-accent">Premium</span> Motor Solutions
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Discover our complete range of induction motors engineered specifically 
            for textile machinery applications. Each product line meets European 
            engineering standards for efficiency and reliability.
          </p>
        </div>
      </section>

      {/* Engineer Summary */}
      <section className="section">
        <div className="container">
          <EngineerSummary>
            EMO offers three motor categories: IE3/IE4 Super Premium Efficiency Motors 
            (0.37kW to 315kW), VFD-Compatible Motors optimized for variable frequency 
            drives, and Textile Brake Motors with DC brake systems. All motors feature 
            IP55/IP66 protection ratings and Class F/H insulation.
          </EngineerSummary>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section pt-0">
        <div className="container">
          <div className="grid-3">
            <ProductCard
              title="IE3 & IE4 Super Premium Motors"
              description="Super premium efficiency motors meeting IE3 and IE4 international standards. Optimized for maximum energy savings in continuous operation."
              href="/products/ie3-ie4-motors"
              badge="Most Popular"
              image="/images/ie3-ie4-motor.png"
              features={[
                "IE3/IE4 Efficiency Rating",
                "0.37kW to 315kW Range",
                "Class F/H Insulation",
                "S1 Continuous Duty"
              ]}
            />
            <ProductCard
              title="VFD-Compatible Motors"
              description="Specially designed for seamless integration with variable frequency drives. Enhanced insulation system and optimized cooling."
              href="/products/vfd-compatible"
              image="/images/vfd-motor.png"
              features={[
                "Inverter-Ready Design",
                "Reinforced Insulation",
                "Extended Bearing Life",
                "Low Vibration Operation"
              ]}
            />
            <ProductCard
              title="Textile Brake Motors"
              description="Precision brake motors featuring integrated DC brake systems for applications requiring instant stopping and accurate positioning."
              href="/products/brake-motors"
              image="/images/brake-motor.png"
              features={[
                "DC Brake System",
                "Quick Response Time",
                "High Holding Torque",
                "Manual Release Option"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Specifications Overview */}
      <section className="section bg-white">
        <div className="container">
          <span className="section-label block mb-4">Technical Overview</span>
          <h2 className="mb-12">
            Common <span className="text-accent">Specifications</span>
          </h2>
          
          <div className="grid-2">
            <div className="card">
              <h4 className="text-lg font-bold text-dark mb-4">Protection & Enclosure</h4>
              <table className="spec-table">
                <tbody>
                  <tr>
                    <td className="font-medium">IP Rating</td>
                    <td>IP55 / IP66</td>
                  </tr>
                  <tr>
                    <td className="font-medium">Insulation Class</td>
                    <td>Class F (155°C) / Class H (180°C)</td>
                  </tr>
                  <tr>
                    <td className="font-medium">Duty Cycle</td>
                    <td>S1 Continuous</td>
                  </tr>
                  <tr>
                    <td className="font-medium">Cooling Method</td>
                    <td>IC411 (TEFC)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="card">
              <h4 className="text-lg font-bold text-dark mb-4">Electrical Standards</h4>
              <table className="spec-table">
                <tbody>
                  <tr>
                    <td className="font-medium">Efficiency Class</td>
                    <td>IE3 / IE4</td>
                  </tr>
                  <tr>
                    <td className="font-medium">Voltage Range</td>
                    <td>380-415V / 50Hz</td>
                  </tr>
                  <tr>
                    <td className="font-medium">Power Range</td>
                    <td>0.37kW to 315kW</td>
                  </tr>
                  <tr>
                    <td className="font-medium">Speed Options</td>
                    <td>2, 4, 6, 8 Poles</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-dark to-gray-700">
        <div className="container text-center">
          <h3 className="text-white mb-4">Need Custom Specifications?</h3>
          <p className="text-gray-400 mb-6">
            Our engineering team can provide customized solutions for your specific requirements.
          </p>
          <Link href="/contact" className="btn-primary">
            Request Technical Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
