import Navigation from "./Navigation";

export default () => {
    return (
        <div className="z-50 fixed bg-gray-50 dark:bg-gray-950 dark:text-white flex h-16 w-full py-0 px-8 items-center gap-4 self-stretch border-b-2 border-solid">
            <Navigation></Navigation>
        </div>
    );
};