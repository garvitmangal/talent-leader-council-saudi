'use client';

import { brochureFormSchema, BrochureFormSchema } from "@/lib/zod-schemas/brochure-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { downloadBrochure } from "@/lib/api/conference";
import { toast } from "sonner";
import spinner from "../svg/spinner.svg";
import { useSearchParams } from "next/navigation";
import app from "@/app.config.json";
import { Country } from "@/lib/types/type";

interface BrochureFormProps {
    countries: Country[];
}

export default function BrochureForm({ countries }: BrochureFormProps) {

    const searchParams = useSearchParams();
    
    const form = useForm<BrochureFormSchema>({
        resolver: zodResolver(brochureFormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            company: "",
            designation: "",
            country: "",
            city: "",
            mobile: ""
        }
    });

    const onSubmit = async (formData: BrochureFormSchema) => {
        try {
            const submitButton = document.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.setAttribute('disabled', 'true');
                submitButton.innerHTML = `<img src="${spinner}" alt="spinner" class="animate-spin -ml-1 mr-3 h-5 w-5 inline-block" />Submitting...`;
            }

            const trackers: Record<string, string> = {};
            for (const param of app.trackers) {
                const value = searchParams.get(param);
                if (value) {
                    trackers[param] = value;
                }
            }
            
            const respData = await downloadBrochure(formData, "delegate", trackers);
            if (respData) {
                toast.success("Brochure has been sent to your email address!");
                form.reset();
                if (submitButton) {
                    submitButton.removeAttribute('disabled');
                    submitButton.innerHTML = 'Download Brochure';
                }
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to download brochure")
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm">First Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="First name" {...field} className="h-9" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastName" 
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm">Last Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Last name" {...field} className="h-9" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-sm">Business Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="Business email" {...field} className="h-9" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid grid-cols-2 gap-3">
                    <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm">Country</FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger className="h-9 w-full">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {countries.map((country) => (
                                                <SelectItem key={country.id} value={country.code}>{country.name}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm">City</FormLabel>
                                <FormControl>
                                    <Input placeholder="City" {...field} className="h-9" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <FormField
                        control={form.control}
                        name="designation"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm">Designation</FormLabel>
                                <FormControl>
                                    <Input placeholder="Designation" {...field} className="h-9" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="mobile"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm">Mobile (Without ISD)</FormLabel>
                                <FormControl>
                                    <Input type="tel" placeholder="Mobile number (Without ISD)" {...field} className="h-9" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-sm">Company</FormLabel>
                            <FormControl>
                                <Input placeholder="Company name" {...field} className="h-9" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#F06280] via-[#F79721] to-[#F79D67] text-white cursor-pointer h-9"
                >
                    Download Brochure
                </Button>
            </form>
        </Form>
    );
}