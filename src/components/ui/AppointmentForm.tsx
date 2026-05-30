import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { MessageCircle, Loader2 } from "lucide-react";
import { whatsappUrl, appointmentFormMessage } from "@/lib/whatsapp";
import { services } from "@/data/services";

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^(\+?91[-\s]?)?[6-9]\d{9}$/, "Enter a valid 10-digit Indian phone number"),
  age: z.coerce.number().int().min(1, "Required").max(120),
  problem: z.string().min(1, "Please choose a concern"),
  preferredDate: z.string().min(1, "Please pick a date"),
  message: z.string().max(500).optional().or(z.literal("")),
});

type FormValues = z.infer<typeof schema>;

export function AppointmentForm() {
  const [submitting, setSubmitting] = useState(false);
  const today = new Date().toISOString().slice(0, 10);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { problem: "", preferredDate: today, message: "" },
  });

  const onSubmit = (data: FormValues) => {
    setSubmitting(true);
    const msg = appointmentFormMessage({
      ...data,
      message: data.message || "",
    });
    const url = whatsappUrl(msg);
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp…", {
      description: "We've prefilled your details. Send the message to confirm.",
    });
    reset({ ...data, message: "" });
    setSubmitting(false);
  };

  const field =
    "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
  const label = "block text-xs font-semibold uppercase tracking-wider text-muted-foreground";
  const err = "mt-1 text-xs text-destructive";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="fullName">Full Name</label>
          <input id="fullName" type="text" className={`${field} mt-1.5`} placeholder="Your name" {...register("fullName")} />
          {errors.fullName && <p className={err}>{errors.fullName.message}</p>}
        </div>
        <div>
          <label className={label} htmlFor="phone">Phone Number</label>
          <input id="phone" type="tel" className={`${field} mt-1.5`} placeholder="+91 ..." {...register("phone")} />
          {errors.phone && <p className={err}>{errors.phone.message}</p>}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="age">Age</label>
          <input id="age" type="number" min={1} max={120} className={`${field} mt-1.5`} placeholder="Age" {...register("age")} />
          {errors.age && <p className={err}>{errors.age.message}</p>}
        </div>
        <div>
          <label className={label} htmlFor="preferredDate">Preferred Date</label>
          <input id="preferredDate" type="date" min={today} className={`${field} mt-1.5`} {...register("preferredDate")} />
          {errors.preferredDate && <p className={err}>{errors.preferredDate.message}</p>}
        </div>
      </div>
      <div>
        <label className={label} htmlFor="problem">Problem / Concern</label>
        <select id="problem" className={`${field} mt-1.5`} {...register("problem")} defaultValue="">
          <option value="" disabled>Select a concern</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
          <option value="Other">Other</option>
        </select>
        {errors.problem && <p className={err}>{errors.problem.message}</p>}
      </div>
      <div>
        <label className={label} htmlFor="message">Message (optional)</label>
        <textarea id="message" rows={4} className={`${field} mt-1.5`} placeholder="Briefly describe your symptoms" {...register("message")} />
        {errors.message && <p className={err}>{errors.message.message}</p>}
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-elegant transition hover:opacity-95 disabled:opacity-60"
      >
        {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <MessageCircle className="h-4 w-4" />}
        Send via WhatsApp
      </button>
      <p className="text-center text-xs text-muted-foreground">
        Your appointment request will open WhatsApp with details prefilled. Send the message to confirm.
      </p>
    </form>
  );
}
