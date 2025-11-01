"use client";

import React, {useActionState, useEffect, useRef} from 'react';
import {Field, FieldGroup} from "@/components/ui/field";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {postComment} from "@/app/actions/blogActions";
import {SerializableComment} from "@/components/client/BlogCommentSection";
import {parseTimeFrom} from "@/lib/utils";

const initialState = { status: 'idle' as const, error: undefined as string | undefined };

function CommentForm(
    {slug, setComments} :
    {
        slug: string,
        setComments:  React.Dispatch<React.SetStateAction<SerializableComment[]>>
    }
) {
    const formRef = useRef<HTMLFormElement>(null);
    const[state, formAction, isPending] = useActionState(postComment, initialState);

    const handleClear = () => formRef.current?.reset();

    useEffect(() => {
        if (state.status !== "sent") return;
        setComments((prev) => [
            {
                user: state.user!,
                comment: state.comment!,
                time: parseTimeFrom(state.time!),
            },
            ...prev
        ]);
        handleClear();
    }, [state.status]);

    return (
        <form ref={formRef} action={formAction}>
            <FieldGroup className="gap-y-2">
                <input type="text" name="company" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px" }} />
                <input type="hidden" name="slug" value={slug} />
                <Field>
                    <Textarea
                        id="contact-message-input"
                        name="message"
                        placeholder="Add a comment..."
                        maxLength={1000}
                        className="resize-none min-h-15"
                        required
                    />
                </Field>
                <div className="flex justify-between gap-x-2">
                    <Field className="flex-grow basis-2/3">
                        <Input
                            id="comment-username-input"
                            name="username"
                            placeholder="Username..."
                            maxLength={35}
                            required
                        />
                    </Field>
                    <Field className="flex-grow basis-1/3">
                        <Button type="submit" disabled={isPending}>
                            {isPending ? "Posting..." : "Post"}
                        </Button>
                    </Field>
                </div>

                {state.status === "error" && <p className="text-sm pt-2 ">Failed to post comment.</p>}
            </FieldGroup>
        </form>
    );
}

export default CommentForm;