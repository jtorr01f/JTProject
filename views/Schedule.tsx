"use client";

import { Calendar } from "@/components/Calendar";
import { EventClickArg, EventSourceInput } from "@fullcalendar/core/index.js";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "../styles/viewStyles/schedule.styles.css";

const Schedule = () => {
  const router = useRouter();
  const [events, setEvents] = useState<EventSourceInput>([]);
  const onDayClick = () => router.push("/createEvent");
  const onEventClick = (params: EventClickArg) => {
    setEvents([]);
    console.log(params.event);
  };
  return (
    <div className="schedule-wrapper">
      <Calendar
        events={events}
        onDayClick={onDayClick}
        onEventClick={onEventClick}
      />
    </div>
  );
};

export default Schedule;
