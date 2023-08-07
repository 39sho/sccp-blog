import type { Meta } from '@storybook/react';

import ArticleCard from '.';

const meta: Meta<typeof ArticleCard> = {
    title: "ArticleCard",
    component: ArticleCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

export const Normal = {
    args: {
        url: "#",
        title: "Title",
        date: new Date("2022-11-12"),
        children: "これは記事のあああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
    },
};