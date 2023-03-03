import furniture from "../assets/modernLiving/furniture.jpg";
import lights from "../assets/modernLiving/lights.jpg";
import dining from "../assets/modernLiving/dining.jpg";
import details from "../assets/modernLiving/details.png";
import productPage from "../assets/modernLiving/product-page.png";
import cart from "../assets/modernLiving/cart.png";
import wallArt from "../assets/modernLiving/wallArt.jpg";

import description from "../assets/okAviator/description.png";
import joblist1 from "../assets/okAviator/joblist1.png";
import joblist2 from "../assets/okAviator/joblist2.png";
import postjob1 from "../assets/okAviator/postjob1.png";
import postjob2 from "../assets/okAviator/postjob2.png";

import home1 from "../assets/abstractAi/home1.png";
import home2 from "../assets/abstractAi/home2.jpg";
import home3 from "../assets/abstractAi/home3.png";
import home4 from "../assets/abstractAi/home4.png";
import createPage from "../assets/abstractAi/createPage.png";

const projectData = [
  {
    name: "Abstract AI",
    img: [home1, home2, home3, home4, createPage],
    description:
      "Abstract AI is an app designed for artists and art enthusiasts who love abstract art. With the integration to OpenAI's DALL·E API, users can generate, download and share their unique abstract masterpieces. The app is also responsive for all screen sizes and features a colourful and visually appealing UI. Hope you like it.",
    website: "https://abstractai.in",
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
    name: "Ok/Aviator",
    img: [joblist1, description, joblist2, postjob1, postjob2],
    description:
      "Ok Aviator is a project i'm building dedicated to helping professionals in the aviation industry find employment opportunities and helping companies in the industry find qualified candidates. I’m building this to make the process of finding the right job or employee easier and more efficient for both job seekers and employers. ",
    website: "https://okaviator.com",
    shipped: `
        <ul style="list-style-type: disc">
          <li>Stripe payment integration</li>
          <li>Fetching jobs from crawled data</li>
          <li>Post job functionality</li>
          <li>Mailchimp integration to collect email</li>
        </ul>
      `,
    // wipList: `
    //     <ul style="list-style-type: disc">
    //       <li>Post job functionality</li>
    //       <li>Apply for jobs from the site</li>
    //       <li>Search bar functionality</li>
    //       <li>User Login and Authentication</li>
    //       <li>Updating the user interface</li>
    //     </ul>
    //   `,
  },
  {
    name: "Modern/Living",
    img: [furniture, wallArt, lights, dining, details, productPage, cart],
    description:
      "This is an e-commerce site inspired by cb2.ca. CB2 is an online retailer that sells modern home decor and furniture. I built this site to solidify my understanding of react fundamentals like components, props, and state using Redux; how to implement common e-commerce features such as product listings, shopping carts, and checkout flows; and how to create a user-friendly and visually appealing sites.      ",
    website: "https://modernlivin.shop",
    shipped: `
      <ul style="list-style-type: disc">
        <li>Cloudinary Get and Post request integration for the images</li>
        <li>Snap scroll on home page</li>
        <li>Furniture listing, and product details page</li>
        <li>Shopping cart functionality</li>
      </ul>
    `,
    wipList: `
      <ul style="list-style-type: disc">
        <li>Integrating Stripe payment</li>
        <li>User Login and Authentication</li>
        <li>Adding data and functionality to Dining, Wall Art, Lighting </li>
      </ul>
    `,
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
