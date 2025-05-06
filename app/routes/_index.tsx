import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import ServiceCard from "~/components/ServiceCard";
import { UsersIcon, ChatBubbleLeftRightIcon, EyeIcon, CheckBadgeIcon, BoltIcon, ShieldCheckIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => {
  return [
    { title: "KickBooster - #1 Conceptual Kick Growth Service" },
    { name: "description", content: "Conceptual services to boost your Kick.com channel's followers, viewers, and engagement." },
  ];
};

const featuredServices = [
  {
    title: "Kick Followers",
    description: "Grow your Kick community with conceptual high-quality followers.",
    linkTo: "/services/followers",
    IconComponent: UsersIcon,
    price: "From $5",
    features: ["Safe & Secure", "Gradual Delivery"]
  },
  {
    title: "Kick Viewers",
    description: "Increase your live stream's impact with conceptual viewer boosts.",
    linkTo: "/services/viewers",
    IconComponent: EyeIcon,
    price: "From $2",
    features: ["Stable Views", "Multiple Durations"]
  },
  {
    title: "Kick Chatbot",
    description: "Automate and engage your chat with a conceptual Kick chatbot.",
    linkTo: "/services/chatbot",
    IconComponent: ChatBubbleLeftRightIcon,
    price: "From $10",
    features: ["Custom Commands", "Moderation"]
  },
];

const whyChooseUsItems = [
  { title: "Quality First (Conceptual)", description: "Our conceptual services are designed for effectiveness.", Icon: CheckBadgeIcon },
  { title: "Fast Delivery (Simulated)", description: "Experience quick, simulated results for your channel.", Icon: BoltIcon },
  { title: "Secure & Safe (Demo)", description: "Your account's safety is a top priority in our conceptual model.", Icon: ShieldCheckIcon },
];

const howItWorksSteps = [
  { id: 1, title: "Choose a Service", description: "Select the Kick.com service that fits your needs (e.g., Followers, Viewers)." },
  { id: 2, title: "Provide Details", description: "Enter your Kick channel name and select your desired package." },
  { id: 3, title: "Checkout (Simulated)", description: "Complete the conceptual secure checkout process." },
  { id: 4, title: "See Results (Conceptual)", description: "Watch your Kick channel grow with our simulated delivery." },
];

export default function Index() {
  return (
    <div className="bg-brand-dark">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-brand-dark via-brand-secondary-dark to-brand-dark text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Boost Your <span className="text-brand-purple">Kick.com</span> Presence
          </h1>
          <p className="text-lg md:text-xl text-brand-text-secondary mb-10 max-w-2xl mx-auto">
            The #1 (Conceptual) Platform for Kick Followers, Viewers, and Chatbot services. Elevate your stream today!
          </p>
          <div className="space-x-4">
            <Link to="/services" className="btn btn-primary !text-lg !px-8 !py-4">
              Get Started
            </Link>
            <Link to="/#how-it-works" className="btn btn-secondary !text-lg !px-8 !py-4">
              How It Works
            </Link>
          </div>
           <div className="mt-12">
            {/* Placeholder for a graphic or image like viewerboss */}
            <img src="/logo-dark.png" alt="KickBooster platform preview" className="mx-auto rounded-lg shadow-2xl max-h-80 opacity-50" />
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-4">Our Top <span className="text-brand-purple">Kick</span> Services</h2>
          <p className="text-brand-text-secondary text-center mb-12 max-w-xl mx-auto">
            Explore our range of conceptual services designed to help your Kick channel thrive.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-brand-secondary-dark">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose <span className="text-brand-purple">KickBooster</span>?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {whyChooseUsItems.map(item => (
              <div key={item.title} className="bg-brand-card p-6 rounded-lg shadow-lg">
                <item.Icon className="h-12 w-12 text-brand-purple mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-brand-text-secondary text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">How It <span className="text-brand-purple">Works</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map(step => (
              <div key={step.id} className="bg-brand-card p-6 rounded-lg shadow-lg text-center">
                <div className="bg-brand-purple text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.id}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-brand-text-secondary text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder for Testimonials or other sections */}
      <section className="section-padding bg-brand-secondary-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">What Our <span className="text-brand-purple">(Conceptual)</span> Users Say</h2>
          <div className="max-w-xl mx-auto bg-brand-card p-8 rounded-lg shadow-xl">
            <QuestionMarkCircleIcon className="h-16 w-16 text-brand-purple mx-auto mb-4" />
            <p className="text-brand-text-light italic">"This is a placeholder for a user testimonial. In a real site, genuine feedback would be here!"</p>
            <p className="mt-4 font-semibold text-brand-text-primary">- A Happy (Conceptual) Streamer</p>
          </div>
        </div>
      </section>

    </div>
  );
}
