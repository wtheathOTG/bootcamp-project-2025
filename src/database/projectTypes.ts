export type InlineNodeDoc = {
    type: string;
    text?: string;
    term?: string;
    content?: string;
};

export type ParagraphDoc = {
    type: 'paragraph';
    children: InlineNodeDoc[];
};