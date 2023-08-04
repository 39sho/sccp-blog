import HomeLink from ".";

export default {
    title: 'Atoms/HomeLink',
    component: HomeLink,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export const Normal = {
    args: {
        link: "https://example.com/",
        children: "Home",
    },
};