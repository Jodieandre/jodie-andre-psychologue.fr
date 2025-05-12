import Link from 'next/link';

export default () => (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 h-full flex items-center">
        <div className="mx-auto max-w-2xl text-center text-white">
            <h1 className="text-2xl">Erreur 404</h1>
            <p className="mt-2 text-lg font-medium">La page que vous recherchez n'existe pas.</p>
            <div className="mt-4">
                <Link href="/" className="underline">Retourner à l'accueil</Link>
            </div>
        </div>
    </div>
);
