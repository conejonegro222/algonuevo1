import type { MetaFunction }from "@remix-run/node";
import { BuildingOffice2Icon, RocketLaunchIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => {
  return [{ title: "About Us - KickBooster" }];
};

export default function AboutPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-brand-purple mb-4">About KickBooster (Conceptual)</h1>
          <p className="text-lg text-brand-text-secondary max-w-2xl mx-auto">
            We are a (conceptual) team dedicated to providing UI/UX demonstrations for services aimed at helping Kick.com streamers grow and succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 text-center">
          <div className="bg-brand-card p-6 rounded-lg shadow-lg">
            <BuildingOffice2Icon className="h-12 w-12 text-brand-purple mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Our (Conceptual) Company</h2>
            <p className="text-brand-text-secondary text-sm">
              KickBooster is a fictional entity created for demonstration purposes. Our goal is to showcase potential user interfaces for Kick.com related services.
            </p>
          </div>
          <div className="bg-brand-card p-6 rounded-lg shadow-lg">
            <RocketLaunchIcon className="h-12 w-12 text-brand-purple mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Our (Simulated) Mission</h2>
            <p className="text-brand-text-secondary text-sm">
              To provide streamers with intuitive and effective (conceptual) tools to enhance their online presence and build thriving communities on Kick.com.
            </p>
          </div>
          <div className="bg-brand-card p-6 rounded-lg shadow-lg">
            <UserGroupIcon className="h-12 w-12 text-brand-purple mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Our (Fictional) Team</h2>
            <p className="text-brand-text-secondary text-sm">
              Comprised of passionate designers and developers (in this simulation) who understand the streaming world and are committed to quality UI/UX.
            </p>
          </div>
        </div>

        <div className="bg-brand-secondary-dark p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold text-center text-brand-purple mb-6">Important Disclaimer</h2>
          <p className="text-brand-text-light text-center max-w-3xl mx-auto">
            KickBooster is not a real service and does not provide any actual follower, viewer, or chatbot functionalities. This website and its content are purely for demonstration and portfolio purposes to showcase web development and UI design skills. We are not affiliated with Kick.com or any other platform mentioned.
          </p>
        </div>
      </div>
    </div>
  );
}
