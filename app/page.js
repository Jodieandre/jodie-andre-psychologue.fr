import Link from 'next/link';
import { StarIcon } from '@heroicons/react/20/solid';
import Header from '../components/header';
import Footer from '../components/footer';
import settings from '../settings.json';

export default () => (
    <>
        <Header />
        <main className="flex flex-col flex-1 justify-center min-h-screen relative pt-28 after:absolute after:inset-0 after:bg-sky-950/80 after:-z-10 after:content-['']">
            <img
                alt="background"
                src="/background.jpg"
                className="absolute inset-0 -z-10 h-full w-full object-cover"
            />

            <div className="flex flex-1 justify-center text-center items-center mx-auto">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                        {settings.title}
                    </h1>
                    {/* eslint-disable react/no-danger */}
                    <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8" dangerouslySetInnerHTML={{ __html: settings.description }} />
                    <div className="flex justify-center items-start mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="h-5 w-5 mr-2">
                            <path fill="#4285F4" d="M14 8.161c0-.47-.042-.918-.113-1.353H7.152v2.688h3.856a3.32 3.32 0 01-1.43 2.134v1.788h2.3C13.225 12.172 14 10.337 14 8.161z" />
                            <path fill="#34A853" d="M7.152 15.152c1.931 0 3.546-.643 4.726-1.734l-2.3-1.788c-.644.429-1.46.691-2.426.691-1.865 0-3.445-1.257-4.011-2.956H.769v1.842a7.141 7.141 0 006.383 3.945z" />
                            <path fill="#FBBC05" d="M3.14 9.365A4.15 4.15 0 012.915 8c0-.477.084-.936.227-1.365V4.794H.769a7.069 7.069 0 000 6.413L3.14 9.365z" />
                            <path fill="#EA4335" d="M7.152 3.68c1.055 0 1.997.363 2.742 1.072l2.038-2.038C10.698 1.557 9.083.848 7.152.848A7.141 7.141 0 00.769 4.794L3.14 6.635C3.707 4.937 5.287 3.68 7.152 3.68z" />
                        </svg>
                        <span className="text-gray-500 font-medium mr-2">5/5 sur Google</span>
                        <div className="flex gap-x-1 text-yellow-500">
                            <StarIcon aria-hidden="true" className="h-5 w-5" />
                            <StarIcon aria-hidden="true" className="h-5 w-5" />
                            <StarIcon aria-hidden="true" className="h-5 w-5" />
                            <StarIcon aria-hidden="true" className="h-5 w-5" />
                            <StarIcon aria-hidden="true" className="h-5 w-5" />
                        </div>
                    </div>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="https://doctolib.fr/psychologue/nancy/jodie-andre"
                            target="_blank"
                            className="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                        >
                            Prendre un rendez-vous
                        </Link>
                        <Link href="/en-savoir-plus" className="text-sm/6 font-semibold text-white">
                            En savoir plus
                            {' '}
                            <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    </>
);

export const generateMetadata = async () => ({
    title: settings.title,
    description: settings.description,
});
