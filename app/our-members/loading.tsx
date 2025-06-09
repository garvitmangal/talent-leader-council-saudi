export default function Loading() {
    return (
        <section className="bg-black pt-20 md:pt-32">
            <div className="container mx-auto px-4 md:px-10">
                <div className="flex flex-col items-center justify-center">
                    <div className="h-8 w-48 bg-gray-700 animate-pulse rounded"></div>
                    <div className="h-4 w-64 bg-gray-700 animate-pulse rounded mt-2"></div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-8 md:mt-12">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="p-4 sm:p-6 flex flex-col items-center">
                            <div className="w-full aspect-square bg-gray-700 animate-pulse rounded-lg mb-3 md:mb-4"></div>
                            <div className="h-6 w-3/4 bg-gray-700 animate-pulse rounded"></div>
                            <div className="h-4 w-1/2 bg-gray-700 animate-pulse rounded mt-2"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}