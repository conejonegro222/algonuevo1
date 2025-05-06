import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { UsersIcon, ShieldCheckIcon, BoltIcon } from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => {
  return [
    { title: "Kick Followers Service - KickBooster" },
    { name: "description", content: "Conceptual service for increasing Kick followers safely and effectively." },
  ];
};

export default function FollowersServicePage() {
  return (
    <div className="section-padding">
      <div className="container-custom max-w-3xl mx-auto">
        <div className="flex items-center mb-6">
          <UsersIcon className="h-10 w-10 text-brand-purple mr-3" />
          <h1 className="text-3xl font-bold text-brand-purple">Kick Followers Service</h1>
        </div>
        <p className="text-lg text-brand-text-light mb-4">
          Boost your Kick channel's credibility and reach with our conceptual follower service. Attract more organic viewers by showcasing a thriving community.
        </p>
        <p className="text-brand-text-secondary mb-8">
          This page demonstrates how such a service might be presented. No actual followers are provided.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-brand-card p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-brand-text-primary mb-3">Key Features (Conceptual)</h2>
            <ul className="space-y-2 text-brand-text-light">
              <li className="flex items-start"><ShieldCheckIcon className="h-5 w-5 text-brand-success mr-2 mt-0.5 flex-shrink-0" /> Safe & Secure Delivery (Simulated)</li>
              <li className="flex items-start"><BoltIcon className="h-5 w-5 text-brand-info mr-2 mt-0.5 flex-shrink-0" /> Gradual or Instant Options</li>
              <li className="flex items-start"><UsersIcon className="h-5 w-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" /> High-Quality Looking Profiles (Conceptual)</li>
              <li>No Password Required</li>
            </ul>
          </div>
          <div className="bg-brand-card p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-brand-text-primary mb-3">How It Works (Conceptual)</h2>
            <ol className="list-decimal list-inside text-brand-text-light space-y-1">
              <li>Select a follower package that suits your goals.</li>
              <li>Enter your Kick username (no password needed).</li>
              <li>Complete the (simulated) secure payment.</li>
              <li>Watch your follower count grow (conceptually)!</li>
            </ol>
          </div>
        </div>

        <div className="bg-brand-secondary-dark p-8 rounded-lg shadow-xl text-center">
          <h3 className="text-2xl font-semibold text-brand-text-primary mb-4">Ready to Grow Your Kick Channel?</h3>
          <p className="text-brand-text-secondary mb-6">Choose a conceptual package on our pricing page or contact us for custom needs.</p>
          <Link to="/pricing" className="btn btn-primary !text-lg">
            View Follower Packages
          </Link>
        </div>

        <div className="mt-10 text-center">
          <Link to="/services" className="btn btn-secondary">
            &larr; Back to All Services
          </Link>
        </div>
      </div>
    </div>
  );
}
