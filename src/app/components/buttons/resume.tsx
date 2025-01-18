import { IoMdDocument } from "react-icons/io";
import ExternalLinkButton from "./base";

export default function ResumeButton() {
  return (
    <ExternalLinkButton
      href="https://dv8qyiytu2cuu.cloudfront.net/sverg_resume_2025.pdf"
      Icon={IoMdDocument}
      label="Look at my resume"
    />
  );
}
