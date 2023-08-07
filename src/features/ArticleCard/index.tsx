type props = { url: string, title: string, date: Date, children: string };

export default ({ url, title, date, children }: props) => {
    return (
        <a href={url} className="bg-gray-50 dark:bg-gray-950 dark:text-white flex w-full max-w-4xl h-48 py-5 px-10 flex-col items-start gap-3 rounded-xl border-solid border-2">
            <div className="flex flex-col items-start gap-1">
                <span className="font-sans text-xl font-bold leading-6 tracking-wider">{title}</span>
                <time className="text-gray-500 font-sans text-xs font-medium leading-4 tracking-wider" dateTime={date.toISOString()}>{new Intl.DateTimeFormat('ja-JP').format(date)}</time>
            </div>
            <div className="h-full overflow-hidden text-ellipsis font-sans text-sm font-medium leading-5 tracking-wider bg-clip-text text-transparent bg-gradient-to-b from-black to-white dark:from-white dark:to-black">{children}</div>
        </a>
    );
};