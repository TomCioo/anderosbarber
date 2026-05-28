import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Scissors,
  Sparkles,
  Crown,
  Wind,
  MapPin,
  Phone,
  Clock,
  Instagram,
  Facebook,
  Calendar,
  Star,
  ChevronDown,
} from "lucide-react";
import heroImg from "@/assets/hero.jpeg";
import aboutImg from "@/assets/about.jpeg";
import g1 from "@/assets/g1.jpeg";
import g2 from "@/assets/g2.jpeg";
import g3 from "@/assets/g3.jpeg";
import g4 from "@/assets/g4.jpeg";
import g5 from "@/assets/g5.jpeg";
import g6 from "@/assets/g6.jpeg";

const BOOKSY_URL =
  "https://booksy.com/pl-pl/8770_anderos-barbershop-radom_barber-shop_8569_radom";

const services = {
  Strzyżenie: [
    { name: "Strzyżenie męskie", desc: "Klasyczne lub nowoczesne strzyżenie maszynką i nożyczkami.", price: "70 zł" },
    { name: "Strzyżenie maszynką", desc: "Krótkie strzyżenie jedną długością na całej głowie.", price: "50 zł" },
    { name: "Strzyżenie dziecięce", desc: "Dla małych dżentelmenów do 12 roku życia.", price: "60 zł" },
  ],
  Broda: [
    { name: "Modelowanie brody", desc: "Precyzyjne wykończenie maszynką i brzytwą, olejek pielęgnacyjny.", price: "50 zł" },
    { name: "Golenie brzytwą", desc: "Tradycyjne golenie na ciepło z ręcznikiem i balsamem.", price: "60 zł" },
    { name: "Konturowanie brody", desc: "Idealne linie i kształt dopasowany do rysów twarzy.", price: "40 zł" },
  ],
  Pakiety: [
    { name: "Strzyżenie + Broda", desc: "Kompletna metamorfoza – włosy i broda w jednym zabiegu.", price: "110 zł" },
    { name: "Pakiet Premium", desc: "Strzyżenie, broda, peeling, maska i hot towel.", price: "150 zł" },
    { name: "Pakiet Ojciec & Syn", desc: "Wspólna wizyta w klimacie barber experience.", price: "120 zł" },
  ],
  Stylizacja: [
    { name: "Stylizacja włosów", desc: "Mycie, suszenie i ułożenie z kosmetykami premium.", price: "30 zł" },
    { name: "Koloryzacja siwizny", desc: "Subtelne kamuflowanie siwych włosów.", price: "60 zł" },
    { name: "Peeling i maska", desc: "Rytuał pielęgnacyjny twarzy dla zdrowej skóry.", price: "40 zł" },
  ],
} as const;

const categoryIcons = {
  Strzyżenie: Scissors,
  Broda: Wind,
  Pakiety: Crown,
  Stylizacja: Sparkles,
} as const;

const reviews = [
  { name: "Mateusz K.", text: "Najlepszy barber w Radomiu. Atmosfera jak z innego świata, a fryzura zawsze idealna. Polecam każdemu!", rating: 5 },
  { name: "Krzysztof W.", text: "Profesjonalizm na najwyższym poziomie. Chłopaki znają się na rzeczy i traktują klienta po królewsku.", rating: 5 },
  { name: "Damian S.", text: "Wchodzisz zwykłym facetem, wychodzisz dżentelmenem. Hot towel + broda = bezkonkurencyjne doznanie.", rating: 5 },
  { name: "Paweł M.", text: "Klimat lokalu, muzyka, kawa i mistrzowska robota. Anderos to nie barber – to rytuał.", rating: 5 },
  { name: "Bartek L.", text: "Po raz pierwszy mam fryzurę dokładnie taką, jaką sobie wymarzyłem. Brawo!", rating: 5 },
  { name: "Tomasz R.", text: "Lokal premium, ceny uczciwe, a efekt powala. Wracam co miesiąc i nie zamieniam na żaden inny.", rating: 5 },
];

