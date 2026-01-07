import { Link } from "react-router-dom";
import DecryptedText from "../ui/decrypted_text";

export function ButtonBack({ to }: { to: string }) {
  return (
    <Link
      to={to}
      className={`text-3xl font-heading `}
      
    >
      <DecryptedText
        text="Back"
        maxIterations={20}
        useOriginalCharsOnly
        animateOn="hover"
      ></DecryptedText>
    </Link>
  );
}
