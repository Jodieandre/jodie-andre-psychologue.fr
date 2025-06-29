import settings from '../settings.json';

export default () => (
    <footer className={`flex items-center justify-between p-6 sm:p-8 text-${settings.footer.textColor}`}>
        <div>
            <span>&copy;</span>
            <span className="ml-2">
                2019-
                {new Date().getFullYear()}
            </span>
        </div>
        <nav className="grid grid-flow-col gap-3 items-center">
            {settings.footer.social.map(({ name, link, linkColor, icon }) => (
                <a href={link} aria-label={name} key={name}>
                    <div
                        className={`h-5 w-5 bg-${linkColor}`}
                        style={{
                            mask: `url(${icon}) no-repeat center / contain`,
                            WebkitMask: `url(${icon}) no-repeat center / contain`,
                        }}
                    />
                </a>
            ))}
        </nav>
    </footer>
);
