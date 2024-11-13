import EventForm from '../components/EventForm.js'
import {useRouteLoaderData } from 'react-router-dom'


export default function EditEventPage() {

  const {event} = useRouteLoaderData('event-details');

  return (
    <EventForm method='PATCH' event={event} /> 
  )
}
