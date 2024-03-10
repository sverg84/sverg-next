import { IoMdMail } from "react-icons/io";
import ExternalLinkButton from "./base";

export default function EmailButton() {
  return (
    <ExternalLinkButton
      gradient="cyanToBlue"
      href="mailto:sverg@gmail.com"
      Icon={IoMdMail}
      label="Send me an email"
    />
  );
}
