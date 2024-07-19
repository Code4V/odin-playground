import Lakbay from './../assets/Lakbay.webp';
import Eira from './../assets/Eira.webp';
import Odin from './../assets/Odin.png'

export const about = {
  info: [
    {
      header: "About Me",
      subheader: "Born in Quezon City",
      body: "I'm an Information Technology student that loves exploring all things related to Techonology. I'm into building and programming web applications and websites, and I can see myself doing this for a pretty long time. \n\n Another thing that I'm into is teaching people on the basics of coding and assisting as much as I can. Because, I believe that everyone should at least learn the basics of coding for it will surely help them along their professional career.",
      styles: {
        $colspanstart: 1,
        $colspanend: 3,
        $hasPaddingInlineEnd: true,
      },
    },
    {
      header: "Curriculum Vitae",
      subheader: "Education",
      list: [
        "2013 - 2017 Flora A. Ylagan High School",
        "2017 - 2019 ABE International Business College - ( TecVoc - ICT )",
        "2019 - 2024 Polytechnic University of the Philippines - ( BS Information Technology )",
      ],
      styles: {
        $colspanstart: 3,
        $colspanend: 5,
        $rowspanstart: 3,
        $rowspanend: 5,
        $isFlex: false,
      },
    },
    {
      header: "Skills",
      body: "These are my current skills that I've acquired throughout my academic and professional journey",
      styles: {
        $colspanstart: 1,
        $colspanend: 4,
        $hasPaddingInlineEnd: true,
      },
    },
  ],
};

export const project = {
  projects: [
    {
      alt: 'Lakbayan Front Page Image',
      header:
        "Lakbayan: A Booking Information System With Travel Package Recommender",
      subheader: "Academic Requirement",
      body: "A Web Application that is built for Travel Agencies to post their travel packages. This Web Application utilizes a collaborative-based algorithm to suggest users Travel Packages to maximize the matches for the posted Travel Package.",
      list: ["PHP", "Javascript", "MySQL"],
      link: "https://github.com/Code4V/lakbayan-travel-and-tours",
      img: Lakbay,
    },
    {
      alt: 'Erovoutika Landing Page',
      header: "Erovoutika International Academy",
      body: "A Web Application for offering online courses by Erovoutika. After you completed a course, you can proceed to take an exam and get certified in a whim! Courses offered includes Electronics, Robotics, Automation, and ICT",
      list: ["PHP", "MySQL"],
      link: "https://eira.erovoutika.ph/",
      img: Eira,
    },
    {
      alt: 'Odin Landing Page',
      header: "The Odin Project: Javascript",
      body: "A Compilation of my journey of learning Javascript through The Odin Project. My codes are available publicly and other coders can contribute freely",
      link: "https://code4v.github.io/odin-playground/",
      list: ["Javascript", "React"],
      img: Odin
    },
  ],
};
