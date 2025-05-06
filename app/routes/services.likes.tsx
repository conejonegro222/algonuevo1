import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => {
  return [
    { title: "Kick Likes/Upvotes Service - KickBooster" },
    { name: "description", content: "Conceptual service for increasing Kick content likes/upvotes." },
  ];
};

export default function LikesServicePage() {
  return (
    <div className="section-padding">
      <div className="container-custom max-w-3xl mx-auto">
        <div className="flex items-center mb-6">
          <HandThumbUpIcon className="h-10 w-10 text-brand-purple mr-3" />
          <h1 className="text-3xl font-bold text-brand-purple">Kick Likes/Upvotes Service</h1>
        </div>
        <p className="text-lg text-brand-text-light mb-4">
          This page outlines our conceptual service for boosting likes or upvotes on your Kick clips and VODs.
        </p>
        <p className="text-brand-text-secondary mb-8">
          In a real scenario, this service would help improve the perceived popularity and engagement of your content. This is for UI demonstration only.
        </p>
        <div className="bg-brand-card p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold text-brand-text-primary mb-3">Service Features (Conceptual)</h2>
          <ul className="list-disc list-inside text-brand-text-light space-y-1">
            <li>Target specific clips or VODs</li>
            <li>Packages for various like/upvote counts</li>
            <li>Helps content appear more popular (conceptually)</li>
            <li>Safe and discreet (simulated) delivery</li>
          </ul>
        </div>
        <div className="bg-brand-card p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-brand-text-primary mb-3">Ordering Process (Conceptual)</h2>
          <ol className="list-decimal list-inside text-brand-text-light space-y-1">
            <li>Choose the number of likes/upvotes you need.</li>
            <li>Provide the link to your Kick clip or VOD.</li>
            <li>Finalize the (simulated) order.</li>
            <li>See your content's engagement (conceptually) rise.</li>
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
