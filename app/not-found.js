import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';

export default () => (
    <>
        <Header />
        <main className="flex flex-col flex-1 justify-center after:fixed after:inset-0 after:bg-sky-950/80 after:-z-10 after:content-['']">
            <img
                alt="background"
                src="/background.jpg"
                className="absolute inset-0 -z-10 h-full w-full object-cover fixed"
            />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 h-full flex items-center">
                <div className="mx-auto max-w-2xl text-center text-white">
                    <h1 className="text-3xl font-bold">Erreur 404</h1>
                    <p className="mt-2 text-lg font-medium">La page que vous recherchez n'existe pas.</p>
                    <div className="mt-4">
                        <Link href="/" className="underline">Retourner à l'accueil</Link>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </>
);
