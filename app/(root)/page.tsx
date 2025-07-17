import Image from "next/image";
import SearchForm from "../component/SearchForm";
import StartUpCard from "../component/StartUpCard";
import { STARTUPS_QUERY } from "@/sanity/lib/query";
import { StartupCardType } from "../component/StartUpCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query;
  // const posts = await client.fetch(STARTUPS_QUERY);  this is also properly working but it takes minimum of 60 sec to load the newly updated data
  const params = {search:query || null}
  const session = await auth();
  console.log("data aaya ha ji ek or",session?.id)
  const {data:posts} = await sanityFetch({query: STARTUPS_QUERY,params});
  

  return (
    <>
      <section className="pink_container">
        <p className='tag tag-tri'>Pitch, Vote and Grow</p>
        <h1 className="heading mobile-heading">Pitch Your Startup, <br /> connect with Enterpreneurs</h1>
        <p className="sub-heading !max-w-3xl "> Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions</p>
        <SearchForm query={query} />

      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Result For "${query}"` : "All Startups"}
        </p>
        <ul className="card_grid mt-7">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartUpCard key={post?._id} post={post} />
            ))) : (<p className="no-result">No Startup Found</p>)}

        </ul>

      </section>
      <SanityLive/>
    </>
  );
}
