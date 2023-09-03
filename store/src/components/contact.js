const Contact = () => 
{
    const contact = document.createElement('section');
    contact.setAttribute('class', 'contact');

    const contactInformation = document.createElement('div');
    contactInformation.setAttribute('class', 'contact__information');

    contact.appendChild(contactInformation);
    

    return contact;
}

export default Contact;