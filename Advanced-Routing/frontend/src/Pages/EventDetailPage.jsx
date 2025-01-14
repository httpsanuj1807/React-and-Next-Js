import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";


export default function EventDetailPage() {

  const {event} = useRouteLoaderData('event-details');

  return (
    <EventItem event={event} />
  )
}

export async function loader({request, params}) {
  
  const id = params.eventId;
  const response = await fetch('http://localhost:8080/events/' + id);

  if(!response.ok){
    throw json(
      {message:'Could not load event details'},{status:500}
    )
  }

  return response;
}


export async function action({request, params}) {
  
  const id = params.eventId;

  const response = await fetch('http://localhost:8080/events/' + id, {
    method: request.method
  });

  if(!response.ok){
    throw json(
      {message:'Could not delete the event'},{status:500}
    )
  }

  return redirect('/events');

}