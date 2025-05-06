import { Link } from "@remix-run/react";
// Placeholder for social icons if you add them
// import { FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "About Us", href: "/about" }, // Placeholder
    { name: "Services", href: "/services" },
    { name: "Terms of Service", href: "/terms" }, // Placeholder
    { name: "Privacy Policy", href: "/privacy" }, // Placeholder
    { name: "Contact", href: "/contact" },
  ];

  // const socialLinks = [
  //   { name: "Twitter", icon: FaTwitter, href: "#" },
  //   { name: "Discord", icon: FaDiscord, href: "#" },
  //   { name: "GitHub", icon: FaGithub, href: "#" },
  // ];

  return (
    <footer className="bg-brand-secondary-dark border-t border-brand-card">
      <div className="container-custom section-padding !py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="text-2xl font-bold text-brand-purple">
              Kick<span className="text-brand-text-primary">Booster</span>
            </Link>
            <p className="mt-2 text-sm text-brand-text-secondary">
              Conceptual services to elevate your Kick.com presence. UI/UX demonstration.
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-brand-text-primary mb-3">Quick Links</h5>
            <ul className="space-y-2">
              {footerLinks.slice(0,3).map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-brand-text-secondary hover:text-brand-purple">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-brand-text-primary mb-3">Support</h5>
            <ul className="space-y-2">
               {footerLinks.slice(3).map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-brand-text-secondary hover:text-brand-purple">
                    {link.name}
                  </Link>
                </li>
              ))}
               <li>
                  <Link to="/#how-it-works" className="text-sm text-brand-text-secondary hover:text-brand-purple">
                    How It Works
                  </Link>
                </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-brand-text-primary mb-3">Legal</h5>
             <p className="text-xs text-brand-text-secondary">
              This website is a demonstration and does not offer real services. It is for portfolio purposes only.
            </p>
            {/* Social links placeholder
            <div className="flex space-x-4 mt-4">
              {socialLinks.map(social => (
                <a key={social.name} href={social.href} className="text-brand-text-secondary hover:text-brand-purple">
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            */}
          </div>
        </div>
        <div className="border-t border-brand-card pt-8 text-center">
          <p className="text-sm text-brand-text-secondary">
            &copy; {currentYear} KickBooster (Conceptual). All rights reserved.
          </p>
           <p className="text-xs text-brand-text-secondary mt-1">
            Not affiliated with Kick.com or ViewerBoss.com.
          </p>
        </div>
      </div>
    </footer>
  );
}
