import Link from 'next/link';

export default () => (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 h-full flex items-center">
        <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                Jodie André
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
                Psychologue clinicienne et pyschothérapeute
                <br />
                Thérapies cognitives et comportementales (TCC)
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                    href="https://doctolib.fr/psychologue/nancy/jodie-andre"
                    target="_blank"
                    className="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                >
                    Prendre un rendez-vous
                </Link>
                <Link href="/a-propos" className="text-sm/6 font-semibold text-white">
                    En savoir plus
                    {' '}
                    <span aria-hidden="true">→</span>
                </Link>
            </div>
        </div>
    </div>
);
