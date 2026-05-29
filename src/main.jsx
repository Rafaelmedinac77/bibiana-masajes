import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const WHATSAPP = 'https://wa.me/393891425947'

const copy = {
  it: {
    nav: ['Home', 'Trattamenti', 'Chi sono', 'Recensioni', 'FAQ', 'Contatto'],
    heroKicker: 'Massaggi professionali a Bogliasco · Genova',
    heroTitle: 'Benessere, leggerezza e cura del corpo',
    heroText:
      'Trattamenti manuali professionali per drenare, rilassare, modellare e valorizzare il benessere naturale del corpo.',
    cta: 'Prenota su WhatsApp',
    cta2: 'Vedi trattamenti',
    tags: [
      'Drenaggio Linfatico',
      'Miracle Face',
      'Massaggio Modellante',
      'Massaggio Rilassante'
    ],
    servicesTitle: 'Trattamenti professionali',
    servicesSubtitle:
      'Ogni trattamento viene adattato alle esigenze della persona, con attenzione, tecnica e cura.',
    methodTitle: 'Un metodo manuale, preciso e personalizzato',
    methodText:
      'Il trattamento viene scelto in base all’obiettivo: leggerezza, rilassamento, definizione del contorno corporeo o cura del viso.',
    aboutTitle: 'Chi sono',
    aboutText:
      'Sono Bibiana Gamboa Martinez, massaggiatrice a Bogliasco, Genova. Offro trattamenti manuali professionali in un ambiente riservato, curato e orientato al benessere reale della persona.',
    aboutExtra:
      'Il mio lavoro si basa su ascolto, manualità, cura dei dettagli e trattamenti personalizzati. Ogni sessione viene adattata alle necessità del cliente.',
    benefitsTitle: 'Perché scegliere Bibiana',
    testimonialsTitle: 'Cosa dicono i clienti',
    faqTitle: 'Domande frequenti',
    contactTitle: 'Prenota il tuo trattamento',
    contactText:
      'Scrivimi su WhatsApp per informazioni, disponibilità e prenotazioni.',
    location: 'Via Privata Adelina 4, Bogliasco, Genova, Italia',
    footer: 'Bibiana Massaggi · Bogliasco / Genova'
  },
  es: {
    nav: ['Inicio', 'Tratamientos', 'Sobre mí', 'Opiniones', 'FAQ', 'Contacto'],
    heroKicker: 'Masajes profesionales en Bogliasco · Génova',
    heroTitle: 'Bienestar, ligereza y cuidado corporal',
    heroText:
      'Tratamientos manuales profesionales para drenar, relajar, modelar y cuidar el bienestar natural del cuerpo.',
    cta: 'Reservar por WhatsApp',
    cta2: 'Ver tratamientos',
    tags: [
      'Drenaje Linfático',
      'Miracle Face',
      'Masaje Modelante',
      'Masaje Relajante'
    ],
    servicesTitle: 'Tratamientos profesionales',
    servicesSubtitle:
      'Cada tratamiento se adapta a las necesidades de la persona, con atención, técnica y cuidado.',
    methodTitle: 'Un método manual, preciso y personalizado',
    methodText:
      'El tratamiento se elige según el objetivo: ligereza, relajación, definición del contorno corporal o cuidado facial.',
    aboutTitle: 'Sobre mí',
    aboutText:
      'Soy Bibiana Gamboa Martinez, masajista en Bogliasco, Génova. Ofrezco tratamientos manuales profesionales en un ambiente reservado, cuidado y orientado al bienestar real de cada persona.',
    aboutExtra:
      'Mi trabajo se basa en escucha, técnica manual, cuidado de los detalles y tratamientos personalizados. Cada sesión se adapta a las necesidades del cliente.',
    benefitsTitle: 'Por qué elegir a Bibiana',
    testimonialsTitle: 'Lo que dicen los clientes',
    faqTitle: 'Preguntas frecuentes',
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
      desc:
        'Tecnica manuale orientata alla sensazione di leggerezza, drenaggio e benessere corporeo.',
      img:
        'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Miracle Face',
      desc:
        'Massaggio viso pensato per rilassare, valorizzare i lineamenti e donare freschezza al volto.',
      img:
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Massaggio Modellante',
      desc:
        'Trattamento manuale intenso e mirato per lavorare il contorno corporeo.',
      img:
        'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Massaggio Rilassante',
      desc:
        'Ideale per ridurre tensione, stress e favorire una profonda sensazione di calma.',
      img:
        'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80'
    }
  ],
  es: [
    {
      title: 'Drenaje Linfático',
      desc:
        'Técnica manual orientada a la sensación de ligereza, drenaje y bienestar corporal.',
      img:
        'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Miracle Face',
      desc:
        'Masaje facial pensado para relajar, resaltar los rasgos y aportar frescura al rostro.',
      img:
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Masaje Modelante',
      desc:
        'Tratamiento manual intenso y dirigido para trabajar el contorno corporal.',
      img:
        'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Masaje Relajante',
      desc:
        'Ideal para reducir tensión, estrés y favorecer una sensación profunda de calma.',
      img:
        'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80'
    }
  ]
}

