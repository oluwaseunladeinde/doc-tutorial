"use client";

import { useRouter } from 'next/navigation';
import { Doc } from '../../../convex/_generated/dataModel'
import { PaginationStatus } from 'convex/react';
import { SiGoogledocs } from "react-icons/si";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import { Building2, CircleUser, Loader2 } from 'lucide-react';
import { format } from 'date-fns';
import { DocumentMenu } from './document-menu';
import { Button } from '@/components/ui/button';


interface DocumentsTableProps {
    documents: Doc<"documents">[] | undefined;
    loadMore: (numItems: number) => void;
    status: PaginationStatus;
}

export const DocumentsTable = ({
    loadMore,
    status,
    documents
}: DocumentsTableProps) => {
    return (
        <div className='max-w-screen-xl mx-auto px-16 py-6 flex flex-col gap-5'>
            {documents === undefined ? (
                <div className='flex items-center justify-center h-24'>
                    <Loader2 className='size-5 text-muted-foreground animate-spin' />
                </div>
            ) : (
                <Table>
                    <TableHeader>
                        <TableRow className='hover:bg-transparent border-none'>
                            <TableHead>Name</TableHead>
                            <TableHead>&nbsp;</TableHead>
                            <TableHead className='hidden md:table-cell'>Shared</TableHead>
                            <TableHead className='hidden md:table-cell'>Created at</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {documents.length === 0 ? (
                            <TableRow className='hover:bg-transparent border-none'>
                                <TableCell colSpan={4} className='h-24 text-center text-muted-foreground'>
                                    No document found!
                                </TableCell>
                            </TableRow>
                        ) : (
                            <>
                                {
                                    documents.map(document => (
                                        <DocumentRow key={document._id} document={document} />
                                    ))
                                }
                            </>
                        )}
                    </TableBody>
                </Table>
            )}
            <div className="flex items-center justify-center ">
                <Button
                    variant={"ghost"}
                    size={"sm"}
                    onClick={() => loadMore(5)}
                    disabled={status !== "CanLoadMore"}
                >
                    {status === "CanLoadMore" ? "Load more" : "End of results"}
                </Button>
            </div>
        </div>
    )
}

interface DocumentRowProps {
    document: Doc<"documents">;
}
const DocumentRow = ({ document }: DocumentRowProps) => {
    const router = useRouter();
    return (
        <TableRow onClick={() => router.push(`/documents/${document._id}`)} className='cursor-pointer'>
            <TableCell className='w-[50px]'>
                <SiGoogledocs className='size-6 fill-blue-500' />
            </TableCell>
            <TableCell className='md:w-[45%] font-medium'>
                {document.title}
            </TableCell>
            <TableCell className='text-muted-foreground hidden md:flex items-center gap-2'>
                {document.organizationId
                    ? <Building2 className='size-4' />
                    : <CircleUser className='size-4' />}
                {document.organizationId ? "Organization" : "Personal"}
            </TableCell>
            <TableCell className='text-muted-foreground hidden md:table-cell'>
                {format(new Date(document._creationTime), 'MMM dd, yyyy')}
            </TableCell>
            <TableCell className='flex justify-end'>
                <DocumentMenu
                    documentId={document._id}
                    title={document.title}
                    onNewTab={() => window.open(`/documents/${document._id}`, "_blank")}
                />
            </TableCell>
        </TableRow>
    )
}
