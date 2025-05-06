import { Link } from "@remix-run/react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface ServiceCardProps {
  title: string;
  description: string;
  linkTo: string;
  IconComponent?: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & { title?: string | undefined; titleId?: string | undefined; } & React.RefAttributes<SVGSVGElement>>;
  price?: string; // Optional price string like "Starts from $X"
  features?: string[]; // Optional list of key features
}

export default function ServiceCard({ title, description, linkTo, IconComponent, price, features }: ServiceCardProps) {
  return (
    <div className="bg-brand-card shadow-xl rounded-xl p-6 flex flex-col transition-all duration-300 hover:shadow-purple-glow hover:scale-[1.02]">
      {IconComponent && (
        <div className="p-3 bg-brand-purple/20 rounded-lg w-max mb-4">
          <IconComponent className="h-8 w-8 text-brand-purple" />
        </div>
      )}
      <h3 className="text-xl font-semibold text-brand-text-primary mb-2">{title}</h3>
      <p className="text-brand-text-secondary text-sm mb-4 flex-grow min-h-[60px]">{description}</p>

      {features && features.length > 0 && (
        <ul className="space-y-1 mb-4 text-xs text-brand-text-secondary">
          {features.slice(0, 2).map(feature => <li key={feature}>✓ {feature}</li>)}
        </ul>
      )}

      <div className="mt-auto flex items-center justify-between">
        {price && <p className="text-lg font-semibold text-brand-purple">{price}</p>}
        <Link
          to={linkTo}
          className={`btn btn-primary !py-2 !px-4 text-sm ${!price ? 'ml-auto' : ''}`}
        >
          View Details <ArrowRightIcon className="h-4 w-4 inline ml-1" />
        </Link>
      </div>
    </div>
  );
}
