import React from 'react'
import getAllPost from '../../../../lib/getAllPost'
import Link from 'next/link';

export default async function postPage() {
    const posts = await  getAllPost();
    //console.log(posts);
  return (
    <div>
        <h2 className='text-center bg-cyan-300 p-4 my-4 text-4xl font-bold font-serif text-slate-500'>See All Post</h2>
        <div>
            {posts.map(post => (
                <div key={post.id} className='bg-blue-100 p-4 my-4 rounded'>
                    <Link href={`/post/${post.id}`}><h2 className='text-2xl font-bold text-slate-500'>{post.title}</h2></Link>
                    <p className='text-slate-700'>{post.body}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
