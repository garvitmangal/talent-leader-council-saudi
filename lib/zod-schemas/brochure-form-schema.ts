import z from "zod";


export const brochureFormSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string()
        .min(1, "Email is required")
        .email("Invalid email address")
        .refine(
            (email) => {
                const personalDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com'];
                const domain = email.split('@')[1] || '';
                return !personalDomains.includes(domain.toLowerCase());
            },
            { message: "Please use a business email address" }
        ),
    company: z.string().min(1, "Company name is required"),
    designation: z.string().min(1, "Designation is required"),
    country: z.string().min(1, "Country is required"),
    city: z.string().min(1, "City is required"),
    mobile: z.string()
        .min(1, "Mobile number is required")
        .regex(/^\d{1,11}$/, "Invalid mobile number")
});

export type BrochureFormSchema = z.infer<typeof brochureFormSchema>;