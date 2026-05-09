import { useParams } from 'react-router-dom';

const legalContent: Record<string, any> = {
  'privacy-policy': {
    title: 'Privacy Policy',
    content: `Last updated: ${new Date().toLocaleDateString()}
    
We respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website GrozEra Business Solutions and our practices for collecting, using, maintaining, protecting, and disclosing that information.

Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree with our policies and practices, your choice is not to use our Website. By accessing or using this Website, you agree to this privacy policy.

**Information We Collect**
We collect several types of information from and about users of our Website, including information by which you may be personally identified, such as name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline.

**How We Use Your Information**
We use information that we collect about you or that you provide to us, including any personal information:
- To present our Website and its contents to you.
- To provide you with information, products, or services that you request from us.
- To fulfill any other purpose for which you provide it.
- To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection.
- To notify you about changes to our Website or any products or services we offer or provide though it.
`
  },
  'terms-and-conditions': {
    title: 'Terms & Conditions',
    content: `Last updated: ${new Date().toLocaleDateString()}

These terms and conditions outline the rules and regulations for the use of GrozEra Business Solutions's Website.

By accessing this website we assume you accept these terms and conditions. Do not continue to use GrozEra Business Solutions if you do not agree to take all of the terms and conditions stated on this page.

**Terminology**
The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company.

**Services**
We offer consultation and processing services. Timelines and exact documentation requirements vary by the specific service requested and current governmental processing times.

**Disclaimer**
To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website.
`
  },
  'cookie-policy': {
    title: 'Cookie Policy',
    content: `Last updated: ${new Date().toLocaleDateString()}

This Cookie Policy explains how GrozEra Business Solutions uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.

**What are cookies?**
Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.

**Why do we use cookies?**
We use first party and third party cookies for several reasons. Some cookies are required for technical reasons in order for our Websites to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties.

**How can I control cookies?**
You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager.
`
  }
};

export default function Legal() {
  const { policyType } = useParams<{ policyType: string }>();
  const policy = policyType ? legalContent[policyType] : null;

  if (!policy) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold mb-4">Document Not Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8 pb-4 border-b">
          {policy.title}
        </h1>
        <div className="prose prose-olive max-w-none text-gray-600 space-y-6">
          {policy.content.split('\n\n').map((paragraph: string, idx: number) => {
            if (paragraph.startsWith('**') && paragraph.includes('**', 2)) {
              const titleEnd = paragraph.indexOf('**', 2) + 2;
              const title = paragraph.substring(2, titleEnd - 2);
              const text = paragraph.substring(titleEnd).trim();
              return (
                <div key={idx}>
                   <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{title}</h2>
                   {text && <p className="leading-relaxed">{text}</p>}
                </div>
              );
            }
            return <p key={idx} className="leading-relaxed whitespace-pre-wrap">{paragraph}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
