import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FunXperience Prague — מסיבת הרווקים המושלמת בפראג" },
      {
        name: "description",
        content:
          "ליווי VIP בעברית למסיבת רווקים בפראג: מלונות יוקרה, מסעדות כשרות, חיי לילה, הסעות והכל בארגון מלא.",
      },
      { property: "og:title", content: "FunXperience Prague — מסיבת הרווקים המושלמת" },
      {
        property: "og:description",
        content:
          "מלונות יוקרה, מסעדות כשרות, מועדונים, הסעות VIP וליווי בעברית. החבילה המושלמת לרווקים בפראג.",
      },
      {
        property: "og:image",
        content: "/images/prague_night_bg.png",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700;900&family=Heebo:wght@300;400;500;700;900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined",
      },
    ],
    htmlAttrs: { lang: "he", dir: "rtl", class: "dark" },
  }),
  component: LandingPage,
});

const benefits = [
  {
    icon: "support_agent",
    title: "תמיכה בעברית 24/7",
    desc: "מענה מיידי וליווי אישי בשפה שלך, לכל צורך או בקשה בפראג.",
    color: "primary",
  },
  {
    icon: "restaurant",
    title: "מסעדות כשרות",
    desc: "גישה למסעדות הכי טובות בעיר עם פיקוח כשרות מלא וטעמים מנצחים.",
    color: "secondary",
  },
  {
    icon: "airport_shuttle",
    title: "הסעות VIP",
    desc: "רכבי יוקרה שיחכו לכם מהנחיתה ועד ההמראה, בסטייל מקסימלי.",
    color: "primary",
  },
  {
    icon: "nightlife",
    title: "מועדונים נבחרים",
    desc: "כניסה חלקה למקומות הכי חמים בעיר, בלי תורים ובלי הפתעות.",
    color: "secondary",
  },
];

const scenarios = [
  {
    tag: "PREMIUM",
    tagColor: "text-primary",
    title: "Luxury Bachelor",
    desc: "הכי טוב שיש לפראג להציע. סוויטות נשיאותיות, שולחנות VIP ופינוק אינסופי.",
    img: "/images/scenario_luxury.png",
  },
  {
    tag: "TRADITION",
    tagColor: "text-secondary",
    title: "Kosher Bachelor",
    desc: "חוגגים בלי להתפשר. מסעדות כשרות מהשורה הראשונה, בית כנסת קרוב וליווי שומר שבת.",
    img: "/images/scenario_kosher.png",
  },
  {
    tag: "ADRENALINE",
    tagColor: "text-error",
    title: "Extreme Bachelor",
    desc: "לחובבי האקשן. נהיגת שטח, ירי במטווחים מקצועיים וצניחה חופשית מעל העיר.",
    img: "/images/scenario_extreme.png",
  },
  {
    tag: "NO LIMITS",
    tagColor: "text-primary",
    title: "VIP Night",
    desc: "לילה שלא נגמר. כניסות VIP למועדונים, ברים סודיים והסעות לימוזינה כל הלילה.",
    img: "/images/scenario_vip_night.png",
  },
];

const reviews = [
  {
    quote: '"היה חלום, דאגו לנו לכל פינה!"',
    author: "עידן וכל החברה מרעננה",
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop",
  },
  {
    quote: '"לא האמנו שיש רמה כזו של שירות"',
    author: "יוסי, חתן יוני 2023",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  },
  {
    quote: '"פראג מעולם לא נראתה כל כך טוב"',
    author: "איתי, קבוצת יולי",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
  },
  {
    quote: '"פשוט וואו. חוויה של פעם בחיים"',
    author: "דניאל והחברים",
    img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=600&auto=format&fit=crop",
  },
];

const instagram = [
  "/images/insta_1.png",
  "/images/insta_2.png",
  "/images/insta_3.png",
  "/images/insta_4.png",
];

