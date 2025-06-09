import z from "zod";

export const paymentFormSchema = z.object({
    serviceProvider: z.string().min(1, "Please select an option"),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string()
        .min(1, "Email is required")
        .email("Invalid email address")
        .refine((email) => {
            // Check if email is from a free email provider
            const freeEmailProviders = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com'];
            const domain = email.split('@')[1] || '';
            return !freeEmailProviders.includes(domain.toLowerCase());
        }, { message: "Please use a business email address" }),
    country: z.string().min(1, "Country is required"),
    mobile: z.string()
        .min(1, "Mobile number is required")
        .regex(/^\d{1,11}$/, "Invalid mobile number"),
    city: z.string().min(1, "City is required"),
    designation: z.string().min(1, "Designation is required"),
    company: z.string().min(1, "Company name is required"),
    hear: z.string().min(1, "Please tell us how you heard about us"),
    terms: z.boolean().refine((val) => val === true, {
        message: "You must accept the terms and conditions"
    }),
});

export type PaymentFormSchema = z.infer<typeof paymentFormSchema>;