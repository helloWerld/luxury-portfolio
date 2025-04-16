"use server"; // Mark this file as containing Server Actions

import { createClient } from "@supabase/supabase-js";
import { z } from "zod"; // Using Zod for validation

// Define schema for validation
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

// Define return type for the action
export type FormState = {
  status: "idle" | "success" | "error";
  message: string | null;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  console.log("Server Action: submitContactForm invoked.");

  // Validate form data
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  // If validation fails, return errors
  if (!validatedFields.success) {
    const fieldErrors = validatedFields.error.flatten().fieldErrors;
    console.error("Server Action: Validation failed", fieldErrors);
    return {
      status: "error",
      message: "Invalid input. Please correct the errors below.", // Generic message
      errors: fieldErrors, // Pass detailed errors back to the form
    };
  }

  // If validation passes, proceed to insert data
  const { name, email, message } = validatedFields.data;

  // IMPORTANT: Use Service Role Key for server-side inserts to bypass RLS
  // This assumes you have SUPABASE_SERVICE_ROLE_KEY set in your Vercel environment variables
  // You should NOT expose the service role key publicly
  // Ensure these env vars are available where this action runs (Vercel dashboard)
  const supabaseServiceUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseServiceUrl || !supabaseServiceKey) {
    console.error("Server Action: Missing Supabase service credentials.");
    return {
      status: "error",
      message: "Server configuration error. Could not process submission.",
    };
  }

  const supabaseService = createClient(supabaseServiceUrl, supabaseServiceKey);

  const { error } = await supabaseService
    .from("contact_submissions")
    .insert([{ name, email, message }]);

  if (error) {
    console.error("Server Action: Supabase insert error:", error);
    return {
      status: "error",
      message:
        "Database error: Could not save submission. Please try again later.",
    };
  }

  console.log("Server Action: Submission successful");
  // Optionally, trigger an email notification here using Resend/SendGrid etc.

  return {
    status: "success",
    message: "Message sent successfully! Thank you.",
  };
}
