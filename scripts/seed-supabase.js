require("dotenv").config({ path: ".env.local" }); // Load .env.local
const { createClient } = require("@supabase/supabase-js");

// --- Initialize Supabase Client ---

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error(
    "Missing environment variable: NEXT_PUBLIC_SUPABASE_URL. Make sure it is set in .env.local"
  );
}
if (!supabaseAnonKey) {
  throw new Error(
    "Missing environment variable: NEXT_PUBLIC_SUPABASE_ANON_KEY. Make sure it is set in .env.local"
  );
}

// Create the Supabase client within the script
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// --- Sample Project Data ---

// Helper function to create placeholder image URLs
const placeholderImageUrl = (width = 600, height = 400) => {
  // Using picsum.photos for random placeholders
  // Adding a random query param to try and avoid browser caching issues if needed
  return `https://picsum.photos/${width}/${height}?random=${Math.random()}`;
};

const sampleProjects = [
  {
    title: "Palm Beach Youth Ballet Website Redesign",
    slug: "palm-beach-youth-ballet-website-redesign",
    thumbnail_url: placeholderImageUrl(600, 400),
    description:
      "Elegant website redesign focusing on enrollment and donations for a prestigious youth ballet organization.",
    body: "Detailed case study text about the challenges, solutions, and positive outcomes for the Palm Beach Youth Ballet website project. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    tech_stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "Framer Motion",
    ],
    role: "Lead Full Stack Developer",
    outcomes:
      "Increased online enrollment by 30% and streamlined the donation process.",
  },
  {
    title: "Wellington Equestrian Club Member Portal",
    slug: "wellington-equestrian-club-member-portal",
    thumbnail_url: placeholderImageUrl(600, 400),
    description:
      "Developed a secure members-only portal for event registration and communication for an elite equestrian club.",
    body: "This project involved creating a sophisticated authentication system and feature-rich dashboard for members. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    tech_stack: ["Next.js", "Supabase Auth", "PostgreSQL", "Tailwind CSS"],
    role: "Full Stack Developer",
    outcomes:
      "Improved member engagement and reduced administrative overhead for event management.",
  },
  {
    title: "Ocean Reef Luxury Private School Admissions Platform",
    slug: "ocean-reef-private-school-admissions",
    thumbnail_url: placeholderImageUrl(600, 400),
    description:
      "Built a seamless online admissions platform enhancing the application experience for a high-end private school.",
    body: "Focused on intuitive UI/UX and robust backend processing for handling sensitive application data. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    tech_stack: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    role: "Backend Developer",
    outcomes:
      "Simplified the admissions workflow for both parents and administrators.",
  },
  {
    title: "Jupiter Island Yacht Club Regatta Management App",
    slug: "jupiter-island-yacht-club-regatta-app",
    thumbnail_url: placeholderImageUrl(600, 400),
    description:
      "Created a web application for managing regatta schedules, participants, and results for a prestigious yacht club.",
    body: "Included real-time updates and mobile-friendly design for use during events. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    tech_stack: ["Next.js", "Supabase Realtime", "TypeScript", "Tailwind CSS"],
    role: "Lead Full Stack Developer",
    outcomes:
      "Enhanced participant experience and provided organizers with efficient management tools.",
  },
  {
    title: "The Society Gala Charity Auction Platform",
    slug: "society-gala-charity-auction-platform",
    thumbnail_url: placeholderImageUrl(600, 400),
    description:
      "Developed an online auction platform for a major philanthropic foundation's annual black-tie gala.",
    body: "Integrated secure payment processing and real-time bidding features. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    tech_stack: ["Next.js", "Stripe Integration", "Supabase", "Tailwind CSS"],
    role: "Full Stack Developer",
    outcomes:
      "Significantly increased auction revenue compared to previous years.",
  },
  {
    title: "Azure Wellness Retreat Booking System",
    slug: "azure-wellness-retreat-booking-system",
    thumbnail_url: placeholderImageUrl(600, 400),
    description:
      "Designed and built a custom booking and scheduling system for a boutique luxury wellness retreat.",
    body: "Focused on creating a calming and intuitive user interface aligned with the brand's luxury image. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    tech_stack: ["React", "Firebase", "Styled Components", "Framer Motion"],
    role: "Frontend Developer & UI Designer",
    outcomes: "Streamlined the booking process and increased direct bookings.",
  },
  {
    title: "Prestige Concierge Medicine Patient Portal",
    slug: "prestige-concierge-medicine-portal",
    thumbnail_url: placeholderImageUrl(600, 400),
    description:
      "Created a secure patient portal for appointment scheduling and communication with a high-end concierge medical practice.",
    body: "Ensured HIPAA compliance and a high level of data security. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    tech_stack: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
    role: "Full Stack Developer",
    outcomes: "Improved patient communication and satisfaction.",
  },
  {
    title: "Royal Paws Luxury Pet Grooming Scheduler",
    slug: "royal-paws-pet-grooming-scheduler",
    thumbnail_url: placeholderImageUrl(600, 400),
    description:
      "Developed an online scheduling application for a luxury mobile pet grooming service.",
    body: "Included automated reminders and optimized routing logic. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    tech_stack: ["Vue.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    role: "Full Stack Developer",
    outcomes: "Increased booking efficiency and customer retention.",
  },
  {
    title: "Exclusive Vintage Car Club Showcase Site",
    slug: "exclusive-vintage-car-club-showcase",
    thumbnail_url: placeholderImageUrl(600, 400),
    description:
      "Built a visually stunning showcase website for an exclusive vintage automobile club, featuring high-resolution galleries.",
    body: "Emphasized performance and visual appeal to match the luxury vehicles. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    tech_stack: ["Next.js", "Tailwind CSS", "Cloudinary", "Framer Motion"],
    role: "Frontend Developer",
    outcomes:
      "Attracted new high-profile members and improved online brand image.",
  },
  {
    title: "Private Jet Charter Booking Interface",
    slug: "private-jet-charter-booking-interface",
    thumbnail_url: placeholderImageUrl(600, 400),
    description:
      "Designed a sleek and efficient user interface for a private jet charter booking platform.",
    body: "Focused on simplifying a complex booking process for HNW individuals. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    tech_stack: ["React", "TypeScript", "Figma", "Tailwind CSS"],
    role: "UI/UX Designer & Frontend Developer",
    outcomes: "Reduced booking errors and improved user conversion rates.",
  },
];

// --- Seeding Function ---

async function seedDatabase() {
  console.log("Attempting to seed projects...");

  // Optional: Clear existing projects first (BE VERY CAREFUL WITH THIS IN PRODUCTION!)
  // console.log('Deleting existing projects...');
  // const { error: deleteError } = await supabase.from('projects').delete().neq('id', 0); // delete all rows
  // if (deleteError) {
  //   console.error('Error deleting existing projects:', deleteError);
  //   return;
  // }
  // console.log('Existing projects deleted.');

  // Insert new sample projects
  console.log(`Inserting ${sampleProjects.length} projects...`);
  const { data, error } = await supabase
    .from("projects")
    .insert(sampleProjects)
    .select(); // Use select() to get the inserted data back if needed

  if (error) {
    console.error("Error seeding projects:", error);
    // Log more details if available
    if (error.details) console.error("Details:", error.details);
    if (error.hint) console.error("Hint:", error.hint);
  } else {
    console.log(`Successfully seeded ${data?.length || 0} projects.`);
    // console.log('Inserted data:', data); // Optional: log the inserted data
  }
}

// --- Run the Seeding Function ---

seedDatabase();
