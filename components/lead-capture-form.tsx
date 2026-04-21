"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";

type FormData = {
  fullName: string;
  workEmail: string;
  phoneNumber: string;
  companyName: string;
  companySize: string;
  jobTitle: string;
  annualRevenue: string;
  officeAddress: string;
  activeSites: string;
  hearAboutUs: string;
};

const inputBase =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors";

const labelBase = "block text-sm font-medium text-foreground mb-1";

const errorBase = "mt-1 text-xs text-destructive";

export default function LeadCaptureForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (_data: FormData) => {
    // TODO: Implement tracking for PostHog/GTM here
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    router.push("/thank-you");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Full Name */}
      <div>
        <label className={labelBase}>
          Full Name <span className="text-destructive">*</span>
        </label>
        <input
          type="text"
          placeholder="Jane Smith"
          className={inputBase}
          {...register("fullName", { required: "Full name is required" })}
        />
        {errors.fullName && (
          <p className={errorBase}>{errors.fullName.message}</p>
        )}
      </div>

      {/* Work Email */}
      <div>
        <label className={labelBase}>
          Work Email <span className="text-destructive">*</span>
        </label>
        <input
          type="email"
          placeholder="jane@acme.com"
          className={inputBase}
          {...register("workEmail", {
            required: "Work email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          })}
        />
        {errors.workEmail && (
          <p className={errorBase}>{errors.workEmail.message}</p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label className={labelBase}>
          Phone Number <span className="text-destructive">*</span>
        </label>
        <input
          type="tel"
          placeholder="+1 555 000 0000"
          className={inputBase}
          {...register("phoneNumber", { required: "Phone number is required" })}
        />
        {errors.phoneNumber && (
          <p className={errorBase}>{errors.phoneNumber.message}</p>
        )}
      </div>

      {/* Company Name */}
      <div>
        <label className={labelBase}>
          Company Name <span className="text-destructive">*</span>
        </label>
        <input
          type="text"
          placeholder="Acme Construction Ltd."
          className={inputBase}
          {...register("companyName", { required: "Company name is required" })}
        />
        {errors.companyName && (
          <p className={errorBase}>{errors.companyName.message}</p>
        )}
      </div>

      {/* Company Size */}
      <div>
        <label className={labelBase}>
          Company Size <span className="text-destructive">*</span>
        </label>
        <select
          className={inputBase}
          defaultValue=""
          {...register("companySize", { required: "Please select a company size" })}
        >
          <option value="" disabled>Select company size</option>
          <option value="1-10">1–10 employees</option>
          <option value="11-50">11–50 employees</option>
          <option value="51-200">51–200 employees</option>
          <option value="201-500">201–500 employees</option>
          <option value="500+">500+ employees</option>
        </select>
        {errors.companySize && (
          <p className={errorBase}>{errors.companySize.message}</p>
        )}
      </div>

      {/* Job Title */}
      <div>
        <label className={labelBase}>
          Job Title <span className="text-destructive">*</span>
        </label>
        <input
          type="text"
          placeholder="Project Manager"
          className={inputBase}
          {...register("jobTitle", { required: "Job title is required" })}
        />
        {errors.jobTitle && (
          <p className={errorBase}>{errors.jobTitle.message}</p>
        )}
      </div>

      {/* Annual Revenue */}
      <div>
        <label className={labelBase}>
          Annual Revenue (USD) <span className="text-destructive">*</span>
        </label>
        <select
          className={inputBase}
          defaultValue=""
          {...register("annualRevenue", { required: "Please select a revenue range" })}
        >
          <option value="" disabled>Select revenue range</option>
          <option value="under-1m">Under $1M</option>
          <option value="1m-5m">$1M – $5M</option>
          <option value="5m-20m">$5M – $20M</option>
          <option value="20m-100m">$20M – $100M</option>
          <option value="100m+">$100M+</option>
        </select>
        {errors.annualRevenue && (
          <p className={errorBase}>{errors.annualRevenue.message}</p>
        )}
      </div>

      {/* Office Address */}
      <div>
        <label className={labelBase}>
          Office Address <span className="text-destructive">*</span>
        </label>
        <input
          type="text"
          placeholder="123 Main St, City, State, ZIP"
          className={inputBase}
          {...register("officeAddress", { required: "Office address is required" })}
        />
        {errors.officeAddress && (
          <p className={errorBase}>{errors.officeAddress.message}</p>
        )}
      </div>

      {/* Number of Active Sites */}
      <div>
        <label className={labelBase}>
          Number of Active Sites <span className="text-destructive">*</span>
        </label>
        <input
          type="number"
          min={0}
          placeholder="e.g. 12"
          className={inputBase}
          {...register("activeSites", {
            required: "Number of active sites is required",
            min: { value: 0, message: "Must be 0 or greater" },
          })}
        />
        {errors.activeSites && (
          <p className={errorBase}>{errors.activeSites.message}</p>
        )}
      </div>

      {/* How did you hear about us */}
      <div>
        <label className={labelBase}>
          How did you hear about us? <span className="text-destructive">*</span>
        </label>
        <textarea
          rows={3}
          placeholder="e.g. Google search, colleague recommendation, industry event…"
          className={`${inputBase} resize-none`}
          {...register("hearAboutUs", { required: "This field is required" })}
        />
        {errors.hearAboutUs && (
          <p className={errorBase}>{errors.hearAboutUs.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Submitting…" : "Request Demo"}
      </button>

      <p className="text-center text-xs text-muted-foreground">
        By submitting this form you agree to our Terms of Service and Privacy
        Policy.
      </p>
    </form>
  );
}
