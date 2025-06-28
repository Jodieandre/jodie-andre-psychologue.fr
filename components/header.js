'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import settings from '../settings.json';

export default ({ className = 'text-white' }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className={`absolute inset-x-0 top-0 z-50 ${className}`}>
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link href="/">
                        <div className="flex items-center">
                            <img src="/photo.png" alt="logo" className="rounded-full w-20 bg-sky-500" width="80" height="80" />
                            <div className="ml-4">
                                <div className={`text-lg font-bold leading-none text-${settings.title.color}`}>{settings.title.text}</div>
                                <div className={`text-sm leading-none text-${settings.subtitle.color}`}>{settings.subtitle.text}</div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                    >
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12 justify-end">
                    {settings.pages.filter(({ linkVisible = true }) => linkVisible).map(({ text, link, linkColor }) => (
                        <Link key={text} href={link} className={`text-sm/6 font-semibold text-${linkColor}`}>
                            {text}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:justify-end" />
            </nav>

            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
                    <div className="flex items-center justify-between">
                        <Link href="#!" className="-m-1.5 p-1.5">
                            <img src="/photo.png" alt="logo" className="rounded-full w-20 bg-sky-500" />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-400"
                        >
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/25">
                            <div className="space-y-2 py-6">
                                {settings.pages.filter(({ linkVisible = true }) => linkVisible).map(({ text, link }) => (
                                    <Link
                                        key={text}
                                        href={link}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-white"
                                    >
                                        {text}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
};
