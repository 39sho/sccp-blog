type Props = { link: string, children: React.ReactNode };
export default ({ link, children }: Props) => {
    return (
        <div className="flex py-2 px-4 justify-center items-center gap-2">
            <a href={link} className="font-sans text-xl font-bold leading-6 tracking-wider">{children}</a>
        </div>

    );
};