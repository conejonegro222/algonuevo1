import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "Sign Up - KickBooster" }];
};

export default function SignupPage() {
  return (
    <div className="section-padding flex items-center justify-center">
      <div className="container-custom max-w-md">
        <div className="bg-brand-card p-8 rounded-xl shadow-xl text-center">
          <h1 className="text-3xl font-bold text-brand-purple mb-6">Create Account (Conceptual)</h1>
          <p className="text-brand-text-secondary mb-6">
            This is a placeholder sign-up page. User registration would happen here.
          </p>
          <form className="space-y-4">
            <div>
              <input type="text" placeholder="Full Name" className="input-field" disabled />
            </div>
            <div>
              <input type="email" placeholder="Email Address" className="input-field" disabled />
            </div>
            <div>
              <input type="password" placeholder="Password" className="input-field" disabled />
            </div>
            <button type="button" className="w-full btn btn-primary" disabled>
              Sign Up (Disabled)
            </button>
          </form>
          <p className="text-sm text-brand-text-secondary mt-6">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-brand-purple hover:underline">
              Login (Conceptual)
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
