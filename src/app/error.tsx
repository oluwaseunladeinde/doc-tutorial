"use client";

import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const ErrorPage = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void; }) => {
    return (
        // <div className='min-h-screen flex flex-col items-center justify-center space-y-6 bg-slate-100'>
        //     <div className="flex flex-col items-center justify-center bg-white shadow-sm md:w-[350px] py-6 px-4 space-y-4 ">
        //         <div className="flex flex-col text-center space-y-4 ">
        //             <div className="flex justify-center">
        //                 <div className="bg-rose-100 p-3 rounded-full">
        //                     <AlertTriangle className='size-10 text-rose-600' />
        //                 </div>
        //             </div>
        //             <div className="space-y-2">
        //                 <h2 className="text-xl text-gray-900 font-semibold">Something went wrong</h2>
        //                 <p className="">{error.message}</p>
        //             </div>
        //         </div>
        //         <div className="flex items-center gap-x-3">
        //             <Button
        //                 onClick={reset}
        //                 className="font-medium px-6"
        //             >
        //                 Try again
        //             </Button>
        //             <Button
        //                 asChild
        //                 variant={"ghost"}
        //                 className="font-medium"
        //             >
        //                 <Link href="/">
        //                     Go back
        //                 </Link>
        //             </Button>
        //         </div>
        //     </div>
        // </div>

        <div className="grid h-screen place-content-center bg-slate-100 px-4">
            <div className="flex flex-col items-center justify-center bg-white gap-y-10 p-8 w-[450px]">
                <div className="flex flex-col gap-y-4 items-center justify-center">
                    <AlertTriangle className='size-16 text-rose-600' />
                    <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh! Something went wrong</p>
                    <p className="mt-4 text-gray-500">{error.message}</p>
                </div>

                <div className="flex items-center gap-x-3">
                    <Button
                        onClick={reset}
                        className="font-medium px-6"
                    >
                        Try again
                    </Button>
                    <Button
                        asChild
                        variant={"ghost"}
                        className="font-medium"
                    >
                        <Link href="/">
                            Go back
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage