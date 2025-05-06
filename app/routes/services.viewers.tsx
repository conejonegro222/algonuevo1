import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { EyeIcon, ClockIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => {
  return [
    { title: "Kick Live Viewers Service - KickBooster" },
    { name: "description", content: "Conceptual service for boosting Kick live stream viewers." },
  ];
};

export default function ViewersServicePage() {
  return (
    <div className="section-padding">
      <div className="container-custom max-w-3xl mx-auto">
        <div className="flex items-center mb-6">
          <EyeIcon className="h-10 w-10 text-brand-purple mr-3" />
          <h1 className="text-3xl font-bold text-brand-purple">Kick Live Viewers Service</h1>
        </div>
        <p className="text-lg text-brand-text-light mb-4">
          Increase your Kick stream's visibility and engagement with our conceptual live viewer service. Higher viewer counts can attract more organic attention.
        </p>
        <p className="text-brand-text-secondary mb-8">
          This page is a UI demonstration of how a live viewer service might be presented. No actual viewers are sent.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-brand-card p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-brand-text-primary mb-3">Service Highlights (Conceptual)</h2>
            <ul className="space-y-2 text-brand-text-light">
              <li className="flex items-start"><EyeIcon className="h-5 w-5 text-brand-success mr-2 mt-0.5 flex-shrink-0" /> Stable & Reliable Viewers (Simulated)</li>
              <li className="flex items-start"><ClockIcon className="h-5 w-5 text-brand-info mr-2 mt-0.5 flex-shrink-0" /> Various Durations Available</li>
              <li className="flex items-start"><GlobeAltIcon className="h-5 w-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" /> Geo-Targeting Options (Conceptual)</li>
              <li>Split viewers across multiple streams (Conceptual)</li>
            </ul>
          </div>
          <div className="bg-brand-card p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-brand-text-primary mb-3">Simple Ordering (Conceptual)</h2>
            <ol className="list-decimal list-inside text-brand-text-light space-y-1">
              <li>Choose your desired viewer count and duration.</li>
              <li>Provide your Kick stream link when you go live.</li>
              <li>Complete the (simulated) secure payment.</li>
              <li>See your viewer numbers rise (conceptually)!</li>
            </ol>
          </div>
        </div>

        <div className="bg-brand-secondary-dark p-8 rounded-lg shadow-xl text-center">
          <h3 className="text-2xl font-semibold text-brand-text-primary mb-4">Boost Your Live Streams Now!</h3>
          <p className="text-brand-text-secondary mb-6">Check our pricing for conceptual viewer packages or get in touch for custom solutions.</p>
          <Link to="/pricing" className="btn btn-primary !text-lg">
            View Viewer Packages
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
