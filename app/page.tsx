import CommunityCard from "@/components/ui/card";
import Calendar from "@/components/ui/calendar";
import { dummyEvents } from "@/lib/dummy-events";
import { handleEventAction } from "@/lib/utils";
export default function Home() {
  const topThreeEvents = dummyEvents.slice(0, 3);

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <h1 className="text-4xl font-bold mb-6 text-center">Community Connect</h1>

      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {topThreeEvents.map((event, index) => (
              <CommunityCard
                key={index}
                thumbnail={`/path/to/image/${index + 1}.jpg`}
                type="event"
                title={event.title}
                dateTime={event.dateTime}
                description={event.description}
                thumbsUp={0}
                signups={0}
                primaryCTA={{
                  label: event.primaryCTA.label,
                  action:
                    typeof event.primaryCTA.action === "string"
                      ? () =>
                          handleEventAction(
                            event.primaryCTA.action as string,
                            event.id
                          )
                      : event.primaryCTA.action,
                }}
                secondaryCTA={{
                  label: event.secondaryCTA.label,
                  action:
                    typeof event.secondaryCTA.action === "string"
                      ? () =>
                          handleEventAction(
                            event.secondaryCTA.action as string,
                            event.id
                          )
                      : event.secondaryCTA.action,
                }}
              />
            ))}
          </div>
        </div>

        <div className="lg:w-1/3">
          <h2 className="text-2xl font-semibold mb-4">Event Calendar</h2>
          <Calendar />
        </div>
      </div>
    </main>
  );
}
