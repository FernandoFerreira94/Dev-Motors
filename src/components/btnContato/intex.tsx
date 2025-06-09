import styles from "./styles.module.scss";
import Link from "next/link";
import { Headset } from "lucide-react";

interface BtnContatoProps {
  cta_buttonUrl: string;
  cta_buttonTitle: string;
}

export default function BtnContato({
  cta_buttonUrl,
  cta_buttonTitle,
}: BtnContatoProps) {
  return (
    <Link target="_blank" href={cta_buttonUrl} className={styles.btnContato}>
      <Headset size={22} color="#fff" /> {cta_buttonTitle}
    </Link>
  );
}
