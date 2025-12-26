import styles from "./testimonialSection.module.scss";

export type Testimonial = {
  name: string;
  subtitle?: string; // es: "Ricomp. corporea • 12 settimane"
  text: string;
  rating?: number; // 1..5
  initials?: string; // fallback avatar
};

const defaultTestimonials: Testimonial[] = [
  {
    name: "Martina R.",
    subtitle: "Ricomp. corporea • 12 settimane",
    text: "Davide mi ha dato un metodo sostenibile: piano flessibile, ricette veloci e indicazioni super chiare. Ho migliorato energia e composizione senza “dieta punitiva”.",
    rating: 5,
    initials: "MR",
  },
  {
    name: "Luca P.",
    subtitle: "Dimagrimento • 8 kg",
    text: "Follow-up costanti e aggiustamenti realistici. La cosa migliore è che riesco a gestire i pasti anche con lavoro e vita sociale. Risultati concreti e zero ansia.",
    rating: 5,
    initials: "LP",
  },
  {
    name: "Giulia S.",
    subtitle: "Educazione alimentare",
    text: "Finalmente ho capito cosa mangiare e quando, senza estremismi. Lista della spesa e alternative pratiche: mi ha semplificato tutto e mi sento molto più in controllo.",
    rating: 5,
    initials: "GS",
  },
];

function Stars({ value = 5 }: { value?: number }) {
  const v = Math.max(0, Math.min(5, value));
  return (
    <div className={styles.stars} aria-label={`Valutazione: ${v} su 5`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < v;
        return (
          <svg
            key={i}
            className={filled ? styles.starFilled : styles.starEmpty}
            viewBox="0 0 24 24"
            width="18"
            height="18"
            aria-hidden="true"
          >
            <path d="M12 17.3l-6.18 3.25 1.18-6.88L2 8.95l6.9-1L12 1.7l3.1 6.25 6.9 1-5 4.72 1.18 6.88z" />
          </svg>
        );
      })}
    </div>
  );
}

export default function TestimonialsSection({
  testimonials = defaultTestimonials,
}: {
  testimonials?: Testimonial[];
}) {
  return (
    <section id="testimonial" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.panel}>
          <header className={styles.header}>
            <span className={styles.pill}>Testimonial</span>
            <h2 className={styles.title}>Storie reali, risultati raggiunti</h2>
            <p className={styles.subtitle}>
              Esperienze di persone che hanno seguito un percorso concreto, sostenibile e personalizzato.
            </p>
          </header>

          <div className={styles.grid}>
            {testimonials.slice(0, 3).map((t, idx) => (
              <article key={idx} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.iconBadge} aria-hidden="true">
                    {/* quote icon */}
                    <svg viewBox="0 0 24 24" width="18" height="18">
                      <path d="M7.2 17.5H4.5c-.8 0-1.5-.7-1.5-1.5v-3.2C3 9.9 4.9 8 7.3 8h.9c.5 0 .8.4.8.8v1.3c0 .5-.4.8-.8.8h-.9c-.9 0-1.7.8-1.7 1.7V13h1.6c.9 0 1.6.7 1.6 1.6v1.3c0 .9-.7 1.6-1.6 1.6Zm12.3 0h-2.7c-.8 0-1.5-.7-1.5-1.5v-3.2c0-2.9 1.9-4.8 4.3-4.8h.9c.5 0 .8.4.8.8v1.3c0 .5-.4.8-.8.8h-.9c-.9 0-1.7.8-1.7 1.7V13h1.6c.9 0 1.6.7 1.6 1.6v1.3c0 .9-.7 1.6-1.6 1.6Z" />
                    </svg>
                  </div>

                  <Stars value={t.rating ?? 5} />
                </div>

                <p className={styles.text}>&ldquo;{t.text}&rdquo;</p>

                <footer className={styles.footer}>
                  <div className={styles.avatar} aria-hidden="true">
                    {t.initials ?? t.name
                      .split(" ")
                      .slice(0, 2)
                      .map((x) => x[0]?.toUpperCase())
                      .join("")}
                  </div>

                  <div className={styles.meta}>
                    <div className={styles.name}>{t.name}</div>
                    {t.subtitle && <div className={styles.metaLine}>{t.subtitle}</div>}
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
