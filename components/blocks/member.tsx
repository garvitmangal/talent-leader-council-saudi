"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

export default function Member({ name, title, image, description }: { name: string, title: string, image: string, description: string }) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <>
            <div
                className="p-4 sm:p-6 flex flex-col items-center cursor-pointer group"
                onClick={() => setIsDialogOpen(true)}
            >
                <div className="overflow-hidden mb-3 md:mb-4">
                    <Image
                        src={`/w_350,h_350,c_fill,g_face/${image}`}
                        alt={name}
                        width={140}
                        height={140}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <h3 className="font-neuething-sans text-orange text-lg sm:text-xl font-semibold text-center group-hover:text-white transition-colors">
                    {name}
                </h3>
                <p className="font-neuething-sans text-white text-sm sm:text-base text-center mt-1 sm:mt-2">
                    {title}
                </p>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="bg-black border-2 border-orange/20 text-white max-w-4xl p-6 md:p-8 rounded-xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="sr-only">
                            {name}&apos;s Profile
                        </DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col gap-6">
                        <div className="relative aspect-square w-3/4 mx-auto overflow-hidden rounded-xl">
                            <Image
                                src={`/c_fill,g_face/${image}`}
                                alt={name}
                                fill
                                className="object-cover object-top hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h2 className="font-neuething-sans text-xl md:text-3xl font-bold text-orange tracking-wide">
                                    {name}
                                </h2>
                                <p className="font-neuething-sans text-base md:text-lg text-white/80 mt-1">
                                    {title}
                                </p>
                            </div>

                            {description && (
                                <div className="bg-white/5 p-5 rounded-lg">
                                    <h3 className="font-neuething-sans text-base md:text-lg font-bold text-orange mb-3">
                                        About
                                    </h3>
                                    <p className="font-neuething-sans text-white/90 leading-relaxed text-sm md:text-base">
                                        {description}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}