import { Outlet, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Layout() {
  const { pathname } = useLocation();
  const { t } = useTranslation("common");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200"
        role="banner"
      >
        <nav
          className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between"
          role="navigation"
          aria-label="Main navigation"
        >
          <Link
            to="/"
            className="text-2xl font-bold text-indigo-500"
            aria-label="NeuralFlow Home"
          >
            NeuralFlow
          </Link>
          <div className="flex items-center gap-6">
            <ul className="flex gap-8">
              <li>
                <Link
                  to="/"
                  className={`font-medium text-slate-500 transition-all py-2 border-b-2 border-transparent hover:text-indigo-500 ${pathname === "/" ? "text-indigo-500 border-indigo-500" : ""}`}
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`font-medium text-slate-500 transition-all py-2 border-b-2 border-transparent hover:text-indigo-500 ${pathname === "/about" ? "text-indigo-500 border-indigo-500" : ""}`}
                >
                  {t("nav.about")}
                </Link>
              </li>
            </ul>
            <LanguageSwitcher />
          </div>
        </nav>
      </header>

      <main className="flex-1" role="main">
        <Outlet />
      </main>

      <footer className="bg-slate-900 text-white pt-16 pb-6" role="contentinfo">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-indigo-400">
              NeuralFlow
            </h3>
            <p className="text-slate-400 text-sm">{t("footer.tagline")}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide">
              {t("footer.product")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                >
                  {t("footer.features")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                >
                  {t("footer.about", "About")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide">
              {t("footer.company")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                >
                  {t("footer.ourStory")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about#team"
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                >
                  {t("footer.team")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 pt-6 border-t border-white/10 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} NeuralFlow. {t("footer.rights")}
          </p>
        </div>
      </footer>
    </div>
  );
}
