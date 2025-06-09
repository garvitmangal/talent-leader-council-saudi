import { getCountries } from "@/lib/api/conference"
import BrochureForm from "../forms/brochure-form"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"

export default async function DownloadBrochureBtn({ className, spanClassName }: { className?: string, spanClassName?: string }) {
    const countries = await getCountries()

    if (!countries) {
        return null
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className={`bg-black text-white w-full md:w-auto cursor-pointer ${className}`}>
                    <span className={`font-neuething-sans font-bold ${spanClassName}`}>
                        Download Brochure
                    </span>
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-white sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="font-neuething-sans text-2xl">Download Brochure</DialogTitle>
                    <DialogDescription className="font-poppins">
                        Please fill out this form to download the brochure
                    </DialogDescription>
                </DialogHeader>
                <BrochureForm countries={countries} />
            </DialogContent>
        </Dialog>
    )
}