import React from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm'
import { useHistory } from 'react-router-dom';

const NewMeetups = () => {
  const history = useHistory ();

 function onAddMeetupHandler(meetupData){
    fetch('https://react-getting-started-661fc-default-rtdb.firebaseio.com/meetups.json',
    {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    ).then(() => {
      history.replace('/')
    });
 }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
    </section>
  )
}

export default NewMeetups