import Link from "next/link";

export default function JoinCouncilBtn({ className, spanClassName }: { className?: string, spanClassName?: string }) {
    return (
        <Link href="/join-the-council"
            className={`text-black text-center rounded-md px-3 py-0 h-9 inline-flex items-center justify-center text-sm font-medium ${className}`}>
            <span className={`font-neuething-sans font-bold ${spanClassName}`}>
                Join the Council
            </span>
        </Link>
    );
}