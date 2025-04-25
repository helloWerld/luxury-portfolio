/* eslint-disable @next/next/no-img-element */
import Marquee from "@/components/Marquee";

// Expanded and updated dummy data
const testimonials = [
  {
    name: "Alice B.",
    username: "@alice_ceo", // Using title/role as username placeholder
    title: "CEO, TechCorp",
    body: "Working with Russell was transformative. Their expertise significantly boosted our platform.",
    img: "https://avatar.vercel.sh/alice",
  },
  {
    name: "Charles D.",
    username: "@charles_innovate",
    title: "Marketing Director, Innovate Solutions",
    body: "Exceptional skill and professionalism. Delivered a sophisticated site that matched our vision.",
    img: "https://avatar.vercel.sh/charles",
  },
  {
    name: "Eva F.",
    username: "@eva_creative",
    title: "Founder, Creative Hub",
    body: "Outstanding attention to detail. Our new website is beautiful and incredibly fast.",
    img: "https://avatar.vercel.sh/eva",
  },
  {
    name: "George H.",
    username: "@george_pm",
    title: "Product Manager, Global Systems",
    body: "A true frontend expert. Tackled complex challenges with ease and delivered ahead of schedule.",
    img: "https://avatar.vercel.sh/george",
  },
  {
    name: "Isabelle J.",
    username: "@isabelle_luxe",
    title: "Art Director, Luxe Brands",
    body: "Pleasure to collaborate with. Translated complex designs into a seamless experience.",
    img: "https://avatar.vercel.sh/isabelle",
  },
  {
    name: "Kevin L.",
    username: "@kevin_cto",
    title: "CTO, FinTech Start-up",
    body: "Deep technical knowledge and great business understanding. Game-changing improvements.",
    img: "https://avatar.vercel.sh/kevin",
  },
  // Duplicating for more data (adjust names/details as needed)
  {
    name: "Maria N.",
    username: "@maria_data",
    title: "Data Scientist, Analytics Inc.",
    body: "The performance optimization work was top-notch and greatly improved our data processing times.",
    img: "https://avatar.vercel.sh/maria",
  },
  {
    name: "Oliver P.",
    username: "@oliver_design",
    title: "Lead Designer, Studio Flow",
    body: "Russell's ability to implement intricate UI details precisely is impressive.",
    img: "https://avatar.vercel.sh/oliver",
  },
  {
    name: "Quinn R.",
    username: "@quinn_ecom",
    title: "E-commerce Manager, RetailFast",
    body: "Our conversion rates increased significantly after the site overhaul. Fantastic work!",
    img: "https://avatar.vercel.sh/quinn",
  },
  {
    name: "Sophia T.",
    username: "@sophia_health",
    title: "CEO, HealthWell",
    body: "Delivered a highly accessible and user-friendly platform crucial for our patients.",
    img: "https://avatar.vercel.sh/sophia",
  },
  {
    name: "Umar V.",
    username: "@umar_media",
    title: "Content Strategist, Media Group",
    body: "Collaborative, efficient, and technically brilliant. Made the project a success.",
    img: "https://avatar.vercel.sh/umar",
  },
  {
    name: "Willow X.",
    username: "@willow_edu",
    title: "Director, EduTech Platform",
    body: "The platform is scalable and robust, perfectly meeting our growing user base needs.",
    img: "https://avatar.vercel.sh/willow",
  },
];

// Split testimonials into four rows
const firstRow = testimonials.slice(0, 3);
const secondRow = testimonials.slice(3, 6);
const thirdRow = testimonials.slice(6, 9);
const fourthRow = testimonials.slice(9, 12);

// Updated Testimonial Card
const TestimonialCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4"
      }
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full grayscale"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium">{name}</figcaption>
          <p className="text-xs font-medium ">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function TestimonialsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="text-4xl font-bold font-serif text-start">
        Client Testimonials
      </h1>
      {/* Updated Layout based on Marquee3D example */}
      <div className="relative flex w-full flex-row items-center justify-center gap-4 overflow-hidden rounded-lg bg-background [perspective:500px]">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-[300]"></div>
        <div
          className="flex flex-row items-center gap-4 h-screen"
          style={{
            transform:
              "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(0deg)", // Adjusted rotateZ slightly
          }}
        >
          <Marquee
            pauseOnHover
            vertical
            className="[--duration:20s] [--gap:1rem]"
          >
            {firstRow.map((testimonial) => (
              <TestimonialCard key={testimonial.username} {...testimonial} />
            ))}
          </Marquee>
          <Marquee
            reverse
            pauseOnHover
            className="[--duration:20s] [--gap:1rem]"
            vertical
          >
            {secondRow.map((testimonial) => (
              <TestimonialCard key={testimonial.username} {...testimonial} />
            ))}
          </Marquee>
          <Marquee
            pauseOnHover
            className="[--duration:20s] [--gap:1rem]"
            vertical
          >
            {" "}
            {/* Kept alternating reverse for visual variety */}
            {thirdRow.map((testimonial) => (
              <TestimonialCard key={testimonial.username} {...testimonial} />
            ))}
          </Marquee>
          <Marquee
            reverse
            pauseOnHover
            className="[--duration:20s] [--gap:1rem]"
            vertical
          >
            {fourthRow.map((testimonial) => (
              <TestimonialCard key={testimonial.username} {...testimonial} />
            ))}
          </Marquee>
        </div>

        {/* Gradient Overlays */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </div>
  );
}
