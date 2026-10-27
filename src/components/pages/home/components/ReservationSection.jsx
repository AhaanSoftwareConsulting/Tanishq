import { useState } from "react";
import { useForm } from "react-hook-form";
import { submitReservation } from "../../../../api/wordpressApi";

const ReservationSection = () => {
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState(false);

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    mode: "onSubmit",
    defaultValues: { name: "", phone: "", date: "", guests: "", branch: "", message: "" },
  });

  const today = new Date();
  const minDate = [today.getFullYear(), String(today.getMonth() + 1).padStart(2, "0"), String(today.getDate()).padStart(2, "0")].join("-");

  const onSubmit = async (data) => {
    setSubmitMessage("");
    setSubmitError(false);

    try {
      const result = await submitReservation({
        name: data.name.trim(),
        phone: data.phone.trim(),
        date: data.date,
        guests: Number(data.guests),
        branch: data.branch,
        message: data.message.trim(),
      });

      setSubmitMessage(result.message || "Your reservation request has been submitted successfully!");
      reset();
    } catch (error) {
      console.error("Reservation error:", error);
      setSubmitError(true);
      setSubmitMessage(error.message || "Something went wrong. Please try again.");
    }
  };

  const labelClass = "mb-[9px] block font-['Work_Sans'] text-[16px] font-semibold leading-[1.4] text-[#40372F]";
  const inputClass = "h-[63px] w-full rounded-[12px] border border-transparent bg-[#F5EFE5] px-[22px] font-['Work_Sans'] text-[16px] text-[#40372F] outline-none transition-colors duration-300 placeholder:text-[#A69E93] focus:border-[#BD8747] focus:bg-white";
  const errorClass = "mt-2 font-['Work_Sans'] text-[12px] text-red-600";

  return (
    <section id="reserve-table" className="w-full bg-[#F5EFE5] px-4 py-[60px] sm:px-6 sm:py-[70px] lg:px-8 lg:py-[78px]">
      <div className="mx-auto w-full max-w-[1400px]">
        <h2 className="mb-[34px] text-center font-['Fraunces'] text-[34px] font-normal leading-[1.2] text-[#70451F] sm:mb-[42px] sm:text-[42px] md:text-[48px] lg:mb-[52px] lg:text-[60px]">Reserve Your Table</h2>

        {/* Centered container keeping the exact form width structure */}
        <div className="mx-auto max-w-[900px] min-w-0 bg-white p-5 sm:p-7 lg:p-[32px] xl:p-[36px] shadow-sm rounded-[16px]">
          <form onSubmit={handleSubmit(onSubmit)} onChange={() => { setSubmitMessage(""); setSubmitError(false); }} noValidate className="flex h-full flex-col">
            <div className="grid grid-cols-1 gap-x-[30px] gap-y-[28px] sm:grid-cols-2 lg:gap-x-[30px]">
              <div className="min-w-0">
                <label htmlFor="reservation-name" className={labelClass}>Your Name</label>
                <input id="reservation-name" type="text" placeholder="Enter your name" autoComplete="name" aria-invalid={Boolean(errors.name)} {...register("name", { required: "Please enter your name.", minLength: { value: 2, message: "Name must contain at least 2 characters." } })} className={`${inputClass} ${errors.name ? "border-red-500" : ""}`} />
                {errors.name && <p className={errorClass} role="alert">{errors.name.message}</p>}
              </div>

              <div className="min-w-0">
                <label htmlFor="reservation-phone" className={labelClass}>Your Phone Number</label>
                <input id="reservation-phone" type="tel" placeholder="Enter your phone number" autoComplete="tel" aria-invalid={Boolean(errors.phone)} {...register("phone", { required: "Please enter your phone number.", pattern: { value: /^[+]?[\d\s()-]{7,20}$/, message: "Please enter a valid phone number." } })} className={`${inputClass} ${errors.phone ? "border-red-500" : ""}`} />
                {errors.phone && <p className={errorClass} role="alert">{errors.phone.message}</p>}
              </div>

              <div className="min-w-0">
                <label htmlFor="reservation-date" className={labelClass}>Date</label>
                <input id="reservation-date" type="date" min={minDate} aria-invalid={Boolean(errors.date)} {...register("date", { required: "Please select a reservation date.", validate: (value) => value >= minDate || "Please select today or a future date." })} className={`${inputClass} [color-scheme:light] ${errors.date ? "border-red-500" : ""}`} />
                {errors.date && <p className={errorClass} role="alert">{errors.date.message}</p>}
              </div>

              <div className="min-w-0">
                <label htmlFor="reservation-guests" className={labelClass}>Number of guests</label>
                <input id="reservation-guests" type="number" min="1" max="50" step="1" placeholder="Enter number of guests" aria-invalid={Boolean(errors.guests)} {...register("guests", { required: "Please enter the number of guests.", setValueAs: (value) => value === "" ? "" : Number(value), validate: (value) => Number.isInteger(value) && value >= 1 && value <= 50 || "Enter a whole number between 1 and 50." })} className={`${inputClass} ${errors.guests ? "border-red-500" : ""}`} />
                {errors.guests && <p className={errorClass} role="alert">{errors.guests.message}</p>}
              </div>

              <div className="min-w-0 sm:col-span-2">
                <label htmlFor="reservation-branch" className={labelClass}>Select Branch</label>
                <select id="reservation-branch" aria-invalid={Boolean(errors.branch)} {...register("branch", { required: "Please select a restaurant branch.", validate: (value) => ["ho-chi-minh", "da-nang"].includes(value) || "Please select a valid restaurant branch." })} className={`${inputClass} cursor-pointer [color-scheme:light] ${errors.branch ? "border-red-500" : ""}`}>
                  <option value="">Choose a branch</option>
                  <option value="ho-chi-minh">Ho Chi Minh City</option>
                  <option value="da-nang">Da Nang City</option>
                </select>
                {errors.branch && <p className={errorClass} role="alert">{errors.branch.message}</p>}
              </div>
            </div>

            <div className="mt-[30px] flex flex-1 flex-col">
              <label htmlFor="reservation-message" className={labelClass}>Tell Us Something</label>
              <textarea id="reservation-message" placeholder="Tell us something" aria-invalid={Boolean(errors.message)} {...register("message", { maxLength: { value: 1000, message: "Message cannot exceed 1000 characters." } })} className={`min-h-[200px] w-full flex-1 resize-y rounded-[12px] border border-transparent bg-[#F5EFE5] px-[22px] py-[20px] font-['Work_Sans'] text-[16px] leading-[1.6] text-[#40372F] outline-none transition-colors duration-300 placeholder:text-[#A69E93] focus:border-[#BD8747] focus:bg-white sm:min-h-[240px] lg:min-h-[280px] ${errors.message ? "border-red-500" : ""}`} />
              {errors.message && <p className={errorClass} role="alert">{errors.message.message}</p>}
            </div>

            <div className="mt-[28px]">
              <button type="submit" disabled={isSubmitting} className="cursor-pointer inline-flex min-h-[62px] items-center justify-center rounded-full bg-[#603912] px-[34px] py-[16px] font-['Work_Sans'] text-[16px] font-medium text-white transition-all duration-300 hover:bg-[#855426] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#BD8747] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60">{isSubmitting ? "Submitting..." : "Request Reservation"}</button>
            </div>

            {submitMessage && <p role="status" aria-live="polite" className={`mt-4 font-['Work_Sans'] text-[14px] leading-relaxed ${submitError ? "text-red-600" : "text-[#70451F]"}`}>{submitMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;