import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex-grow">
      {/* Hero Section - Full Height Attempt */}
      {/* Using min-height calculation to subtract header height (h-14 = 3.5rem) */}
      <section className="relative grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-3.5rem)] bg-gradient-to-b from-white via-white to-black/90 from-85% to-100%">
        {/* Text Content Column */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left p-8 md:p-12 lg:p-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif mb-6">
            {/* TODO: Replace with compelling headline */}
            Crafting Exceptional Digital Experiences.
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto md:mx-0 mb-8">
            {/* TODO: Replace with brief description */}
            Full-stack developer specializing in creating high-performance,
            luxurious web applications and websites for discerning clients.
          </p>
          {/* TODO: Add Call to Action button (e.g., Link to Projects or Contact) */}
          <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
            View Projects
          </button>
        </div>

        {/* Image Column - Stretches Full Height */}
        <div className="relative h-full mt-auto hidden md:block overflow-x-visible overflow-y-clip">
          {" "}
          {/* Hide on mobile, adjust as needed */}
          <Image
            src="/russell.png" // Path relative to the public directory
            alt="Russell Trzaska Headshot"
            fill // Fill the container
            priority // Prioritize loading the hero image
            className="object-cover object-center overflow-visible" // Explicitly center the object
          />
        </div>
      </section>

      {/* TODO: Add other sections like featured projects preview later */}
      {/* These sections will now appear below the full-height hero */}
    </div>
  );
}
