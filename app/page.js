import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import settings from '../settings.json';

const backgroundColor = settings.pages.find(({ link }) => link === '/')?.backgroundColor || 'sky-950';
const backgroundOpacity = settings.pages.find(({ link }) => link === '/')?.backgroundOpacity || '80';

export default () => (
    <>
        <Header />
        <main className={`flex flex-col flex-1 justify-center min-h-screen relative pt-28 after:absolute after:inset-0 after:bg-${backgroundColor}/${backgroundOpacity} after:-z-10 after:content-['']"`}>
            <img
                alt="background"
                src="/background.jpg"
                className="absolute inset-0 -z-10 h-full w-full object-cover"
            />

            <div className="flex flex-1 justify-center text-center items-center mx-auto">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className={`text-balance text-5xl font-semibold tracking-tight sm:text-7xl text-${settings.title.color}`}>
                        {settings.title.text}
                    </h1>
                    {/* eslint-disable react/no-danger */}
                    <p className={`mt-8 text-pretty text-lg font-medium sm:text-xl/8 text-${settings.description.color}`} dangerouslySetInnerHTML={{ __html: settings.description.text }} />
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
