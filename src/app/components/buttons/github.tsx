import { IconBrandGithub } from "@tabler/icons-react";
import ExternalLinkButton from "./base";

export default function GitHubButton() {
  return (
    <ExternalLinkButton
      color="success"
      href="https://github.com/sverg84"
      Icon={IconBrandGithub}
      label="Visit my GitHub"
    />
  );
}
