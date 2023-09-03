const ContactLink = (contactTitle, contactIcon) =>
{
  const contactLink = document.createElement('div');
  contactLink.setAttribute('class', 'link')

  const EmailAddress = document.createElement('span');
  EmailAddress.setAttribute('class', 'link__title');
  EmailAddress.textContent = contactTitle;

  const EmailIcon = new Image(25, 25);
  EmailIcon.setAttribute('class', 'link__icon');
  EmailIcon.src = contactIcon;

  contactLink.appendChild(EmailIcon);
  contactLink.appendChild(EmailAddress);

  return contactLink;
}

export default ContactLink;

