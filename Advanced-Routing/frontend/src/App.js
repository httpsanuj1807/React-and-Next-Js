import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import HomePage from "./Pages/HomePage";
import EventsPage, { loader as eventLoader } from "./Pages/EventsPage";
import EventDetailPage, {
  loader as detailPageLoader, action as deleteAction
} from "./Pages/EventDetailPage";
import NewEventPage from "./Pages/NewEventPage";
import EditEventPage from "./Pages/EditEventPage";
import EventLayout from "./components/EventLayout";
import ErrorPage from "./Pages/ErrorPage";
import {action as newEventAction} from './components/EventForm.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "events",
        element: <EventLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventLoader,
          },
          {
            path: ":eventId",
            id:'event-details',
            loader: detailPageLoader,  // not accessible inside
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: newEventAction
              },
            ],
          }
          ,
          {
            path: "new",
            element: <NewEventPage />,
            action: newEventAction
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
