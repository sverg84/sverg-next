import { IconMailFilled } from "@tabler/icons-react";
import ExternalLinkButton from "./base";

export default function EmailButton() {
  return (
    <ExternalLinkButton
      gradient="cyanToBlue"
      href="mailto:sverg@gmail.com"
      Icon={IconMailFilled}
      label="Send me an email"
    />
  );
}
