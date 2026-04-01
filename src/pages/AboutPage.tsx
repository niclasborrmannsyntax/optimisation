import { useTranslation } from "react-i18next";
import { SEO, JsonLd } from "../seo";

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NeuralFlow",
  url: "https://www.neuralflow.ai",
  logo: "https://www.neuralflow.ai/logo.png",
  sameAs: [
    "https://twitter.com/neuralflow",
    "https://linkedin.com/company/neuralflow",
    "https://github.com/neuralflow",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-800-555-0199",
    contactType: "customer service",
    availableLanguage: ["English", "German", "Spanish"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Innovation Drive",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94105",
    addressCountry: "US",
  },
};

export function AboutPage() {
  const { t } = useTranslation(["about", "common"]);

  const teamMembers = [
    {
      name: t("about:team.members.1.name"),
      role: t("about:team.members.1.role"),
      bio: t("about:team.members.1.bio"),
    },
    {
      name: t("about:team.members.2.name"),
      role: t("about:team.members.2.role"),
      bio: t("about:team.members.2.bio"),
    },
    {
      name: t("about:team.members.3.name"),
      role: t("about:team.members.3.role"),
      bio: t("about:team.members.3.bio"),
    },
    {
      name: t("about:team.members.4.name"),
      role: t("about:team.members.4.role"),
      bio: t("about:team.members.4.bio"),
    },
  ];

  const stats = [
    {
      number: t("about:stats.items.1.number"),
      label: t("about:stats.items.1.label"),
    },
    {
      number: t("about:stats.items.2.number"),
      label: t("about:stats.items.2.label"),
    },
    {
      number: t("about:stats.items.3.number"),
      label: t("about:stats.items.3.label"),
    },
    {
      number: t("about:stats.items.4.number"),
      label: t("about:stats.items.4.label"),
    },
  ];

  return (
    <>
      <SEO
        title={t("about:seo.title")}
        description={t("about:seo.description")}
        canonicalUrl="/about"
        keywords={t("about:seo.keywords")}
        ogImage="/og-about.jpg"
        ogType="website"
      />
      <JsonLd data={organizationStructuredData} />

      <section
        className="py-24 md:py-32 text-center bg-to-br from-slate-50 to-indigo-100"
        aria-labelledby="about-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h1
            id="about-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-slate-900"
          >
            {t("about:hero.title")}
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            {t("about:hero.subtitle")}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white" aria-labelledby="story-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            id="story-heading"
            className="text-3xl font-bold text-center mb-8"
          >
            {t("about:story.title")}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-slate-500 leading-relaxed">
              {t("about:story.paragraph1")}
            </p>
            <p className="text-lg text-slate-500 leading-relaxed">
              {t("about:story.paragraph2")}
            </p>
            <p className="text-lg text-slate-500 leading-relaxed">
              {t("about:story.paragraph3")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50" aria-labelledby="values-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            id="values-heading"
            className="text-3xl font-bold text-center mb-12"
          >
            {t("about:values.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(["1", "2", "3", "4"] as const).map((i) => (
              <article
                key={i}
                className="p-8 bg-white rounded-lg shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3 text-indigo-500">
                  {t(`about:values.items.${i}.title`)}
                </h3>
                <p className="text-slate-500">
                  {t(`about:values.items.${i}.description`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="team"
        className="py-20 bg-white"
        aria-labelledby="team-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="team-heading" className="text-3xl font-bold text-center mb-3">
            {t("about:team.title")}
          </h2>
          <p className="text-center text-slate-500 text-lg max-w-xl mx-auto mb-12">
            {t("about:team.subtitle")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="text-center p-8 bg-slate-50 rounded-lg transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div
                  className="w-20 h-20 bg-to-br from-indigo-500 to-sky-500 text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4"
                  aria-hidden="true"
                >
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-indigo-500 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-slate-500 text-sm">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-slate-900 text-white"
        aria-labelledby="stats-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="stats-heading" className="sr-only">
            {t("about:stats.title")}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.number} className="p-6">
                <span className="block text-4xl md:text-5xl font-extrabold bg-to-r from-indigo-400 to-sky-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </span>
                <span className="text-base opacity-80">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-slate-900 text-white text-center"
        aria-labelledby="about-cta-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2
            id="about-cta-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t("about:cta.title")}
          </h2>
          <p className="text-lg mb-8 opacity-90">
            {t("about:cta.description")}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-indigo-500 text-white transition-all hover:bg-indigo-600 hover:-translate-y-0.5 hover:shadow-md"
              type="button"
            >
              {t("about:cta.trialButton")}
            </button>
            <button
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-transparent text-white border-2 border-white transition-all hover:bg-white hover:text-slate-900"
              type="button"
            >
              {t("about:cta.careersButton")}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
