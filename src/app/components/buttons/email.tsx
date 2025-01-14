import { IoMdMail } from "react-icons/io";
import ExternalLinkButton from "./base";

export default function EmailButton() {
  return (
    <ExternalLinkButton
      href="mailto:sverg84@gmail.com"
      Icon={IoMdMail}
      label="Send me an email"
    />
  );
}
