import { site, fullAddress, primaryPhone } from './site';

export interface LegalSection {
  heading: string;
  body: string[];
  list?: string[];
}

export interface LegalPage {
  path: string;
  title: string;
  description: string;
  updated: string;
  sections: LegalSection[];
}

const UPDATED = '17 October 2026';
const contactLine = `Email ${site.email} or call ${primaryPhone.display}.`;

export const legalPages: LegalPage[] = [
  {
    path: '/privacy-policy',
    title: 'Privacy Policy',
    description: `How ${site.name} collects, uses and protects the personal information you share with us.`,
    updated: UPDATED,
    sections: [
      {
        heading: 'Who we are',
        body: [
          `${site.name} ("we", "us") is an education consultancy that helps students with university admissions. This policy explains what information we collect through ${site.url.replace('https://', '')} and how we use it.`,
        ],
      },
      {
        heading: 'Information we collect',
        body: ['When you fill the enquiry form or contact us, we collect:'],
        list: [
          'Your name, mobile number, email address (optional) and city',
          'The course, university, study mode or service you are interested in',
          'The page and campaign link you came from (for example, an Instagram or Google ad), so we know which channels work',
          'Anything you choose to share with us over call, WhatsApp or email, such as marks or documents needed for an application',
        ],
      },
      {
        heading: 'How we use your information',
        body: ['We use your information only to:'],
        list: [
          'Call, message or WhatsApp you about the admission guidance you asked for',
          'Shortlist suitable universities and courses for you',
          'Share your details with a university, lender or scholarship provider — only when you ask us to proceed with an application there',
          'Improve our services and understand which of our campaigns are useful',
        ],
      },
      {
        heading: 'What we do not do',
        body: [
          'We do not sell or rent your personal information to anyone. We do not share it with third parties for their own marketing.',
        ],
      },
      {
        heading: 'Where your information is stored',
        body: [
          'Enquiries submitted on this website are stored in a Google Sheet in our Google account, and notifications are sent to our email. Conversations on WhatsApp are handled through WhatsApp. These providers have their own security and privacy practices.',
          'This website uses Google Fonts. It does not use advertising cookies. Your browser session temporarily remembers the campaign link you arrived from, until you close the tab.',
        ],
      },
      {
        heading: 'How long we keep it',
        body: [
          'We keep your information for as long as needed to help with your admission and for our reasonable record-keeping, after which it is deleted. You can ask us to delete it at any time.',
        ],
      },
      {
        heading: 'Your choices and rights',
        body: [
          `You can ask us to show, correct or delete the information we hold about you, or to stop contacting you. ${contactLine} We will act on your request within a reasonable time.`,
        ],
      },
      {
        heading: 'Changes to this policy',
        body: ['We may update this policy from time to time. The latest version will always be on this page with its updated date.'],
      },
      {
        heading: 'Contact',
        body: [`${site.name}, ${fullAddress}. ${contactLine}`],
      },
    ],
  },
  {
    path: '/terms',
    title: 'Terms of Service',
    description: `Terms for using the ${site.name} website and admission guidance services.`,
    updated: UPDATED,
    sections: [
      {
        heading: 'Our service',
        body: [
          `${site.name} provides admission counselling and guidance. We help you understand options, choose a course and university, and complete the application process.`,
        ],
      },
      {
        heading: 'Admission and scholarship decisions',
        body: [
          'Admission, scholarships, fee concessions and loan approvals are decided solely by the respective university, institution or lender. We do not guarantee admission, a scholarship or a loan.',
        ],
      },
      {
        heading: 'Fees',
        body: [
          'Our counselling is free of charge. University fees are paid as per the university\'s official process.',
        ],
      },
      {
        heading: 'Your responsibilities',
        body: ['You agree to:'],
        list: [
          'Give accurate information and genuine documents',
          'Check course details, approvals and fees on the university\'s official website before paying',
          'Follow each university\'s own rules, deadlines and refund policies',
        ],
      },
      {
        heading: 'Website content',
        body: [
          'We try to keep information on this website accurate and up to date, but course details, fees, eligibility and deadlines are set by universities and can change without notice. University names belong to their respective owners.',
        ],
      },
      {
        heading: 'Contact',
        body: [`Questions about these terms? ${contactLine}`],
      },
    ],
  },
  {
    path: '/disclaimer',
    title: 'Disclaimer',
    description: `Important information about the content on the ${site.name} website.`,
    updated: UPDATED,
    sections: [
      {
        heading: 'Independent consultancy',
        body: [
          `${site.name} is an independent education consultancy. We are not a university and we are not affiliated with UGC, AICTE or any government body.`,
        ],
      },
      {
        heading: 'Accuracy of information',
        body: [
          'Information about universities, courses, fees, scholarships and deadlines is provided for general guidance. It may change at any time. Always confirm details on the official website of the university or regulator (such as ugc.gov.in) before making a decision or payment.',
        ],
      },
      {
        heading: 'Names and trademarks',
        body: [
          'University names and abbreviations shown on this website belong to their respective owners and are used only to describe where we provide admission guidance.',
        ],
      },
      {
        heading: 'No guarantee',
        body: ['We do not guarantee admission, scholarships, placements or loan approval at any institution.'],
      },
      {
        heading: 'Contact',
        body: [contactLine],
      },
    ],
  },
];

export const legalByPath = Object.fromEntries(legalPages.map((p) => [p.path, p]));
