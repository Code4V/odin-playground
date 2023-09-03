import ContactLink from './contact-links';

const Contact = () => {
  const contact = document.createElement("section");
  contact.setAttribute("class", "contact");

  const contactTitle = document.createElement("h3");
  contactTitle.setAttribute('class', 'contact__title');
  contactTitle.textContent = "CONTACT US";

  const contactInformation = document.createElement("div");
  contactInformation.setAttribute("class", "contact__information");

  const contactEmail = ContactLink("rivasjeannefrancis@gmail.com", 'https://img.icons8.com/ios/50/D29614/new-post--v1.png');
  const contactTel = ContactLink("0995-200-1234", "https://img.icons8.com/ios/50/D29614/phone--v1.png");
  const contactLoc = ContactLink("149 31 Nynäshamn, Sweden", "https://img.icons8.com/ios/50/D29614/map-marker--v1.png");

//   const EmailAddress = document.createElement('span');
//   EmailAddress.textContent = "rivasjeannefrancis@gmail.com";

//   const EmailIcon = new Image(25, 25);
//   EmailIcon.src = 'https://img.icons8.com/ios/50/new-post--v1.png';

    
  contactInformation.appendChild(contactEmail);
  contactInformation.appendChild(contactTel);
  contactInformation.appendChild(contactLoc);
//   contactEmail.appendChild(EmailIcon);
//   contactEmail.appendChild(EmailAddress);

  contact.appendChild(contactTitle);
  contact.appendChild(contactInformation);

  return contact;
};

export default Contact;
