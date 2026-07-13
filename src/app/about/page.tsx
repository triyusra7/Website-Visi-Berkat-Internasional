import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { getTranslations, Locale } from "@/lib/translations";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value || "en") as Locale;
  const dict = getTranslations(lang);

  return {
    title: dict.navAbout,
    description: dict.aboutSnippetDesc,
  };
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="group flex items-start gap-3 rounded-md p-2 -m-2 transition-colors hover:bg-white">
      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded border-2 border-vbi-red text-vbi-red transition-transform duration-200 group-hover:scale-110">
        <svg viewBox="0 0 16 16" fill="none" className="size-3">
          <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="text-sm text-vbi-navy/90 md:text-base">{children}</span>
    </li>
  );
}

function CheckList({ points }: { points: string[] }) {
  return (
    <RevealGroup className="grid grid-cols-1 gap-3 sm:grid-cols-2" stagger={0.06}>
      {points.map((point) => (
        <RevealItem key={point} y={12}>
          <CheckItem>{point}</CheckItem>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

export default async function AboutPage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value || "en") as Locale;
  const dict = getTranslations(lang);

  const visionPoints = [
    dict.aboutVisionPoint1,
    dict.aboutVisionPoint2,
    dict.aboutVisionPoint3,
    dict.aboutVisionPoint4,
  ];

  const missionPoints = [
    dict.aboutMissionPoint1,
    dict.aboutMissionPoint2,
    dict.aboutMissionPoint3,
    dict.aboutMissionPoint4,
  ];

  const specializationPoints = [
    dict.aboutSpecializationPoint1,
    dict.aboutSpecializationPoint2,
    dict.aboutSpecializationPoint3,
    dict.aboutSpecializationPoint4,
  ];

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <Reveal>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-vbi-red">
            {dict.aboutSub}
          </p>
          <h1 className="font-heading max-w-3xl text-3xl font-bold text-vbi-navy md:text-5xl">
            {dict.aboutPageTitle}
          </h1>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          <Reveal direction="left" delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/images/brand/about-springlee-bags.png"
              alt="Springlee snack packaging held up"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </Reveal>
          <Reveal direction="right" delay={0.15} className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              {dict.aboutSnippetDesc}
            </p>
            <p>
              {dict.aboutPageDescPara2}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="mb-14">
            <Reveal>
              <h2 className="font-heading mb-4 text-2xl font-bold text-vbi-navy md:text-3xl">
                {dict.aboutVision}
              </h2>
              <p className="mb-5 max-w-2xl text-sm text-muted-foreground md:text-base">
                {dict.aboutVisionDesc}
              </p>
            </Reveal>
            <CheckList points={visionPoints} />
          </div>

          <div className="mb-14">
            <Reveal>
              <h2 className="font-heading mb-5 text-2xl font-bold text-vbi-navy md:text-3xl">
                {dict.aboutMission}
              </h2>
            </Reveal>
            <CheckList points={missionPoints} />
          </div>

          <div>
            <Reveal>
              <h2 className="font-heading mb-4 text-2xl font-bold text-vbi-navy md:text-3xl">
                {dict.aboutSpecialization}
              </h2>
              <p className="mb-5 max-w-2xl text-sm text-muted-foreground md:text-base">
                {dict.aboutSpecializationDesc}
              </p>
            </Reveal>
            <CheckList points={specializationPoints} />
          </div>
        </div>
      </section>

      <Reveal className="mx-auto max-w-3xl px-4 py-16 text-center md:px-8 md:py-24">
        <h2 className="font-heading text-2xl font-bold text-vbi-navy md:text-3xl">
          {dict.aboutCTA}
        </h2>
        <Link
          href="/contact"
          className="tap-scale mt-6 inline-flex items-center justify-center rounded-md bg-vbi-navy px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-vbi-navy/90 hover:shadow-md"
        >
          {dict.btnGetInTouch}
        </Link>
      </Reveal>
    </>
  );
}


