import Header from '../components/header';

export default ({ children }) => (
    <div className="min-h-screen">
        <Header className="text-white" />

        <div className="relative isolate h-screen pt-14 after:fixed after:inset-0 after:bg-sky-950/70 after:-z-10 after:content-['']">
            <img
                alt="background"
                src="/background.jpg"
                className="absolute inset-0 -z-10 h-full w-full object-cover fixed"
            />
            {children}
        </div>
    </div>
);
