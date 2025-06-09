import styles from "./styles.module.scss";
import { ReactNode } from "react";

import BtnContato from "../btnContato/intex";

interface HeroProps {
  icon?: ReactNode | null;
  bannerUrl: string;
  heading: string;
  cta_buttonUrl: string;
  cta_buttonTitle: string;
}

export default async function Hero({
  bannerUrl,
  heading,
  cta_buttonUrl,
  cta_buttonTitle,
}: HeroProps) {
  return (
    <main
      className={styles.hero}
      style={{
        backgroundImage: `url(${bannerUrl})`,
      }}
    >
      <div className={styles.titleHero}>
        <h1>{heading}</h1>
        <BtnContato
          cta_buttonUrl={cta_buttonUrl}
          cta_buttonTitle={cta_buttonTitle}
        />
      </div>
    </main>
  );
}
