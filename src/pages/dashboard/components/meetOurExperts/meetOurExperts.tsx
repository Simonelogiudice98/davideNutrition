import React from "react";
import "./MeetOurExperts.scss";

export type MeetOurExpertProps = {
  title?: string;
  subtitle?: string;
  fullName: string;
  role: string;
  bioShort?: string;
  studies?: string; 
  registerId?: string;  
  bullets?: string[];
  photoUrl: string;
  ctaPrimaryText?: string;
  ctaSecondaryText?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
  className?: string;
};

const getInitials = (name: string): string => {
  const initials = name
    .trim()
    .split(/\s+/)
    .map((s) => s.charAt(0).toUpperCase())
    .slice(0, 2)
    .join("");
  return initials || "DD";
};

const MeetOurExpert: React.FC<MeetOurExpertProps> = ({
  title = "Meet our expert",
  subtitle = "Conosci il professionista che ti guiderà in un percorso concreto, sostenibile e personalizzato.",
  fullName,
  role,
  bioShort,
  studies,
  registerId,
  bullets = [
    "Valutazione iniziale su obiettivi e stile di vita",
    "Piano nutrizionale personalizzato e flessibile",
    "Ricette rapide + lista della spesa",
    "Monitoraggio reale con follow-up",
  ],
  photoUrl,
  ctaPrimaryText = "Prenota una visita",
  ctaSecondaryText = "Scrivimi su WhatsApp",
  onPrimary,
  onSecondary,
  className,
}) => {
  return (
    <section className={`meet ${className ?? ""}`}>
      {/* Header */}
      <div className="meet__header">
        <span className="meet__chip">{title}</span>
        <h2 className="meet__heading">Conosci il professionista</h2>
        <p className="meet__subtitle">{subtitle}</p>
      </div>

      {/* Card */}
      <div className="meet__card">
        {/* Text */}
        <div className="meet__content">
          <div className="meet__identity">
            <div className="meet__avatar" aria-hidden="true">
              {getInitials(fullName)}
            </div>
            <div>
              <div className="meet__name">{fullName}</div>
              <div className="meet__role">{role}</div>
            </div>
          </div>

          {(bioShort || studies || registerId) && (
            <>
              {bioShort && <p className="meet__bio">{bioShort}</p>}
              <div className="meet__tags">
                {studies && <span className="meet__tag">{studies}</span>}
                {registerId && (
                  <span className="meet__tag">Albo: {registerId}</span>
                )}
              </div>
            </>
          )}

          {bullets?.length > 0 && (
            <ul className="meet__bullets">
              {bullets.map((b, i) => (
                <li className="meet__bullet" key={i}>
                  <span className="meet__bulletIcon" aria-hidden="true">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="meet__cta">
            <button className="btn btn--primary" onClick={onPrimary}>
              {ctaPrimaryText}
            </button>
            <button className="btn btn--ghost" onClick={onSecondary}>
              {ctaSecondaryText}
            </button>
          </div>
        </div>

        {/* Photo */}
        <div className="meet__photo">
          <img
            src={photoUrl}
            alt={fullName}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* Trust bar */}
      {/* <div className="meet__trust">
        <span>+300 piani personalizzati</span>
        <span>•</span>
        <span>4.9/5 soddisfazione media</span>
        <span>•</span>
        <span>Evidence-based</span>
      </div> */}
    </section>
  );
};

export default MeetOurExpert;
