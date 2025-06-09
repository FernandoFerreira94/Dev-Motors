import { getDataHome } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/home.type";
import SubMenu from "@/components/submenu";
import { Headset } from "lucide-react";
import Hero from "@/components/hero";
import About from "@/components/about";
import Footer from "@/components/footer";

interface ServicesPageProps {
  params: Promise<{ id: string }>;
}

export default async function Services(props: ServicesPageProps) {
  const { id } = await props.params; // <-- aqui você "resolve" a promise
  const numId = Number(id);

  const res: HomeProps = await getDataHome();
  const data = res.object;
  const service = data.metadata.services[numId];

  if (!service) {
    return <h1>Serviço não encontrado 🚨</h1>;
  }

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
        description={service.description}
        image={service.image.url}
        title={service.title}
        zap={true}
        cta_buttonUrl={data.metadata.cta_button.url}
      />
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
