import AboutLink from ".";

export default {
    title: 'Atoms/AboutLink',
    component: AboutLink,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export const Normal = {
    args: {
        link: "https://example.com/",
        children: "About",
    },
};