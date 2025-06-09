import styles from "./styles.module.scss";
import { Headset } from "lucide-react";

import About from "@/components/about";
import Card from "@/components/card";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import SubMenu from "@/components/submenu";
import { getDataHome } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/home.type";

export default async function Home() {
  const res: HomeProps = await getDataHome();
  const data = res.object;

  return (
    <main>
      <SubMenu data={data.metadata.services} />

      <Hero
        bannerUrl={data.metadata.banner.url}
        heading={data.metadata.heading}
        cta_buttonUrl={data.metadata.cta_button.url}
        cta_buttonTitle={data.metadata.cta_button.title}
        icon={<Headset size={22} color="#fff" />}
      />
      <About
        description={data.metadata.about.description}
        image={data.metadata.about.banner.url}
        title="Sobre"
        cta_buttonUrl=""
      />

      <div className={styles.services}>
        <h1>CONHEÇA NOSSOS SERVIÇOS</h1>
        <section className={styles.cards}>
          {data.metadata.services.map((iten, index) => (
            <Card
              key={index}
              index={index}
              imageService={iten.image.url}
              textService={iten.title}
            />
          ))}
        </section>
      </div>
      <Footer
        email={data.metadata.contact.email}
        phone={data.metadata.contact.phone}
        func={data.metadata.contact.time}
        map={data.metadata.contact.address}
        cta_buttonUrl={data.metadata.cta_button.url}
        cta_buttonTitle={data.metadata.cta_button.title}
      />
    </main>
  );
}
