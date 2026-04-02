import { useTranslation } from "react-i18next";
import { SEO, JsonLd } from "../seo";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "NeuralFlow",
  description:
    "AI-powered workflow automation platform that helps teams streamline operations, reduce manual tasks, and boost productivity by up to 40%.",
  url: "https://www.neuralflow.ai",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "29.00",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1247",
  },
};

export function LandingPage() {
  const { t } = useTranslation(["landing", "common"]);

  return (
    <>
      <SEO
        title={t("landing:seo.title")}
        description={t("landing:seo.description")}
        canonicalUrl="/"
        keywords={t("landing:seo.keywords")}
      />
      <JsonLd data={structuredData} />

      <section
        className="py-24 md:py-32 text-center bg-linear-to-br from-slate-50 to-indigo-100"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h1
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-slate-900"
          >
            {t("landing:hero.title")}{" "}
            <span className="bg-linear-to-r from-indigo-500 to-sky-500 bg-clip-text text-transparent">
              {t("landing:hero.highlight")}
            </span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-8">
            {t("landing:hero.subtitle")}
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-4">
            <a
              href="#features"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg bg-indigo-500 text-white transition-all hover:bg-indigo-600 hover:-translate-y-0.5 hover:shadow-md"
            >
              {t("landing:hero.exploreFeatures")}
            </a>
            <button
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg bg-transparent text-indigo-500 border-2 border-indigo-500 transition-all hover:bg-indigo-500 hover:text-white"
              type="button"
            >
              {t("landing:hero.startTrial")}
            </button>
          </div>
          <p className="text-sm text-slate-500">{t("landing:hero.trust")}</p>
        </div>
      </section>

      <section
        id="features"
        className="py-24 md:py-32 bg-white"
        aria-labelledby="features-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2
            id="features-heading"
            className="text-3xl md:text-4xl font-bold text-center mb-3"
          >
            {t("landing:features.title")}
          </h2>
          <p className="text-center text-slate-500 text-lg max-w-xl mx-auto mb-12">
            {t("landing:features.subtitle")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(
              [
                "taskRouting",
                "analytics",
                "integrations",
                "collaboration",
                "reporting",
                "security",
              ] as const
            ).map((key) => (
              <article
                key={key}
                className="p-8 bg-slate-50 rounded-lg border border-slate-200 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-indigo-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-indigo-500">
                  {t(`landing:features.items.${key}.title`)}
                </h3>
                <p className="text-slate-500">
                  {t(`landing:features.items.${key}.description`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-24 md:py-32 bg-slate-50"
        aria-labelledby="how-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2
            id="how-heading"
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            {t("landing:howItWorks.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {(["1", "2", "3"] as const).map((step) => (
              <div key={step} className="p-8">
                <span
                  className="inline-flex items-center justify-center w-16 h-16 bg-indigo-500 text-white text-2xl font-bold rounded-full mb-6"
                  aria-hidden="true"
                >
                  {step}
                </span>
                <h3 className="text-xl font-semibold mb-3">
                  {t(`landing:howItWorks.steps.${step}.title`)}
                </h3>
                <p className="text-slate-500">
                  {t(`landing:howItWorks.steps.${step}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-24 md:py-32 bg-white"
        aria-labelledby="testimonials-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            {t("landing:testimonials.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(["1", "2", "3"] as const).map((i) => (
              <blockquote
                key={i}
                className="p-8 bg-slate-50 rounded-lg border-l-4 border-indigo-500"
              >
                <p className="text-lg italic mb-4 text-slate-800">
                  "{t(`landing:testimonials.items.${i}.quote`)}"
                </p>
                <footer>
                  <cite className="not-italic text-sm text-slate-500">
                    <strong>{t(`landing:testimonials.items.${i}.name`)}</strong>
                    , {t(`landing:testimonials.items.${i}.role`)}
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-slate-900 text-white text-center"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
            {t("landing:cta.title")}
          </h2>
          <p className="text-lg mb-8 opacity-90">
            {t("landing:cta.description")}
          </p>
          <button
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-indigo-500 text-white transition-all hover:bg-indigo-600 hover:-translate-y-0.5 hover:shadow-md"
            type="button"
          >
            {t("landing:cta.button")}
          </button>
        </div>
      </section>
    </>
  );
}
