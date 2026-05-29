import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const WHATSAPP = 'https://wa.me/393891425947'

const text = {
  it: {
    nav: ['Trattamenti', 'Metodo', 'Chi sono', 'Contatto'],
    heroKicker: 'Massaggi professionali a Bogliasco · Genova',
    heroTitle: 'Benessere, leggerezza e cura del corpo',
    heroText:
      'Trattamenti manuali professionali pensati per ridurre la tensione, migliorare la sensazione di leggerezza e valorizzare il benessere naturale del corpo.',
    cta: 'Prenota su WhatsApp',
    cta2: 'Vedi trattamenti',
    tags: ['Metodo manuale', 'Prenotazione rapida', 'Bogliasco / Genova'],
    servicesTitle: 'Trattamenti',
    servicesSubtitle:
      'Percorsi mirati per viso, corpo, rilassamento e drenaggio.',
    methodTitle: 'Un metodo manuale, preciso e personalizzato',
    methodText:
      'Ogni trattamento viene adattato alle esigenze della persona. L’obiettivo è offrire un’esperienza professionale, sicura e orientata al benessere reale.',
    aboutTitle: 'Chi sono',
    aboutText:
      'Sono Bibiana Gamboa Martinez, massaggiatrice a Bogliasco, Genova. Offro trattamenti manuali professionali con attenzione, cura e rispetto per ogni cliente.',
    contactTitle: 'Prenota il tuo trattamento',
    contactText:
      'Scrivimi su WhatsApp per informazioni, disponibilità e prenotazioni.',
    location: 'Via Privata Adelina 4, Bogliasco, Genova, Italia',
    footer: 'Bibiana Massaggi · Bogliasco / Genova'
  },
  es: {
    nav: ['Tratamientos', 'Método', 'Sobre mí', 'Contacto'],
    heroKicker: 'Masajes profesionales en Bogliasco · Génova',
    heroTitle: 'Bienestar, ligereza y cuidado corporal',
    heroText:
      'Tratamientos manuales profesionales pensados para reducir tensión, mejorar la sensación de ligereza y cuidar el bienestar natural del cuerpo.',
    cta: 'Reservar por WhatsApp',
    cta2: 'Ver tratamientos',
    tags: ['Método manual', 'Reserva rápida', 'Bogliasco / Génova'],
    servicesTitle: 'Tratamientos',
    servicesSubtitle:
      'Servicios enfocados en rostro, cuerpo, relajación y drenaje.',
    methodTitle: 'Un método manual, preciso y personalizado',
    methodText:
      'Cada tratamiento se adapta a las necesidades de la persona. El objetivo es ofrecer una experiencia profesional, segura y orientada al bienestar real.',
    aboutTitle: 'Sobre mí',
    aboutText:
      'Soy Bibiana Gamboa Martinez, masajista en Bogliasco, Génova. Ofrezco tratamientos manuales profesionales con atención, cuidado y respeto por cada cliente.',
    contactTitle: 'Reserva tu tratamiento',
    contactText:
      'Escríbeme por WhatsApp para información, disponibilidad y reservas.',
    location: 'Via Privata Adelina 4, Bogliasco, Génova, Italia',
    footer: 'Bibiana Masajes · Bogliasco / Génova'
  }
}

const services = {
  it: [
    {
      title: 'Drenaggio Linfatico',
      desc: 'Trattamento manuale orientato alla sensazione di leggerezza, drenaggio e benessere corporeo.'
    },
    {
      title: 'Miracle Face',
      desc: 'Massaggio viso pensato per valorizzare i lineamenti, rilassare e dare freschezza al volto.'
    },
    {
      title: 'Massaggio Modellante',
      desc: 'Tecnica manuale per lavorare il contorno corporeo con movimenti intensi e mirati.'
    },
    {
      title: 'Massaggio Rilassante',
      desc: 'Trattamento ideale per ridurre tensione, stress e favorire una profonda sensazione di calma.'
    }
  ],
  es: [
    {
      title: 'Drenaje Linfático',
      desc: 'Tratamiento manual orientado a la sensación de ligereza, drenaje y bienestar corporal.'
    },
    {
      title: 'Miracle Face',
      desc: 'Masaje facial pensado para resaltar los rasgos, relajar y aportar frescura al rostro.'
    },
    {
      title: 'Masaje Modelante',
      desc: 'Técnica manual para trabajar el contorno corporal con movimientos intensos y dirigidos.'
    },
    {
      title: 'Masaje Relajante',
      desc: 'Tratamiento ideal para reducir tensión, estrés y favorecer una sensación profunda de calma.'
    }
  ]
}

function App() {
  const [lang, setLang] = useState('it')
  const t = text[lang]
  const s = services[lang]

  return (
    <>
      <header className="header">
        <a href="#" className="brand">
          <span className="brandCircle">BG</span>
          <span>
            BIBIANA
            <br />
            MASSAGGI
          </span>
        </a>

        <nav className="nav">
          {t.nav.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`}>
              {item}
            </a>
          ))}
        </nav>

        <button
          className="langBtn"
          onClick={() => setLang(lang === 'it' ? 'es' : 'it')}
        >
          🌐 {lang === 'it' ? 'ES' : 'IT'}
        </button>
      </header>

      <main>
        <section className="hero">
          <div className="heroContent">
            <p className="kicker">✦ {t.heroKicker}</p>
            <h1>{t.heroTitle}</h1>
            <p className="heroText">{t.heroText}</p>

            <div className="heroButtons">
              <a className="btn primary" href={WHATSAPP} target="_blank">
                {t.cta} →
              </a>
              <a className="btn secondary" href="#trattamenti">
                {t.cta2}
              </a>
            </div>

            <div className="trustBar">
              {t.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="heroCard">
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80"
              alt="Massaggio professionale"
            />
          </div>
        </section>

        <section className="section" id="trattamenti">
          <div className="sectionHead">
            <span className="eyebrow">SERVIZI</span>
            <h2>{t.servicesTitle}</h2>
            <p>{t.servicesSubtitle}</p>
          </div>

          <div className="servicesGrid">
            {s.map((service) => (
              <article className="serviceCard" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <a href={WHATSAPP} target="_blank">
                  {t.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section method" id="metodo">
          <div>
            <span className="eyebrow">METODO</span>
            <h2>{t.methodTitle}</h2>
            <p>{t.methodText}</p>

            <ul className="checkList">
              <li>✓ Trattamento personalizzato</li>
              <li>✓ Ambiente riservato</li>
              <li>✓ Prenotazione semplice via WhatsApp</li>
            </ul>
          </div>

          <div className="methodImage"></div>
        </section>

        <section className="section about" id="chi-sono">
          <div>
            <span className="eyebrow">BIBIANA</span>
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutText}</p>
          </div>

          <div className="locationBox">
            <h3>📍 Bogliasco / Genova</h3>
            <p>{t.location}</p>
            <p>📞 +39 389 142 5947</p>
            <p>✉️ marvivi710@gmail.com</p>
          </div>
        </section>

        <section className="section contact" id="contatto">
          <div>
            <span className="eyebrow">CONTATTO</span>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
          </div>

          <a className="btn primary big" href={WHATSAPP} target="_blank">
            WhatsApp
          </a>
        </section>
      </main>

      <a className="floatingWhatsapp" href={WHATSAPP} target="_blank">
        WhatsApp
      </a>

      <footer className="footer">
        <p>{t.footer}</p>
      </footer>
    </>
  )
}

export default App