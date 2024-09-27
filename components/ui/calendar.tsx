"use client";

import React, { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isToday,
  addDays,
  subDays,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";

type EventType = "event" | "request" | "ad" | "blog";

interface Event {
  id: string;
  date: Date;
  type: EventType;
  title: string;
  description: string;
}

interface CalendarProps {
  events?: Event[];
}

const eventTypeColors: Record<EventType, string> = {
  event: "bg-red-500",
  request: "bg-blue-500",
  ad: "bg-green-500",
  blog: "bg-yellow-500",
};

const DayView = ({
  date,
  events,
  onPrevDay,
  onNextDay,
  onBackToMonth,
}: {
  date: Date;
  events: Event[];
  onPrevDay: () => void;
  onNextDay: () => void;
  onBackToMonth: () => void;
}) => {
  const dayEvents = events.filter(
    (event) => event.date.toDateString() === date.toDateString()
  );

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-4 px-2">
        <button
          onClick={onBackToMonth}
          className="text-blue-500 hover:text-blue-700 flex items-center"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back
        </button>
        <h2 className="text-lg font-semibold">{format(date, "MMM d, yyyy")}</h2>
        <div className="flex space-x-2">
          <button
            onClick={onPrevDay}
            className="p-1.5 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
            aria-label="Previous day"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
          <button
            onClick={onNextDay}
            className="p-1.5 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
            aria-label="Next day"
          >
            <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>
      {dayEvents.length > 0 ? (
        <ul className="space-y-4 flex-grow overflow-y-auto">
          {dayEvents.map((event) => (
            <li
              key={event.id}
              className="border-l-4 pl-4 py-2"
              style={{
                borderColor: eventTypeColors[event.type].replace("bg-", ""),
              }}
            >
              <h3 className="font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-600">{event.description}</p>
              <span className="text-xs text-gray-500">
                {format(event.date, "h:mm a")}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500 mt-8">
          No events for this day.
        </p>
      )}
    </div>
  );
};

export default function Component({ events = [] }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getEventTypesForDate = (date: Date) => {
    return events
      .filter((event) => event.date.toDateString() === date.toDateString())
      .map((event) => event.type);
  };

  const renderEventDots = (date: Date) => {
    const eventTypes = getEventTypesForDate(date);
    return (
      <div className="flex justify-center mt-1 space-x-1">
        {Object.entries(eventTypeColors).map(
          ([type, color]) =>
            eventTypes.includes(type as EventType) && (
              <div key={type} className={`w-1.5 h-1.5 rounded-full ${color}`} />
            )
        )}
      </div>
    );
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
  };

  const handleDayClick = (day: Date) => {
    setSelectedDate(day);
  };

  const handlePrevDay = () => {
    setSelectedDate((prev) => prev && subDays(prev, 1));
  };

  const handleNextDay = () => {
    setSelectedDate((prev) => prev && addDays(prev, 1));
  };

  const handleBackToMonth = () => {
    setSelectedDate(null);
  };

  return (
    <div className="max-w-sm mx-auto p-4 h-[500px] flex flex-col">
      {selectedDate ? (
        <DayView
          date={selectedDate}
          events={events}
          onPrevDay={handlePrevDay}
          onNextDay={handleNextDay}
          onBackToMonth={handleBackToMonth}
        />
      ) : (
        <>
          <div className="flex justify-between items-center mb-4 px-2">
            <h2 className="text-xl font-bold">
              {format(currentMonth, "MMMM yyyy")}
            </h2>
            <div className="flex space-x-2">
              <button
                onClick={handlePrevMonth}
                className="p-1.5 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
                aria-label="Previous month"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
              <button
                onClick={handleNextMonth}
                className="p-1.5 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
                aria-label="Next month"
              >
                <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1 mb-2">
            {weekDays.map((day) => (
              <div
                key={day}
                className="text-center text-sm font-medium text-gray-500 dark:text-gray-400"
              >
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1 flex-grow">
            {monthDays.map((day) => (
              <div
                key={day.toISOString()}
                className={`p-2 text-center cursor-pointer ${
                  !isSameMonth(day, currentMonth)
                    ? "text-gray-400 dark:text-gray-600"
                    : ""
                } ${
                  isToday(day)
                    ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 rounded"
                    : ""
                }`}
                onClick={() => handleDayClick(day)}
              >
                <div className={`${isToday(day) ? "font-bold" : ""}`}>
                  {format(day, "d")}
                </div>
                {renderEventDots(day)}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
