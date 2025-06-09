export interface HomeProps {
  object: {
    slug: string;
    title: string;
    type: string;

    metadata: {
      heading: string;

      about: {
        description: string;
        banner: {
          url: string;
        };
      };

      banner: {
        url: string;
      };

      contact: {
        email: string;
        phone: string;
        address: string;
        time: string;
      };

      cta_button: {
        title: string;
        url: string;
      };

      services: ServicesProps[];
    };
  };
}

interface ServicesProps {
  description: string;
  title: string;
  image: {
    url: string;
  };
}
