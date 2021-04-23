import { GetServerSideProps } from 'next';

import { GetStaticProps } from 'next';
import { format, parseISO } from 'date-fns';
// import { parseISO } from 'date-fns/locale';
import { api } from '../services/api';
import { convertDurationToTimeString } from '../convertDurationToTimeString';

type Episode = {
  id: string;
  title: string;
  members: string;
  published_at: string;
  // ...
}

type HomeProps = {
  episodes: Episode[];
}

export default function Home(props: HomeProps) {
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  })

  const episodes = data.map(episode => ({
    id: episode.id,
    title: episode.title,
    thumbnail: episode.thumbnail,
    members: episode.members,
    publishedAt: format(parseISO(episode.published_at), 'd-MMM-yy'),
    duration: Number(episode.file.duration),
    durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
    description: episode.description,
    url: episode.file.url,
  }))

  console.log(episodes);



  return {
    props: {
      episodes,
    },
    revalidate: 60 * 60 * 8,
  }
}