const benefits = {
  it: [
    'Trattamenti personalizzati',
    'Ambiente riservato e curato',
    'Prenotazione semplice via WhatsApp',
    'Approccio professionale e attento'
  ],
  es: [
    'Tratamientos personalizados',
    'Ambiente reservado y cuidado',
    'Reserva sencilla por WhatsApp',
    'Enfoque profesional y atento'
  ]
}

const testimonials = {
  it: [
    {
      text:
        'Esperienza eccellente. Mi sono sentita molto più leggera dopo il trattamento.',
      name: 'Cliente'
    },
    {
      text:
        'Professionalità, attenzione e un ambiente molto rilassante.',
      name: 'Cliente'
    },
    {
      text:
        'Consigliatissima. Tornerò sicuramente.',
      name: 'Cliente'
    }
  ],
  es: [
    {
      text:
        'Experiencia excelente. Me sentí mucho más ligera después del tratamiento.',
      name: 'Cliente'
    },
    {
      text:
        'Profesionalidad, atención y un ambiente muy relajante.',
      name: 'Cliente'
    },
    {
      text:
        'Muy recomendable. Volveré sin duda.',
      name: 'Cliente'
    }
  ]
}

const faqs = {
  it: [
    {
      q: 'Come posso prenotare?',
      a: 'Puoi prenotare direttamente tramite WhatsApp indicando il trattamento desiderato e la disponibilità.'
    },
    {
      q: 'Dove si trova lo studio?',
      a: 'A Bogliasco, Genova, in Via Privata Adelina 4.'
    },
    {
      q: 'Quale trattamento scegliere?',
      a: 'Dipende dal tuo obiettivo: drenaggio, rilassamento, viso o modellamento corporeo. Puoi scrivere su WhatsApp per ricevere orientamento.'
    }
  ],
  es: [
    {
      q: '¿Cómo puedo reservar?',
      a: 'Puedes reservar directamente por WhatsApp indicando el tratamiento que deseas y tu disponibilidad.'
    },
    {
      q: '¿Dónde está ubicado el centro?',
      a: 'En Bogliasco, Génova, en Via Privata Adelina 4.'
    },
    {
      q: '¿Qué tratamiento debo elegir?',
      a: 'Depende de tu objetivo: drenaje, relajación, rostro o modelación corporal. Puedes escribir por WhatsApp para recibir orientación.'
    }
  ]
}

function App() {
  const [lang, setLang] = useState('it')
  const t = copy[lang]
  const currentServices = services[lang]

  return (
    <>
      <header className="header">
        <a href="#inicio" className="brand">
          <span className="brandCircle">BG</span>
          <span>
            BIBIANA
            <br />
            MASSAGGI
          </span>
        </a>

        <nav className="nav">
          <a href="#inicio">{t.nav[0]}</a>
          <a href="#trattamenti">{t.nav[1]}</a>
          <a href="#chi-sono">{t.nav[2]}</a>
          <a href="#recensioni">{t.nav[3]}</a>
          <a href="#faq">{t.nav[4]}</a>
          <a href="#contatto">{t.nav[5]}</a>
        </nav>

        <button
          className="langBtn"
          onClick={() => setLang(lang === 'it' ? 'es' : 'it')}
        >
          {lang === 'it' ? 'ES' : 'IT'}
        </button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="heroContent">
            <p className="kicker">{t.heroKicker}</p>
            <h1>{t.heroTitle}</h1>
            <p className="heroText">{t.heroText}</p>

            <div className="heroButtons">
              <a
                className="btn primary"
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
              >
                {t.cta}
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
            {currentServices.map((service) => (
              <article className="serviceCard" key={service.title}>
                <img src={service.img} alt={service.title} />
                <div className="serviceBody">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <a href={WHATSAPP} target="_blank" rel="noreferrer">
                    {t.cta}
                  </a>
                </div>
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
              {benefits[lang].map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </div>

          <div className="methodImage"></div>
        </section>

        <section className="section about" id="chi-sono">
          <div>
            <span className="eyebrow">BIBIANA</span>
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutText}</p>
            <p>{t.aboutExtra}</p>
          </div>

          <div className="locationBox">
            <h3>📍 Bogliasco / Genova</h3>
            <p>{t.location}</p>
            <p>📞 +39 389 142 5947</p>
            <p>✉️ marvivi710@gmail.com</p>
          </div>
        </section>

        <section className="section testimonials" id="recensioni">
          <div className="sectionHead">
            <span className="eyebrow">★★★★★</span>
            <h2>{t.testimonialsTitle}</h2>
          </div>

          <div className="testimonialGrid">
            {testimonials[lang].map((item) => (
              <article className="testimonialCard" key={item.text}>
                <strong>★★★★★</strong>
                <p>{item.text}</p>
                <span>{item.name}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="sectionHead">
            <span className="eyebrow">FAQ</span>
            <h2>{t.faqTitle}</h2>
          </div>

          <div className="faqList">
            {faqs[lang].map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section contact" id="contatto">
          <div>
            <span className="eyebrow">CONTATTO</span>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
          </div>

          <a
            className="btn primary big"
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </section>
      </main>

      <a
        className="floatingWhatsapp"
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>

      <footer className="footer">
        <p>{t.footer}</p>
      </footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)