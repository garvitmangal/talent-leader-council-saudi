"use client"

import { getConferenceMembers } from "@/lib/api/conference";
import Member from "../blocks/member";
import { useEffect } from "react";
import { useState } from "react";
import { Speaker } from "@/lib/types/type";

export default function Members() {
    const [members, setMembers] = useState<Speaker[]>([])

    useEffect(() => {
        const fetchMembers = async () => {
            const conferenceMembers = await getConferenceMembers("speaker")
            setMembers(conferenceMembers?.members || [])
        }
        fetchMembers()
    }, [])

    return (
        <section className="bg-black pt-20 md:pt-32">
            <div className="container mx-auto px-4 md:px-10">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="font-neuething-sans text-white text-xl sm:text-2xl md:text-3xl leading-normal font-bold text-center px-2 md:px-4">
                        TLC Members
                    </h2>
                    <p className="font-neuething-sans text-white text-sm sm:text-base leading-normal mt-2 text-center px-2 md:px-4 tracking-widest">
                        THE FEW. THE BOLD. THE EXCLUSIVE.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-8 md:mt-12">
                    {members.length === 0 ? (
                        <>
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="bg-[#1A1A1A] rounded-lg p-4 sm:p-6">
                                    <div className="relative w-full aspect-square bg-gray-700 animate-pulse rounded-lg"></div>
                                    <div className="mt-4">
                                        <div className="h-5 w-3/4 bg-gray-700 animate-pulse rounded"></div>
                                        <div className="h-4 w-full bg-gray-700 animate-pulse rounded mt-2"></div>
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        members.map((member) => (
                            <Member
                                key={member.id}
                                name={member.full_name}
                                title={`${member.job_title} at ${member.company}`}
                                image={member.face}
                                description={member.desc}
                            />
                        ))
                    )}
                </div>
            </div>
        </section>
    )
}