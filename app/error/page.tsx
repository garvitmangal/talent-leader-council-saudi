import ContactUs from "@/components/contact-us"
import Navbar from "@/components/navbar"
import { cancelPayment } from "@/lib/api/conference"

export default async function ErrorPage({ searchParams }: { searchParams: Promise<{ token: string, order_id: string }> }) {
    const { token, order_id } = await searchParams

    const data = await cancelPayment(token, order_id)

    if (!data) {

        return (
            <>
                <Navbar />
                <div className="max-w-lg mx-auto py-24">
                    <h2 className="font-graphikmedium text-xl">Failed to confirm payment</h2>
                </div>
            </>
        )
    }

    const { cancelled } = data

    return (
        <>
            <Navbar />
            <section className="max-w-xl mx-auto py-24">
                <div className="max-w-lg mx-auto">
                    <h2 className="font-graphikmedium text-xl">Dear {cancelled.name}</h2>

                    <div className="alert alert-danger mt-2">
                        Your payment was failed!
                    </div>

                    <table className="border-collapse table-auto mt-4 w-full text-sm">
                        <thead>
                            <tr>
                                <th className="border-b p-4" colSpan={2}>
                                    Transaction Reference
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border-b p-3">Transaction Reference</td>
                                <td className="border-b p-3 font-graphikmedium">
                                    {cancelled.transactionReference}
                                </td>
                            </tr>

                            <tr>
                                <td className="border-b p-3">Transaction Description</td>
                                <td className="border-b p-3">{cancelled.transactionDescription}</td>
                            </tr>

                            <tr>
                                <td className="border-b p-3">Transaction Timestamp</td>
                                <td className="border-b p-3">{cancelled.transactionTimestamp}</td>
                            </tr>
                        </tbody>
                    </table>

                    <p className="mt-4">
                        Kindly use the Order ID for all future communications.
                    </p>

                    <p className="mt-2">
                        For any further concerns or queries, reach us at +65 3174 4193 or techhr_delegates@gopeoplematters.com .
                    </p>
                </div>
            </section >

            <ContactUs />
        </>
    )
}