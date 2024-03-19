import { IoLogoGithub } from "react-icons/io";
import ExternalLinkButton from "./base";

export default function GitHubButton() {
  return (
    <ExternalLinkButton
      href="https://github.com/sverg84"
      Icon={IoLogoGithub}
      label="Visit my GitHub"
    />
  );
}
