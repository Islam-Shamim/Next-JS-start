import React from 'react';
import getPost from '../../../../../lib/getPost';

export default async function Post({ params }) {
    const { id } = params;

    try {
        const post = await getPost(id);

        if (!post) {
            return <p className="text-red-500 text-center">Post not found.</p>;
        }

        return (
            <div>
                <h2 className='text-center bg-cyan-300 p-4 my-4 text-4xl font-bold font-serif text-slate-500'>Post</h2>
                <div className='bg-blue-100 p-4 my-4 rounded'>
                    <h2 className='text-2xl font-bold text-slate-500'>{post.title}</h2>
                    <p className='text-slate-700'>{post.body}</p>
                </div>
            </div>
        );
    } catch (error) {
        return <p className="text-red-500 text-center">Failed to load the post.</p>;
    }
}

