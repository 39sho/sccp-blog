import NavigationLink from "../NavigationLink";

export default () => {
    return (
        <div className="flex flex-row justify-center items-center gap-4">
            <NavigationLink link="/sccp-blog/">Home</NavigationLink>
            <NavigationLink link="/sccp-blog/about/">About</NavigationLink>
        </div>
    );
};