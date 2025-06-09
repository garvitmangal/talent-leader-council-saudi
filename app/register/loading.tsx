export default function Loading() {
    return (
        <>
            <div className="h-10 md:h-20"></div>
            
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    {/* Form header skeleton */}
                    <div className="animate-pulse mb-8">
                        <div className="h-8 bg-gray-200 rounded-md w-3/4 mb-4"></div>
                        <div className="h-4 bg-gray-200 rounded-md w-1/2"></div>
                    </div>

                    {/* Form fields skeleton */}
                    <div className="space-y-6 animate-pulse">
                        {/* Name fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="h-12 bg-gray-200 rounded-md"></div>
                            <div className="h-12 bg-gray-200 rounded-md"></div>
                        </div>

                        {/* Email & Phone */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="h-12 bg-gray-200 rounded-md"></div>
                            <div className="h-12 bg-gray-200 rounded-md"></div>
                        </div>

                        {/* Company & Designation */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="h-12 bg-gray-200 rounded-md"></div>
                            <div className="h-12 bg-gray-200 rounded-md"></div>
                        </div>

                        {/* Message box */}
                        <div className="h-32 bg-gray-200 rounded-md"></div>

                        {/* Submit button */}
                        <div className="h-12 bg-gray-200 rounded-md w-full md:w-1/3"></div>
                    </div>
                </div>
            </div>
        </>
    );
}