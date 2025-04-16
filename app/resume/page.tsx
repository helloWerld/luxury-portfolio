export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="text-4xl font-bold font-serif mb-8">Resume</h1>

      <div className="text-center">
        {/* TODO: Replace with actual download link or embed resume */}
        <p className="text-foreground/80 mb-6">
          Download my latest resume to view my full qualifications and
          experience.
        </p>
        <a
          href="#" // Replace with actual path to resume PDF (e.g., /resume.pdf)
          download="YourName_Resume.pdf" // Optional: Suggest filename for download
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Download Resume (PDF)
        </a>
        {/* --- OR --- */}
        {/* You could alternatively embed the resume here using an iframe or a PDF viewer component, */}
        {/* but a simple download link is often preferred for accessibility and ease of use. */}
        {/* <div className="mt-8 aspect-w-16 aspect-h-9"> */}
        {/*  <iframe src="/resume.pdf" className="w-full h-full" title="Resume"></iframe> */}
        {/* </div> */}
      </div>
    </div>
  );
}
