const AboutUs = () => {
  const aboutUs = document.createElement("section");
  aboutUs.setAttribute('class', 'about-us');

  const aboutUsHeader = document.createElement("h3");
  aboutUsHeader.setAttribute("class", "about-us__header");
  aboutUsHeader.textContent = "ABOUT US";

  aboutUs.appendChild(aboutUsHeader);

  return aboutUs;
};

export default AboutUs;
