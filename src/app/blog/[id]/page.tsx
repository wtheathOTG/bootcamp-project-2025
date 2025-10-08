import React from 'react';

function Page({ params }: { params: { id: string } }) {
    return (
        <div>
            <h2 className="pb-8 text-3xl capitalize">{params.id}</h2>
            <p className="text-lg">This is a description of the article.</p>
        </div>
    );
}

export default Page;