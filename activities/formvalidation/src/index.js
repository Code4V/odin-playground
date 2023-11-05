import ThisForm from "./components/form";

const main = document.querySelector("#main");

const regex = new RegExp(
  /(?<fullEmail>(?<emailName>\w*\.\w*\.\w*\.\w*|\w*\.\w*\.\w*|\w*\.\w*|\w*)(?<domainName>@\w*)(?<topLevelDomain>\.\w*))/,
  "g"
);

main.append(ThisForm());
