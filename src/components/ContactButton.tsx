import Link from "next/link";
import styles from "./ContactButton.module.css";

export default function ContactButton() {
  return (
    <Link href="/contact" className={styles.contactBtn}>
      Contact Me
    </Link>
  );
}
