import {
  guide1,
  guide2,
  guide3,
  guide4,
  phpLogo,
  phpBlueLogo,
  seoLogo,
  seoBlueLogo,
  programmingLogo,
  programmingBlueLogo,
  cotentLogo,
  cotentBlueLogo,
  videoLogo,
  videoBlueLogo,
  bugLogo,
  bugBlueLogo,
  wordpressLogo,
  wordpressBlueLogo,
  services1,
  services2,
  services3,
  services4,
  popularAvatat1,
  popularAvatat2,
  popularAvatat3,
  popularAvatat4,
  talentIcon1,
  talentIcon2,
  talentIcon3,
  talentIcon4,
  Freelancer1,
  Freelancer2,
  Freelancer3,
  Freelancer4,
  Guide1,
  Guide2,
  Guide3,
  Sharing,
  everydayvalue,
  alacart,
  snacks,
} from "../assets";

const navLinks = [
  {
    id: 1,
    title: "Shop",
    href: "/shop",
  },
  {
    id: 2,
    title: "Add Product",
    href: "/addproduct",
  },
  {
    id: 3,
    title: "Hire Talents",
    href: "/hiretalents",
  },
  {
    id: 1,
    title: "Blogs",
    href: "/blogs",
  },
  {
    id: 1,
    title: "Community",
    href: "/community",
  },
  {
    id: 1,
    title: "Contacts",
    href: "/contacts",
  },
];

const popularCategories = [
  {
    id: 1,
    name: "Php",
  },
  {
    id: 2,
    name: "Video Editing",
  },
  {
    id: 3,
    name: "Webdevelopment",
  },
  {
    id: 4,
    name: "SEO",
  },
  {
    id: 5,
    name: "Graphics Designing",
  },
  {
    id: 6,
    name: "Wordpress",
  },
  {
    id: 7,
    name: "Bug Fixes",
  },
  {
    id: 8,
    name: "Programming Tech",
  },
];

const hoverCards = [
  {
    id: 1,
    title: "Sharing",
    info: "Explore Related Produtcs in Shop",
    img: Sharing,
  },
  {
    id: 2,
    title: "Ala Cart & Combos",
    info: "Explore Related Produtcs in Shop",
    img: alacart,
  },
  {
    id: 3,
    title: "EveryDay Value",
    info: "Explore Related Produtcs in Shop",
    img: everydayvalue,
  },
  {
    id: 4,
    title: "Snacks",
    info: "Explore Related Produtcs in Shop",
    img: snacks,
  },
];

const marketPlace = [
  {
    id: 1,
    number: 256,
    title: "Php",
    grayImg: phpLogo,
    blueImg: phpBlueLogo,
  },
  {
    id: 2,
    number: 256,
    title: "SEO",
    grayImg: seoLogo,
    blueImg: seoBlueLogo,
  },
  {
    id: 3,
    number: 256,
    title: "Programming",
    grayImg: programmingLogo,
    blueImg: programmingBlueLogo,
  },
  {
    id: 4,
    number: 256,
    title: "Content Writer",
    grayImg: cotentLogo,
    blueImg: cotentBlueLogo,
  },
  {
    id: 5,
    number: 256,
    title: "Video Editing",
    grayImg: videoLogo,
    blueImg: videoBlueLogo,
  },
  {
    id: 6,
    number: 256,
    title: "Bug Fixing",
    grayImg: bugLogo,
    blueImg: bugBlueLogo,
  },
  {
    id: 7,
    number: 256,
    title: "WordPress",
    grayImg: wordpressLogo,
    blueImg: wordpressBlueLogo,
  },
];

