"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { Check } from "@/components/ui/icons";

type Fields = {
  name: string;
  email: string;
  message: string;
};

type FieldName = keyof Fields;

const initialValues: Fields = { name: "", email: "", message: "" };

function validate(values: Fields): Partial<Record<FieldName, string>> {
  const errors: Partial<Record<FieldName, string>> = {};

  if (!values.name.trim()) {
    errors.name = "Tell me your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Add an email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "That email address does not look complete.";
  }

  if (values.message.trim().length < 10) {
    errors.message = "Add a little more detail — at least 10 characters.";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<Fields>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [sent, setSent] = useState(false);

  function update(field: FieldName, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
    setSent(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = (Object.keys(nextErrors) as FieldName[])[0];
      requestAnimationFrame(() => {
        document.getElementById(`contact-${firstInvalid}`)?.focus();
      });
      return;
    }

    const subject = `Project enquiry — ${values.name.trim()}`;
    const body = `Hi Tyrique,\n\n${values.message.trim()}\n\n— ${values.name.trim()}\n${values.email.trim()}`;

    setSent(true);
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const inputClasses =
    "mt-2 w-full border border-line bg-ink px-3.5 py-3 text-sm text-fg placeholder:text-faint transition-colors focus:border-accent focus:outline-none";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="border-line bg-ink-raised border p-6 md:p-8"
      aria-describedby="contact-form-help"
    >
      <div className="border-line flex flex-wrap items-baseline justify-between gap-2 border-b pb-4">
        <p className="label-mono text-fg">Start a conversation</p>
        <p className="text-faint font-mono text-[9px] tracking-[0.12em] uppercase">
          Opens an email draft
        </p>
      </div>

      <div className="mt-6 grid gap-5">
        <div>
          <label htmlFor="contact-name" className="label-mono text-faint">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={inputClasses}
            placeholder="Your name"
          />
          {errors.name ? (
            <p id="contact-name-error" role="alert" className="text-accent mt-2 text-xs">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-email" className="label-mono text-faint">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            inputMode="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={inputClasses}
            placeholder="you@company.com"
          />
          {errors.email ? (
            <p id="contact-email-error" role="alert" className="text-accent mt-2 text-xs">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-message" className="label-mono text-faint">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            required
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            className={`${inputClasses} resize-y`}
            placeholder="What are you building, and where does it need help?"
          />
          {errors.message ? (
            <p id="contact-message-error" role="alert" className="text-accent mt-2 text-xs">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <button
        type="submit"
        className="border-accent bg-accent text-ink hover:border-fg hover:bg-fg mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 border px-5 py-3 font-mono text-[11px] font-medium tracking-[0.16em] uppercase transition-colors"
      >
        Compose email
      </button>

      {sent ? (
        <p
          role="status"
          className="border-ok/30 bg-ok/10 text-ok mt-4 flex items-start gap-2 border px-3 py-2.5 text-xs leading-relaxed"
        >
          <Check className="mt-0.5 size-3.5 shrink-0" />
          Your email app should open with the message ready to send.
        </p>
      ) : null}

      <p
        id="contact-form-help"
        className="text-faint mt-4 font-mono text-[9px] leading-relaxed tracking-[0.08em] uppercase"
      >
        This form opens your email app. Nothing is sent from this page.
      </p>
    </form>
  );
}