function Icon({ name, className = "" }: { name: string; className?: string }) {
  return <span className={`material-symbols-outlined ${className}`}>{name}</span>;
}

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <svg
        className="w-9 h-9 text-primary drop-shadow-[0_0_8px_var(--primary)]"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.88 0.09 220)" />
            <stop offset="100%" stopColor="oklch(0.82 0.12 80)" />
          </linearGradient>
          <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <path
          d="M50 8 L88 28 V72 L50 92 L12 72 V28 Z"
          stroke="url(#logoGrad)"
          strokeWidth="4"
          fill="none"
        />
        <path
          d="M36 32 H64 V42 H48 V52 H60 V62 H48 V76 H36 Z"
          fill="url(#logoGrad)"
          filter="url(#logoGlow)"
        />
        <path
          d="M54 32 L69 52 L84 32"
          stroke="url(#logoGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#logoGlow)"
        />
        <path
          d="M69 52 L84 76"
          stroke="url(#logoGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#logoGlow)"
        />
        <path
          d="M54 76 L65 58"
          stroke="url(#logoGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#logoGlow)"
        />
      </svg>
      <span className="font-display-lg text-xl font-black tracking-tight text-white select-none">
        Fun<span className="text-primary font-black">X</span>perience
      </span>
    </div>
  );
}

function AmbientParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const dustCount = 45;
    const orbCount = 10;

    interface Particle {
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      alpha: number;
      alphaSpeed: number;
      maxAlpha: number;
      color: string;
      type: "dust" | "orb";
    }

    const particles: Particle[] = [];

    for (let i = 0; i < dustCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.15,
        vy: -Math.random() * 0.25 - 0.08,
        alpha: Math.random(),
        alphaSpeed: Math.random() * 0.004 + 0.001,
        maxAlpha: Math.random() * 0.5 + 0.15,
        color: "237, 192, 113",
        type: "dust",
      });
    }

    for (let i = 0; i < orbCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 50 + 25,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.08,
        alpha: Math.random() * 0.25,
        alphaSpeed: Math.random() * 0.0015 + 0.0005,
        maxAlpha: Math.random() * 0.35 + 0.08,
        color: Math.random() > 0.5 ? "140, 200, 255" : "237, 192, 113",
        type: "orb",
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += p.alphaSpeed;

        if (p.alpha > p.maxAlpha || p.alpha < 0) {
          p.alphaSpeed = -p.alphaSpeed;
        }

        if (p.x < -p.size) p.x = width + p.size;
        if (p.x > width + p.size) p.x = -p.size;
        if (p.y < -p.size) p.y = height + p.size;
        if (p.y > height + p.size) p.y = -p.size;

        ctx.beginPath();
        if (p.type === "dust") {
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color}, ${Math.max(0, p.alpha)})`;
          ctx.fill();
        } else {
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
          grad.addColorStop(0, `rgba(${p.color}, ${Math.max(0, p.alpha)})`);
          grad.addColorStop(1, `rgba(${p.color}, 0)`);
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles-canvas" />;
}

function LandingPage() {
  const [guests, setGuests] = useState(5);
  const [tier, setTier] = useState<"Standard" | "Premium" | "Ultra VIP">("Standard");
  const [activity, setActivity] = useState("חיי לילה ומועדונים");
  const [kosher, setKosher] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      setMousePos({ x, y });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    const timer = setTimeout(() => {
      setRevealed(true);
    }, 150);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const pricePerPerson = { Standard: 750, Premium: 1250, "Ultra VIP": 1950 }[tier];

  return (
    <div className="overflow-x-hidden bg-background text-foreground selection:bg-primary selection:text-on-primary">
      <header className="fixed top-0 inset-x-0 z-50 px-4 md:px-8">
        <div className="max-w-7xl mx-auto py-3 md:py-4 px-6 flex items-center justify-between bg-black/85 backdrop-blur-md border border-white/10 rounded-full mt-4 shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
          <Logo />
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#packages" className="hover:text-primary transition-colors duration-200">
              חבילות
            </a>
            <a href="#configurator" className="hover:text-primary transition-colors duration-200">
              תכנון
            </a>
            <a href="#reviews" className="hover:text-primary transition-colors duration-200">
              המלצות
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/420777000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-on-primary font-bold py-2 px-5 rounded-full text-sm hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_0_15px_rgba(140,200,255,0.3)]"
            >
              צרו קשר
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="open menu"
            >
              <Icon name="menu" className="text-2xl" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-md transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`fixed inset-y-0 left-0 w-4/5 max-w-xs bg-surface p-6 shadow-2xl transition-transform duration-300 flex flex-col justify-between ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between mb-8">
              <Logo />
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 text-foreground hover:text-primary transition-colors"
                aria-label="close menu"
              >
                <Icon name="close" className="text-2xl" />
              </button>
            </div>
            <nav className="flex flex-col gap-6 text-lg font-medium">
              <a
                href="#packages"
                onClick={() => setMenuOpen(false)}
                className="hover:text-primary transition-colors"
              >
                חבילות
              </a>
              <a
                href="#configurator"
                onClick={() => setMenuOpen(false)}
                className="hover:text-primary transition-colors"
              >
                תכנון
              </a>
              <a
                href="#reviews"
                onClick={() => setMenuOpen(false)}
                className="hover:text-primary transition-colors"
              >
                המלצות
              </a>
            </nav>
          </div>
          <a
            href="https://wa.me/420777000000"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="w-full text-center bg-primary text-on-primary font-bold py-3.5 rounded-full text-base hover:opacity-90 transition shadow-lg"
          >
            צרו קשר
          </a>
        </div>
      </div>

      <main>
        <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
          <div
            className="absolute inset-0 select-none pointer-events-none"
            style={{
              transform: `translate3d(${mousePos.x * -12}px, ${mousePos.y * -12 + scrollY * 0.12}px, 0) scale(1.08)`,
              transition: "transform 0.15s cubic-bezier(0.25, 0.8, 0.25, 1)",
            }}
          >
            <img
              src="/images/prague_night_bg.png"
              alt="Prague Night Castle"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div
            className="absolute inset-0 select-none pointer-events-none mix-blend-screen opacity-50"
            style={{
              transform: `translate3d(${mousePos.x * -30}px, ${mousePos.y * -30 + scrollY * 0.3}px, 0) scale(1.15)`,
              transition: "transform 0.15s cubic-bezier(0.25, 0.8, 0.25, 1)",
            }}
          >
            <img
              src="/images/prague_bokeh_mid.png"
              alt="Prague Bokeh Lights"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="relative z-20 w-full max-w-7xl mx-auto px-container-margin text-center"
            style={{
              transform: `translate3d(0, ${scrollY * 0.45}px, 0)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <h1
              className={`font-display-lg text-4xl sm:text-5xl md:text-display-lg mb-stack-md leading-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] transform transition-all duration-1000 delay-300 ${
                revealed
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-6 scale-95"
              }`}
            >
              מסיבת הרווקים{" "}
              <span className="text-primary font-black drop-shadow-[0_0_15px_rgba(140,200,255,0.4)]">
                המושלמת
              </span>{" "}
              בפראג
            </h1>
            <p
              className={`font-body-lg mb-stack-lg max-w-2xl mx-auto text-on-surface-variant drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transform transition-all duration-1000 delay-500 ${
                revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              אנחנו דואגים להכול: מלונות יוקרה, מסעדות כשרות, חיי לילה פרועים, הסעות VIP וליווי אישי
              בעברית לאורך כל הדרך.
            </p>
            <div
              className={`flex flex-col sm:flex-row-reverse items-center justify-center gap-stack-md transform transition-all duration-1000 delay-700 ${
                revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <a
                href="#configurator"
                className="w-full sm:w-auto bg-secondary text-on-secondary font-bold py-4 px-10 rounded-full text-lg neon-glow-secondary hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(237,192,113,0.3)]"
              >
                תכננו את החוויה שלכם
              </a>
              <a
                href="https://wa.me/420777000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto glass-card text-on-surface font-bold py-4 px-10 rounded-full text-lg hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Icon name="chat" />
                דברו איתנו ב-WhatsApp
              </a>
            </div>
          </div>

          <div
            className="absolute inset-x-0 bottom-0 h-[28vh] sm:h-[38vh] md:h-[45vh] z-30 pointer-events-none overflow-hidden"
            style={{
              transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * 15 + scrollY * 0.55}px, 0) scale(1.05)`,
              transition: "transform 0.15s cubic-bezier(0.25, 0.8, 0.25, 1)",
            }}
          >
            <img
              src="/images/prague_friends_front.png"
              alt="Friends Foreground Parallax"
              className="w-full h-full object-cover object-center"
              style={{
                maskImage: "linear-gradient(to top, black 25%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to top, black 25%, transparent 100%)",
              }}
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-surface to-transparent z-40" />

          <div
            className={`absolute inset-0 bg-black z-50 transition-all duration-[1400ms] cubic-bezier(0.25, 1, 0.25, 1) pointer-events-none ${
              revealed ? "opacity-0 scale-105 blur-[8px]" : "opacity-100 scale-100 blur-0"
            }`}
          />

          <AmbientParticles />
        </section>

        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-container-margin">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="glow-border glass-card p-8 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300 h-full"
                >
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-all duration-300 ${
                      b.color === "primary"
                        ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-on-primary group-hover:shadow-[0_0_15px_var(--primary)]"
                        : "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-on-secondary group-hover:shadow-[0_0_15px_var(--secondary)]"
                    }`}
                  >
                    <Icon name={b.icon} className="text-3xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-on-surface-variant">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-background relative" id="configurator">
          <div className="max-w-7xl mx-auto px-container-margin">
            <div className="flex flex-col lg:flex-row-reverse gap-12">
              <div className="lg:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">בנה את החבילה שלך</h2>
                <p className="text-on-surface-variant text-sm mb-8">
                  התאם אישית את מסיבת הרווקים שלך בפראג וקבל הערכת מחיר מיידית
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-4 bg-white/5 p-6 rounded-2xl border border-white/5">
                    <label className="block text-sm font-semibold flex justify-between">
                      <span>כמות משתתפים</span>
                      <span className="text-primary font-bold text-base">{guests} חוגגים</span>
                    </label>
                    <input
                      type="range"
                      min={1}
                      max={20}
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full accent-primary h-2 bg-surface-variant rounded-lg cursor-pointer"
                    />
                  </div>
                  <div className="space-y-4 bg-white/5 p-6 rounded-2xl border border-white/5">
                    <label className="block text-sm font-semibold">רמת תקציב (לנפש)</label>
                    <div className="flex gap-2">
                      {(["Standard", "Premium", "Ultra VIP"] as const).map((t) => (
                        <button
                          key={t}
                          onClick={() => setTier(t)}
                          className={`flex-1 py-3 text-sm font-bold rounded-xl border transition-all duration-200 ${
                            tier === t
                              ? "bg-primary/10 border-primary text-primary shadow-[0_0_10px_rgba(140,200,255,0.15)]"
                              : "bg-transparent border-white/10 hover:border-white/30 text-on-surface-variant"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4 bg-white/5 p-6 rounded-2xl border border-white/5">
                    <label className="block text-sm font-semibold">סוג פעילות מרכזית</label>
                    <select
                      value={activity}
                      onChange={(e) => setActivity(e.target.value)}
                      className="w-full bg-surface-variant border border-white/10 rounded-xl p-3.5 text-sm font-medium focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    >
                      <option>חיי לילה ומועדונים</option>
                      <option>אקסטרים וירי</option>
                      <option>סיורי בירה וקולינריה</option>
                      <option>רוגע וספא</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/5">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">מעוניין באוכל כשר?</span>
                      <span className="text-xs text-on-surface-variant">
                        מסעדות וקייטרינג כשרים בפקוח
                      </span>
                    </div>
                    <button
                      onClick={() => setKosher(!kosher)}
                      className={`relative w-12 h-7 rounded-full transition-colors duration-200 ${
                        kosher ? "bg-primary" : "bg-white/10"
                      }`}
                      aria-label="toggle kosher"
                    >
                      <span
                        className={`absolute top-[3px] h-5 w-5 bg-white rounded-full transition-all duration-200 ${
                          kosher ? "right-[24px]" : "right-[3px]"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3">
                <div className="glass-card p-8 rounded-2xl border-2 border-primary/20 sticky top-28 shadow-xl">
                  <h3 className="text-xl font-bold mb-6 text-primary">סיכום החוויה</h3>
                  <ul className="space-y-4 mb-8 text-sm">
                    <li className="flex justify-between border-b border-white/5 pb-3">
                      <span className="text-on-surface-variant">משתתפים</span>
                      <span className="font-bold">{guests} חוגגים</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-3">
                      <span className="text-on-surface-variant">לינה</span>
                      <span className="font-bold">
                        {tier === "Ultra VIP"
                          ? "סוויטה נשיאותית"
                          : tier === "Premium"
                            ? "מלון בוטיק 5*"
                            : "מלון 5 כוכבים"}
                      </span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-3">
                      <span className="text-on-surface-variant">תחבורה</span>
                      <span className="font-bold">
                        {tier === "Ultra VIP" ? "לימוזינה צמודה" : "מרצדס V-Class צמוד"}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface-variant">כשרות</span>
                      <span className={`font-bold ${kosher ? "text-primary" : "text-secondary"}`}>
                        {kosher ? "כלול" : "לא נבחר"}
                      </span>
                    </li>
                  </ul>
                  <div className="text-center bg-white/5 p-4 rounded-xl mb-6">
                    <span className="text-on-surface-variant block text-xs mb-1">מחיר משוער</span>
                    <span className="text-4xl font-extrabold text-white">
                      €{pricePerPerson}{" "}
                      <span className="text-xs font-normal text-on-surface-variant">לאדם</span>
                    </span>
                  </div>
                  <a
                    href={`https://wa.me/420777000000?text=${encodeURIComponent(
                      `היי, אנחנו חבורה של ${guests} אנשים. מעוניינים בחבילת ${tier} עם פעילות ${activity}${
                        kosher ? " וכשרות" : ""
                      }. נשמח לפרטים!`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center w-full bg-primary text-on-primary py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_4px_15px_rgba(140,200,255,0.2)]"
                  >
                    הזמינו מקום עכשיו
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-background" id="packages">
          <div className="max-w-7xl mx-auto px-container-margin">
            <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4 italic">
              איך נראית החגיגה שלכם?
            </h2>
            <p className="text-center text-on-surface-variant text-sm md:text-base mb-16 max-w-xl mx-auto">
              בחר את הסגנון המושלם עבור הקבוצה שלך. אנחנו נתאים את כל הפרטים לרמה הגבוהה ביותר.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {scenarios.map((s) => (
                <div
                  key={s.title}
                  className="relative group h-[400px] md:h-[480px] rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent p-8 md:p-10 flex flex-col justify-end">
                    <span
                      className={`${s.tagColor} font-label-caps mb-2 tracking-widest text-xs font-bold`}
                    >
                      {s.tag}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">{s.title}</h3>
                    <p className="text-sm md:text-base text-on-surface-variant max-w-md leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-background relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-container-margin relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-1">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">מרכז החגיגה</h2>
                <p className="text-base text-on-surface-variant mb-8 leading-relaxed">
                  כל המוקדים החשובים כבר מסומנים עבורכם. מהמלונות הטובים ביותר ועד למסעדות הכשרות
                  ומועדוני הלילה המפורסמים.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-5 glass-card rounded-2xl border-r-4 border-primary">
                    <Icon name="nightlife" className="text-primary text-2xl" />
                    <div>
                      <h4 className="font-bold text-sm">מועדון Karlovy Lazne</h4>
                      <p className="text-xs text-on-surface-variant mt-1">
                        המועדון הגדול ביותר במרכז אירופה
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-5 glass-card rounded-2xl border-r-4 border-secondary">
                    <Icon name="restaurant" className="text-secondary text-2xl" />
                    <div>
                      <h4 className="font-bold text-sm">מסעדת קינג סולומון</h4>
                      <p className="text-xs text-on-surface-variant mt-1">
                        הכשרות הטובה ביותר ברובע היהודי
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 relative h-[350px] md:h-[480px] rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                <img
                  className="w-full h-full object-cover opacity-70"
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1600&auto=format&fit=crop"
                  alt="Prague map texture background"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-primary rounded-full animate-ping opacity-75" />
                <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-primary rounded-full shadow-[0_0_12px_#8cc8ff]" />
                <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-secondary rounded-full animate-ping opacity-75" />
                <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-secondary rounded-full shadow-[0_0_12px_#edc071]" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-background overflow-hidden" id="reviews">
          <div className="max-w-7xl mx-auto px-container-margin">
            <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4">
              מה החוגגים אומרים
            </h2>
            <p className="text-center text-on-surface-variant text-sm mb-16 max-w-sm mx-auto">
              החוויות האמיתיות של החוגגים שלנו בפראג
            </p>
            <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x scroll-smooth">
              {reviews.map((r) => (
                <div
                  key={r.author}
                  className="min-w-[280px] sm:min-w-[340px] aspect-[9/15] glass-card rounded-3xl relative overflow-hidden snap-center group hover:scale-[1.02] transition-transform duration-300"
                >
                  <img
                    className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                    src={r.img}
                    alt={r.author}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon
                      name="play_circle"
                      className="text-6xl text-white/50 group-hover:text-primary group-hover:scale-110 transition-all duration-300 cursor-pointer"
                    />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <p className="font-bold text-base md:text-lg mb-2 text-white leading-snug">
                      {r.quote}
                    </p>
                    <p className="text-xs md:text-sm text-primary font-semibold">{r.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-container-margin">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold">עקבו אחרינו באינסטגרם</h2>
                <p className="text-xs text-on-surface-variant mt-1">רגעים בלתי נשכחים מהשטח</p>
              </div>
              <a
                className="text-primary hover:underline text-sm font-semibold flex items-center gap-1"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>@FunXperience_Prague</span>
                <Icon name="arrow_outward" className="text-sm" />
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {instagram.map((src, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-2xl overflow-hidden group shadow-lg border border-white/5"
                >
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={src}
                    alt={`Instagram moment ${i + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-container-margin grid grid-cols-1 md:grid-cols-3 gap-12 text-right">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              חוויות בלתי נשכחות לחתנים ולחברים — בלב פראג, בעברית, בשירות VIP.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-base text-white">קישורים</h4>
            <ul className="space-y-3 text-sm text-on-surface-variant">
              <li>
                <a href="#packages" className="hover:text-primary transition-colors">
                  חבילות
                </a>
              </li>
              <li>
                <a href="#configurator" className="hover:text-primary transition-colors">
                  בנה חבילה
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-primary transition-colors">
                  המלצות
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-base text-white">צרו קשר</h4>
            <ul className="space-y-3 text-sm text-on-surface-variant">
              <li>WhatsApp: +420 777 000 000</li>
              <li>info@funxperience.cz</li>
              <li>Prague, Czech Republic</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-container-margin border-t border-white/5 mt-12 pt-8 text-center text-xs text-on-surface-variant">
          © {new Date().getFullYear()} FunXperience Prague. כל הזכויות שמורות.
        </div>
      </footer>
    </div>
  );
}
