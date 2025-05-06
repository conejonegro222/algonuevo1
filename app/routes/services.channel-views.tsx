import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { PlayIcon } from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => {
  return [
    { title: "Kick Channel Views Service - KickBooster" },
    { name: "description", content: "Conceptual service for increasing Kick channel/video views." },
  ];
};

export default function ChannelViewsServicePage() {
  return (
    <div className="section-padding">
      <div className="container-custom max-w-3xl mx-auto">
        <div className="flex items-center mb-6">
          <PlayIcon className="h-10 w-10 text-brand-purple mr-3" />
          <h1 className="text-3xl font-bold text-brand-purple">Kick Channel Views Service</h1>
        </div>
        <p className="text-lg text-brand-text-light mb-4">
          This is a placeholder page for our conceptual Kick Channel/Video Views service.
          In a real application, you would find details about packages, pricing, and how the service helps improve your channel's discoverability.
        </p>
        <p className="text-brand-text-secondary mb-8">
          Our aim here is to showcase a potential UI for such a service. No actual view generation is performed.
        </p>
        <div className="bg-brand-card p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold text-brand-text-primary mb-3">Service Features (Conceptual)</h2>
          <ul className="list-disc list-inside text-brand-text-light space-y-1">
            <li>Target specific videos or overall channel</li>
            <li>Various view packages (e.g., 1k, 5k, 10k views)</li>
            <li>Gradual and natural-looking delivery</li>
            <li>Helps with conceptual algorithm visibility</li>
          </ul>
        </div>
        <div className="bg-brand-card p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-brand-text-primary mb-3">How to Order (Conceptual)</h2>
          <ol className="list-decimal list-inside text-brand-text-light space-y-1">
            <li>Select your desired view package.</li>
            <li>Provide the link to your Kick channel or specific video.</li>
            <li>Complete the simulatedcheckout.</li>
            <li>Watch your view count (conceptually) increase!</li>
          </ol>
        </div>
        <div className="mt-8 text-center">
          <Link to="/services" className="btn btn-secondary">
            &larr; Back to All Services
          </Link>
          <Link to="/pricing" className="btn btn-primary ml-4">
            View Pricing
          </Link>
        </div>
      </div>
    </div>
  );
}
