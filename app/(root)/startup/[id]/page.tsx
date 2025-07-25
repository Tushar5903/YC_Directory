import { client } from '@/sanity/lib/client';
import { STARTUP_BY_QUERY_ID } from '@/sanity/lib/query';
import React, { Suspense } from 'react'
import { notFound } from 'next/navigation';
import { formatdate } from '@/lib/utils';
import Link from 'next/link';
import markdownit from 'markdown-it'
import { Skeleton } from '@/components/ui/skeleton';
import View from '@/app/component/View'; 
// import '../../../component/prose-only.css'
const md = markdownit();

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;
    const post = await client.fetch(STARTUP_BY_QUERY_ID, { id });
    if (!post) return notFound();

    const parsedContent = md.render(post?.pitch || " ");

    return (
        <>
            <section className='pink_container !min-h-[230px]'>
                <p className='tag tag-tri'>{formatdate(post?._createdAt)}</p>
                <h1 className='heading'>{post.title}</h1>
                <p className='sub-heading !max-w-5xl'>{post.description}</p>
            </section>
            <section className='section_container'>
                <img src={post.image} alt='thumbnail' className='w-full h-auto rounded-xl'></img>
                <div className='space-y-5 mt-10 max-w-4xl mx-auto'>
                    <div className='flex-between gap-5'>
                        <Link href={`/user/${post.author?._id}`} className='flex gap-2 items-center mb-3'>
                        <img src={post.author.image} alt='avatar' width={64} height={64} className='rounded-full  dropp-shadow-lg'></img>
                        <div>
                            <p className='text-20-medium'>{post.author.name}</p>
                            <p className='text-16-medium !text-black-300'>@{post.author.username}</p>
                        </div>
                        </Link>

                        <p className='category-tag'>{post.category}</p>
                    </div>

                    <h3 className='text-30-bold'>Pitch Details</h3>
                    {parsedContent ? (
                        <article
                            dangerouslySetInnerHTML={{__html: parsedContent}}
                            className='markdown-content'
                         />
                    ): (<p className='no-result'> No Details Provided</p>)
                    }
                </div>
                <hr className='divider'></hr>

                {/* recommended  */}


                {/*  */}

                <Suspense fallback={<Skeleton className='view_skeleton' />}>
                <View id={id} />

                </Suspense>
            </section>

        </>
    )
}

export default page
