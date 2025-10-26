import React from "react";
import "./whatYouGetSection.scss";

import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TimerIcon from "@mui/icons-material/Timer";
import QueryStatsIcon from "@mui/icons-material/QueryStats";

const WhatYouGetSection: React.FC = () => {
  return (
    <section className="wyg">
      <div className="wyg__inner">
        <div className="wyg__left">
          <p className="wyg__eyebrow">What will you get</p>
          <h2 className="wyg__title">
            Un percorso chiaro, personalizzato
            <br />
            e sostenibile nel tempo
          </h2>

          <p className="wyg__subtitle">
            Non solo “una dieta”. Ricevi un metodo concreto per cambiare
            abitudini alimentari senza rinunciare alla vita sociale.
          </p>

          <ol className="wyg__steps">
            <li className="wyg__step">
              <span className="wyg__stepNum">1</span>
              <div>
                <div className="wyg__stepTitle">Valutazione iniziale</div>
                <div className="wyg__stepText">
                  Analisi stile di vita, obiettivi, gusti e eventuali esigenze
                  cliniche.
                </div>
              </div>
            </li>

            <li className="wyg__step">
              <span className="wyg__stepNum">2</span>
              <div>
                <div className="wyg__stepTitle">Piano nutrizionale</div>
                <div className="wyg__stepText">
                  Menù personalizzato + linee guida pratiche (cosa mangiare,
                  quando e quanto).
                </div>
              </div>
            </li>

            <li className="wyg__step">
              <span className="wyg__stepNum">3</span>
              <div>
                <div className="wyg__stepTitle">Follow-up</div>
                <div className="wyg__stepText">
                  Controllo dei progressi e aggiustamenti periodici: niente
                  piani rigidi “una volta per tutte”.
                </div>
              </div>
            </li>

            <li className="wyg__step">
              <span className="wyg__stepNum wyg__stepNum--accent">4</span>
              <div>
                <div className="wyg__stepTitle">Supporto continuo</div>
                <div className="wyg__stepText">
                  Dubbi pratici (“posso mangiare X stasera?”) → risposta, non
                  ansia.
                </div>
              </div>
            </li>
          </ol>

          <button className="wyg__cta">
            Prenota la prima visita
          </button>
        </div>

        {/* RIGHT SIDE: benefit cards */}
        <div className="wyg__right">
          <div className="wygCard">
            <div className="wygCard__icon">
              <RestaurantMenuIcon fontSize="inherit" />
            </div>
            <div className="wygCard__title">Piano nutrizionale</div>
            <div className="wygCard__text">
              Personalizzato su obiettivi, gusti e routine (lavoro, palestra,
              famiglia).
            </div>
          </div>

          <div className="wygCard">
            <div className="wygCard__icon">
              <ShoppingCartIcon fontSize="inherit" />
            </div>
            <div className="wygCard__title">Lista della spesa</div>
            <div className="wygCard__text">
              Spesa settimanale già pronta + alternative economiche/veloci.
            </div>
          </div>

          <div className="wygCard">
            <div className="wygCard__icon">
              <TimerIcon fontSize="inherit" />
            </div>
            <div className="wygCard__title">Ricette rapide</div>
            <div className="wygCard__text">
              Piatti pronti in 15–30 minuti, varianti vegetariane e gluten
              free.
            </div>
          </div>

          <div className="wygCard">
            <div className="wygCard__icon">
              <QueryStatsIcon fontSize="inherit" />
            </div>
            <div className="wygCard__title">Monitoraggio reale</div>
            <div className="wygCard__text">
              Check-in e aggiustamenti: niente “fai da solo e risentiamoci tra
              6 mesi”.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
