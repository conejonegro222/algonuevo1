import type { MetaFunction } from "@remix-run/node";
import ServiceCard from "~/components/ServiceCard";
import { UsersIcon, ChatBubbleLeftRightIcon, EyeIcon, SparklesIcon, HandThumbUpIcon, PlayIcon } from "@heroicons/react/24/outline"; // Added more icons

export const meta: MetaFunction = () => {
  return [
    { title: "Our Services - KickBooster" },
    { name: "description", content: "Explore all conceptual services to boost your Kick channel." },
  ];
};

const allServices = [
  {
    title: "Kick Followers",
    description: "Grow your Kick community with conceptual high-quality followers. Safe and reliable.",
    linkTo: "/services/followers",
    IconComponent: UsersIcon,
    price: "From $4.99",
    features: ["Real-looking Profiles (Conceptual)", "Gradual Delivery Options"]
  },
  {
    title: "Kick Live Viewers",
    description: "Increase your live stream's impact with stable and engaging conceptual viewer boosts.",
    linkTo: "/services/viewers",
    IconComponent: EyeIcon,
    price: "From $1.99/hr",
    features: ["Stable & Reliable", "Geo-Targeting (Conceptual)"]
  },
  {
    title: "Kick Chatbot",
    description: "Automate chat, run polls, and engage your audience with a powerful conceptual Kick chatbot.",
    linkTo: "/services/chatbot",
    IconComponent: ChatBubbleLeftRightIcon,
    price: "From $9.99/mo",
    features: ["Custom Commands", "Spam Filtering (Conceptual)"]
  },
  {
    title: "Kick Channel Views",
    description: "Boost your Kick channel's overall visibility with conceptual video/channel views.",
    linkTo: "/services/channel-views", // New placeholder route
    IconComponent: PlayIcon,
    price: "From $2.50",
    features: ["Increase Discoverability", "Safe Methods (Conceptual)"]
  },
  {
    title: "Kick Likes/Upvotes",
    description: "Enhance your content's appeal with conceptual likes or upvotes on clips/VODs.",
    linkTo: "/services/likes", // New placeholder route
    IconComponent: HandThumbUpIcon,
    price: "From $3.00",
    features: ["Boost Engagement", "Organic Look (Conceptual)"]
  },
  {
    title: "Kick Premium Package",
    description: "All-in-one conceptual growth solution for serious Kick streamers. Includes multiple services.",
    linkTo: "/services/premium-package", // New placeholder route
    IconComponent: SparklesIcon,
    price: "From $49.99",
    features: ["Followers + Viewers + Chatbot", "Dedicated Support (Conceptual)"]
  },
];

export default function ServicesPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <h1 className="text-4xl font-bold text-brand-purple mb-6 text-center">All KickBooster Services</h1>
        <p className="text-lg text-brand-text-secondary mb-12 text-center max-w-2xl mx-auto">
          Discover our comprehensive suite of (conceptual) services tailored to supercharge your Kick.com channel. Each service is designed with user experience in mind for this demonstration.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
