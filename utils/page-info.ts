const pageInfo: { [path: string]: { path: string; title: string; description: string; keywords: string[] } } = {
  home: {
    path: "/",
    title: "Wave Research: Home",
    description:
      "Wave Research: Football Manager for everyone with advanced real world simulation and Football API Provider for all your soccer data needs. Available Everywhere at everytime!",
    keywords: ["soccer manager", "soccer", "waverd", "football manager", "football"],
  },

  signup: {
    path: "/accounts/signup",
    title: "Wave Research: Sign Up",
    keywords: ["signup", "register", "soccer manager", "soccer", "waverd", "football manager", "football"],
    description:
      "Embark on an exciting Soccer journey without limit! Register for Wave Research to enjoy premium features, and experience the best competitions in soccer and football data provider.",
  },

  signin: {
    path: "/accounts/signin",
    title: "Wave Research: Sign In",
    keywords: ["signin", "login", "soccer manager", "soccer", "waverd", "football manager", "football"],
    description:
      "Seamlessly sign in to your account to enjoy premium contents created specially for you. Access real time updates, optimization, and many more – sign in to Wave Research now!",
  },

  passwordReset: {
    path: "/accounts/password-reset",
    title: "Forgot Password",
    description:
      "We've made it so easy to reset your password and securely regain access to your Wave Research account. Follow these steps to reset your Wave Research password today!",
    keywords: ["password reset", "forgot password", "soccer manager", "soccer", "waverd", "football manager", "football"],
  },

  cookiePolicy: {
    path: "/info/cookie-policy",
    title: "Cookie Policy",
    description: "Discover how we use cookies to enhance your browsing experience and provide personalized content. Your privacy matters to us.",
    keywords: ["cookies", "cookie policy", "soccer manager", "soccer", "waverd", "football manager", "football"],
  },

  privacyPolicy: {
    path: "/info/privacy-policy",
    title: "Privacy Policy",
    description:
      "Understand how Wave Research safeguards your information. Your privacy matters to us, and we are committed to transparency and data protection.",
    keywords: ["privacy", "privacy policy", "soccer manager", "soccer", "waverd", "football manager", "football"],
  },

  contactUs: {
    path: "/info/contact-us",
    title: "Contact Us",
    description:
      "We're here to assist you at every step of the way! Reach out, inquire, or share your thoughts with Wave Research Tech/Support and compare our response time.",
    keywords: ["contact", "contact us", "soccer manager", "soccer", "waverd", "football manager", "football"],
  },

  termsAndCondition: {
    path: "/info/terms-and-condition",
    title: "Terms and Condition",
    description:
      "As with other websites, Wave Research has written and read it's terms and condition to ensure a fair and transparent user experience for all.",
    keywords: ["terms", "terms and condition", "condition", "soccer manager", "soccer", "waverd", "football manager", "football"],
  },

  dataDeletion: {
    path: "/info/data-deletion",
    title: "Data Deletion",
    description: `Initiate data deletion of your profile from Wave Research. This action is irreversible and will take ${process.env.DATA_DELETION_PERIOD} days without login to complete`,
    keywords: ["data", "data deletion", "delete", "soccer manager", "soccer", "waverd", "football manager", "football"],
  },

  faq: {
    path: "/info/faq",
    title: "Frequently Asked Questions",
    description:
      "Answers to your questions? We've curated a list of FAQs to answer all your questions on registeration, payments, games and many more",
    keywords: ["faq", "questions", "soccer manager", "soccer", "waverd", "football manager", "football"],
  },

  sponsors: {
    path: "/info/sponsors",
    title: "Our Sponsors",
    description: "sponsors",
    keywords: ["sponsors", "soccer manager", "soccer", "waverd", "wave research", "football manager", "football"],
  },

  advertisement: {
    path: "/info/advertisement",
    title: "Advertisement",
    description: "Have a product? Share it with us and the world. Our unobtrusive ads means you have a very high chance for visitors from our site",
    keywords: ["advertise", "advert", "advertisement", "soccer manager", "soccer", "waverd", "football manager", "football"],
  },

  organization: {
    path: "/info/organization",
    title: "Organization",
    description: "Have an Idea? Let's build it... Want to know who we are, what we do and why we do it?",
    keywords: ["organization", "soccer manager", "soccer", "waverd", "football manager", "football"],
  },

  pricing: {
    path: "/info/pricing",
    title: "Pricing Plan",
    description: "Our pricing plan always fits the bill. Wave Research is for everyone so we've included the `Forever Free Plan`",
    keywords: ["pricing", "soccer manager", "soccer", "waverd", "football manager", "football"],
  },

  apihub: {
    path: "/apihub",
    title: "Wave Research: API Hub",
    description: "Connect with your community and showcase your unique brand and engage with your users through a bold and easy-to-manage API.",
    keywords: ["api", "apihub", "soccer manager", "soccer", "waverd", "football manager", "football"],
  },

  apihubEndpoints: {
    path: "/apihub/endpoints",
    title: "Wave Research: ",
    description: "With our Football data and an infinite variety of APIs through our API Hub, discover a world of wonders in Wave Research.",
    keywords: ["soccer manager", "soccer", "waverd", "football manager", "football"],
  },
  // sample: {
  //   path: "/",
  //   title: "Wave Research: ",
  //   description: "",
  //   keywords: ["soccer manager", "soccer", "waverd", "football manager", "football"],
  // },
};

export default pageInfo;
