const Footer = () => 
{
    const footer = document.createElement("footer");
    footer.setAttribute("class", "footer");

    const footerContent = document.createElement("div");
    footerContent.setAttribute("class", "footer__content")

    const contentCreator = document.createElement("p");
    contentCreator.setAttribute("class", "footer__content-by");
    contentCreator.textContent = "Made by Code4V for the Odin Project";

    footerContent.appendChild(contentCreator);

    footer.appendChild(footerContent);

    return footer;
}

export default Footer;