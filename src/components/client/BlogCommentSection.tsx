"use client";

import React, {useState} from 'react';
import CommentForm from "@/components/client/commentForm";
import Comment from "@/components/server/comment";

export type SerializableComment = {
    user: string;
    comment: string;
    time: string;
}

function BlogCommentSection(
    {slug, originalComments} : {slug: string, originalComments: SerializableComment[]}
) {

    const [comments, setComments] = useState<SerializableComment[]>(originalComments ?? []);

    return (
        <div className="space-y-4">
            <h3 className="text-2xl capitalize font-medium">Comments</h3>
            <CommentForm slug={slug} setComments={setComments} />
            {comments.length > 0 ?
                comments.map((comment, i) => (
                    <Comment key={i} comment={comment} />
                )) :
                <p className="text-muted-foreground">No comments yet...</p>
            }
        </div>
    );
}

export default BlogCommentSection;