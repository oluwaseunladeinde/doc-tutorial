"use client";

import Image from 'next/image';
import Link from 'next/link';

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger
} from '@/components/ui/menubar';

import { DocumentInput } from './document-input';
import { Bold, File, FileJson, FilePen, FilePlus2, FileText, Globe, Italic, Printer, Redo2, RemoveFormatting, Strikethrough, TextIcon, Trash, Underline, Undo2 } from 'lucide-react';
import { BsFilePdf } from 'react-icons/bs';

export const Navbar = () => {
    return (
        <nav className='flex items-center justify-between'>
            <div className='flex gap-2 items-center'>
                <Link href={"/"}>
                    <Image src="/logo.svg" alt="logo" width={36} height={36} />
                </Link>
                <div className='flex flex-col'>
                    <DocumentInput />
                    <div className="flex">
                        <Menubar className='border-none bg-transparent shadow-none h-auto p-0'>
                            <MenubarMenu>
                                <MenubarTrigger className='text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto'>
                                    File
                                </MenubarTrigger>
                                <MenubarContent className='print:hidden'>
                                    <MenubarSub>
                                        <MenubarSubTrigger>
                                            <File className='size-4 mr-2' />
                                            Save
                                        </MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem>
                                                <FileJson className='size-4 mr-2' />
                                                JSON
                                            </MenubarItem>
                                            <MenubarItem>
                                                <Globe className='size-4 mr-2' />
                                                HTML
                                            </MenubarItem>
                                            <MenubarItem>
                                                <BsFilePdf className='size-4 mr-2' />
                                                PDF
                                            </MenubarItem>
                                            <MenubarItem>
                                                <FileText className='size-4 mr-2' />
                                                Text
                                            </MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>
                                    <MenubarItem>
                                        <FilePlus2 className='size-4 mr-2' />
                                        New Document
                                    </MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>
                                        <FilePen className='size-4 mr-2' />
                                        Rename
                                    </MenubarItem>
                                    <MenubarItem>
                                        <Trash className='size-4 mr-2' />
                                        Remove
                                    </MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem onClick={() => window.print()}>
                                        <Printer className='size-4 mr-2' />
                                        Print <MenubarShortcut>⌘P</MenubarShortcut>
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger className='text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto'>
                                    Edit
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>
                                        <Undo2 className='size-4 mr-2' />
                                        Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem>
                                        <Redo2 className='size-4 mr-2' />
                                        Redo <MenubarShortcut>⌘Y</MenubarShortcut>
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger className='text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto'>
                                    Insert
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarSub>
                                        <MenubarSubTrigger>Table</MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem> 1 X 1</MenubarItem>
                                            <MenubarItem> 2 X 2</MenubarItem>
                                            <MenubarItem> 3 X 3</MenubarItem>
                                            <MenubarItem> 4 X 4</MenubarItem>
                                        </MenubarSubContent>

                                    </MenubarSub>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger className='text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto'>
                                    Format
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarSub>
                                        <MenubarSubTrigger>
                                            <TextIcon className='size-4 mr-2' />
                                            Text
                                        </MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem>
                                                <Bold className='size-4 mr-2' />
                                                Bold <MenubarShortcut>⌘B</MenubarShortcut>
                                            </MenubarItem>
                                            <MenubarItem>
                                                <Italic className='size-4 mr-2' />
                                                Italic <MenubarShortcut>⌘I</MenubarShortcut>
                                            </MenubarItem>
                                            <MenubarItem>
                                                <Underline className='size-4 mr-2' />
                                                Underline <MenubarShortcut>⌘U</MenubarShortcut>
                                            </MenubarItem>
                                            <MenubarItem>
                                                <Strikethrough className='size-4 mr-2' />
                                                Strikethrough&nbsp;&nbsp;&nbsp; <MenubarShortcut>⌘S</MenubarShortcut>
                                            </MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>
                                    <MenubarItem>
                                        <RemoveFormatting className='size-4 mr-2' />
                                        Clear formatting
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </div>
                </div>

            </div>
        </nav>
    )
}
