"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import { submitContactForm, FormState } from "@/app/actions"; // Import action and type

// Initial state for the form
const initialState: FormState = {
  status: "idle",
  message: null,
};

// Separate component for the submit button to use useFormStatus
function SubmitButton() {
  const { pending } = useFormStatus(); // Hook to check form submission status
  return (
    <button
      type="submit"
      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-70"
      disabled={pending} // Disable button when pending
      aria-disabled={pending}
    >
      {pending ? "Sending..." : "Send Message"}
    </button>
  );
}

export default function ContactForm() {
  // useFormState hook to manage form state based on Server Action result
  const [state, formAction] = useFormState(submitContactForm, initialState);

  // Optional: Log state changes for debugging
  useEffect(() => {
    console.log("Form state changed:", state);
    if (state.status === "success") {
      // Optionally clear the form on success
      // (Requires making input values controlled by state within this component again,
      // or resetting the form element directly if needed - keeping it simple for now)
      // e.g., (document.getElementById('contact-form') as HTMLFormElement)?.reset();
    }
  }, [state]);

  return (
    // Pass the formAction to the form's action attribute
    <form id="contact-form" action={formAction} className="space-y-4">
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
          name="name" // Name attribute is crucial for FormData
          required
          className="w-full px-3 py-2 border border-secondary/30 rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 disabled:opacity-50"
          aria-describedby="name-error"
        />
        {/* Display validation errors */}
        <div id="name-error" aria-live="polite" aria-atomic="true">
          {state.errors?.name &&
            state.errors.name.map((error: string) => (
              <p className="mt-1 text-xs text-red-600" key={error}>
                {error}
              </p>
            ))}
        </div>
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
          className="w-full px-3 py-2 border border-secondary/30 rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 disabled:opacity-50"
          aria-describedby="email-error"
        />
        <div id="email-error" aria-live="polite" aria-atomic="true">
          {state.errors?.email &&
            state.errors.email.map((error: string) => (
              <p className="mt-1 text-xs text-red-600" key={error}>
                {error}
              </p>
            ))}
        </div>
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
          className="w-full px-3 py-2 border border-secondary/30 rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 disabled:opacity-50"
          aria-describedby="message-error"
        ></textarea>
        <div id="message-error" aria-live="polite" aria-atomic="true">
          {state.errors?.message &&
            state.errors.message.map((error: string) => (
              <p className="mt-1 text-xs text-red-600" key={error}>
                {error}
              </p>
            ))}
        </div>
      </div>

      {/* Submit Button & Status Messages */}
      <div>
        <SubmitButton /> {/* Use the separate button component */}
        {/* Display general success/error messages from the action */}
        {state.status === "success" && (
          <p className="mt-2 text-sm text-green-600">{state.message}</p>
        )}
        {/* Display error only if it's not a validation error (which are shown above) */}
        {state.status === "error" && !state.errors && (
          <p className="mt-2 text-sm text-red-600">{state.message}</p>
        )}
      </div>
    </form>
  );
}
