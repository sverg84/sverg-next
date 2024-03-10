import { IconBrandLinkedin } from "@tabler/icons-react";
import ExternalLinkButton from "./base";

export default function LinkedInButton() {
  return (
    <ExternalLinkButton
      color="blue"
      href="https://github.com/sverg84"
      Icon={IconBrandLinkedin}
      label="Find me on LinkedIn"
    />
  );
}
