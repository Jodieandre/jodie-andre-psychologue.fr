import './globals.css';

import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    style: ['normal'],
    subsets: ['latin'],
    variable: '--font-roboto',
});

export default ({ children }) => (
    <html lang="fr">
        <body className={roboto.className}>{children}</body>
    </html>
);
