import Link from "next/link";
import styles from "./DownloadCVButton.module.css";

export default function DownloadCVButton() {
  return (
    <div className={styles.button}>
      <Link href="https://drive.google.com/file/d/1v8PFgKUHtAGn0lV3b909zvH59qMU58bN/view?usp=sharing" className={styles.anchor}>
        <span className={styles.text}>Download CV</span>
      </Link>
    </div>
  );
}
