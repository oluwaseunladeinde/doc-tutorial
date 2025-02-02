"use client";

import Image from 'next/image';
import Link from 'next/link';

import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';

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
import { Avatars } from './avatars';

import { useEditorStore } from '@/store/use-editor-store';
import { Inbox } from './inbox';


export const Navbar = () => {

    const { editor } = useEditorStore();

    const insertTable = ({ rows, cols }: { rows: number; cols: number }) => {
        editor
            ?.chain()
            .focus()
            .insertTable({ rows, cols, withHeaderRow: false })
            .run();
    };

    const onDownload = (blob: Blob, filename: string) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.click();
    };

    const onSaveJSON = () => {
        if (!editor) return;

        const content = editor.getJSON();
        const blob = new Blob([JSON.stringify(content)], { type: 'application/json' });
        onDownload(blob, `document.json`); //TODO: use file name
    }

    const onSaveHTML = () => {
        if (!editor) return;

        const content = editor.getHTML();
        const blob = new Blob([content], { type: 'text/html' });
        onDownload(blob, `document.html`); //TODO: use file name
    }

    const onSaveText = () => {
        if (!editor) return;

        const content = editor.getText();
        const blob = new Blob([content], { type: 'text/plain' });
        onDownload(blob, `document.txt`); //TODO: use file name
    }

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
                                            <MenubarItem onClick={onSaveJSON}>
                                                <FileJson className='size-4 mr-2' />
                                                JSON
                                            </MenubarItem>
                                            <MenubarItem onClick={onSaveHTML}>
                                                <Globe className='size-4 mr-2' />
                                                HTML
                                            </MenubarItem>
                                            <MenubarItem onClick={() => window.print()}>
                                                <BsFilePdf className='size-4 mr-2' />
                                                PDF
                                            </MenubarItem>
                                            <MenubarItem onClick={onSaveText}>
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
                                    <MenubarItem onClick={() => editor?.chain().focus().undo().run()}>
                                        <Undo2 className='size-4 mr-2' />
                                        Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem onClick={() => editor?.chain().focus().redo().run()}>
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
                                            <MenubarItem onClick={() => insertTable({ rows: 1, cols: 1 })}> 1 X 1</MenubarItem>
                                            <MenubarItem onClick={() => insertTable({ rows: 2, cols: 2 })}> 2 X 2</MenubarItem>
                                            <MenubarItem onClick={() => insertTable({ rows: 3, cols: 3 })}> 3 X 3</MenubarItem>
                                            <MenubarItem onClick={() => insertTable({ rows: 4, cols: 4 })}> 4 X 4</MenubarItem>
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
                                            <MenubarItem onClick={() => editor?.chain().focus().toggleBold().run()}>
                                                <Bold className='size-4 mr-2' />
                                                Bold <MenubarShortcut>⌘B</MenubarShortcut>
                                            </MenubarItem>
                                            <MenubarItem onClick={() => editor?.chain().focus().toggleItalic().run()}>
                                                <Italic className='size-4 mr-2' />
                                                Italic <MenubarShortcut>⌘I</MenubarShortcut>
                                            </MenubarItem>
                                            <MenubarItem onClick={() => editor?.chain().focus().toggleUnderline().run()}>
                                                <Underline className='size-4 mr-2' />
                                                Underline <MenubarShortcut>⌘U</MenubarShortcut>
                                            </MenubarItem>
                                            <MenubarItem onClick={() => editor?.chain().focus().toggleStrike().run()}>
                                                <Strikethrough className='size-4 mr-2' />
                                                Strikethrough&nbsp;&nbsp;&nbsp; <MenubarShortcut>⌘S</MenubarShortcut>
                                            </MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>
                                    <MenubarItem onClick={() => editor?.chain().focus().unsetAllMarks().run()}>
                                        <RemoveFormatting className='size-4 mr-2' />
                                        Clear formatting
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </div>
                </div>
            </div>
            <div className="flex gap-3 items-center pl-6">
                <Inbox />
                <Avatars />
                <OrganizationSwitcher
                    afterCreateOrganizationUrl={'/'}
                    afterLeaveOrganizationUrl="/"
                    afterSelectOrganizationUrl={"/"}
                    afterSelectPersonalUrl={"/"}
                />
                <UserButton />
            </div>
        </nav>
    )
}
