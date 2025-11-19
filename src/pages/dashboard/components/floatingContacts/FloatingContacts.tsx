import React from "react";
import "./floatingContacts.scss";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

type Props = {
  whatsapp?: string;   // es: "+39333111222" (senza spazi)
  email?: string;      // es: "info@tuodominio.it"
  message?: string;    // opzionale messaggio precompilato WhatsApp
};

const encode = (s: string) => encodeURIComponent(s);

const FloatingContacts: React.FC<Props> = ({
  whatsapp = "+390000000000",
  email = "info@example.com",
  message = "Ciao! Vorrei avere informazioni."
}) => {
  const waHref = `https://wa.me/${whatsapp.replace(/\D/g, "")}?text=${encode(message)}`;
  const mailHref = `mailto:${email}?subject=${encode("Richiesta informazioni")}`;

  return (
    <div className="floatingContacts" role="navigation" aria-label="Contatti rapidi">
      <a
        className="floatingContacts__btn floatingContacts__btn--wa"
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contattaci su WhatsApp"
      >
        <span className="floatingContacts__icon"><WhatsAppIcon /></span>
        <span className="floatingContacts__label">WhatsApp</span>
      </a>

      <a
        className="floatingContacts__btn floatingContacts__btn--mail"
        href={mailHref}
        aria-label="Scrivici una mail"
      >
        <span className="floatingContacts__icon"><MailOutlineIcon /></span>
        <span className="floatingContacts__label">Email</span>
      </a>
    </div>
  );
};

export default FloatingContacts;
