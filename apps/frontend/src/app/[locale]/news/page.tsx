import { useTranslations } from "next-intl";
import NewsHeaderSection from "@frontend/components/sections/news/NewsHeaderSection";
import LatestNewsSection from "@frontend/components/sections/news/LatestNewsSection";
import UpdatesSection from "@frontend/components/sections/news/UpdatesSection";
import NewsGridSection from "@frontend/components/sections/news/NewsGridSection";

export default function NewsPage() {
  return (
    <main className="flex flex-col w-full bg-white relative">
      <div className="max-w-[1920px] mx-auto w-full px-4 sm:px-8 md:px-[128px] pt-36 pb-12">
        <NewsHeaderSection />

        <div className="mt-16 md:mt-24 flex flex-col gap-16 md:gap-[128px]">
          <LatestNewsSection />
          <UpdatesSection />
          <NewsGridSection />
        </div>
      </div>
    </main>
  );
}
