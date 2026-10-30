import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import ContactImage from "../../../../assets/da-nang-restaurant.jpg";

// EmailJS Configuration
const SERVICE_ID = "service_ghnllln";
const CONTACT_TEMPLATE_ID = "template_c5dk24h";
const AUTOREPLY_TEMPLATE_ID = "template_6vp0mnb";
const PUBLIC_KEY = "0ySl1H_j-39V1WtSS";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    // EmailJS template variables
    const templateParams = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      title: "New Contact Form Enquiry",
      time: new Date().toLocaleString(),
    };

    try {
      // 1. Send the enquiry email to the restaurant
      await emailjs.send(
        SERVICE_ID,
        CONTACT_TEMPLATE_ID,
        templateParams,
        {
          publicKey: PUBLIC_KEY,
        }
      );

      // 2. Send a thank-you email to the customer
      try {
        await emailjs.send(
          SERVICE_ID,
          AUTOREPLY_TEMPLATE_ID,
          templateParams,
          {
            publicKey: PUBLIC_KEY,
          }
        );

        setSuccessMessage(
          "Thank you for contacting us! Your message has been sent successfully. A confirmation email has also been sent to you."
        );
      } catch (autoReplyError) {
        console.error("Auto-reply email failed:", autoReplyError);

        // The restaurant email was already sent successfully.
        setSuccessMessage(
          "Thank you for contacting us! Your message has been sent successfully."
        );
      }

      reset();
    } catch (error) {
      console.error("Contact email failed:", error);

      setErrorMessage(
        "Sorry, we could not send your message. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const labelClass =
    "mb-2 block text-sm font-medium text-[#2F2116]";

  const inputClass =
    "w-full rounded-lg border border-[#D8C7B5] bg-white/80 px-4 py-3 text-sm text-[#2F2116] outline-none transition placeholder:text-[#9A8979] focus:border-[#A66B32] focus:ring-2 focus:ring-[#A66B32]/20";

  const errorClass = "mt-1 text-xs text-red-600";

  return (
    <section className="w-full bg-[#F7ECDD] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">

        {/* Left Side - Image */}
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={ContactImage}
            alt="Tanishq Indian Vegetarian Restaurant"
            className="h-[320px] w-full object-cover sm:h-[450px] lg:h-[600px]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 p-6 sm:p-8 lg:p-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#F0C987]">
              Tanishq Indian Vegetarian Restaurant
            </p>

            <h2 className="max-w-md font-[Fraunces] text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl">
              We would love to hear from you.
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-white/85 sm:text-base">
              Have a question, a special request, or need assistance?
              Send us a message and our team will be happy to help.
            </p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full">
          <div className="mb-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#A66B32]">
              Get In Touch
            </p>

            <h2 className="font-[Fraunces] text-3xl font-medium leading-tight text-[#2F2116] sm:text-4xl lg:text-5xl">
              Contact Us
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#705C49] sm:text-base">
              Fill out the form below and let us know how we can assist you.
              We look forward to hearing from you.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className={labelClass}>
                Full Name <span className="text-red-500">*</span>
              </label>

              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                autoComplete="name"
                className={inputClass}
                {...register("name", {
                  required: "Please enter your name.",
                  minLength: {
                    value: 2,
                    message: "Name must contain at least 2 characters.",
                  },
                })}
              />

              {errors.name && (
                <p className={errorClass}>{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className={labelClass}>
                Email Address <span className="text-red-500">*</span>
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                autoComplete="email"
                className={inputClass}
                {...register("email", {
                  required: "Please enter your email address.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address.",
                  },
                })}
              />

              {errors.email && (
                <p className={errorClass}>{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone Number <span className="text-red-500">*</span>
              </label>

              <input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                autoComplete="tel"
                className={inputClass}
                {...register("phone", {
                  required: "Please enter your phone number.",
                  minLength: {
                    value: 7,
                    message: "Phone number must contain at least 7 characters.",
                  },
                  maxLength: {
                    value: 20,
                    message: "Phone number cannot exceed 20 characters.",
                  },
                })}
              />

              {errors.phone && (
                <p className={errorClass}>{errors.phone.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className={labelClass}>
                Your Message <span className="text-red-500">*</span>
              </label>

              <textarea
                id="message"
                rows={5}
                placeholder="How can we help you?"
                className={`${inputClass} resize-y`}
                {...register("message", {
                  required: "Please enter your message.",
                  minLength: {
                    value: 10,
                    message: "Message must contain at least 10 characters.",
                  },
                })}
              />

              {errors.message && (
                <p className={errorClass}>{errors.message.message}</p>
              )}
            </div>

            {/* Success Message */}
            {successMessage && (
              <div
                role="status"
                aria-live="polite"
                className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm leading-6 text-green-800"
              >
                {successMessage}
              </div>
            )}

            {/* Error Message */}
            {errorMessage && (
              <div
                role="alert"
                className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
              >
                {errorMessage}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center rounded-lg bg-[#603912] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#43250E] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="mr-2 h-5 w-5 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />

                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>

                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

