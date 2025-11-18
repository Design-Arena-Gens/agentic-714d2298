import Image from "next/image";
import Link from "next/link";

const timeline = [
  {
    year: "1970",
    heading: "Cold Fact is released",
    detail:
      "Rodríguez's debut album lands quietly in Detroit but begins crossing oceans to South Africa, where bootlegs ignite a movement.",
  },
  {
    year: "1973-1976",
    heading: "Rumors take over",
    detail:
      "Fans whisper stories of on-stage self-immolation and tragic endings; no tour dates, no press, no proof he is alive.",
  },
  {
    year: "1991",
    heading: "The bulletin board lights up",
    detail:
      "Capetonian superfan Stephen \"Sugar\" Segerman launches a humble web page and mailing list pleading for any trace of Rodríguez.",
  },
  {
    year: "1998",
    heading: "A late-night phone call",
    detail:
      "After years of dead ends, an email arrives with a Detroit phone number. Moments later, Rodríguez answers in a whisper.",
  },
  {
    year: "2012",
    heading: "Searching for Sugar Man",
    detail:
      "The Academy Award-winning documentary retells the quest, cementing the legend of the hunt and the community that refused to give up.",
  },
];

const clues = [
  {
    title: "Pressing plant scratch notes",
    description:
      "Matrix codes etched into the vinyl lead obsessives to Sussex Records, but the label had long folded with no forwarding address.",
  },
  {
    title: "Royalty statements",
    description:
      "Import data hinted that thousands of albums sold in apartheid South Africa, yet Rodríguez never saw the reports or the royalties.",
  },
  {
    title: "Library clipping",
    description:
      "A brief Detroit Free Press review mentions a philosopher-poet turned demolition worker – the first real-life breadcrumb.",
  },
];

