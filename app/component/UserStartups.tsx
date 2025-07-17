import { client } from '@/sanity/lib/client'
import { STARTUPS_BY_AUTHOR_QUERY } from '@/sanity/lib/query'
import React from 'react'
import StartUpCard, { StartupCardType } from './StartUpCard'

const UserStartups = async ({ id }: { id: string }) => {
    const startups: StartupCardType[] = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id });

    return (
        <>
            {startups.length > 0 ? (
                startups.map((startup) => (
                    <StartUpCard key={startup._id} post={startup} />
                ))
            ) : (
                <p className='no-result'>No Posts</p>
            )}
        </>
    )
}

export default UserStartups
