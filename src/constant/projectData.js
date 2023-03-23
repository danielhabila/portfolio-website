import furniture from "../assets/modernLiving/furniture.jpg";
import lights from "../assets/modernLiving/lights.jpg";
import details from "../assets/modernLiving/details.png";
import productPage from "../assets/modernLiving/product-page.png";
import cart from "../assets/modernLiving/cart.png";
import wallArt from "../assets/modernLiving/wallArt.jpg";
import stripePage from "../assets/modernLiving/ml-stripe.png";

import description from "../assets/okAviator/description.png";
import joblist1 from "../assets/okAviator/joblist1.png";
import talent1 from "../assets/okAviator/talent1.png";
import talent2 from "../assets/okAviator/talent2.png";
import postjob1 from "../assets/okAviator/postjob1.png";
import postjob2 from "../assets/okAviator/postjob2.png";
import stripecheckout from "../assets/okAviator/stripecheckout.png";

import home1 from "../assets/abstractAi/home1.png";
import home2 from "../assets/abstractAi/home2.jpg";
import home3 from "../assets/abstractAi/home3.png";
import home4 from "../assets/abstractAi/home4.png";
import createPage from "../assets/abstractAi/createPage.png";
import newsletter from "../assets/abstractAi/newsletter.png";

const projectData = [
  {
    name: "Ok/Aviator",
    img: [
      talent2,
      talent1,
      joblist1,
      description,
      postjob1,
      postjob2,
      stripecheckout,
    ],
    description:
      "Ok Aviator is a job-board app dedicated to helping professionals in the aviation industry find employment opportunities and helping companies in the industry find qualified candidates. I’m building this to make the process of finding the right job or employee easier and more efficient for both job seekers and employers. ",
    website: "https://okaviator.com",
    ghLink: "https://github.com/danielhabila/job-board-react",
    shipped: `
        <ul style="list-style-type: disc">
          <li>Stripe payment integration</li>
          <li>Mailchimp integration to collect email</li>
          <li>Calendly booking integration</li>
          <li>Post job functionality</li>
          <li>Fetching jobs from crawled data</li>
        </ul>
      `,
    // wipList: `
    //     <ul style="list-style-type: disc">
    //       <li>Search bar functionality</li>
    //       <li>User Login and Authentication</li>
    //     </ul>
    //   `,
  },
  {
    name: "Abstract AI",
    img: [home1, createPage, home2, home3, home4, newsletter],
    description:
      "Abstract AI is an app designed for artists and art enthusiasts who love abstract art. With the integration to OpenAI's DALL·E API, users can generate, download and share their unique abstract masterpieces. The app is also responsive for all screen sizes and features a colourful and visually appealing UI. Hope you like it.",
    website: "https://abstractai.in",
    ghLink: "https://github.com/danielhabila/abstract-art",
    shipped: `
        <ul style="list-style-type: disc">
          <li>Integration with OpenAI's DALL·E API</li>
          <li>Ability to generate and share your own masterpiece with the community</li>
          <li>Image download functionality </li>
          <li>Cloudinary Get and Post request integration</li>
        </ul>
      `,
    // wipList: `
    //     <ul style="list-style-type: disc">
    //       <li>Mailchimp integration</li>
    //     </ul>
    //   `,
  },
  {
    name: "Modern/Living",
    img: [furniture, wallArt, lights, details, productPage, stripePage, cart],
    description:
      "This is an e-commerce site inspired by cb2.ca. CB2 is an online retailer that sells modern home decor and furniture. I built this site to solidify my understanding of react fundamentals like components, props, and state using Redux; how to implement common e-commerce features such as product listings, shopping carts, and checkout flows; and how to create a user-friendly and visually appealing sites.      ",
    website: "https://modernlivin.shop",
    ghLink: "https://github.com/danielhabila/modern-living",
    shipped: `
      <ul style="list-style-type: disc">
        <li>Cloudinary Get and Post request integration for the images</li>
        <li>Snap scroll on home page</li>
        <li>Furniture listing, and product details page</li>
        <li>Shopping cart functionality</li>
        <li>Stripe payment integration</li>
      </ul>
    `,
    // wipList: `
    //   <ul style="list-style-type: disc">
    //     <li>Integrating Stripe payment</li>
    //   </ul>
    // `,
  },
];

export default projectData;

// {
//     name: "Q/Diary",
//     img: [quotePage, crudPage],
//     description:
//       "This app allows users to store, update, delete and display their favorite quotes. Additionally, the app includes a convenient randomize button that displays a randomly selected quote from the user's collection and allows the user to share the quote with others. In building this app, I gained experience working with MongoDB backend and implementing CRUD (create, read, update, delete) functionality. I hope you find the app fun as you explore.",
//     website: "https://qdiary.info",
//     shipped: `
//       <ul style="list-style-type: disc">
//         <li>Add new quotes to the collection</li>
//         <li>Update existing quotes</li>
//         <li>Delete quotes from the collection </li>
//         <li> Randomly display a quote from the collection</li>

//       </ul>
//     `,
//     wipList: `
//       <ul style="list-style-type: disc">
//         <li>Share quotes with others</li>
//         <li>User Login and Authentication</li>
//         <li>Have your personal collection</li>
//       </ul>
//     `,
//   }
