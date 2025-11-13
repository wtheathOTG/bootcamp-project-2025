import React from 'react';
import Markdown from "react-markdown";
import {SerializableComment} from "@/components/client/BlogCommentSection";

function Comment({ comment }: { comment: SerializableComment }) {
    return (
        <div className="w-full space-y-2">
            <div className="flex justify-between items-start">
                <h3 className="font-medium">{comment.user}</h3>
                <p>{comment.time}</p>
            </div>
            <div className="pl-8 text-muted-foreground space-y-2">
                <Markdown>{comment.comment}</Markdown></div>
        </div>
    );
}

export default Comment;