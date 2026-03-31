import { useTranslations } from 'next-intl';
import Image from "next/image";

export default function Home() {
  const t = useTranslations('Index');

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="flex-1 flex flex-col items-center justify-center p-8 sm:p-24">
        <div className="max-w-4xl w-full space-y-12 text-center sm:text-left">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              {t('hero.headline')}
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
              {t('hero.subheadline')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="#products"
              className="px-8 py-4 bg-orange-600 text-white rounded-full font-bold text-lg hover:bg-orange-700 transition-colors shadow-lg"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-zinc-900 border-2 border-zinc-200 rounded-full font-bold text-lg hover:bg-zinc-50 transition-colors"
            >
              Contact Us
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-12">
            <div className="p-8 bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-zinc-100 dark:border-zinc-800 space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center text-orange-600 text-2xl">
                🍪
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Biscuits</h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                Crafted with the finest ingredients from Debre Sina.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-zinc-100 dark:border-zinc-800 space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-2xl flex items-center justify-center text-zinc-600 text-2xl font-bold">
                🌾
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Wheat Flour</h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                Premium flour for high-quality production.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
