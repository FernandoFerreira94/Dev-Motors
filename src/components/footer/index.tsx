import BtnContato from "../btnContato/intex";
import styles from "./styles.module.scss";
import { Mail, Phone, Clock, MapPin } from "lucide-react";

interface FooterProps {
  email: string;
  phone: string;
  func: string;
  map: string;
  cta_buttonUrl: string;
  cta_buttonTitle: string;
}

export default function Footer({
  email,
  phone,
  func,
  map,
  cta_buttonUrl,
  cta_buttonTitle,
}: FooterProps) {
  return (
    <footer className={styles.footer} id="contato">
      <div className={styles.footerContato}>
        <h1>Contatos</h1>
        <div className={styles.contentContato}>
          <div className={styles.contentItem}>
            <div className={styles.contatoItem}>
              <Mail size={40} color="#fff" />
              <div className={styles.item}>
                <h4>Email</h4>
                <p>{email}</p>
              </div>
            </div>
            <div className={styles.contatoItem}>
              {" "}
              <Phone size={40} color="#fff" />
              <div className={styles.item}>
                <h4>Telefone</h4>
                <p>{phone}</p>
              </div>
            </div>
            <div className={styles.contatoItem}>
              {" "}
              <Clock size={40} color="#fff" />
              <div className={styles.item}>
                <h4>Horario de funcionamento</h4>
                <p>{func}</p>
              </div>
            </div>
          </div>
          <div className={styles.contatoItem}>
            {" "}
            <MapPin size={40} color="#fff" />
            <div className={styles.item}>
              <h4>Endereço</h4>
              <p>{map}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBtn}>
        <BtnContato
          cta_buttonUrl={cta_buttonUrl}
          cta_buttonTitle={cta_buttonTitle}
        />
        <p>Todos direitos reservados Dev Motors @2025</p>
      </div>
    </footer>
  );
}
