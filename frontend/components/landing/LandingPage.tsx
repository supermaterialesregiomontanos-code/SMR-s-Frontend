import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

// ─── Datos de la empresa ───────────────────────────────────────────
// TODO: confirmar TODOS estos datos con la empresa antes de publicar
const PHONE_DISPLAY = "81 0000 0000";
const PHONE_LINK = "tel:+528100000000";
const WHATSAPP_NUMBER = "528100000000";
const ADDRESS = "Dirección de la sucursal, Monterrey, N.L.";
const BUSINESS_HOURS = "Lunes a sábado"; // TODO: horario exacto
const ORDER_PATH = "/home";

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const WHATSAPP_WHOLESALE_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola, quiero cotizar material por mayoreo.",
)}`;
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

// ─── Contenido ─────────────────────────────────────────────────────
const navLinks = [
  { label: "Materiales", href: "#materiales" },
  { label: "Cómo pedir", href: "#como-pedir" },
  { label: "Entregas", href: "#entregas" },
  { label: "Contacto", href: "#contacto" },
];

const heroPromises = [
  "Pedido en minutos",
  "Precio de mayoreo",
  "Entrega en camión",
];

// TODO: confirmar qué materiales manejan
const marqueeItems = [
  "Block",
  "Cemento",
  "Varilla",
  "Arena",
  "Malla",
  "Alambre recocido",
  "Anillos",
];

const materials = [
  {
    name: "Alambre recocido",
    image: "/images/alambre-recocido.jpeg",
    alt: "Rollo de alambre recocido",
  },
  {
    name: "Malla",
    image: "/images/alambre-maya.jpeg",
    alt: "Rollo de malla para concreto",
  },
  {
    name: "Anillos",
    image: "/images/anillos.jpeg",
    alt: "Anillos de varilla para castillos",
  },
  {
    name: "Arena",
    image: "/images/arena.jpeg",
    alt: "Montón de arena número 4",
  },
  // TODO: reemplazar por fotos reales de block y cemento
  {
    name: "Block",
    image: "/images/supermateriales.jpeg",
    alt: "Logotipo de Supermateriales Regiomontanos",
  },
  {
    name: "Cemento",
    image: "/images/supermateriales.jpeg",
    alt: "Logotipo de Supermateriales Regiomontanos",
  },
];

const orderSteps = [
  {
    title: "Elige",
    description: "Revisa los materiales y escoge lo que necesitas.",
  },
  {
    title: "Ordena",
    description: "Haz tu pedido desde la app, por teléfono o WhatsApp.",
  },
  {
    title: "Recibe",
    description: "Te lo llevamos en camión directo a tu obra.",
  },
];

// TODO: validar textos con la empresa
const deliveryPoints: { icon: IconName; title: string; description: string }[] =
  [
    {
      icon: "truck",
      title: "Camiones propios",
      description: "Llevamos tu pedido completo hasta tu obra.",
    },
    {
      icon: "shield",
      title: "Material cuidado",
      description:
        "Cargamos y transportamos tu material para que llegue en buen estado.",
    },
    {
      icon: "clock",
      title: "Puntualidad",
      description: "Llegamos en el horario que acordamos contigo.",
    },
  ];

// TODO: confirmar zona de entrega real
const deliveryZones = [
  "Monterrey",
  "San Nicolás",
  "Guadalupe",
  "Apodaca",
  "Escobedo",
  "San Pedro",
  "Santa Catarina",
];

// ─── Íconos ────────────────────────────────────────────────────────
type IconName =
  | "truck"
  | "check"
  | "clock"
  | "chat"
  | "phone"
  | "pin"
  | "tag"
  | "shield"
  | "arrow";

const iconPaths: Record<IconName, ReactNode> = {
  truck: (
    <>
      <path d="M3 6h11v9H3z" />
      <path d="M14 9h4l3 3v3h-7z" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </>
  ),
  check: <path d="M5 12l4 4L19 7" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  chat: <path d="M4 5h16v11H9l-5 4z" />,
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z" />
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  tag: (
    <>
      <path d="M3 12V4h8l10 10-8 8z" />
      <circle cx="7.5" cy="7.5" r="1.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
};

function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}>
      {iconPaths[name]}
    </svg>
  );
}

// ─── Piezas reutilizables ──────────────────────────────────────────
type OrderButtonProps = {
  variant?: "primary" | "light";
  size?: "md" | "lg";
  className?: string;
};

const orderButtonVariants = {
  primary:
    "bg-brand-primary text-white shadow-lg shadow-brand-primary/30 hover:bg-brand-primary-dark",
  light: "bg-white text-brand-primary-dark shadow-lg hover:bg-orange-50",
} as const;

const orderButtonSizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
} as const;

function OrderButton({
  variant = "primary",
  size = "md",
  className = "",
}: OrderButtonProps) {
  return (
    <Link
      href={ORDER_PATH}
      className={`group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg font-semibold transition duration-200 hover:-translate-y-0.5 ${orderButtonVariants[variant]} ${orderButtonSizes[size]} ${className}`}>
      Ordenar
      <Icon
        name="arrow"
        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
      />
    </Link>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`reveal max-w-2xl ${alignClasses}`}>
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-lg text-gray-600">{description}</p>
      )}
    </div>
  );
}

// ─── Página ────────────────────────────────────────────────────────
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white pb-20 text-gray-900 md:pb-0">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-gray-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link
            href="/"
            className="text-base font-extrabold leading-tight tracking-tight md:text-xl">
            Super<span className="text-brand-primary">materiales</span>{" "}
            Regiomontanos
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-gray-600 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-brand-primary">
                {link.label}
              </a>
            ))}
          </nav>
          <OrderButton />
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gray-950 text-white">
          <div
            aria-hidden="true"
            className="hero-grid pointer-events-none absolute inset-0"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-brand-primary/30 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-orange-400/10 blur-3xl"
          />

          <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-4 pb-24 pt-16 md:grid-cols-2 md:pb-28 md:pt-24">
            <div>
              <span className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-orange-300">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                Entrega a domicilio en Monterrey
              </span>
              <h1 className="mt-6 animate-fade-up text-4xl font-extrabold leading-[1.05] tracking-tight [animation-delay:100ms] sm:text-5xl md:text-6xl">
                Tu material de construcción,{" "}
                <span className="bg-linear-to-r from-orange-400 to-brand-primary bg-clip-text text-transparent">
                  directo a tu obra
                </span>
              </h1>
              <p className="mt-6 max-w-xl animate-fade-up text-lg text-gray-300 [animation-delay:200ms]">
                Block, cemento, varilla y más. Haz tu pedido en minutos y
                nosotros lo llevamos en camión hasta donde lo necesitas.
              </p>
              <div className="mt-8 flex animate-fade-up flex-col gap-3 [animation-delay:300ms] sm:flex-row">
                <OrderButton size="lg" />
                <a
                  href={WHATSAPP_WHOLESALE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 text-base font-semibold transition hover:bg-white/10">
                  <Icon name="chat" />
                  Cotizar por WhatsApp
                </a>
              </div>
              <ul className="mt-10 grid animate-fade-up gap-3 text-sm text-gray-300 [animation-delay:400ms] sm:grid-cols-3">
                {heroPromises.map((promise) => (
                  <li key={promise} className="flex items-center gap-2">
                    <Icon
                      name="check"
                      className="h-5 w-5 shrink-0 text-brand-primary"
                    />
                    {promise}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative animate-fade-up [animation-delay:250ms]">
              <div className="relative aspect-[4/3] animate-float overflow-hidden rounded-3xl bg-white shadow-2xl shadow-brand-primary/20 ring-1 ring-white/10">
                {/* TODO: reemplazar por foto real de la bodega o de un camión cargado */}
                <Image
                  src="/images/supermateriales.jpeg"
                  alt="Logotipo de Supermateriales Regiomontanos"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-contain p-8"
                />
              </div>
              <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 text-gray-900 shadow-xl sm:-left-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-brand-primary">
                  <Icon name="truck" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Entrega con camión</p>
                  <p className="text-xs text-gray-500">
                    Monterrey y área metropolitana
                  </p>
                </div>
              </div>
              <div className="absolute -top-5 right-4 hidden items-center gap-2 rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white shadow-lg sm:flex">
                <Icon name="tag" className="h-4 w-4" />
                Precio de mayoreo
              </div>
            </div>
          </div>
        </section>

        {/* Franja de materiales en movimiento (decorativa) */}
        <div
          aria-hidden="true"
          className="overflow-hidden bg-brand-primary py-3 text-white">
          <div className="flex w-max animate-marquee">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="flex items-center gap-5 px-5 text-sm font-semibold uppercase tracking-widest">
                {item}
                <span className="text-orange-200">●</span>
              </span>
            ))}
          </div>
        </div>

        {/* Materiales */}
        <section id="materiales" className="scroll-mt-20 bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
            <SectionHeading
              eyebrow="Catálogo"
              title="Todo para tu obra en un solo lugar"
              description="Elige tu material y haz tu pedido. Nosotros nos encargamos del resto."
            />

            <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3">
              {materials.map((material) => (
                <li key={material.name} className="reveal">
                  <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-brand-primary/40">
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      <Image
                        src={material.image}
                        alt={material.alt}
                        fill
                        sizes="(min-width: 768px) 33vw, 50vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="p-3 text-sm font-semibold sm:p-4 sm:text-base">
                      {material.name}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Mayoreo */}
        <section className="bg-gray-50 px-4 pb-20 md:pb-28">
          <div className="reveal relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gray-950 px-6 py-12 text-white md:px-12 md:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-primary/40 blur-3xl"
            />
            <div className="relative grid items-center gap-8 md:grid-cols-[1.5fr_1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-orange-300">
                  Mayoreo
                </p>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
                  ¿Obra grande? Te damos precio especial
                </h2>
                <p className="mt-3 text-lg text-gray-300">
                  En pedidos de volumen (por ejemplo, 50 blocks o más) te
                  cotizamos un precio especial. Mándanos tu lista por WhatsApp.
                </p>
              </div>
              <div className="flex md:justify-end">
                <a
                  href={WHATSAPP_WHOLESALE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-green-500/30 transition hover:-translate-y-0.5 hover:bg-green-600 sm:w-auto">
                  <Icon name="chat" />
                  Cotizar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Cómo pedir */}
        <section
          id="como-pedir"
          className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 md:py-28">
          <SectionHeading
            eyebrow="Así de fácil"
            title="Pide en 3 pasos"
            align="center"
          />

          <div className="relative mt-12">
            <div
              aria-hidden="true"
              className="absolute left-[16%] right-[16%] top-7 hidden h-px bg-linear-to-r from-transparent via-orange-300 to-transparent md:block"
            />
            <ol className="relative grid gap-10 md:grid-cols-3">
              {orderSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="reveal flex flex-col items-center text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-orange-400 to-brand-primary text-xl font-bold text-white shadow-lg shadow-brand-primary/30">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 max-w-xs text-gray-600">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="reveal mt-12 flex justify-center">
            <OrderButton size="lg" />
          </div>
        </section>

        {/* Entregas */}
        <section id="entregas" className="scroll-mt-20 bg-gray-50">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:py-28">
            <div className="reveal relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="/images/puntualidad.jpeg"
                  alt="Bultos de cemento cargados en camión para entrega"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Entregas"
                title="Tu material llega completo y a tiempo"
              />
              <ul className="mt-8 space-y-5">
                {deliveryPoints.map((point) => (
                  <li key={point.title} className="reveal flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-brand-primary">
                      <Icon name={point.icon} />
                    </span>
                    <div>
                      <p className="font-semibold">{point.title}</p>
                      <p className="text-gray-600">{point.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="reveal mt-8">
                <p className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <Icon name="pin" className="h-4 w-4 text-brand-primary" />
                  Zona de entrega
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {deliveryZones.map((zone) => (
                    <li
                      key={zone}
                      className="rounded-full bg-white px-3 py-1 text-sm text-gray-700 ring-1 ring-gray-200">
                      {zone}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Atención al cliente */}
        <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <SectionHeading
            eyebrow="Atención al cliente"
            title="Aquí hay personas para ayudarte"
            description="¿Tienes dudas o prefieres pedir sin la app? Escríbenos o llámanos."
            align="center"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <a
              href={PHONE_LINK}
              className="reveal group rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:border-brand-primary hover:shadow-lg">
              <Icon name="phone" className="h-6 w-6 text-brand-primary" />
              <p className="mt-4 text-sm text-gray-500">Llámanos</p>
              <p className="text-xl font-bold">{PHONE_DISPLAY}</p>
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:border-green-500 hover:shadow-lg">
              <Icon name="chat" className="h-6 w-6 text-green-500" />
              <p className="mt-4 text-sm text-gray-500">WhatsApp</p>
              <p className="text-xl font-bold">Escríbenos</p>
            </a>
            <div className="reveal rounded-2xl border border-gray-200 p-6">
              <Icon name="clock" className="h-6 w-6 text-brand-primary" />
              <p className="mt-4 text-sm text-gray-500">Horario</p>
              <p className="text-xl font-bold">{BUSINESS_HOURS}</p>
            </div>
          </div>
        </section>

        {/* Cierre */}
        <section
          id="contacto"
          className="relative scroll-mt-20 overflow-hidden bg-linear-to-br from-brand-primary to-brand-primary-dark text-white">
          <div
            aria-hidden="true"
            className="hero-grid pointer-events-none absolute inset-0"
          />
          <div className="reveal relative mx-auto max-w-6xl px-4 py-20 md:py-28">
            <h2 className="max-w-2xl text-4xl font-extrabold tracking-tight md:text-5xl">
              ¿Listo para empezar tu obra?
            </h2>
            <p className="mt-4 max-w-xl text-lg text-orange-100">
              Haz tu pedido hoy y recíbelo donde lo necesitas.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <OrderButton variant="light" size="lg" />
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-7 py-3.5 text-base font-semibold transition hover:bg-white/10">
                <Icon name="chat" />
                WhatsApp
              </a>
            </div>

            <dl className="mt-14 grid gap-8 border-t border-white/20 pt-10 sm:grid-cols-3">
              <div>
                <dt className="text-sm text-orange-100">Teléfono</dt>
                <dd className="mt-1 text-lg font-semibold">
                  <a href={PHONE_LINK}>{PHONE_DISPLAY}</a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-orange-100">Ubicación</dt>
                <dd className="mt-1 text-lg font-semibold">
                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-4 hover:underline">
                    {ADDRESS}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-orange-100">Zona de entrega</dt>
                <dd className="mt-1 text-lg font-semibold">
                  Monterrey y área metropolitana
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="bg-gray-950 py-8 text-sm text-gray-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <p>© 2026 Supermateriales Regiomontanos</p>
          <nav className="flex flex-wrap justify-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>

      {/* Barra fija en celular: siempre a un toque de ordenar */}
      <div className="fixed inset-x-0 bottom-0 z-50 flex gap-3 border-t border-gray-200 bg-white/95 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur md:hidden">
        <OrderButton className="flex-1" />
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Escríbenos por WhatsApp"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-500 px-5 text-sm font-semibold text-white">
          <Icon name="chat" />
          WhatsApp
        </a>
      </div>

      {/* WhatsApp flotante en escritorio */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp"
        className="fixed bottom-6 right-6 z-50 hidden items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/30 transition hover:-translate-y-0.5 hover:bg-green-600 md:flex">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
        </span>
        WhatsApp
      </a>
    </div>
  );
}
