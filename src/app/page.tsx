import Link from "next/link";
import EngineerSummary from "@/components/EngineerSummary";
import ProductCard from "@/components/ProductCard";
import PremiumProductCard from "@/components/PremiumProductCard";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero-motor.jpg')`,
            backgroundColor: '#303B47'
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 hero-overlay" />
        
        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-3xl">
            {/* Energy Savings Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <span className="text-white font-semibold text-sm">Up to 25% Energy Savings vs IE1 Motors</span>
            </div>
            
            <span className="section-label text-gray-300 mb-4 block animate-fade-in-up">
              Trusted by 500+ Textile Mills Across India
            </span>
            
            <h1 className="text-white mb-6 animate-fade-in-up animate-delay-1">
              <span className="text-accent">Special</span> Motors for<br />
              Textile Machines
            </h1>
            
            <p className="text-xl text-gray-300 mb-6 animate-fade-in-up animate-delay-2">
              IE3 & IE4 super premium efficiency induction motors engineered for 
              ring twisters, winding machines, and spinning applications. Delivering 
              <span className="text-white font-semibold"> 6-18 month payback</span> through 
              superior energy efficiency.
            </p>

            {/* Social Proof Stats */}
            <div className="flex flex-wrap gap-6 mb-8 animate-fade-in-up animate-delay-2">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Textile Mills</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">25%</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Energy Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">IE4</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Super Premium</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">BIS</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Certified</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-3">
              <Link href="/contact" className="btn-primary">
                Get Energy Audit Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/products" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20">
                View Motor Range
              </Link>
            </div>

            {/* Regional Presence */}
            <p className="text-gray-500 text-sm mt-6 animate-fade-in-up animate-delay-3">
              Powering textile mills in Tamil Nadu • Gujarat • Maharashtra • Karnataka
            </p>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Engineer Summary */}
      <section className="section bg-white">
        <div className="container">
          <EngineerSummary>
            EMO Motors delivers IE3 (IE 60034-30-1) and IE4 super premium efficiency 
            induction motors with IC411/IC417 cooling systems optimized for textile machinery. 
            Features: IP55/IP66 protection, Class F/H insulation (155°C/180°C), S1 continuous 
            duty, VFD-ready up to 100Hz. Typical payback: 6-18 months vs IE1/IE2 motors.
          </EngineerSummary>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="section">
        <div className="container">
          <span className="section-label block mb-4">Why Choose EMO</span>
          <h2 className="mb-12">
            <span className="text-accent">Engineering</span> Excellence<br />
            for Textile Industry
          </h2>
          
          <div className="grid-4">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "20-25% Energy Savings",
                description: "IE3 & IE4 super premium motors with 6-18 month payback vs legacy IE1/IE2",
                metric: "Verified Savings"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "IC411/IC417 Cooling",
                description: "Advanced frame-surface cooling optimized for ring frame & TFO applications",
                metric: "Textile-Specific"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "S1 Continuous Duty",
                description: "Designed for 24/7 operation in continuous textile production lines",
                metric: "50,000+ Hours"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "VFD Ready (100Hz)",
                description: "Inverter-duty insulation with reinforced bearings for variable speed",
                metric: "0-100Hz Range"
              },
            ].map((item, index) => (
              <div key={index} className="card">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-4">
                  {item.icon}
                </div>
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">{item.metric}</span>
                <h4 className="text-lg font-bold text-dark mb-2">{item.title}</h4>
                <p className="text-muted text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section bg-white">
        <div className="container">
          <span className="section-label block mb-4">Product Categories</span>
          <h2 className="mb-12">
            <span className="text-accent">Our Premium</span> Motor Solutions
          </h2>
          
          <div className="grid-3">
            <PremiumProductCard
              title="IE3 & IE4 Premium Motors"
              description="Super premium efficiency motors meeting international standards for energy optimization."
              href="/products/ie3-ie4-motors"
              badge="Most Popular"
              image="/images/ie3-ie4-motor.png"
              features={["IE3/IE4 Efficiency", "Class F/H Insulation", "S1 Duty Cycle"]}
            />
            <PremiumProductCard
              title="VFD-Compatible Motors"
              description="Specially designed for seamless integration with variable frequency drives."
              href="/products/vfd-compatible"
              image="/images/vfd-motor.png"
              features={["Inverter-Ready", "Low Vibration", "Extended Bearing Life"]}
            />
            <PremiumProductCard
              title="Textile Brake Motors"
              description="Precision brake motors for applications requiring instant stopping and positioning."
              href="/products/brake-motors"
              image="/images/brake-motor.png"
              features={["DC Brake System", "Quick Response", "High Holding Torque"]}
            />
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section">
        <div className="container">
          <span className="section-label block mb-4">Textile Applications</span>
          <h2 className="mb-12">
            Engineered for <span className="text-accent">Every</span> Process
          </h2>
          
          <div className="grid-3">
            {[
              {
                title: "Ring Twisters",
                description: "High-speed stability for precision yarn twisting operations",
                href: "/applications/ring-twisters",
                metric: "Up to 15,000 RPM",
                image: "/images/ring-twister.png"
              },
              {
                title: "Winding Machines",
                description: "Superior torque control for consistent package building",
                href: "/applications/winding-machines",
                metric: "Precise Tension Control",
                image: "/images/winding-machine.png"
              },
              {
                title: "Spinning & TFO",
                description: "Unmatched durability for continuous spinning operations",
                href: "/applications/spinning-tfo",
                metric: "24/7 Operation Ready",
                image: "/images/spinning-tfo.png"
              },
            ].map((app, index) => (
              <Link key={index} href={app.href} className="card group overflow-hidden">
                <div className="relative h-32 -mx-8 -mt-8 mb-4 overflow-hidden">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {app.metric}
                  </span>
                  <svg className="w-5 h-5 text-muted group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-accent transition-colors">
                  {app.title}
                </h3>
                <p className="text-muted text-sm">{app.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark text-white">
        <div className="container text-center">
          <h2 className="text-white mb-4">
            Calculate Your <span className="text-accent">Energy Savings</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Upgrade from IE1/IE2 to IE4 motors and see payback in 6-18 months. 
            Get a free energy audit and custom ROI calculation for your textile mill.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold text-accent">₹2-5 Lakh</div>
              <div className="text-sm text-gray-500">Annual Savings per Motor</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">15-30%</div>
              <div className="text-sm text-gray-500">Lower Energy Bills</div>
            </div>
          </div>
          
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="btn-primary">
              Get Free Energy Audit
            </Link>
            <Link href="/engineering" className="btn-secondary border-gray-600 text-white hover:border-white">
              ROI Calculator
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
