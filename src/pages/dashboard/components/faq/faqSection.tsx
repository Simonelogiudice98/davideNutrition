import React, { useState } from "react";
import "./faqSection.scss";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

type Faq = { q: string; a: React.ReactNode };

const FAQS: Faq[] = [
  {
    q: "Cosa posso aspettarmi dalla consulenza nutrizionale?",
    a: "Valutazione iniziale, obiettivi chiari e un piano personalizzato con linee guida pratiche. Focus su abitudini sostenibili, non solo dieta ‘rigida’.",
  },
  {
    q: "Per chi è indicato questo servizio?",
    a: "Per chi vuole migliorare composizione corporea, energia, performance, gestione pasti; adatto anche a esigenze vegetariane/vegane/gluten-free.",
  },
  {
    q: "Quanto dura la consulenza?",
    a: "In genere 45–60 minuti la prima visita; follow-up 20–30 minuti (variabile in base al caso).",
  },
  {
    q: "Riceverò un piano dopo la visita?",
    a: "Sì: piano nutrizionale + lista della spesa + ricette rapide e linee guida operative.",
  },
  {
    q: "Posso prenotare follow-up?",
    a: "Certo. Check-in programmati per monitorare i progressi e fare aggiustamenti mirati.",
  },
  {
    q: "È adatto a condizioni cliniche?",
    a: "Sì, previa valutazione. Se servono indicazioni mediche specifiche si collabora con il medico curante.",
  },
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="faq">
      <div className="faq__inner">
        <h2 className="faq__title">Frequently Asked Questions</h2>

        <ul className="faq__list" role="list">
          {FAQS.map(({ q, a }, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const btnId = `faq-button-${i}`;

            return (
              <li className="faq__item" key={i}>
                <button
                  id={btnId}
                  className={`faq__button ${isOpen ? "is-open" : ""}`}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(i)}
                >
                  <span className="faq__question">{q}</span>
                  <span className="faq__icon" aria-hidden="true">
                    {isOpen ? <RemoveRoundedIcon /> : <AddRoundedIcon />}
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`faq__content ${isOpen ? "is-open" : ""}`}
                >
                  <p className="faq__answer">{a}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="faq__hint">
          Non trovi quello che cerchi?{" "}
          <a href="/contatti" className="faq__link">Contattaci</a>
        </p>
      </div>
    </section>
  );
};

export default FaqSection;
