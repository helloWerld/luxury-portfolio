export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="text-4xl font-bold font-serif mb-8">Resume</h1>

      <div className="text-center">
        <p className="text-foreground/80 mb-6">
          Download my latest resume to view my full qualifications and
          experience.
        </p>
        <a
          href="#" // Replace with actual path to resume PDF (e.g., /resume.pdf)
          download="YourName_Resume.pdf" // Optional: Suggest filename for download
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Download Resume (PDF)
        </a>
      </div>
    </div>
  );
}
