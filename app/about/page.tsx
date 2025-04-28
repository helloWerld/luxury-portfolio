import ScrollFadeIn from "@/components/ScrollFadeIn";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <ScrollFadeIn>
        <h1 className="text-4xl font-bold font-serif mb-8">About Russell</h1>
      </ScrollFadeIn>

      <ScrollFadeIn className="mb-8" delay={0.1}>
        <section className="flex flex-col md:flex-row md:items-start gap-8">
          <div className="flex-shrink-0 mx-auto md:mx-0">
            {/* Headshot */}
            <div className="relative mb-4 w-40 h-40 rounded-full overflow-hidden border-1">
              <Image
                src="/russell.png"
                alt="Headshot of Russell Trzaska"
                layout="fill"
                objectFit="cover"
                className="opacity-90"
              />
            </div>
          </div>

          <div className="flex-grow">
            <div className="flex flex-row gap-2 items-center justify-between w-full mb-4">
              <h2 className="text-2xl font-semibold font-serif">
                Professional Profile
              </h2>
              {/* Contact Links */}
              <div className="flex justify-center md:justify-start space-x-4">
                <Link
                  href="https://www.linkedin.com/in/russelltrzaska/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-foreground/70 hover:text-primary"
                >
                  {/* LinkedIn SVG Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
                {/* Remember to replace # with actual GitHub URL */}
                <Link
                  href="https://github.com/helloWerld"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-foreground/70 hover:text-primary"
                >
                  {/* GitHub SVG Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Link>
                <Link
                  href="mailto:trzruss@me.com"
                  aria-label="Email"
                  className="text-foreground/70 hover:text-primary"
                >
                  <Mail size={20} />
                </Link>
              </div>
            </div>
            <p className="text-foreground/80">
              A results-driven Full Stack Engineet with over five years of
              dedicated experience, specializing in the architecture and
              development of high-performance, accessible web applications.
              Proven expertise in leveraging sophisticated technologies such as
              React, Next.js, and TypeScript, complemented by proficiency with
              headless CMS solutions. Passionate about advancing web performance
              optimization, fostering talent through mentorship, and engaging in
              cross-functional collaboration to deliver scalable, intuitive, and
              impactful digital experiences.
            </p>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn className="mb-12" delay={0.2}>
        <section>
          <h2 className="text-2xl font-semibold font-serif mb-4 border-t pt-4">
            Technical Expertise
          </h2>
          {/* Updated Skills */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4 text-foreground/80">
            <ul className="space-y-1">
              <li className="font-medium text-foreground/90 mb-1">Frontend:</li>
              <li>React, Next.js</li>
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>ShadCN UI</li>
              <li>HTML5, CSS3</li>
            </ul>
            <ul className="space-y-1">
              <li className="font-medium text-foreground/90 mb-1">
                Backend & CMS:
              </li>
              <li>Node.js, Express</li>
              <li>Python</li>
              <li>PostgreSQL</li>
              <li>Firebase</li>
              <li>Sanity CMS</li>
              <li>MongoDB</li>
            </ul>
            <ul className="space-y-1">
              <li className="font-medium text-foreground/90 mb-1">
                Performance & SEO:
              </li>
              <li>Lazy Loading</li>
              <li>SSR, SSG</li>
              <li>Image Optimization</li>
              <li>Accessibility (WCAG)</li>
              <li>SEO Best Practices</li>
            </ul>
            <ul className="space-y-1">
              <li className="font-medium text-foreground/90 mb-1">
                Tools & Infrastructure:
              </li>
              <li>Git, GitHub</li>
              <li>Vercel</li>
              <li>Docker</li>
              <li>Postman</li>
              <li>Webpack</li>
              <li>AI Integration</li>
            </ul>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn className="mb-12" delay={0.3}>
        <section>
          <h2 className="text-2xl font-semibold font-serif mb-4 border-t pt-4">
            Professional Experience
          </h2>
          {/* Updated Work Experience */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold">
              Co-Founder / Web Dev Mentor - CodeNoobs
            </h3>
            <p className="text-sm text-foreground/60 mb-2">
              September 2023 – Present
            </p>
            <ul className="list-disc list-inside space-y-1 text-foreground/80">
              <li>
                Empowering the next generation of web developers through expert
                mentorship, fostering technical proficiency and career
                acceleration.
              </li>
              <li>
                Cultivating a supportive learning community focused on practical
                skills and job market readiness.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">
              Frontend Developer - BitBasel (Freelance)
            </h3>
            <p className="text-sm text-foreground/60 mb-2">
              February 2024 – Present
            </p>
            <ul className="list-disc list-inside space-y-1 text-foreground/80">
              <li>
                Architected and executed the bespoke frontend for
                BitBasel&apos;s innovative Bitcoin Ordinal Marketplace using
                Next.js and Tailwind CSS.
              </li>
              <li>
                Engineered a responsive, high-performance user experience,
                ensuring seamless interaction with Bitcoin Ordinals across all
                devices.
              </li>
              <li>
                Developed a scalable and maintainable codebase through the
                implementation of modular, reusable component architecture.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">
              Owner / Full Stack Developer - Cover Better
            </h3>
            <p className="text-sm text-foreground/60 mb-2">
              August 2022 – Present
            </p>
            <ul className="list-disc list-inside space-y-1 text-foreground/80">
              <li>
                Conceptualized, designed, and executed the end-to-end
                development of Cover Better, a sophisticated AI-driven SaaS
                platform.
              </li>
              <li>
                Leveraged React, Firebase, Stripe, and the OpenAI API to deliver
                advanced AI-powered cover letter generation and secure payment
                processing.
              </li>
              <li>
                Successfully scaled the application to support over 20,000
                active users, ensuring robust performance and a seamless user
                experience.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">
              Owner - Bullish Media Group
            </h3>
            <p className="text-sm text-foreground/60 mb-2">
              January 2021 – Present
            </p>
            <ul className="list-disc list-inside space-y-1 text-foreground/80">
              <li>
                Directing a premier agency specializing in forging strategic
                connections between leading crypto enterprises and influential
                Web3 figures.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">
              Co-Founder / Partnerships Manager - Crypto Love
            </h3>
            <p className="text-sm text-foreground/60 mb-2">
              August 2017 – Present
            </p>
            <ul className="list-disc list-inside space-y-1 text-foreground/80">
              <li>
                Co-founded and strategically scaled a pioneering YouTube
                channel, achieving rapid audience acquisition of ~240,000
                subscribers within six months.
              </li>
              <li>
                Provided multi-faceted leadership across operations (COO),
                marketing (CMO), and technology (CTO), including high-profile
                media appearances and event coordination.
              </li>
              <li>
                Engineered the channel&apos;s web presence and managed
                communications for an email list exceeding 15,000 subscribers.
              </li>
              <li>
                Successfully negotiated and secured over $2 million in
                high-value advertising partnerships with prominent industry
                brands like Binance and Cointelegraph.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">
              Co-Founder / Front End Developer - Lever
            </h3>
            <p className="text-sm text-foreground/60 mb-2">
              September 2023 – April 2024
            </p>
            <ul className="list-disc list-inside space-y-1 text-foreground/80">
              <li>
                Played a key co-founding role in the strategic ideation and
                platform design for Lever.io, a novel Web3 influencer
                marketplace.
              </li>
              <li>
                Served as the lead frontend architect, utilizing React JS and
                Tailwind CSS to craft an intuitive and effective user interface.
              </li>
              <li>
                Implemented Firebase integration for robust backend services,
                facilitating real-time data synchronization critical for
                marketplace functions.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">
              Enterprise Success Manager / Email Deliverability Expert -
              ZeroBounce.net
            </h3>
            <p className="text-sm text-foreground/60 mb-2">
              January 2019 – November 2019
            </p>
            <ul className="list-disc list-inside space-y-1 text-foreground/80">
              <li>
                Consistently exceeded ambitious monthly sales targets ($40k) and
                surpassed all key performance indicators.
              </li>
              <li>
                Provided expert technical consultation to enterprise clientele
                on live email validation API integration, utilizing Postman and
                RESTful API expertise.
              </li>
              <li>
                Proactively identified and addressed potential client security
                vulnerabilities, safeguarding sensitive information like exposed
                API keys.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">
              SEO Consultant / Web Developer - BigWeek Marketing
            </h3>
            <p className="text-sm text-foreground/60 mb-2">
              March 2016 – April 2017
            </p>
            <ul className="list-disc list-inside space-y-1 text-foreground/80">
              <li>
                Implemented advanced SEO backlinking strategies through the
                development of private blog networks using WordPress and
                strategic domain acquisition.
              </li>
              <li>
                Delivered bespoke client website solutions, demonstrating
                expertise in WordPress, Elementor, and custom PHP theme
                development.
              </li>
              <li>
                Executed comprehensive on-site SEO optimizations, resulting in
                demonstrable and rapid improvements in client search engine
                rankings.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              Marketing & SEO Manager - Premier Access Property Management
            </h3>
            <p className="text-sm text-foreground/60 mb-2">
              October 2014 – June 2016
            </p>
            <ul className="list-disc list-inside space-y-1 text-foreground/80">
              <li>
                Orchestrated the successful negotiation and closure of over 350
                high-value luxury townhome rental contracts, generating upwards
                of $9 million in revenue.
              </li>
              <li>
                Designed and executed a strategic SEO campaign that achieved
                top-tier search engine visibility and significantly increased
                leasing contract volume.
              </li>
            </ul>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn delay={0.5}>
        <section>
          <h2 className="text-2xl font-semibold font-serif mb-4 border-t pt-4">
            Education & Community Engagement
          </h2>
          {/* Updated Education and Community */}
          <ul className="list-disc list-inside space-y-2 text-foreground/80">
            <li>
              <span className="font-medium text-foreground/90">
                React Miami Volunteer (April 2025):
              </span>{" "}
              Contributing to the success of a leading conference focused on
              React and frontend innovations.
            </li>
            <li>
              <span className="font-medium text-foreground/90">
                CodeNoobs Facebook Group Founder (2023):
              </span>{" "}
              Established and manage a thriving complimentary community
              dedicated to web developer growth.
            </li>
            <li>
              <span className="font-medium text-foreground/90">
                Nucamp Full Stack Bootcamp (2022):
              </span>{" "}
              Completed intensive training in MERN stack, React Native, Docker,
              and PostgreSQL.
            </li>
            <li>
              <span className="font-medium text-foreground/90">
                Rutgers University (2011):
              </span>{" "}
              Bachelor of Science.
            </li>
          </ul>
        </section>
      </ScrollFadeIn>
    </div>
  );
}
