import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import ButtonSignature from "../ui/button_signature";

// 1. Define the shape of our form data
type FormInputs = {
  userName: string;
  userEmail: string;
  projectType:
    | "Rest API Development"
    | "Prototype Design"
    | "CLI Development / Automation";
  message: string;
};

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  // 2. The submission logic
  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsSubmitting(true);

    try {
      // EmailJS handles the formatting based on the template you set up in their dashboard
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          subject: data.projectType,
          sender_name: data.userName,
          sender_email: data.userEmail,
          message: data.message,
        },
        "YOUR_PUBLIC_KEY"
      );

      alert("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white border-5 shadow-lg border-black ">
      <h2 className="text-2xl font-bold font-heading mb-6">Contact Me</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Input */}
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Name
          </label>
          <input
            {...register("userName", { required: "Name is required" })}
            className={`w-full mt-1 p-2 border focus:ring-2 focus:ring-blue-500 outline-none transition ${
              errors.userName ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="John Doe"
          />
          {errors.userName && (
            <span className="text-xs text-red-500">
              {errors.userName.message}
            </span>
          )}
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            {...register("userEmail", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            className="w-full mt-1 p-2 border border-slate-300  focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="john@example.com"
          />
          {errors.userEmail && (
            <span className="text-xs text-red-500">
              {errors.userEmail.message}
            </span>
          )}
        </div>

        {/* Project Type Select */}
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Project Type
          </label>
          <select
            {...register("projectType", {
              required: "Please select a project type",
            })}
            className="w-full mt-1 p-2 border border-slate-300  focus:ring-2 focus:ring-blue-500 outline-none bg-white"
          >
            <option value="">Select an option</option>
            <option value="Rest API Development">
              1. Rest API Development
            </option>
            <option value="Prototype Design">2. Prototype Design</option>
            <option value="CLI Development / Automation">
              3. CLI Development / Automation
            </option>
          </select>
          {errors.projectType && (
            <span className="text-xs text-red-500">
              {errors.projectType.message}
            </span>
          )}
        </div>

        {/* Message Input */}
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Message
          </label>
          <textarea
            {...register("message", { required: "Message cannot be empty" })}
            rows={4}
            className="w-full mt-1 p-2 border border-slate-300  focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Briefly describe your project..."
          />
          {errors.message && (
            <span className="text-xs text-red-500">
              {errors.message.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <ButtonSignature
            type="submit"
            size="sm"
            disabled={isSubmitting}
            label={isSubmitting ? "Sending..." : "Send Message"}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
