import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { addHours } from "date-fns";
import { localizer, getMessages } from "../../helpers";

import { NavBar } from "../../calendar"


const events = [{
  title: 'bla',
  notes: 'dsfsafasdfs',
  start: new Date(),
  end: addHours( new Date(), +2),
  bgColor: '',
}]


export const CalendarPage = () => {

  const getEventStyle = ( event, start, end, isSelected ) => {
    
  }

  return (
    <main className="bg-slate-50">
      <NavBar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc( 100vh - 80px )" }}
        messages={getMessages()}
        culture="en-US"
        eventPropGetter={ getEventStyle }
      />
    </main>
  );
}
