import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMYMEETUPLOCATION = [
  {
    id: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Trajansm%C3%A4rkte_Forum.jpg',
    title: 'Meetup in Rome',
    address: 'Via Lunga 1'
  },
  {
    id: 2,
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/22/The_Mus%C3%A9e_dOrsay_at_sunset%2C_Paris_July_2013.jpg',
    title: 'Meetup in Paris',
    address: 'Enguard 1'
  },
  {
    id: 3,
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Prague_%286365119737%29.jpg',
    title: 'Meetup in Prague',
    address: 'Starý židovský hřbitov 1'
  },
]

const HomePage = () => {
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(() => {
    // http request
      setLoadedMeetups(DUMMYMEETUPLOCATION)
  }, [])
  

  return <MeetupList meetups={loadedMeetups} />

}

export default HomePage;
