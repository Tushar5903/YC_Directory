import { formatdate } from '@/lib/utils'
import Link from 'next/link';
import React from 'react'
import { FaEye } from "react-icons/fa";
import { Startup, Author } from '@/sanity/types';

export type StartupCardType = Omit<Startup, "author"> & {author?: Author }

const StartUpCard = ({ post }: { post: StartupCardType }) => {
    return (
        <li className='startup-card group'>
            <div className='flex-between'>
                <p className='start-up-date'>
                    {formatdate((post._createdAt))}
                </p>
                <div className='flex gap-1.5'>
                    <FaEye className='size-6 text-primary' />
                    <span className='text-16-medium'>{post.views}</span>
                </div>
            </div>

            <div className='flex-between mt-5 gap-5'>
                <div className='flex-1'>
                    <Link href={`/user/${post.author?._id}`}>
                        <p className='text-16-medium line-clamp-1'> {post.author?.name} </p>
                    </Link>
                    <Link href={`/startup/${post._id}`}>
                        <h3 className='text-26-semibold line-clamp-1'>{post.title}</h3>
                    </Link>
                </div>
                <Link href={`/user/${post.author?._id}`}>
                    <img src={post.author?.image} alt='avatar' width={48} height={48} className='rounded-full'></img>
                </Link>

            </div>

            <Link href={`/startup/${post._id}`}>
                <p className='startup-card_desc'>{post.description}</p>
                <img className='startup-card_img' src={post.image} />
            </Link>

            <div className='flex-between gap-3 mt-5'>
                <Link href={`/?query=${post.category?.toLowerCase()}`}>
                    <p className='text-16-medium'>{post.category}</p>
                </Link>
                <button className='startup-card_btn' >
                    <Link href={`/startup/${post._id}`}>
                        Details
                    </Link>
                </button>



            </div>

        </li>
    )
}

export default StartUpCard