const faqs = [
  { q: "Jak umówić wizytę w Anderos Barberos?", a: "Wizytę umówisz online przez Booksy 24/7 lub telefonicznie pod numerem 576 186 031." },
  { q: "Gdzie znajduje się barber shop?", a: "Nasz salon znajduje się przy ulicy Bolesława Chrobrego 3 w Radomiu, w samym centrum miasta." },
  { q: "Ile trwa wizyta?", a: "Strzyżenie zajmuje około 30–45 minut, a pakiet premium z brodą i pielęgnacją około 75 minut." },
  { q: "Czy obsługujecie dzieci?", a: "Tak, mamy specjalną ofertę strzyżenia dziecięcego dla małych dżentelmenów do 12 roku życia." },
  { q: "Jakie kosmetyki stosujecie?", a: "Pracujemy wyłącznie na produktach premium renomowanych marek barberskich – pielęgnacja na najwyższym poziomie." },
];

const hours = [
  { day: "Poniedziałek", h: "08:00 – 20:00" },
  { day: "Wtorek", h: "08:00 – 20:00" },
  { day: "Środa", h: "08:00 – 20:00" },
  { day: "Czwartek", h: "08:00 – 20:00" },
  { day: "Piątek", h: "08:00 – 20:00" },
  { day: "Sobota", h: "08:00 – 14:00" },
  { day: "Niedziela", h: "Zamknięte" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anderos Barberos Radom — Premium Barber Shop" },
      { name: "description", content: "Anderos Barberos w Radomiu — premium barber shop. Strzyżenie, broda, golenie brzytwą i pielęgnacja w wyjątkowej atmosferze. Rezerwacja online." },
      { property: "og:title", content: "Anderos Barberos Radom — Premium Barber Shop" },
      { property: "og:description", content: "Miejsce, gdzie styl spotyka precyzję. Premium barber shop w sercu Radomia." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BarberShop",
        name: "Anderos Barberos",
        image: "/",
        telephone: "+48576186031",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Bolesława Chrobrego 3",
          addressLocality: "Radom",
          postalCode: "26-600",
          addressCountry: "PL",
        },
        url: "/",
        priceRange: "$$",
        openingHoursSpecification: [
          { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "20:00" },
          { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "14:00" },
        ],
      }),
    }],
  }),
  component: Index,
});

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["O nas", "#o-nas"],
    ["Oferta", "#oferta"],
    ["Galeria", "#galeria"],
    ["Opinie", "#opinie"],
    ["Kontakt", "#kontakt"],
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="w-9 h-9 rounded-full border border-gold/60 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
            <Scissors className="w-4 h-4 text-gold" />
          </span>
          <span className="font-display text-xl tracking-wider uppercase">
            Anderos <span className="text-gold">Barberos</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm uppercase tracking-widest text-muted-foreground">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-gold transition-colors duration-300 relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold hover:after:w-full after:transition-all after:duration-300">
              {label}
            </a>
          ))}
        </nav>
        <a
          href={BOOKSY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-primary-foreground text-xs uppercase tracking-widest font-medium hover:bg-foreground transition-colors duration-300"
        >
          <Calendar className="w-4 h-4" /> Rezerwacja
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          <ChevronDown className={`w-6 h-6 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-(--animate-fade-in)">
          <nav className="flex flex-col px-6 py-6 gap-4 text-sm uppercase tracking-widest">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-gold">{label}</a>
            ))}
            <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" className="mt-2 px-5 py-3 bg-gold text-primary-foreground text-center">
              Zarezerwuj wizytę
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Wnętrze barber shopu Anderos Barberos w Radomiu" width={1920} height={1080} className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-32 pb-20">
        <div className="max-w-3xl animate-(--animate-fade-up)">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">Premium Barber Shop · Radom</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] font-light">
            Anderos
            <br />
            <span className="text-gold-shimmer italic font-medium">Barberos</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl font-light leading-relaxed">
            Miejsce, gdzie styl spotyka precyzję. Tradycyjne rzemiosło barberskie i nowoczesna estetyka w sercu Radomia.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-primary-foreground text-xs uppercase tracking-[0.3em] font-medium hover:bg-foreground transition-all duration-500 shadow-(--shadow-gold)"
            >
              <Calendar className="w-4 h-4" />
              Zarezerwuj wizytę
            </a>
            <a
              href="#oferta"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-border text-foreground text-xs uppercase tracking-[0.3em] font-medium hover:border-gold hover:text-gold transition-all duration-500"
            >
              Zobacz ofertę
            </a>
          </div>
        </div>
      </div>

      <a href="#o-nas" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-gold transition-colors animate-bounce" aria-label="Przewiń">
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-16">
      <div className="flex items-center justify-center gap-3 mb-5">
        <span className="h-px w-8 bg-gold" />
        <span className="text-gold text-xs uppercase tracking-[0.4em]">{eyebrow}</span>
        <span className="h-px w-8 bg-gold" />
      </div>
      <h2 className="font-display text-4xl md:text-6xl font-light">{title}</h2>
      {subtitle && <p className="mt-5 text-muted-foreground leading-relaxed">{subtitle}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="o-nas" className="py-28 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img src={aboutImg} alt="Barber w pracy" loading="lazy" width={1080} height={1920} className="w-full h-[600px] object-cover" />
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-gold text-primary-foreground px-8 py-6 max-w-[220px]">
            <div className="font-display text-4xl">5+</div>
            <div className="text-xs uppercase tracking-widest mt-1">Lat doświadczenia</div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">O nas</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight">
            Rzemiosło, które stało się <span className="italic text-gold">rytuałem</span>
          </h2>
          <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Anderos Barberos to miejsce stworzone z myślą o mężczyznach, którzy cenią jakość, klimat i indywidualne podejście. Każda wizyta to nie tylko strzyżenie – to świadomie zaprojektowane doświadczenie.
            </p>
            <p>
              Łączymy tradycję klasycznego barberingu z nowoczesnym wzornictwem. Pracujemy na sprzęcie i kosmetykach premium, a nasi barberzy posiadają wieloletnie doświadczenie poparte stałym rozwojem.
            </p>
            <p>
              U nas usiądziesz w wygodnym fotelu, napijesz się dobrej kawy i wyjdziesz z poczuciem, że zainwestowałeś w siebie.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["Premium", "Jakość"],
              ["Tradycja", "Brzytwa"],
              ["Komfort", "Atmosfera"],
            ].map(([a, b]) => (
              <div key={a}>
                <div className="font-display text-2xl text-gold">{a}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const [active, setActive] = useState<keyof typeof services>("Strzyżenie");
  return (
    <section id="oferta" className="py-28 md:py-36 bg-card relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          eyebrow="Oferta"
          title={<>Usługi <span className="italic text-gold">premium</span></>}
          subtitle="Pełen zakres usług barberskich – od klasycznego strzyżenia po rytualne golenie brzytwą."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {(Object.keys(services) as Array<keyof typeof services>).map((cat) => {
            const Icon = categoryIcons[cat];
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-[0.3em] border transition-all duration-300 ${
                  isActive
                    ? "bg-gold text-primary-foreground border-gold"
                    : "border-border text-muted-foreground hover:border-gold hover:text-gold"
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat}
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services[active].map((s, i) => (
            <article
              key={s.name}
              className="group relative bg-background border border-border p-8 hover:border-gold transition-all duration-500 animate-(--animate-fade-up)"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="font-display text-2xl leading-tight pr-2">{s.name}</h3>
                <span className="text-gold font-display text-2xl whitespace-nowrap">{s.price}</span>
              </div>
              <div className="h-px hairline w-full my-4" />
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground group-hover:text-gold transition-colors"
              >
                Rezerwuj
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Booking() {
  return (
    <section id="rezerwacja" className="py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <img src={g6} alt="" loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
      </div>
      <div className="relative max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="h-px w-8 bg-gold" />
          <span className="text-gold text-xs uppercase tracking-[0.4em]">Rezerwacja online</span>
          <span className="h-px w-8 bg-gold" />
        </div>
        <h2 className="font-display text-4xl md:text-6xl font-light">
          Twój fotel <span className="italic text-gold">czeka</span>
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          Umów wizytę online 24/7 przez Booksy. Wybierz dogodny termin, usługę i barbera – my zajmiemy się resztą.
        </p>
        <a
          href={BOOKSY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-3 px-10 py-5 bg-gold text-primary-foreground text-xs uppercase tracking-[0.3em] font-medium hover:bg-foreground transition-all duration-500 shadow-(--shadow-gold)"
        >
          <Calendar className="w-5 h-5" />
          Umów wizytę online
        </a>
        <p className="mt-6 text-xs text-muted-foreground uppercase tracking-widest">lub zadzwoń: <a className="text-gold hover:underline" href="tel:+48576186031">576 186 031</a></p>
      </div>
    </section>
  );
}

function Gallery() {
  const images = [g1, g2, g3, g4, g5, g6];
  return (
    <section id="galeria" className="py-28 md:py-36 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          eyebrow="Galeria"
          title={<>Nasze <span className="italic text-gold">dzieło</span></>}
          subtitle="Spójrz na efekty naszej pracy i klimat salonu."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {images.map((src, i) => (
            <a
              key={i}
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden ${i === 0 ? "md:row-span-2 aspect-[3/4] md:aspect-auto" : i === 3 ? "md:col-span-2 aspect-[4/3] md:aspect-[16/9]" : "aspect-square"}`}
            >
              <img
                src={src}
                alt={`Galeria Anderos Barberos ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-xs uppercase tracking-widest">
                Anderos
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="opinie" className="py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          eyebrow="Opinie"
          title={<>Słowa naszych <span className="italic text-gold">klientów</span></>}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <article
              key={i}
              className="relative bg-card border border-border p-8 hover:border-gold transition-all duration-500"
            >
              <div className="absolute -top-4 left-8 text-gold font-display text-6xl leading-none">"</div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed italic">{r.text}</p>
              <div className="h-px hairline w-12 mt-6" />
              <div className="mt-4 font-display text-lg">{r.name}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="py-28 md:py-36 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          eyebrow="Kontakt"
          title={<>Odwiedź <span className="italic text-gold">nas</span></>}
          subtitle="Zapraszamy do naszego salonu w sercu Radomia."
        />
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            <ContactRow icon={MapPin} label="Adres">
              Bolesława Chrobrego 3<br />26-600 Radom
            </ContactRow>
            <ContactRow icon={Phone} label="Telefon">
              <a href="tel:+48576186031" className="hover:text-gold transition-colors">576 186 031</a>
            </ContactRow>
            <ContactRow icon={Clock} label="Godziny otwarcia">
              <div className="grid grid-cols-[1fr_auto] gap-x-8 gap-y-1.5 text-sm">
                {hours.map((h) => (
                  <div key={h.day} className="contents">
                    <span className="text-muted-foreground">{h.day}</span>
                    <span className={h.h === "Zamknięte" ? "text-destructive" : "text-foreground"}>{h.h}</span>
                  </div>
                ))}
              </div>
            </ContactRow>
          </div>
          <div className="h-[500px] border border-border overflow-hidden">
            <iframe
              title="Anderos Barberos – mapa"
              src="https://www.google.com/maps?q=Boleslawa+Chrobrego+3,+26-600+Radom&output=embed"
              className="w-full h-full grayscale contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, children }: { icon: React.ElementType; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-5">
      <div className="shrink-0 w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-gold">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">{label}</div>
        <div className="text-foreground leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-28 md:py-36">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <SectionHeader
          eyebrow="FAQ"
          title={<>Najczęstsze <span className="italic text-gold">pytania</span></>}
        />
        <div className="divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex justify-between items-center gap-6 py-6 text-left group"
                >
                  <span className="font-display text-lg md:text-xl group-hover:text-gold transition-colors">{f.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-12 mb-16">
        <div>
          <div className="font-display text-2xl tracking-wider uppercase">
            Anderos <span className="text-gold">Barberos</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
            Premium barber shop w Radomiu. Miejsce, gdzie styl spotyka precyzję.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="https://www.instagram.com/anderosbarberos/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://www.facebook.com/AnderosBarberos/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-all">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Nawigacja</div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {[["O nas","#o-nas"],["Oferta","#oferta"],["Galeria","#galeria"],["Opinie","#opinie"],["Kontakt","#kontakt"]].map(([l,h]) => (
              <li key={h}><a href={h} className="hover:text-gold transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Kontakt</div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>Bolesława Chrobrego 3</li>
            <li>26-600 Radom</li>
            <li><a href="tel:+48576186031" className="hover:text-gold">576 186 031</a></li>
          </ul>
          <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-gold text-primary-foreground text-xs uppercase tracking-[0.3em] hover:bg-foreground transition-colors">
            <Calendar className="w-4 h-4" /> Rezerwacja
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground uppercase tracking-widest">
        <span>© {new Date().getFullYear()} Anderos Barberos. Wszelkie prawa zastrzeżone.</span>
        <span>Premium Barber Shop · Radom</span>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Booking />
        <Gallery />
        <Reviews />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