const popularServices = [
  {
    id: 1,
    bgImage: services1,
    avatar: popularAvatat1,
    name: "Sandhya Mer",
    level: "Level 1 Selle",
    info: "I will clone, redesign, design website design UIUX design...",
    rating: "4.95",
    total: "(98)",
    dollar: "80",
  },
  {
    id: 2,
    bgImage: services2,
    avatar: popularAvatat2,
    name: "Petrick Mohan",
    level: "New Seller",
    info: "I will convert design figma to html, xd to html, psd to html...",
    rating: "4.95",
    total: "(98)",
    dollar: "80",
  },
  {
    id: 3,
    bgImage: services3,
    avatar: popularAvatat3,
    name: "Petrick Mohan",
    level: "Level 2 Seller",
    info: "I will edit video for your product marketing",
    rating: "4.95",
    total: "(98)",
    dollar: "80",
  },
  {
    id: 4,
    bgImage: services4,
    avatar: popularAvatat4,
    name: "Petrick Mohan",
    level: "Top Rated Seller",
    info: "I will do SEO for your website with XHTML top ranking",
    rating: "4.95",
    total: "(98)",
    dollar: "80",
  },
];

const fingerTipsLogo = [
  {
    id: 1,
    title: "The Best for Every Budget",
    info: (
      <>
        Find high-quality services at <br className="hidden sm:block" />{" "}
        everyprice point.
      </>
    ),
    img: talentIcon1,
  },
  {
    id: 2,
    title: "Quality Work Done Quickly",
    info: (
      <>
        {" "}
        Find the right freelancer to <br className="hidden sm:block" />{" "}
        beginworking on your project.
      </>
    ),
    img: talentIcon2,
  },
  {
    id: 3,
    title: "24/7 Support",
    info: (
      <>
        Questions? Our round-the- <br className="hidden sm:block" />{" "}
        clocksupport team is available.
      </>
    ),
    img: talentIcon3,
  },
  {
    id: 4,
    title: "Protected Payments, Every Time",
    info: (
      <>
        Always know what you'll pay <br className="hidden sm:block" /> upfront.
      </>
    ),
    img: talentIcon4,
  },
];

const freelancersPushi = [
  {
    id: 1,
    img: Freelancer1,
    userName: "Sandhya Mer",
    level: "Level 1 Seller",
    description:
      "I am a website UIUX designer since 2017, i have a great skills of the design tool like adobe XD, Figma etc...",
  },
  {
    id: 2,
    img: Freelancer2,
    userName: "Web Design Master",
    level: "Level 2 Seller",
    description:
      "I am a web designer since 2013, i have a great skills of the HTML, CSS, JS, Bootstrap and many more...",
  },
  {
    id: 3,
    img: Freelancer3,
    userName: "Maria Krisk",
    level: "Level 2 Seller",
    description:
      "I am a website UIUX designer since 2017, i have a great skills of the design tool like adobe XD, Figma etc...",
  },
  {
    id: 4,
    img: Freelancer4,
    userName: "Jaimee Petron",
    level: "Top Rated Seller",
    description:
      "I am a website UIUX designer since 2017, i have a great skills of the design tool like adobe XD, Figma etc...",
  },
];

const pushiiGuide = [
  {
    id: 1,
    img: Guide1,
    title: "Start an online business and work from home",
    info: "A complete guide to starting a small business online",
  },
  {
    id: 1,
    img: Guide2,
    title: "Digital Marketing Made Easy",
    info: "A complete guide to starting a small business online",
  },
  {
    id: 1,
    img: Guide3,
    title: "Create a Logo for Your Business",
    info: "A complete guide to starting a small business online",
  },
  {
    id: 1,
    img: services4,
    title: "Start an online business and work from home",
    info: "A complete guide to starting a small business online",
  },
];

const mealCategories = [
  {
    id: 1,
    title: "Everyday value",
  },
  {
    id: 2,
    title: "Ala Carte & Combos",
  },
  {
    id: 3,
    title: "Signature Boxes",
  },
  {
    id: 4,
    title: "Sharing",
  },
  {
    id: 5,
    title: "Snacks & Beverages",
  },
  {
    id: 6,
    title: "Midnight",
  },
];
export {
  navLinks,
  popularCategories,
  hoverCards,
  marketPlace,
  popularServices,
  fingerTipsLogo,
  freelancersPushi,
  pushiiGuide,
  mealCategories,
};
