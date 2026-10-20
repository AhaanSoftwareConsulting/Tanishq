import { useState } from "react";
import { useForm } from "react-hook-form";

import ContactImage from "../../../../assets/da-nang-restaurant.jpg";

const ContactForm = () => {
  const [submitMessage, setSubmitMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  // Handle contact form submission
  const onSubmit = async (data) => {
    setSubmitMessage("");

    try {
      // TODO: Connect your API or email service here.
      console.log("Contact Request:", data);

      setSubmitMessage("Thank you! We'll get back to you soon.");

      reset();
    } catch (error) {
      console.error("Contact form error:", error);

      setSubmitMessage("Something went wrong. Please try again.");
    }
  };

  // Common label styles
  const labelClass = `
    mb-[9px]
    block
    font-['Work_Sans']
    text-[16px]
    font-semibold
    leading-[1.4]
    text-[#40372F]
  `;

  // Common input styles
  const inputClass = `
    h-[63px]
    w-full
    rounded-[12px]
    border
    border-transparent
    bg-[#F5EFE5]
    px-[22px]
    font-['Work_Sans']
    text-[16px]
    text-[#40372F]
    outline-none
    transition-colors
    duration-300
    placeholder:text-[#A69E93]
    focus:border-[#BD8747]
    focus:bg-white
  `;

  // Validation error styles
  const errorClass =
    "mt-2 font-['Work_Sans'] text-[12px] leading-relaxed text-red-600";

  return (
    <section
      id="contact"
      className="
        w-full
        overflow-hidden
        bg-[#F5EFE5]
        px-4
        py-[60px]
        sm:px-6
        sm:py-[70px]
        lg:px-8
        lg:py-[78px]
      "
    >
      <div className="mx-auto w-full max-w-[1400px]">
        {/* Main Contact Layout */}
        <div
          className="
            grid
            grid-cols-1
            gap-6
            lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1fr)]
            lg:items-stretch
            lg:gap-[28px]
            xl:gap-[40px]
          "
        >
          {/* LEFT COLUMN: IMAGE */}
          <div
            className="
              group
              relative
              h-[320px]
              min-w-0
              overflow-hidden
              sm:h-[420px]
              lg:h-full
              lg:min-h-[700px]
            "
          >
            <img
              src={ContactImage}
              alt="Dining area at Tanishq Indian Restaurant"
              loading="lazy"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
                transition-transform
                duration-700
                ease-out
                group-hover:scale-[1.03]
              "
            />
          </div>

          {/* RIGHT COLUMN: CONTACT CONTENT */}
          <div className="flex min-w-0 flex-col">
            {/* Section Heading */}
            <h2
              className="
                font-['Fraunces']
                text-[34px]
                font-normal
                leading-[1.2]
                text-[#70451F]
                sm:text-[42px]
                md:text-[48px]
                lg:text-[54px]
                xl:text-[60px]
              "
            >
              How Can We Help You?
            </h2>

            {/* Section Description */}
            <p
              className="
                mt-[18px]
                max-w-[580px]
                font-['Work_Sans']
                text-[15px]
                font-normal
                leading-[1.8]
                text-[#7A7167]
                sm:text-[16px]
                lg:text-[17px]
              "
            >
              Have a question or a special request? Send us a message, and our
              team will get back to you.
            </p>

            {/* CONTACT FORM CARD */}
            <div
              className="
                mt-[28px]
                flex-1
                bg-white
                p-5
                sm:p-7
                lg:mt-[32px]
                lg:p-[28px]
                xl:p-[32px]
              "
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                onChange={() => setSubmitMessage("")}
                noValidate
                className="flex h-full flex-col"
              >
                {/* Name, Phone and Email */}
                <div className="flex flex-col gap-[24px]">
                  {/* Name */}
                  <div className="min-w-0">
                    <label htmlFor="contact-name" className={labelClass}>
                      Your Name
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Enter your name"
                      autoComplete="name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={
                        errors.name ? "contact-name-error" : undefined
                      }
                      {...register("name", {
                        required: "Please enter your name.",
                        minLength: {
                          value: 2,
                          message: "Name must contain at least 2 characters.",
                        },
                      })}
                      className={`
                        ${inputClass}
                        ${errors.name ? "border-red-500" : ""}
                      `}
                    />

                    {errors.name && (
                      <p
                        id="contact-name-error"
                        className={errorClass}
                        role="alert"
                      >
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="min-w-0">
                    <label htmlFor="contact-phone" className={labelClass}>
                      Phone Number
                    </label>

                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      autoComplete="tel"
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={
                        errors.phone ? "contact-phone-error" : undefined
                      }
                      {...register("phone", {
                        required: "Please enter your phone number.",
                        pattern: {
                          value: /^[+]?[0-9\s()-]{7,20}$/,
                          message: "Please enter a valid phone number.",
                        },
                      })}
                      className={`
                        ${inputClass}
                        ${errors.phone ? "border-red-500" : ""}
                      `}
                    />

                    {errors.phone && (
                      <p
                        id="contact-phone-error"
                        className={errorClass}
                        role="alert"
                      >
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="min-w-0">
                    <label htmlFor="contact-email" className={labelClass}>
                      Email
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      placeholder="Enter your email"
                      autoComplete="email"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={
                        errors.email ? "contact-email-error" : undefined
                      }
                      {...register("email", {
                        required: "Please enter your email.",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email address.",
                        },
                      })}
                      className={`
                        ${inputClass}
                        ${errors.email ? "border-red-500" : ""}
                      `}
                    />

                    {errors.email && (
                      <p
                        id="contact-email-error"
                        className={errorClass}
                        role="alert"
                      >
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="min-w-0">
                    <label htmlFor="contact-message" className={labelClass}>
                      Message
                    </label>

                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="Tell us something"
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={
                        errors.message ? "contact-message-error" : undefined
                      }
                      {...register("message", {
                        maxLength: {
                          value: 1000,
                          message: "Message cannot exceed 1000 characters.",
                        },
                      })}
                      className={`
                        min-h-[180px]
                        w-full
                        resize-y
                        rounded-[12px]
                        border
                        border-transparent
                        bg-[#F5EFE5]
                        px-[22px]
                        py-[20px]
                        font-['Work_Sans']
                        text-[16px]
                        leading-[1.6]
                        text-[#40372F]
                        outline-none
                        transition-colors
                        duration-300
                        placeholder:text-[#A69E93]
                        focus:border-[#BD8747]
                        focus:bg-white
                        ${errors.message ? "border-red-500" : ""}
                        sm:min-h-[200px]
                      `}
                    />

                    {errors.message && (
                      <p
                        id="contact-message-error"
                        className={errorClass}
                        role="alert"
                      >
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-[28px] flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="
                      inline-flex
                      min-h-[62px]
                      w-full
                      items-center
                      justify-center
                      rounded-full
                      bg-[#603912]
                      px-[30px]
                      py-[16px]
                      font-['Work_Sans']
                      text-[15px]
                      font-medium
                      text-white
                      transition-all
                      duration-300
                      hover:bg-[#855426]
                      hover:shadow-md
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#BD8747]
                      focus:ring-offset-2
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                      sm:w-auto
                      sm:min-w-[237px]
                    "
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>

                {/* Submission Feedback */}
                {submitMessage && (
                  <p
                    role="status"
                    aria-live="polite"
                    className="
                      mt-4
                      font-['Work_Sans']
                      text-[14px]
                      leading-relaxed
                      text-[#70451F]
                    "
                  >
                    {submitMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
