'use client';

import Header from './header';

export default ({ children }) => (
    <div className="bg-gray-900 min-h-screen">
        <Header />

        <div className="relative isolate h-screen overflow-hidden pt-14">
            <img
                alt="background"
                src="/background.jpg"
                className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="mx-auto max-w-7xl px-6 lg:px-8 h-full flex items-center">
                {children}
            </div>
        </div>
    </div>
);
