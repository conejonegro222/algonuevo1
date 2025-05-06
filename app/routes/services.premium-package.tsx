import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { SparklesIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => {
  return [
    { title: "Kick Premium Package - KickBooster" },
    { name: "description", content: "All-in-one conceptual growth solution for Kick streamers." },
  ];
};

const packageFeatures = [
  "Conceptual Kick Followers Boost",
  "Conceptual Live Viewer Hours",
  "Kick Chatbot Setup (Conceptual)",
  "Priority Support (Simulated)",
  "Monthly Strategy Call (Conceptual)",
  "Access to Exclusive Guides (Placeholder)",
];

export default function PremiumPackagePage() {
  return (
    <div className="section-padding">
      <div className="container-custom max-w-3xl mx-auto">
        <div className="flex items-center mb-6">
          <SparklesIcon className="h-10 w-10 text-brand-purple mr-3" />
          <h1 className="text-3xl font-bold text-brand-purple">Kick Premium Growth Package</h1>
        </div>
        <p className="text-lg text-brand-text-light mb-4">
          Our all-inclusive conceptual Premium Package is designed for Kick streamers looking for comprehensive growth and support.
        </p>
        <p className="text-brand-text-secondary mb-8">
          This package combines our key conceptual services with dedicated (simulated) support to maximize your channel's potential. This is a UI demonstration.
        </p>
        <div className="bg-brand-card p-8 rounded-lg shadow-xl mb-8">
          <h2 className="text-2xl font-semibold text-brand-text-primary mb-6 text-center">What's Included (Conceptual)</h2>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            {packageFeatures.map((feature) => (
              <div key={feature} className="flex items-start">
                <CheckBadgeIcon className="h-6 w-6 text-brand-success mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-brand-text-light">{feature}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-3xl font-bold text-brand-purple mb-2">Contact Us For Custom Quote</p>
            <p className="text-brand-text-secondary mb-4">(Conceptual Pricing)</p>
            <Link to="/contact" className="btn btn-primary !text-lg">
              Inquire Now
            </Link>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <Link to="/services" className="btn btn-secondary">
            &larr; Explore Other Services
          </Link>
        </div>
      </div>
    </div>
  );
}
