"use client";

import { useState } from "react";
import CommunityCard from "@/components/ui/card";
import { dummyEvents } from "@/lib/dummy-events";
import { handleEventAction } from "@/lib/utils";

const EventsPage = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyEvents.map((event) => (
          <Card key={event.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              <CardDescription>{event.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Date:</strong> {format(event.date, "MMMM d, yyyy")}
              </p>
              <p>
                <strong>Time:</strong> {format(event.date, "h:mm a")}
              </p>
              <p>
                <strong>Location:</strong> {event.location}
              </p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button className="w-full">View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
