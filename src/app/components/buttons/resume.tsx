import { IoMdDocument } from "react-icons/io";
import ExternalLinkButton from "./base";

export default function ResumeButton() {
  return (
    <ExternalLinkButton
      color="purple"
      href="https://dv8qyiytu2cuu.cloudfront.net/sverg_resume.pdf"
      Icon={IoMdDocument}
      label="Look at my resume"
    />
  );
}
