import Link from "next/link";
import styles from "./DownloadCVButton.module.css";

export default function DownloadCVButton() {
  return (
    <div className={styles.button}>
      <Link href="https://drive.google.com/file/d/1A9IX37cgRgOou2Y3JGbGIZKTUB4_c3_7/view?usp=drive_link" className={styles.anchor}>
        <span className={styles.text}>Download CV</span>
      </Link>
    </div>
  );
}
