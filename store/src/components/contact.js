const Contact = () => {
  const contact = document.createElement("section");
  contact.setAttribute("class", "contact");

  const contactTitle = document.createElement("h3");
  contactTitle.setAttribute('class', 'contact__title');
  contactTitle.textContent = "CONTACT US";

  const contactInformation = document.createElement("div");
  contactInformation.setAttribute("class", "contact__information");

  const contactEmail = document.createElement('div');

  const EmailAddress = document.createElement('span');
  EmailAddress.textContent = "rivasjeannefrancis@gmail.com";

  const EmailIcon = document.createElement('i');

    
  contactInformation.appendChild(contactEmail);
  contactEmail.appendChild(EmailIcon);
  contactEmail.appendChild(EmailAddress);

  contact.appendChild(contactTitle);
  contact.appendChild(contactInformation);

  return contact;
};

export default Contact;
