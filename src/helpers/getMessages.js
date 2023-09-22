export const getMessages = () => {
  return {
    allDay: "All day",
    previous: "<",
    next: ">",
    today: "Today",
    month: "Month",
    week: "Week",
    day: "Day",
    agenda: "Agenda",
    date: "Date",
    time: "Time",
    event: "Event",
    noEventsInRange: "No events in range",
    showMore: (total) => `+ Show more (${total})`,
  };
};
