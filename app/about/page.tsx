import ScrollFadeIn from "@/components/ScrollFadeIn";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <ScrollFadeIn>
        <h1 className="text-4xl font-bold font-serif mb-8">About Me</h1>
      </ScrollFadeIn>

      <ScrollFadeIn className="mb-12" delay={0.1}>
        <section>
          <h2 className="text-2xl font-semibold font-serif mb-4">
            Professional Summary
          </h2>
          {/* TODO: Add Headshot */}
          <div className="relative mb-6 w-40 h-40 rounded-full overflow-hidden mx-auto md:mx-0 border-1">
            <Image
              src="/russell.png"
              alt="Headshot of Russell Trzaska"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className="text-foreground/80">
            {/* TODO: Replace with actual bio */}A seasoned Full Stack Engineer
            with a proven track record of architecting and delivering
            sophisticated web applications. Expertise spans the entire
            development lifecycle, from conceptualization and design to
            deployment and optimization. Passionate about leveraging
            cutting-edge technologies like Next.js, TypeScript, and cloud
            platforms (AWS, Vercel) to build scalable, high-performance
            solutions that drive business value. Adept at leading development
            teams and collaborating effectively to transform complex
            requirements into elegant, user-centric digital experiences.
          </p>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn className="mb-12" delay={0.2}>
        <section>
          <h2 className="text-2xl font-semibold font-serif mb-4">Skills</h2>
          {/* TODO: Replace with actual skills, possibly categorized */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2 text-foreground/80">
            <ul className="list-disc list-inside space-y-1">
              <li className="font-medium text-foreground/90">Frontend:</li>
              <li>React, Next.js</li>
              <li>TypeScript, JavaScript</li>
              <li>HTML5, CSS3</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion, Redux</li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li className="font-medium text-foreground/90">Backend:</li>
              <li>Node.js, Express</li>
              <li>Python, Go</li>
              <li>SQL (PostgreSQL)</li>
              <li>NoSQL (MongoDB)</li>
              <li>RESTful APIs, GraphQL</li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li className="font-medium text-foreground/90">
                Cloud & DevOps:
              </li>
              <li>AWS Services</li>
              <li>Vercel, Docker</li>
              <li>CI/CD</li>
              <li>Serverless</li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li className="font-medium text-foreground/90">Databases:</li>
              <li>PostgreSQL (Supabase)</li>
              <li>MongoDB</li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li className="font-medium text-foreground/90">Other:</li>
              <li>Git</li>
              <li>Agile Methodologies</li>
              <li>UI/UX Principles</li>
              <li>Performance Optimization</li>
              <li>Security Best Practices</li>
            </ul>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn className="mb-12" delay={0.3}>
        <section>
          <h2 className="text-2xl font-semibold font-serif mb-4">
            Work Experience
          </h2>
          {/* TODO: Replace with actual work experience entries */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold">
              Lead Software Engineer - Coinbase (YC S12)
            </h3>
            <p className="text-sm text-foreground/60 mb-2">
              May 2022 - Present
            </p>
            <ul className="list-disc list-inside space-y-1 text-foreground/80">
              <li>
                Led technical direction for critical retail investing platform
                projects (onboarding, account management, trading).
              </li>
              <li>
                Architected and implemented scalable backend (Go, gRPC) and
                frontend (React, TypeScript) solutions.
              </li>
              <li>
                Mentored junior engineers, promoting technical excellence and
                collaboration.
              </li>
              <li>
                Collaborated cross-functionally to deliver high-impact features.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">
              Senior Software Engineer - Freelance
            </h3>
            <p className="text-sm text-foreground/60 mb-2">
              Jan 2021 - May 2022
            </p>
            <ul className="list-disc list-inside space-y-1 text-foreground/80">
              <li>
                Delivered bespoke full-stack solutions (e-commerce, dashboards,
                business apps) for diverse clients.
              </li>
              <li>
                Specialized in React, Node.js, and cloud-native deployments.
              </li>
              <li>
                Managed client relationships, project scope, and deliverables
                independently.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">
              Software Engineer - Smartsheet (NYSE: SMAR)
            </h3>
            <p className="text-sm text-foreground/60 mb-2">
              May 2018 - Jan 2021
            </p>
            <ul className="list-disc list-inside space-y-1 text-foreground/80">
              <li>
                Contributed to core platform features enhancing user
                productivity and collaboration.
              </li>
              <li>
                Worked full-stack using Java, JavaScript (React), and SQL.
              </li>
              <li>
                Participated actively in code reviews, design discussions, and
                agile processes.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">
              Co-Founder & Software Engineer - Scout Military Discounts
              (Acquired)
            </h3>
            <p className="text-sm text-foreground/60 mb-2">
              Jun 2016 - May 2018
            </p>
            <ul className="list-disc list-inside space-y-1 text-foreground/80">
              <li>
                Co-founded and led technical development of a discount platform,
                achieving user growth and acquisition.
              </li>
              <li>
                Built the initial product using React, Node.js, and PostgreSQL.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              Software Engineer - Nordstrom (NYSE: JWN)
            </h3>
            <p className="text-sm text-foreground/60 mb-2">
              Jun 2015 - Jun 2016
            </p>
            <ul className="list-disc list-inside space-y-1 text-foreground/80">
              <li>
                Developed and maintained features for Nordstrom&apos;s
                e-commerce platform.
              </li>
              <li>
                Gained experience with large-scale retail systems and agile
                practices.
              </li>
            </ul>
          </div>
          {/* Add more entries as needed */}
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn delay={0.4}>
        <section>
          <h2 className="text-2xl font-semibold font-serif mb-4">Education</h2>
          {/* TODO: Replace with actual education entries */}
          <div>
            <h3 className="text-lg font-semibold">
              Bachelor of Science, Informatics - University of Washington
            </h3>
            <p className="text-sm text-foreground/60">Seattle, WA</p>
          </div>
          {/* Add more entries as needed */}
        </section>
      </ScrollFadeIn>
    </div>
  );
}
