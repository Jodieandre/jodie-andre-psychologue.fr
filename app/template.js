import Header from '../components/header';

export default ({ children }) => (
    <div className="min-h-screen">
        <Header className="text-white" />

        <div className="relative isolate h-screen pt-14">
            <img
                alt="background"
                src="/background.jpg"
                className="absolute inset-0 -z-10 h-full w-full object-cover fixed brightness-20"
            />
            {children}
        </div>
    </div>
);
