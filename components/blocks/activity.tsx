export default function Activity({ icon, title }: { icon: React.ReactNode, title: string }) {
    return (
        <div className="flex items-center gap-3 md:gap-4">
            <div className="flex-none flex items-center justify-center w-16 md:w-14">{icon}</div>

            <div
                className="font-poppins font-bold text-white text-base leading-tight"
                dangerouslySetInnerHTML={{ __html: title }} />
        </div>
    )
}