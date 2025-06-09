import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";

interface AboutProps {
  description: string;
  image: string;
  title: string;
  cta_buttonUrl: string;
  zap?: boolean | false;
}

export default function About({
  description,
  image,
  title,
  zap,
  cta_buttonUrl,
}: AboutProps) {
  return (
    <main className={styles.about} id="services">
      <div className={styles.aboutText}>
        <h1>{title}</h1>
        <p>{description} </p>
        {zap && (
          <Link href={cta_buttonUrl} target="_blank">
            {" "}
            Fale com um dos nosso atedentes
          </Link>
        )}
      </div>
      <div className={styles.aboutDivImage}>
        <Image
          src={image}
          alt={""}
          priority={true}
          quality={100}
          className={styles.aboutImage}
          width={350}
          height={400}
        />{" "}
      </div>
    </main>
  );
}
