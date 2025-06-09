import ContactUs from "@/components/contact-us";
import Navbar from "@/components/navbar";
import { confirmPayment } from "@/lib/api/conference";
import dateFormatter from "@/lib/date-formatter";

export default async function SuccessPage({ searchParams }: { searchParams: Promise<{ token: string, order_id: string }> }) {
    const { token, order_id } = await searchParams

    const data = await confirmPayment(token, order_id)

    if (!data) {
        return (
            <>
                <Navbar />
                <div className="max-w-lg mx-auto">
                    <h2 className="font-graphikmedium text-xl">Failed to confirm payment</h2>
                </div>
            </>
        )
    }

    const { conference, confirmed } = data

    return (
        <>
            <Navbar />

            <section className="max-w-xl mx-auto py-24">
                <div>
                    <h2 className="font-graphikmedium text-xl">Thank you {confirmed.name}</h2>

                    <div className="alert alert-success mt-2">Your registration for the {conference.title} has been received.</div>
                </div>

                <p className="mt-2">
                    Thank you for registering for the {conference.title} on {dateFormatter(conference.event_date, conference.event_end_date)}.
                    We have blocked your seat for
                    the conference and you will receive calendar invite soon.
                </p>

                <table className="border-collapse table-auto mt-4 w-full text-sm">
                    <thead>
                        <tr>
                            <th className="border-b p-4" colSpan={2}>
                                Payment Description
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-b p-4">Delegate Fee</td>
                            <td className="border-b p-4">{confirmed.participantFee}</td>
                        </tr>
                        <tr>
                            <td className="border-b p-3">{confirmed.taxName}</td>
                            <td className="border-b p-3">{confirmed.tax}</td>
                        </tr>

                        <tr>
                            <td className="border-b p-3">No. of Delegates</td>
                            <td className="border-b p-3">{confirmed.participants}</td>
                        </tr>

                        <tr>
                            <td className="border-b p-3">Order ID</td>
                            <td className="border-b p-3 font-graphikmedium">{confirmed.order_id}</td>
                        </tr>

                        <tr className="font-graphikmedium">
                            <td className="border-b p-3">Total amount paid:</td>
                            <td className="border-b p-3">{confirmed.finalAmount}</td>
                        </tr>

                        <tr>
                            <td className="border-b p-3 font-graphikmedium text-center" colSpan={2}>
                                Transaction Details
                            </td>
                        </tr>

                        <tr>
                            <td className="border-b p-3">Transaction Reference</td>
                            <td className="border-b p-3 font-graphikmedium">
                                {confirmed.transactionReference}
                            </td>
                        </tr>

                        <tr>
                            <td className="border-b p-3">Transaction Description</td>
                            <td className="border-b p-3">{confirmed.transactionDescription}</td>
                        </tr>

                        <tr>
                            <td className="border-b p-3">Transaction Timestamp</td>
                            <td className="border-b p-3">{confirmed.transactionTimestamp}</td>
                        </tr>
                    </tbody>
                </table>

                <p className="mt-4">
                    Kindly use the Order ID for all future communications.
                </p>

                <p className="mt-2">
                    For any further concerns or queries, reach us at +91 9818841124 or techhr_delegates@gopeoplematters.com.
                </p>
            </section >

            <ContactUs />
        </>
    )
}