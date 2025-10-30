import React from 'react';
import {InlineNodeDoc, ParagraphDoc} from "@/database/projectSchema";
import {HybridTooltip, HybridTooltipContent, HybridTooltipTrigger, TouchProvider} from "@/components/ui/hybridtooltip";

function RichText({ paragraphs }: { paragraphs: ParagraphDoc[] }) {
    const renderInline = (node: InlineNodeDoc, key: React.Key): React.ReactNode => {
        if (node.type === 'text') return node.text;
        if (node.type === 'tooltip') {
            return (
                <HybridTooltip key={key}>
                    <HybridTooltipTrigger>{node.term}</HybridTooltipTrigger>
                    <HybridTooltipContent side="top">{node.content}</HybridTooltipContent>
                </HybridTooltip>
            );
        }
        return null;
    };

    return (
        <TouchProvider>
            <div className="space-y-2">
                {paragraphs.map((para, i) => (
                    <p key={i}>
                        {para.children.map((child, j) => renderInline(child, `${i}-${j}`))}
                    </p>
                ))}
            </div>
        </TouchProvider>

    );
}

export default RichText;