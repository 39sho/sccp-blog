import AboutLink from "@/components/AboutLink";
import HomeLink from "@/components/HomeLink";

export default () => {
    return (
        <div className="flex flex-row justify-center items-center gap-4">
            <HomeLink link="/sccp-blog">Home</HomeLink>
            <AboutLink link="/sccp-blog/about">About</AboutLink>
        </div>
    );
};