import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";

interface CardProps {
  imageService: string;
  textService: string;
  index: number;
}

export default function Card({ imageService, textService, index }: CardProps) {
  return (
    <>
      <Link href={`/service/${index}`}>
        <article className={styles.card}>
          <Image
            src={imageService}
            alt="Image service"
            quality={100}
            priority={true}
            width={290}
            height={220}
            className={styles.cardImage}
          />
          <p>{textService}</p>
        </article>
      </Link>
    </>
  );
}
