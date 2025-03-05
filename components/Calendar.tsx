"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { EventClickArg, EventSourceInput } from "@fullcalendar/core/index.js";
// import { useRouter } from "next/navigation";

export const Calendar = ({
  events,
  onDayClick,
  onEventClick,
}: {
  events: EventSourceInput;
  onDayClick: () => void;
  onEventClick: (params: EventClickArg) => void;
}) => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      editable={true}
      selectable={true}
      selectMirror={true}
      dayMaxEvents={true}
      weekends={true}
      events={events}
      select={onDayClick}
      eventClick={onEventClick}
    />
  );
};
