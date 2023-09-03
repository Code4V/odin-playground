import FirstImage from './../assets/aboutme1.jpg'; 
import SecondImage from './../assets/aboutme2.webp'; 
import ThirdImage from './../assets/aboutme3.jpg'; 
import FourthImage from './../assets/aboutme4.jpg'; 

const AboutUs = () => {
  const aboutUs = document.createElement("section");
  aboutUs.setAttribute('class', 'about-us');

  const aboutUsHeader = document.createElement("h3");
  aboutUsHeader.setAttribute("class", "about-us__header");
  aboutUsHeader.textContent = "ABOUT US";

  const aboutUsDescription = document.createElement("div");
  aboutUsDescription.setAttribute("class", "about-us__description");

  const firstDescription = document.createElement("p");
  firstDescription.setAttribute('class', 'about-us__description-paragraph')
  firstDescription.textContent = "A world class scandinavian cuisine served by the best vikings out there! Vikings that served the All-Father Odin with the most fresh ingredients out there! ";

  const firstImage = new Image();
  firstImage.setAttribute('class', 'about-us__description-image');
  firstImage.src = FirstImage;

  
  const secondDescription = document.createElement("p");
  secondDescription.setAttribute('class', 'about-us__description-paragraph')
  secondDescription.textContent = "Welcome to Vikings: Sea Breeze, where the echoes of the past meld with the flavors of the present to create a dining experience like no other. Step into a realm where the spirit of Vikings lives on, and indulge in an extraordinary culinary journey that pays homage to their daring adventures and seafaring legacy.";

  const secondImage = new Image();
  secondImage.setAttribute('class', 'about-us__description-image');
  secondImage.src = SecondImage;

  const thirdDescription = document.createElement("p");
  thirdDescription.setAttribute('class', 'about-us__description-paragraph')
  thirdDescription.textContent = "Upon entering Vikings: Sea Breeze, youll be transported to a world of maritime exploration and Norse mythology. The interior is adorned with weathered ship parts, sails billowing overhead, and intricately carved wooden accents reminiscent of Viking longships. The warm, golden lighting casts a magical glow upon the space, inviting you to embark on a voyage through time.  Our staff, dressed as valiant Viking sailors, greet you with a hearty Hail! and a welcoming smile.";

  const thirdImage = new Image();
  thirdImage.setAttribute('class', 'about-us__description-image');
  thirdImage.src = ThirdImage;

  const fourthDescription = document.createElement("p");
  fourthDescription.setAttribute('class', 'about-us__description-paragraph')
  fourthDescription.textContent = "They guide you through the menu, a carefully crafted fusion of traditional Viking fare and contemporary gastronomy. Feast on delectable dishes that capture the essence of Viking life—succulent roasted meats, hearty stews brimming with the bounty of the land and sea, and freshly baked bread that recalls the sustenance of the voyage.";

  const fourthImage = new Image();
  fourthImage.setAttribute('class', 'about-us__description-image');
  fourthImage.src = FourthImage;

  aboutUsDescription.appendChild(firstDescription);
  aboutUsDescription.appendChild(firstImage);

  aboutUsDescription.appendChild(secondDescription);
  aboutUsDescription.appendChild(secondImage);
  
  aboutUsDescription.appendChild(thirdDescription);
  aboutUsDescription.appendChild(thirdImage);
  
  aboutUsDescription.appendChild(fourthDescription);
  aboutUsDescription.appendChild(fourthImage);

  aboutUs.appendChild(aboutUsHeader);
  aboutUs.appendChild(aboutUsDescription);

  return aboutUs;
};

export default AboutUs;
