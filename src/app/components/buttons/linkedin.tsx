import { IoLogoLinkedin } from "react-icons/io";
import ExternalLinkButton from "./base";

export default function LinkedInButton() {
  return (
    <ExternalLinkButton
      color="blue"
      href="https://www.linkedin.com/in/stephen-vergara-2bab8614b/"
      Icon={IoLogoLinkedin}
      label="Find me on LinkedIn"
    />
  );
}
