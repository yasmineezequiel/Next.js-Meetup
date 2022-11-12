import MeetupForm from '../components/meetups/NewMeetupForm'

const CreateNewMeetup = () => {
  const data = (meetupinfo) => {
    console.log('hereeee')
  }
  return <MeetupForm onAddMeetup={data} />
}

export default CreateNewMeetup;