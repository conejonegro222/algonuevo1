import type { MetaFunction } from "@remix-run/node";
import { CheckBadgeIcon } from "@heroicons/react/24/solid"; // Solid for selected plan features
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Pricing Plans - KickBooster" },
    { name: "description", content: "Conceptual pricing for KickBooster services. Choose the best plan for your Kick channel." },
  ];
};

const pricingTiers = [
  {
    name: "Follower Starter",
    price: "$4.99",
    priceDetails: "one-time",
    serviceType: "Kick Followers",
    features: [
      "100 Conceptual Followers",
      "Gradual Delivery (Simulated)",
      "Basic Support (Conceptual)",
    ],
    isPopular: false,
    ctaText: "Get Followers",
    ctaLink: "/services/followers"
  },
  {
    name: "Viewer Boost",
    price: "$9.99",
    priceDetails: "per 100 viewers/hr",
    serviceType: "Kick Live Viewers",
    features: [
      "100 Conceptual Viewers",
      "1 Hour Duration (Simulated)",
      "Stable Connection (Conceptual)",
      "Standard Support (Conceptual)",
    ],
    isPopular: true,
    ctaText: "Boost Viewers",
    ctaLink: "/services/viewers"
  },
  {
    name: "Chatbot Pro",
    price: "$14.99",
    priceDetails: "per month",
    serviceType: "Kick Chatbot",
    features: [
      "Advanced Chatbot (Conceptual)",
      "Unlimited Commands (Simulated)",
      "Spam Filtering (Conceptual)",
      "Priority Support (Conceptual)",
    ],
    isPopular: false,
    ctaText: "Get Chatbot",
    ctaLink: "/services/chatbot"
  },
];

export default function PricingPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <h1 className="text-4xl font-bold text-brand-purple mb-6 text-center">Flexible Pricing Plans</h1>
        <p className="text-lg text-brand-text-secondary mb-12 text-center max-w-2xl mx-auto">
          Choose a (conceptual) plan that aligns with your Kick channel's growth strategy. All services are for UI demonstration purposes only.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier) => (
            <div 
              key={tier.name} 
              className={`bg-brand-card shadow-xl rounded-xl p-6 flex flex-col relative ${tier.isPopular ? 'border-2 border-brand-purple shadow-purple-glow' : 'border-2 border-transparent'}`}
            >
              {tier.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-purple text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  POPULAR
                </div>
              )}
              <h2 className="text-2xl font-semibold text-brand-text-primary mb-1">{tier.name}</h2>
              <p className="text-sm text-brand-text-secondary mb-4">{tier.serviceType}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-brand-purple">{tier.price}</span>
                <span className="text-brand-text-secondary text-sm">/{tier.priceDetails}</span>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-brand-text-light">
                    <CheckBadgeIcon className="h-5 w-5 text-brand-success mr-2 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to={tier.ctaLink}
                className={`w-full btn ${tier.isPopular ? 'btn-primary' : 'btn-secondary'} mt-auto`}
              >
                {tier.ctaText} (Conceptual)
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-16 bg-brand-secondary-dark p-8 rounded-lg">
          <h3 className="text-2xl font-semibold text-brand-text-primary mb-3">Need a Custom Solution?</h3>
          <p className="text-brand-text-secondary mb-6">
            If your needs go beyond our standard (conceptual) packages, feel free to contact us for a custom quote.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Contact Sales (Conceptual)
          </Link>
        </div>
      </div>
    </div>
  );
}
