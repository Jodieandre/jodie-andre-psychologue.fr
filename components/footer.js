import settings from '../settings.json';

export default ({ className = 'text-white' }) => (
    <footer className={`flex items-center justify-between p-6 sm:p-8 ${className}`}>
        <div>
            <span>&copy;</span>
            <span className="ml-2">
                {new Date().getFullYear()}
            </span>
        </div>
        <nav className="grid grid-flow-col gap-3 items-center">
            {settings.social.map(({ name, link, icon }) => (
                <a href={link} aria-label={name} key={name}>
                    <img src={icon} alt={name} width={20} height={20} className="h-5 w-5 invert" />
                </a>
            ))}
        </nav>
    </footer>
);
