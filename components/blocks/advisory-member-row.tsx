"use client";

import Image from "next/image";
import { useState } from "react";
import MemberInfo from "./member-info";
import { Speaker } from "@/lib/types/type";

export default function AdvisoryMemberRow({ member, index, imagePositions }: { member: Speaker, index: number, imagePositions: string[] }) {
    const isEven = index % 2 === 0;
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const MobileImage = () => (
        <div className="w-1/2 md:hidden">
            <Image
                src={`/${member.face}`}
                alt={`${member.full_name} image`}
                width={200}
                height={200}
                className="w-full h-auto rounded-lg" />
        </div>
    );

    return (
        <div className="flex flex-row md:flex-row items-center md:border-b-2 md:border-white md:pb-4 gap-6 md:gap-0">
            {isEven ? <MobileImage /> : null}
            <MemberInfo
                member={member}
                index={index}
                isDialogOpen={isDialogOpen}
                setIsDialogOpen={setIsDialogOpen}
                imagePositions={imagePositions} />
            {!isEven ? <MobileImage /> : null}
        </div>
    );
}