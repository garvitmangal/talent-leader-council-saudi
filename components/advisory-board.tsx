"use client"

import { useState } from "react";
import { Speaker } from "@/lib/types/type";
import AdvisoryMemberRow from "./blocks/advisory-member-row"
import { getConferenceMembers } from "@/lib/api/conference"
import { useEffect } from "react";

const imagePositions = [
    "right-0 top-[-100px]",
    "right-[100px] top-[-100px]",
    "right-[200px] top-[-100px]",
    "right-[300px] top-[-100px]",
    "right-[200px] top-[-100px]",
    "right-[100px] top-[-100px]",
    "right-[50px] top-[-100px]",
    "right-[50px] top-[-100px]"
];

export default function AdvisoryBoard() {
    const [members, setMembers] = useState<Speaker[]>([])

    useEffect(() => {
        const fetchMembers = async () => {
            const speakers = await getConferenceMembers("startup-mentors")
            setMembers(speakers?.members || [])
        }
        fetchMembers()
    }, [])

    return (
        <section id="advisory-board" className="bg-black relative overflow-hidden">
            <div className="container mx-auto pt-[65px] pb-[56px]">
                <h2 className="font-neuething-sans text-white text-3xl leading-normal font-bold text-center">
                    Our advisory board
                </h2>
                <p className="font-neuething-sans text-white leading-normal mt-2 text-center tracking-widest">
                    THE FEW WHO MOVE THE MANY
                </p>

                <div className="flex flex-col gap-10 mt-20 px-4 md:px-10 relative">
                    {members.map((member, index) => (
                        <AdvisoryMemberRow key={index} member={member} index={index} imagePositions={imagePositions} />
                    ))}
                </div>
            </div>
        </section>
    );
}