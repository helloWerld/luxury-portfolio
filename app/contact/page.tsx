"use client";

import { useActionState } from "react";
import { submitContactForm } from "../actions";
import { FormState } from "../actions";

export default function ContactPage() {
  const initialState: FormState = {
    status: "idle",
    message: null,
  };

  const [state, formAction] = useActionState(submitContactForm, initialState);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="text-4xl font-bold font-serif mb-8">Contact</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <section>
          <h2 className="text-2xl font-semibold font-serif mb-4">
            Get In Touch
          </h2>
          <p className="text-foreground/80 mb-6">
            {/* TODO: Replace with contact message */}
            Have a project in mind or want to discuss an opportunity? Fill out
            the form or reach out via social media.
          </p>
          {/* TODO: Replace with actual ContactForm component later */}
          <form action={formAction} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground/80 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 border border-secondary/30 rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
              />
              {state.errors?.name && (
                <p className="mt-1 text-sm text-red-500">
                  {state.errors.name[0]}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground/80 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-secondary/30 rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
              />
              {state.errors?.email && (
                <p className="mt-1 text-sm text-red-500">
                  {state.errors.email[0]}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground/80 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-3 py-2 border border-secondary/30 rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
              ></textarea>
              {state.errors?.message && (
                <p className="mt-1 text-sm text-red-500">
                  {state.errors.message[0]}
                </p>
              )}
            </div>
            {state.message && (
              <p
                className={`text-sm ${
                  state.status === "success" ? "text-green-500" : "text-red-500"
                }`}
              >
                {state.message}
              </p>
            )}
            <button
              type="submit"
              disabled={state.status === "success"}
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.status === "success" ? "Message Sent" : "Send Message"}
            </button>
          </form>
        </section>

        <section>
          <h2 className="text-2xl font-semibold font-serif mb-4">Connect</h2>
          <p className="text-foreground/80 mb-6">Follow me on social media:</p>
          {/* TODO: Add actual social links and icons */}
          <div className="flex flex-col space-y-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/russelltrzaska/"
              className="text-foreground/80 hover:text-foreground/90 flex items-center space-x-2"
            >
              {/* Placeholder Icon */}
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/hellowerld_eth"
              className="text-foreground/80 hover:text-foreground/90 flex items-center space-x-2"
            >
              {/* Placeholder Icon */}
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
              <span>X (Twitter)</span>
            </a>
            <a
              href="https://github.com/helloWerld"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground/90 flex items-center space-x-2"
            >
              {/* Placeholder Icon */}
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.201 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span>GitHub</span>
            </a>
            {/* Add other social links (YouTube, Facebook) here */}
          </div>
        </section>
      </div>
    </div>
  );
}
