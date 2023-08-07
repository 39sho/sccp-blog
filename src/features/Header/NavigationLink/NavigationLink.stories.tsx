import NavigationLink from ".";

export default {
    title: 'Header/NavigationLink',
    component: NavigationLink,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export const Home = {
    args: {
        link: "#",
        children: "Home",
    },
};

export const About = {
    args: {
        link: "#",
        children: "About",
    },
};