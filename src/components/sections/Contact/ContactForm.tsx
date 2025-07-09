"use client";

import { InputField } from "@/components/ui/InputField";
import { TextareaField } from "@/components/ui/TextareaField";
import { BsFillSendFill } from "react-icons/bs";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { ContactFormTypes } from "@/Types/ContactFormTypes";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormTypes>();

  const sendEmail: SubmitHandler<ContactFormTypes> = (data) => {
    emailjs
      .send(
        "service_p6n8lpm",
        "template_jpksnsa",
        {
          from_name: data.name,
          email_id: data.email,
          message: data.message,
        },
        "Bciyw3TNyNzr7ShGT"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          reset();
        },
        (error) => {
          toast.error("Error sending the message");
          console.error(error);
        }
      );
  };

  return (
    <form onSubmit={handleSubmit(sendEmail)}>
      <div className="flex flex-col md:flex-row gap-5 my-5">
        <InputField
          id="name"
          label="Name"
          name="name"
          type="text"
          placeholder="Abanoub Abdelmessih"
          register={register}
          error={errors.name}
          rules={{
            required: "⚠ Name is required",
            minLength: {
              value: 3,
              message: "⚠ Name must be at least 3 characters",
            },
          }}
        />
        <InputField
          id="email"
          label="Email"
          name="email"
          type="email"
          placeholder="example@example.com"
          register={register}
          error={errors.email}
          rules={{
            required: "⚠ Email is required",
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "⚠ Invalid email format",
            },
          }}
        />
      </div>

      <TextareaField
        id="message"
        label="Message"
        name="message"
        placeholder="Write your message here ... (min. 10 characters)"
        register={register}
        error={errors.message}
        rules={{
          required: "⚠ Message is required",
          validate: (value: string) =>
            value.trim().length >= 10 || "⚠ Message is too short",
        }}
      />

      <button
        type="submit"
        className="bg-black mt-3 flex items-center gap-2 hover:gap-4 duration-300 text-white text-light md:text-lg rounded-full px-6 md:px-8 font-medium py-2"
      >
        Send Message <BsFillSendFill size={18} />
      </button>
    </form>
  );
};
