"use client";

import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { Search, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSearchParams } from '@/hooks/use-search-params';

export const SearchInput = () => {
    const [search, setSearch] = useSearchParams();
    const [value, setValue] = useState(search);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleClear = () => {
        setValue("");
        setSearch("");
        inputRef.current?.blur();
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch(value);
        inputRef.current?.blur();
    }


    return (
        <div className='flex-1 flex items-center justify-center'>
            <form onSubmit={handleSubmit} className='relative max-w-[720px] w-full'>
                <Input
                    ref={inputRef}
                    value={value}
                    onChange={handleChange}
                    placeholder='Search...'
                    className='md:text-base placeholder:text-neutral-800 px-14 w-full border-none focus-visible:shadow-[0_1px_1px_0_rgba(65,69,73,.3), 0_1px_3px_1px_rgba(65,69,73,.15)], bg-[#F0F4F8] rounded-full h-[48px] focus-visible:ring-0 focus:bg-white'
                />
                <Button
                    type='submit'
                    variant={"ghost"}
                    size={"icon"}
                    className='absolute left-3 top-1/2 -translate-y-1/2 [&_svg]:size-5 rounded-full'
                >
                    <Search className='size-4' />
                </Button>
                {value && (
                    <Button
                        type='button'
                        variant={"ghost"}
                        size={"icon"}
                        onClick={handleClear}
                        className='absolute right-3 top-1/2 -translate-y-1/2 [&_svg]:size-5 rounded-full'
                    >
                        <X className='size-4' />
                    </Button>
                )}
            </form>
        </div>
    )
}
