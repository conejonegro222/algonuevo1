import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Terms of Service - KickBooster" }];
};

export default function TermsPage() {
  return (
    <div className="section-padding">
      <div className="container-custom max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-brand-purple mb-8 text-center">Terms of Service (Conceptual)</h1>
        
        <div className="prose prose-invert prose-sm md:prose-base max-w-none bg-brand-card p-6 rounded-lg shadow-md">
          <p>Welcome to KickBooster (a conceptual, non-functional website)! These terms and conditions outline the rules and regulations for the use of KickBooster's Website, located at this domain.</p>
          <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use KickBooster if you do not agree to take all of the terms and conditions stated on this page.</p>

          <h2>1. Interpretation and Definitions</h2>
          <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our conceptual Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>
          
          <h2>2. Conceptual Services</h2>
          <p>KickBooster provides a demonstration of user interfaces for potential services related to the Kick.com platform. These services are entirely conceptual and non-functional. No actual followers, viewers, chatbot functionalities, or any other form of digital service is provided, sold, or delivered.</p>
          <p>This website is for portfolio and demonstration purposes only.</p>

          <h2>3. Intellectual Property</h2>
          <p>Unless otherwise stated, KickBooster and/or its licensors own the intellectual property rights for all material on KickBooster. All intellectual property rights are reserved. You may access this from KickBooster for your own personal use subjected to restrictions set in these terms and conditions.</p>
          <p>You must not:</p>
          <ul>
            <li>Republish material from KickBooster (as this is a unique demo)</li>
            <li>Sell, rent or sub-license material from KickBooster</li>
            <li>Reproduce, duplicate or copy material from KickBooster</li>
            <li>Redistribute content from KickBooster</li>
          </ul>
          
          <h2>4. User Comments (Conceptual)</h2>
          <p>Parts of this website may offer an opportunity for users to post and exchange opinions and information in certain areas of the website (e.g., a conceptual contact form or blog). KickBooster does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of KickBooster, its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions.</p>
          <p>To the extent permitted by applicable laws, KickBooster shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website (all of which is conceptual).</p>
          
          <h2>5. Disclaimer</h2>
          <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
          <ul>
            <li>limit or exclude our or your liability for death or personal injury;</li>
            <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
            <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
            <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
          </ul>
          <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>
          <p><strong>As the website and the information and conceptual services on the website are provided free of charge (and are non-functional), we will not be liable for any loss or damage of any nature.</strong></p>
          <p>This is a conceptual document for a non-functional demonstration website.</p>
        </div>
      </div>
    </div>
  );
}
