import { useState } from "react";
import { useForm } from "react-hook-form";
import { MapPin, Phone } from "@phosphor-icons/react";

import reservationImage from "../../../../assets/ReservationImage.png";

const ReservationSection = () => {
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
      date: "",
      guests: "",
      message: "",
    },
  });

  const today = new Date();
  const minDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  const onSubmit = async (data) => {
    setSubmitMessage("");

    try {
      // Replace this with your reservation API.
      console.log("Reservation Details:", data);

      setSubmitMessage(
        "Your reservation request has been submitted successfully!"
      );

      reset();
    } catch (error) {
      console.error("Reservation error:", error);

      setSubmitMessage(
        "Something went wrong. Please try again."
      );
    }
  };

  const labelClass =
    "mb-[9px] block font-['Work_Sans'] text-[16px] font-semibold leading-[1.4] text-[#40372F]";

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

  const errorClass =
    "mt-2 font-['Work_Sans'] text-[12px] text-red-600";

  return (
    <section className="w-full bg-[#F5EFE5] px-4 py-[60px] sm:px-6 sm:py-[70px] lg:px-8 lg:py-[78px]">
      <div className="mx-auto w-full max-w-[1400px]">

        {/* Section Heading */}
        <h2
          className="
            mb-[34px]
            text-center
            font-['Fraunces']
            text-[34px]
            font-normal
            leading-[1.2]
            text-[#70451F]
            sm:mb-[42px]
            sm:text-[42px]
            md:text-[48px]
            lg:mb-[52px]
            lg:text-[60px]
          "
        >
          Reserve Your Table
        </h2>

        {/* Main Reservation Layout */}
        <div
          className="
            grid
            grid-cols-1
            gap-6
            lg:grid-cols-[minmax(0,0.48fr)_minmax(0,1fr)]
            lg:gap-[28px]
            xl:gap-[28px]
          "
        >

          {/* ========================================
              LEFT COLUMN
          ======================================== */}
          <div className="flex min-w-0 flex-col gap-[28px]">

            {/* Contact Information Card */}
            <div
              className="
                bg-white
                px-[22px]
                py-[24px]
                sm:px-[26px]
                sm:py-[26px]
                lg:min-h-[256px]
                lg:px-[22px]
                lg:py-[22px]
                xl:px-[22px]
                xl:py-[22px]
              "
            >

              {/* Address */}
              <div className="flex items-start gap-[16px]">

                <span
                  className="
                    mt-[1px]
                    flex
                    h-[33px]
                    w-[33px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#BD8747]
                    text-black
                  "
                >
                  <MapPin size={19} weight="fill" />
                </span>

                <div className="min-w-0 flex-1">

                  <h3
                    className="
                      font-['Fraunces']
                      text-[20px]
                      font-medium
                      leading-[1.4]
                      text-[#394968]
                    "
                  >
                    Address:
                  </h3>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=258+Ly+Tu+Trong+Ben+Thanh+Ward+District+1+Ho+Chi+Minh+City"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-[16px]
                      block
                      font-['Work_Sans']
                      text-[16px]
                      leading-[1.8]
                      text-[#49433D]
                      transition-colors
                      duration-300
                      hover:text-[#A46A2D]
                    "
                  >
                    258 Lý Tự Trọng, Bến Thành Ward,
                    District 1, Ho Chi Minh City 700000
                  </a>

                </div>
              </div>

              {/* Phone */}
              <div className="mt-[30px] flex items-start gap-[16px]">

                <span
                  className="
                    mt-[1px]
                    flex
                    h-[33px]
                    w-[33px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#BD8747]
                    text-black
                  "
                >
                  <Phone size={19} weight="fill" />
                </span>

                <div>

                  <h3
                    className="
                      font-['Fraunces']
                      text-[20px]
                      font-medium
                      leading-[1.4]
                      text-[#394968]
                    "
                  >
                    Phone:
                  </h3>

                  <a
                    href="tel:+84775019036"
                    className="
                      mt-[16px]
                      block
                      font-['Work_Sans']
                      text-[16px]
                      leading-[1.5]
                      text-[#49433D]
                      transition-colors
                      duration-300
                      hover:text-[#A46A2D]
                    "
                  >
                    +84 775 019 036
                  </a>

                </div>
              </div>

            </div>

            {/* Food Image */}
            <div
              className="
                group
                relative
                h-[320px]
                w-full
                overflow-hidden
                sm:h-[380px]
                lg:h-[422px]
                xl:h-[422px]
              "
            >
              <img
                src={reservationImage}
                alt="Delicious Indian vegetarian food"
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

          </div>

          {/* ========================================
              RIGHT COLUMN: RESERVATION FORM
          ======================================== */}
          <div className="min-w-0 bg-white p-5 sm:p-7 lg:p-[22px] xl:p-[22px]">

            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="flex h-full flex-col"
            >

              {/* Name and Phone */}
              <div className="grid grid-cols-1 gap-x-[30px] gap-y-[28px] sm:grid-cols-2 lg:gap-x-[30px]">

                {/* Name */}
                <div className="min-w-0">

                  <label
                    htmlFor="reservation-name"
                    className={labelClass}
                  >
                    Your Name
                  </label>

                  <input
                    id="reservation-name"
                    type="text"
                    placeholder="Enter your name"
                    autoComplete="name"
                    aria-invalid={Boolean(errors.name)}
                    {...register("name", {
                      required: "Please enter your name.",
                      minLength: {
                        value: 2,
                        message:
                          "Name must contain at least 2 characters.",
                      },
                    })}
                    className={inputClass}
                  />

                  {errors.name && (
                    <p className={errorClass}>
                      {errors.name.message}
                    </p>
                  )}

                </div>

                {/* Phone Number */}
                <div className="min-w-0">

                  <label
                    htmlFor="reservation-phone"
                    className={labelClass}
                  >
                    Your Phone Number
                  </label>

                  <input
                    id="reservation-phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    aria-invalid={Boolean(errors.phone)}
                    {...register("phone", {
                      required:
                        "Please enter your phone number.",
                      pattern: {
                        value: /^[+]?[\d\s()-]{7,20}$/,
                        message:
                          "Please enter a valid phone number.",
                      },
                    })}
                    className={inputClass}
                  />

                  {errors.phone && (
                    <p className={errorClass}>
                      {errors.phone.message}
                    </p>
                  )}

                </div>

                {/* Reservation Date */}
                <div className="min-w-0">

                  <label
                    htmlFor="reservation-date"
                    className={labelClass}
                  >
                    Date
                  </label>

                  <input
                    id="reservation-date"
                    type="date"
                    min={minDate}
                    aria-invalid={Boolean(errors.date)}
                    {...register("date", {
                      required:
                        "Please select a reservation date.",
                      validate: (value) =>
                        value >= minDate ||
                        "Please select today or a future date.",
                    })}
                    className={`${inputClass} [color-scheme:light]`}
                  />

                  {errors.date && (
                    <p className={errorClass}>
                      {errors.date.message}
                    </p>
                  )}

                </div>

                {/* Number of Guests */}
                <div className="min-w-0">

                  <label
                    htmlFor="reservation-guests"
                    className={labelClass}
                  >
                    Number of guests
                  </label>

                  <input
                    id="reservation-guests"
                    type="number"
                    min="1"
                    max="50"
                    step="1"
                    placeholder="Enter number of guests"
                    aria-invalid={Boolean(errors.guests)}
                    {...register("guests", {
                      required:
                        "Please enter the number of guests.",
                      setValueAs: (value) =>
                        value === "" ? "" : Number(value),
                      validate: {
                        validNumber: (value) =>
                          (Number.isInteger(value) &&
                            value >= 1 &&
                            value <= 50) ||
                          "Enter a whole number between 1 and 50.",
                      },
                    })}
                    className={inputClass}
                  />

                  {errors.guests && (
                    <p className={errorClass}>
                      {errors.guests.message}
                    </p>
                  )}

                </div>

              </div>

              {/* Additional Message */}
              <div className="mt-[30px] flex flex-1 flex-col">

                <label
                  htmlFor="reservation-message"
                  className={labelClass}
                >
                  Tell Us Something
                </label>

                <textarea
                  id="reservation-message"
                  placeholder="Tell us something"
                  aria-invalid={Boolean(errors.message)}
                  {...register("message", {
                    maxLength: {
                      value: 1000,
                      message:
                        "Message cannot exceed 1000 characters.",
                    },
                  })}
                  className="
                    min-h-[200px]
                    w-full
                    flex-1
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
                    sm:min-h-[240px]
                    lg:min-h-[280px]
                    xl:min-h-[280px]
                  "
                />

                {errors.message && (
                  <p className={errorClass}>
                    {errors.message.message}
                  </p>
                )}

              </div>

              {/* Submit Button */}
              <div className="mt-[28px]">

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    inline-flex
                    min-h-[62px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#603912]
                    px-[34px]
                    py-[16px]
                    font-['Work_Sans']
                    text-[16px]
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
                  "
                >
                  {isSubmitting
                    ? "Submitting..."
                    : "Request Reservation"}
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
    </section>
  );
};

export default ReservationSection;