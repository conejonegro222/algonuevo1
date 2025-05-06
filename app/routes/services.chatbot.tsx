import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { ChatBubbleLeftRightIcon, CogIcon, ShieldExclamationIcon } from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => {
  return [
    { title: "Kick Chatbot Service - KickBooster" },
    { name: "description", content: "Conceptual service for an advanced Kick channel chatbot." },
  ];
};

export default function ChatbotServicePage() {
  return (
    <div className="section-padding">
      <div className="container-custom max-w-3xl mx-auto">
        <div className="flex items-center mb-6">
          <ChatBubbleLeftRightIcon className="h-10 w-10 text-brand-purple mr-3" />
          <h1 className="text-3xl font-bold text-brand-purple">Kick Chatbot Service</h1>
        </div>
        <p className="text-lg text-brand-text-light mb-4">
          Engage your audience, automate tasks, and moderate your chat effectively with our conceptual Kick Chatbot service.
        </p>
        <p className="text-brand-text-secondary mb-8">
          This page demonstrates the potential features of a chatbot service. No actual chatbot functionality is implemented.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-brand-card p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-brand-text-primary mb-3">Chatbot Features (Conceptual)</h2>
            <ul className="space-y-2 text-brand-text-light">
              <li className="flex items-start"><CogIcon className="h-5 w-5 text-brand-success mr-2 mt-0.5 flex-shrink-0" /> Customizable Commands & Responses</li>
              <li className="flex items-start"><ShieldExclamationIcon className="h-5 w-5 text-brand-info mr-2 mt-0.5 flex-shrink-0" /> Automated Spam & Link Filtering</li>
              <li className="flex items-start"><ChatBubbleLeftRightIcon className="h-5 w-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" /> Scheduled Messages & Announcements</li>
              <li>User Timers & Loyalty Points (Conceptual)</li>
              <li>Integration with Stream Alerts (Conceptual)</li>
            </ul>
          </div>
          <div className="bg-brand-card p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-brand-text-primary mb-3">Easy Setup (Conceptual)</h2>
            <ol className="list-decimal list-inside text-brand-text-light space-y-1">
              <li>Choose a chatbot plan that fits your needs.</li>
              <li>Connect the (conceptual) chatbot to your Kick account.</li>
              <li>Configure commands and settings via a dashboard.</li>
              <li>Let the chatbot manage your chat (conceptually)!</li>
            </ol>
          </div>
        </div>

        <div className="bg-brand-secondary-dark p-8 rounded-lg shadow-xl text-center">
          <h3 className="text-2xl font-semibold text-brand-text-primary mb-4">Automate Your Kick Chat Today!</h3>
          <p className="text-brand-text-secondary mb-6">Explore our conceptual chatbot plans on the pricing page.</p>
          <Link to="/pricing" className="btn btn-primary !text-lg">
            View Chatbot Plans
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
