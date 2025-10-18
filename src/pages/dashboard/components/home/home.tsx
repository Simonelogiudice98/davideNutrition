import React from "react"
import "./home.scss"

import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu"
import PersonSearchIcon from "@mui/icons-material/PersonSearch"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"

type Feature = { title: string; subtitle: string; Icon: React.ElementType }

const FEATURES: Feature[] = [
  { title: "What will you get",           subtitle: "Piano nutrizionale, linee guida, ricette e follow-up", Icon: RestaurantMenuIcon },
  { title: "Meet our expert",             subtitle: "Valutazione iniziale e obiettivi personalizzati",      Icon: PersonSearchIcon },
  { title: "Testimonial",                 subtitle: "Storie reali e risultati raggiunti",                   Icon: FormatQuoteIcon },
  { title: "Frequently asked questions",  subtitle: "Dubbi comuni su dieta, visite e tempi",                Icon: HelpOutlineIcon },
]

const Home: React.FC = () => {
  return (
  <div className="home">
    <div className="home__panel">
      <h1 className="home__title">Get in shape with smart nutrition</h1>

      <div className="home__row">
        {FEATURES.map(({ title, subtitle, Icon }) => (
          <div className="card card--center" key={title}>
            <div className="card__icon"><Icon /></div>
            <h3 className="card__title">{title}</h3>
            <p className="card__text">{subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
)
}

export default Home
