import type { MetaFunction, ActionFunctionArgs } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { EnvelopeIcon, UserIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact Us - KickBooster" },
    { name: "description", content: "Get in touch with KickBooster for support or inquiries (Conceptual)." },
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  await new Promise(res => setTimeout(res, 1000)); // Simulate network delay
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  if (!name || !email || !subject || !message) {
    return { success: false, message: "All fields are required.", errors: { general: "Please fill all fields."} };
  }
  if (typeof message === 'string' && message.length < 10) {
     return { success: false, message: "Message must be at least 10 characters long.", errors: { message: "Too short"} };
  }

  // Simulate success
  return { success: true, message: "Your message has been 'sent' (conceptually)! We'll 'get back to you' soon." };
}

export default function ContactPage() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="section-padding">
      <div className="container-custom max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-brand-purple mb-6 text-center">Get In Touch</h1>
        <p className="text-lg text-brand-text-secondary mb-10 text-center">
          Have questions, feedback, or need a custom (conceptual) quote? Fill out the form below.
        </p>

        <div className="bg-brand-card p-8 md:p-10 rounded-xl shadow-xl">
          <Form method="post" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-text-primary mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <UserIcon className="h-5 w-5 text-brand-text-secondary" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="input-field pl-10"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-text-primary mb-1">
                  Email Address
                </label>
                 <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <EnvelopeIcon className="h-5 w-5 text-brand-text-secondary" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="input-field pl-10"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-brand-text-primary mb-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                className="input-field"
                placeholder="e.g., Inquiry about Premium Package"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brand-text-primary mb-1">
                Message
              </label>
              <div className="relative">
                  <div className="absolute top-3 left-0 pl-3 flex items-center pointer-events-none">
                    <ChatBubbleLeftEllipsisIcon className="h-5 w-5 text-brand-text-secondary" />
                  </div>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  minLength={10}
                  className="input-field pl-10"
                  placeholder="Your detailed message..."
                />
              </div>
               {actionData?.errors?.message && <p className="text-xs text-red-400 mt-1">{actionData.errors.message}</p>}
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn btn-primary !py-3 !text-base disabled:opacity-70"
              >
                {isSubmitting ? "Sending Message..." : "Send Message (Conceptual)"}
              </button>
            </div>
            {actionData && (
              <p className={`text-sm text-center ${actionData.success ? 'text-brand-success' : 'text-red-400'}`}>
                {actionData.message}
              </p>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
}
