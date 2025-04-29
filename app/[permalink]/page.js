import fs from 'fs';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote-client/rsc'; // eslint-disable-line

const Page = async ({ params }) => {
    const { permalink } = await params;
    const path = `${process.cwd()}/content/${permalink}.md`;

    if (!fs.existsSync(path)) notFound();

    const markdown = fs.readFileSync(path, 'utf-8');

    const options = {
        mdxOptions: {
            remarkPlugins: [remarkGfm, remarkBreaks],
            rehypePlugins: [],
        },
    };

    return (
        <section>
            <article className="prose">
                <MDXRemote source={markdown} options={options} />
            </article>
        </section>
    );
};

export const generateStaticParams = async () => {
    const files = fs.readdirSync(`${process.cwd()}/content`);

    const paths = files.map((file) => {
        const permalink = file.replace('.md', '');
        return { permalink };
    });

    return paths;
};

export default Page;