const voices = [
  {
    quote:
      "We were just kids with a modem and a feeling that myths deserve answers. The site looked like a ransom note because in a way it was – a plea for truth.",
    name: "Stephen \"Sugar\" Segerman",
    role: "Record shop owner, web archivist, believer",
  },
  {
    quote:
      "Every rumor we chased deepened the mystery: dead, alive, vanished. That uncertainty pulled more hearts into the search.",
    name: "Craig Bartholomew-Strydom",
    role: "Journalist and co-investigator",
  },
  {
    quote:
      "When the phone rang in Detroit, I thought it was a prank. Then I realized a whole world had been waiting for my hello.",
    name: "Sixto Díaz Rodríguez",
    role: "Musician, poet, quiet hero",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-14 sm:px-8 lg:px-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
        <section className="space-y-10">
          <header className="relative overflow-hidden rounded-3xl bg-white/90 p-10 shadow-xl shadow-[rgba(103,81,50,0.24)] backdrop-blur-sm">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(244,223,198,0.5),transparent_55%),radial-gradient(circle_at_88%_0%,rgba(217,167,111,0.35),transparent_45%)]" />
            <p className="inline-flex items-center bg-[rgba(163,65,36,0.12)] px-3 py-1 text-xs font-medium uppercase tracking-[0.35em] text-[color:var(--accent)]">
              Missing Musician Alert
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-[color:var(--foreground)] sm:text-5xl">
              Searching for Rodríguez
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[color:#3f2f28] sm:text-xl">
              A living archive honoring the handmade flyers, dial-up connections, and relentless devotion that powered the hunt for Detroit troubadour Sixto Rodríguez. This tribute recreates the urgency of the original web bulletin that once begged the world for any clue.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm sm:gap-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(163,65,36,0.12)] font-[var(--font-typewriter)] text-lg tracking-[0.12em] text-[color:var(--accent)]">
                  MISSING
                </span>
                <div>
                  <p className="font-semibold uppercase tracking-[0.2em] text-[0.7rem] text-[color:#6d5242]">
                    Name on the records
                  </p>
                  <p className="text-base font-medium text-[color:#2d1f18]">
                    Sixto Díaz Rodríguez
                  </p>
                </div>
              </div>
              <div className="h-12 border-l border-dashed border-[rgba(87,63,45,0.35)]" />
              <div>
                <p className="font-semibold uppercase tracking-[0.2em] text-[0.7rem] text-[color:#6d5242]">
                  Last confirmed sighting
                </p>
                <p className="text-base font-medium text-[color:#2d1f18]">
                  Demolition sites, Detroit, late 70s
                </p>
              </div>
            </div>
          </header>

          <section className="grid gap-8 rounded-3xl bg-white/90 p-8 shadow-lg shadow-[rgba(103,81,50,0.18)] sm:p-10">
            <h2 className="font-semibold uppercase tracking-[0.28em] text-[0.8rem] text-[color:#7d614f]">
              Leads & Clues Collected
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {clues.map((clue) => (
                <article
                  key={clue.title}
                  className="rounded-2xl border border-dashed border-[rgba(114,86,63,0.35)] bg-gradient-to-br from-white to-[rgba(248,240,228,0.6)] p-6 shadow-sm"
                >
                  <h3 className="font-semibold text-[color:var(--accent)]">
                    {clue.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:#3f2f28]">
                    {clue.description}
                  </p>
                </article>
              ))}
            </div>
            <p className="text-sm text-[color:#816552]">
              Each breadcrumb arrived via fax, late-night phone calls, or a shaky JPEG uploaded by fans who refused to let the signal fade.
            </p>
          </section>

          <section className="rounded-3xl bg-white/95 p-8 shadow-lg shadow-[rgba(103,81,50,0.18)] sm:p-12">
            <h2 className="font-semibold uppercase tracking-[0.28em] text-[0.8rem] text-[color:#7d614f]">
              Trail of Echoes
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-[auto_1fr]">
              <div className="relative">
                <span className="absolute left-[11px] top-0 h-full w-0.5 bg-gradient-to-b from-[rgba(163,65,36,0.4)] to-transparent" aria-hidden />
                <div className="flex flex-col gap-12">
                  {timeline.map((event) => (
                    <div key={event.year} className="relative pl-12">
                      <span className="absolute left-0 top-1 h-3 w-3 rounded-full border border-[rgba(163,65,36,0.8)] bg-white" />
                      <p className="font-semibold uppercase tracking-[0.28em] text-[0.7rem] text-[color:#7d614f]">
                        {event.year}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-[color:var(--foreground)]">
                        {event.heading}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[color:#3f2f28]">
                        {event.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-white/95 p-8 shadow-lg shadow-[rgba(103,81,50,0.18)] sm:p-12">
            <h2 className="font-semibold uppercase tracking-[0.28em] text-[0.8rem] text-[color:#7d614f]">
              Voices from the Hunt
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {voices.map((voice) => (
                <figure
                  key={voice.name}
                  className="relative rounded-3xl border border-[rgba(114,86,63,0.2)] bg-gradient-to-br from-white via-[rgba(250,242,231,0.9)] to-[rgba(236,219,196,0.75)] p-6 shadow-sm"
                >
                  <span className="block font-[var(--font-typewriter)] text-xs uppercase tracking-[0.4em] text-[color:#a35c3c]">
                    Testimony
                  </span>
                  <blockquote className="mt-4 text-sm leading-relaxed text-[color:#39271f]">
                    “{voice.quote}”
                  </blockquote>
                  <figcaption className="mt-6 text-xs uppercase tracking-[0.3em] text-[color:#816552]">
                    {voice.name}
                    <span className="block text-[0.65rem] normal-case tracking-normal text-[color:#5f4a3a]">
                      {voice.role}
                    </span>
                  </figcaption>
                  <div className="absolute -right-4 -top-4 h-12 w-12 rotate-6 rounded-full border border-[rgba(126,96,68,0.35)] bg-[rgba(255,247,233,0.9)] shadow-md" />
                </figure>
              ))}
            </div>
          </section>

          <footer className="rounded-3xl border border-dashed border-[rgba(126,96,68,0.25)] bg-white/85 p-8 shadow-inner">
            <h2 className="font-semibold uppercase tracking-[0.28em] text-[0.8rem] text-[color:#7d614f]">
              Keep the Signal Alive
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[color:#3f2f28]">
              Share your memories, scans, flyers, and whispers. This tribute keeps the original bulletin&rsquo;s spirit alive – a digital milk carton asking the world to remember the man whose songs outlived his fame.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-medium text-[color:var(--accent)]">
              <Link
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(163,65,36,0.5)] bg-white px-5 py-2.5 shadow-sm shadow-[rgba(103,81,50,0.18)] transition hover:-translate-y-0.5 hover:bg-[rgba(255,247,233,0.9)]"
                href="https://sugarman.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit the Rodríguez archive
              </Link>
              <Link
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(126,96,68,0.35)] px-5 py-2.5 text-[color:#5f4a3a] transition hover:-translate-y-0.5 hover:bg-[rgba(244,224,198,0.6)]"
                href="mailto:leads@sugarman-tribute.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Submit a lead
              </Link>
            </div>
          </footer>
        </section>

        <aside className="flex flex-col gap-8">
          <div className="sticky top-10 space-y-8">
            <div className="overflow-hidden rounded-3xl border border-[rgba(163,65,36,0.35)] bg-white shadow-2xl shadow-[rgba(103,81,50,0.32)]">
              <div className="bg-[rgba(163,65,36,0.85)] px-6 py-4 font-[var(--font-typewriter)] text-lg uppercase tracking-[0.35em] text-white">
                Have You Seen This Man?
              </div>
              <div className="space-y-5 px-6 py-7">
                <div className="relative mx-auto flex h-48 w-full max-w-[220px] items-center justify-center rounded-3xl bg-gradient-to-br from-[#fff8ec] via-[#f1d8b2] to-[#e1b98c] p-4 shadow-inner">
                  <Image
                    src="/milk-carton.svg"
                    alt="Illustration of a missing person milk carton featuring Rodríguez"
                    width={160}
                    height={200}
                    priority
                  />
                </div>
                <div className="space-y-3 text-sm text-[color:#3f2f28]">
                  <p>
                    Name: <span className="font-semibold">Sixto Rodríguez</span>
                  </p>
                  <p>Aliases: Jesús Rodríguez, Sixth Street Poet</p>
                  <p>Distinctive Traits: Lyrics that slice through oppression, denim jackets, quiet smile.</p>
                  <p>
                    Last Known Tracks: <span className="italic">Sugar Man</span>, <span className="italic">I Wonder</span>
                  </p>
                </div>
                <p className="rounded-2xl bg-[rgba(163,65,36,0.08)] p-4 text-xs leading-relaxed text-[color:#5f4a3a]">
                  If you have any information, leave a message on the bulletin board. Reward: the return of a voice that never stopped singing for justice.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-[rgba(126,96,68,0.25)] bg-white/90 p-7 shadow-lg shadow-[rgba(103,81,50,0.18)]">
              <h2 className="font-semibold uppercase tracking-[0.28em] text-[0.7rem] text-[color:#7d614f]">
                How to Join the Search
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-[color:#3f2f28]">
                <li>
                  Dig up family record collections and photograph the inner sleeves for hidden addresses.
                </li>
                <li>
                  Scan your ticket stubs, club flyers, and rumor lists; upload them so the trail stays warm.
                </li>
                <li>
                  Host a listening circle and record oral histories from fans who clung to every vinyl groove.
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
