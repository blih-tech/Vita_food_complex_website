import { useTranslations } from "next-intl";
import Image from "next/image";

const STATIC_IMAGES = [
  "/assets/about/baking-biscuits.png",
  "/assets/products/product-display.png",
  "/assets/hero/family-true.png",
];

const ACCENTS = ["#23B349", "#2F2F2F", "#FFEC19"];

export default function InnovationDiverseSection({
  content,
  locale,
}: {
  content?: any;
  locale?: string;
}) {
  const t = useTranslations("Innovation.diverse");
  const lang = (locale || "en") as "en" | "am";
  const c = content?.[lang];

  const title = c?.title || t("title");
  const description = c?.description || t("description");

  const cards = c?.cards || [
    {
      id: "products",
      title: t("cards.products.title"),
      desc: t("cards.products.desc"),
      cta: t("cards.products.cta"),
    },
    {
      id: "packaging",
      title: t("cards.packaging.title"),
      desc: t("cards.packaging.desc"),
      cta: t("cards.packaging.cta"),
    },
    {
      id: "experience",
      title: t("cards.experience.title"),
      desc: t("cards.experience.desc"),
      cta: t("cards.experience.cta"),
    },
  ];

  const displayCards = cards.map((card: any, index: number) => ({
    ...card,
    image: STATIC_IMAGES[index % STATIC_IMAGES.length],
    accent: ACCENTS[index % ACCENTS.length],
    number: String(index + 1).padStart(2, "0"),
  }));

  return (
    <section className="mx-auto mb-24 flex w-full max-w-[1920px] flex-col items-center gap-12 px-5 py-20 sm:px-8 lg:px-16 xl:px-[96px] 2xl:px-[128px] 2xl:py-[108px]">
      <div className="flex w-full max-w-[1151px] flex-col items-center gap-5 text-center">
        <h2 className="font-outfit text-[clamp(42px,5.2vw,80px)] font-extrabold leading-[0.92] tracking-[-0.03em] text-[#23B349]">
          {title}
        </h2>
        <p className="max-w-[996px] font-outfit text-[clamp(18px,1.5vw,24px)] font-normal leading-[1.35] tracking-[-0.01em] text-[#404040]">
          {description}
        </p>
      </div>

      <div className="grid w-full max-w-[1664px] grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-[30px]">
        {displayCards.map((card: any) => (
          <article
            key={card.id}
            className="group flex min-h-[560px] flex-col overflow-hidden rounded-[28px] border border-black/[0.06] bg-white shadow-[0_16px_50px_rgba(0,0,0,0.07)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)]"
          >
            <div className="relative h-[330px] w-full shrink-0 overflow-hidden sm:h-[350px] xl:h-[360px]">
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
              />

              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/35 to-transparent" />

              <div
                className="absolute left-5 top-5 flex h-11 min-w-11 items-center justify-center rounded-full px-3 font-funnel text-[14px] font-bold shadow-sm backdrop-blur-md"
                style={{
                  backgroundColor:
                    card.accent === "#2F2F2F"
                      ? "rgba(255,255,255,0.92)"
                      : card.accent,
                  color: card.accent === "#2F2F2F" ? "#2F2F2F" : "#111111",
                }}
              >
                {card.number}
              </div>
            </div>

            <div className="flex flex-1 flex-col px-6 pb-6 pt-7 sm:px-7 sm:pb-7">
              <div
                className="mb-5 h-1.5 w-14 rounded-full transition-all duration-500 group-hover:w-20"
                style={{ backgroundColor: card.accent }}
              />

              <h3 className="font-funnel text-[24px] font-bold leading-[1.15] tracking-[-0.02em] text-[#2E2E2E] sm:text-[26px]">
                {card.title}
              </h3>

              <p className="mt-3 font-outfit text-[18px] font-normal leading-[1.45] text-[#565656] sm:text-[19px]">
                {card.desc}
              </p>

              <div className="mt-auto pt-7">
                <div className="flex items-center justify-between border-t border-black/[0.08] pt-5">
                  <span className="font-funnel text-[18px] font-bold text-[#111111]">
                    {card.cta}
                  </span>

                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[20px] font-medium transition-all duration-300 group-hover:translate-x-1"
                    style={{
                      backgroundColor: card.accent,
                      color: card.accent === "#2F2F2F" ? "#FFFFFF" : "#111111",
                    }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
