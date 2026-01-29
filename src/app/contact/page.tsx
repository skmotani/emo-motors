"use client";

import { useState } from "react";
import { Metadata } from "next";
import EngineerSummary from "@/components/EngineerSummary";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  machineType: string;
  motorPower: string;
  motorSpeed: string;
  quantity: string;
  application: string;
  requirements: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    machineType: "",
    motorPower: "",
    motorSpeed: "",
    quantity: "",
    application: "",
    requirements: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="container max-w-xl text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="mb-4">Request <span className="text-accent">Submitted</span></h2>
          <p className="text-muted mb-8">
            Thank you for your inquiry. Our engineering team will review your requirements 
            and respond within 24-48 business hours with a technical proposal.
          </p>
          <a href="/" className="btn-primary">
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 bg-dark">
        <div className="container">
          <span className="section-label text-gray-400 block mb-4">Technical Inquiry</span>
          <h1 className="text-white mb-4">
            Request <span className="text-accent">Technical</span> Quote
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Provide your technical specifications and our engineering team will prepare 
            a customized motor solution for your textile machinery application.
          </p>
        </div>
      </section>

      {/* Engineer Summary */}
      <section className="section pb-0">
        <div className="container">
          <EngineerSummary>
            Submit your RFQ with motor power (HP/kW), RPM, and machine type specifications. 
            Our team provides detailed technical proposals including efficiency ratings, 
            dimensional drawings, and ROI calculations within 48 hours.
          </EngineerSummary>
        </div>
      </section>

      {/* Form Section */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <div className="card">
                  <h3 className="text-lg font-bold text-dark mb-6">Contact Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-dark mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark mb-2">Company Name *</label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                        placeholder="ABC Textiles"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                </div>

                {/* Technical Specifications */}
                <div className="card">
                  <h3 className="text-lg font-bold text-dark mb-6">Technical Specifications</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-dark mb-2">Machine Type *</label>
                      <select
                        name="machineType"
                        required
                        value={formData.machineType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option value="">Select machine type</option>
                        <option value="ring-twister">Ring Twister</option>
                        <option value="winding-machine">Winding Machine</option>
                        <option value="spinning">Spinning Machine</option>
                        <option value="tfo">TFO Machine</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark mb-2">Motor Power (HP/kW) *</label>
                      <select
                        name="motorPower"
                        required
                        value={formData.motorPower}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option value="">Select power range</option>
                        <option value="0.37-0.75">0.37 - 0.75 kW</option>
                        <option value="1.1-2.2">1.1 - 2.2 kW</option>
                        <option value="3-5.5">3 - 5.5 kW</option>
                        <option value="7.5-15">7.5 - 15 kW</option>
                        <option value="18.5-37">18.5 - 37 kW</option>
                        <option value="45-90">45 - 90 kW</option>
                        <option value="110+">110+ kW</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark mb-2">Motor Speed (RPM) *</label>
                      <select
                        name="motorSpeed"
                        required
                        value={formData.motorSpeed}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option value="">Select speed</option>
                        <option value="750">750 RPM (8 Pole)</option>
                        <option value="1000">1000 RPM (6 Pole)</option>
                        <option value="1500">1500 RPM (4 Pole)</option>
                        <option value="3000">3000 RPM (2 Pole)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark mb-2">Quantity Required</label>
                      <input
                        type="number"
                        name="quantity"
                        min="1"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                        placeholder="e.g., 50"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-dark mb-2">Application / Use Case</label>
                    <select
                      name="application"
                      value={formData.application}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">Select application</option>
                      <option value="new-installation">New Installation</option>
                      <option value="replacement">Motor Replacement</option>
                      <option value="upgrade">Efficiency Upgrade</option>
                      <option value="expansion">Capacity Expansion</option>
                    </select>
                  </div>
                </div>

                {/* Additional Requirements */}
                <div className="card">
                  <h3 className="text-lg font-bold text-dark mb-6">Additional Requirements</h3>
                  <textarea
                    name="requirements"
                    rows={4}
                    value={formData.requirements}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Describe any special requirements, custom specifications, or additional details..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Submit Technical Inquiry"
                  )}
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="card bg-dark text-white">
                <h4 className="font-bold mb-4">Direct Contact</h4>
                <div className="space-y-3 text-gray-300 text-sm">
                  <p className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    sales@emomotors.com
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="card">
                <h4 className="font-bold text-dark mb-4">Response Time</h4>
                <p className="text-muted text-sm">
                  Our engineering team responds to technical inquiries within 
                  <strong className="text-dark"> 24-48 business hours</strong> with detailed 
                  proposals and specifications.
                </p>
              </div>

              <div className="card">
                <h4 className="font-bold text-dark mb-4">What to Expect</h4>
                <ul className="space-y-2 text-sm text-muted">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Technical proposal with motor selection
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Dimensional drawings (PDF/DWG)
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Efficiency comparison & ROI analysis
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Competitive pricing quotation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
