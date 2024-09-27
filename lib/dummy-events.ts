import { v4 as uuidv4 } from "uuid";

export const dummyEvents = [
  {
    id: uuidv4(),
    thumbnail: "/images/community-cleanup.jpg",
    type: "event",
    title: "Community Cleanup Day",
    dateTime: "October 15, 2023 9:00 AM",
    description: "Join us for our annual community cleanup event!",
    thumbsUp: 42,
    signups: 78,
    primaryCTA: {
      label: "Sign Up",
      action: "SIGN_UP",
    },
    secondaryCTA: {
      label: "Learn More",
      action: "LEARN_MORE",
    },
  },
  {
    id: uuidv4(),
    thumbnail: "/images/neighborhood-watch.jpg",
    type: "event",
    title: "Neighborhood Watch Meeting",
    dateTime: "October 19, 2023 7:00 PM",
    description: "Monthly meeting to discuss community safety.",
    thumbsUp: 15,
    signups: 30,
    primaryCTA: {
      label: "Join Meeting",
      action: "JOIN_MEETING",
    },
    secondaryCTA: {
      label: "Learn More",
      action: "LEARN_MORE",
    },
  },
  {
    id: uuidv4(),
    thumbnail: "/images/food-festival.jpg",
    type: "event",
    title: "Local Food Festival",
    dateTime: "October 22, 2023 11:00 AM",
    description: "Celebrate local cuisine and meet your neighbors!",
    thumbsUp: 89,
    signups: 150,
    primaryCTA: {
      label: "Get Tickets",
      action: "GET_TICKETS",
    },
    secondaryCTA: {
      label: "View Menu",
      action: "VIEW_MENU",
    },
  },
  {
    id: uuidv4(),
    thumbnail: "/images/art-exhibition.jpg",
    type: "event",
    title: "Community Art Exhibition",
    dateTime: "October 25, 2023 2:00 PM",
    description: "Showcase of local artists in our community center.",
    thumbsUp: 56,
    signups: 75,
    primaryCTA: {
      label: "RSVP",
      action: "RSVP",
    },
    secondaryCTA: {
      label: "Artist List",
      action: "VIEW_ARTISTS",
    },
  },
  {
    id: uuidv4(),
    thumbnail: "/images/eco-workshop.jpg",
    type: "event",
    title: "Eco-Friendly Workshop",
    dateTime: "October 28, 2023 10:00 AM",
    description: "Learn how to reduce waste and live more sustainably.",
    thumbsUp: 32,
    signups: 45,
    primaryCTA: {
      label: "Register",
      action: "REGISTER",
    },
    secondaryCTA: {
      label: "Workshop Topics",
      action: "VIEW_TOPICS",
    },
  },
  {
    id: uuidv4(),
    thumbnail: "/images/holiday-bazaar.jpg",
    type: "event",
    title: "Holiday Bazaar",
    dateTime: "November 5, 2023 1:00 PM",
    description: "Support local vendors and enjoy festive activities.",
    thumbsUp: 67,
    signups: 120,
    primaryCTA: {
      label: "Attend",
      action: "ATTEND",
    },
    secondaryCTA: {
      label: "Vendor List",
      action: "VIEW_VENDORS",
    },
  },
  {
    id: uuidv4(),
    thumbnail: "/images/youth-sports.jpg",
    type: "event",
    title: "Youth Sports Tournament",
    dateTime: "November 12, 2023 9:00 AM",
    description: "Annual youth sports competition for ages 8-14.",
    thumbsUp: 45,
    signups: 80,
    primaryCTA: {
      label: "Register Team",
      action: "REGISTER_TEAM",
    },
    secondaryCTA: {
      label: "Schedule",
      action: "VIEW_SCHEDULE",
    },
  },
  {
    id: uuidv4(),
    thumbnail: "/images/tech-workshop.jpg",
    type: "event",
    title: "Senior Citizens' Tech Workshop",
    dateTime: "November 18, 2023 2:00 PM",
    description: "Learn basic computer and smartphone skills.",
    thumbsUp: 28,
    signups: 40,
    primaryCTA: {
      label: "Sign Up",
      action: "SIGN_UP",
    },
    secondaryCTA: {
      label: "Course Outline",
      action: "VIEW_OUTLINE",
    },
  },
  {
    id: uuidv4(),
    thumbnail: "/images/community-garden.jpg",
    type: "event",
    title: "Community Garden Planting Day",
    dateTime: "November 25, 2023 10:00 AM",
    description: "Help plant winter vegetables in our community garden.",
    thumbsUp: 39,
    signups: 55,
    primaryCTA: {
      label: "Volunteer",
      action: "VOLUNTEER",
    },
    secondaryCTA: {
      label: "Garden Map",
      action: "VIEW_MAP",
    },
  },
  {
    id: uuidv4(),
    thumbnail: "/images/history-lecture.jpg",
    type: "event",
    title: "Local History Lecture Series",
    dateTime: "December 2, 2023 7:00 PM",
    description: "Learn about our town's rich history from local experts.",
    thumbsUp: 22,
    signups: 35,
    primaryCTA: {
      label: "Reserve Seat",
      action: "RESERVE_SEAT",
    },
    secondaryCTA: {
      label: "Speaker Bios",
      action: "VIEW_SPEAKERS",
    },
  },
  {
    id: uuidv4(),
    thumbnail: "/images/winter-craft-fair.jpg",
    type: "event",
    title: "Winter Craft Fair",
    dateTime: "December 9, 2023 11:00 AM",
    description: "Showcase of handmade crafts by local artisans.",
    thumbsUp: 76,
    signups: 110,
    primaryCTA: {
      label: "Attend",
      action: "ATTEND",
    },
    secondaryCTA: {
      label: "Artisan Directory",
      action: "VIEW_ARTISTANS",
    },
  },
  {
    id: uuidv4(),
    thumbnail: "/images/charity-run.jpg",
    type: "event",
    title: "Charity Run for Education",
    dateTime: "December 16, 2023 8:00 AM",
    description: "5K run to raise funds for local schools.",
    thumbsUp: 88,
    signups: 200,
    primaryCTA: {
      label: "Register",
      action: "REGISTER",
    },
    secondaryCTA: {
      label: "Route Map",
      action: "VIEW_ROUTE",
    },
  },
  {
    id: uuidv4(),
    thumbnail: "/images/holiday-concert.jpg",
    type: "event",
    title: "Holiday Concert",
    dateTime: "December 20, 2023 7:30 PM",
    description: "Annual holiday performance by the community choir.",
    thumbsUp: 65,
    signups: 150,
    primaryCTA: {
      label: "Buy Tickets",
      action: "BUY_TICKETS",
    },
    secondaryCTA: {
      label: "Program",
      action: "VIEW_PROGRAM",
    },
  },
  {
    id: uuidv4(),
    thumbnail: "/images/new-years-fireworks.jpg",
    type: "event",
    title: "New Year's Eve Fireworks",
    dateTime: "December 31, 2023 11:30 PM",
    description: "Ring in the New Year with a spectacular fireworks display.",
    thumbsUp: 120,
    signups: 500,
    primaryCTA: {
      label: "Attend",
      action: "ATTEND",
    },
    secondaryCTA: {
      label: "Viewing Spots",
      action: "VIEW_SPOTS",
    },
  },
  {
    id: uuidv4(),
    thumbnail: "/images/bird-watching.jpg",
    type: "event",
    title: "Winter Bird Watching Tour",
    dateTime: "January 7, 2024 7:00 AM",
    description: "Guided tour to observe local winter bird species.",
    thumbsUp: 18,
    signups: 25,
    primaryCTA: {
      label: "Book Tour",
      action: "BOOK_TOUR",
    },
    secondaryCTA: {
      label: "Bird Guide",
      action: "VIEW_GUIDE",
    },
  },
  {
    id: uuidv4(),
    thumbnail: "/images/health-fair.jpg",
    type: "event",
    title: "Community Health Fair",
    dateTime: "January 14, 2024 10:00 AM",
    description: "Free health screenings and wellness information.",
    thumbsUp: 54,
    signups: 180,
    primaryCTA: {
      label: "Register",
      action: "REGISTER",
    },
    secondaryCTA: {
      label: "Services List",
      action: "VIEW_SERVICES",
    },
  },
  {
    id: uuidv4(),
    thumbnail: "/images/business-networking.jpg",
    type: "event",
    title: "Local Business Networking Event",
    dateTime: "January 21, 2024 6:00 PM",
    description: "Connect with local entrepreneurs and business owners.",
    thumbsUp: 42,
    signups: 75,
    primaryCTA: {
      label: "RSVP",
      action: "RSVP",
    },
    secondaryCTA: {
      label: "Attendee List",
      action: "VIEW_ATTENDEES",
    },
  },
  {
    id: uuidv4(),
    thumbnail: "/images/film-festival.jpg",
    type: "event",
    title: "Winter Film Festival",
    dateTime: "January 28, 2024 1:00 PM",
    description: "Screening of independent films by local filmmakers.",
    thumbsUp: 36,
    signups: 90,
    primaryCTA: {
      label: "Get Tickets",
      action: "GET_TICKETS",
    },
    secondaryCTA: {
      label: "Film Schedule",
      action: "VIEW_SCHEDULE",
    },
  },
  {
    id: uuidv4(),
    thumbnail: "/images/valentines-dance.jpg",
    type: "event",
    title: "Valentine's Day Dance",
    dateTime: "February 14, 2024 8:00 PM",
    description: "Annual community dance for couples and singles alike.",
    thumbsUp: 78,
    signups: 150,
    primaryCTA: {
      label: "Buy Tickets",
      action: "BUY_TICKETS",
    },
    secondaryCTA: {
      label: "Dance Schedule",
      action: "VIEW_SCHEDULE",
    },
  },
  {
    id: uuidv4(),
    thumbnail: "/images/science-fair.jpg",
    type: "event",
    title: "Science Fair for Kids",
    dateTime: "February 24, 2024 10:00 AM",
    description: "Showcase of science projects by local students.",
    thumbsUp: 45,
    signups: 100,
    primaryCTA: {
      label: "Register Project",
      action: "REGISTER_PROJECT",
    },
    secondaryCTA: {
      label: "Project Categories",
      action: "VIEW_CATEGORIES",
    },
  },
  {
    id: uuidv4(),
    thumbnail: "/images/swap-meet.jpg",
    type: "event",
    title: "Spring Cleaning Swap Meet",
    dateTime: "March 2, 2024 9:00 AM",
    description: "Trade unwanted items with neighbors and reduce waste.",
    thumbsUp: 33,
    signups: 80,
    primaryCTA: {
      label: "Register Booth",
      action: "REGISTER_BOOTH",
    },
    secondaryCTA: {
      label: "Event Rules",
      action: "VIEW_RULES",
    },
  },
  {
    id: uuidv4(),
    thumbnail: "/images/st-patricks-parade.jpg",
    type: "event",
    title: "St. Patrick's Day Parade",
    dateTime: "March 17, 2024 11:00 AM",
    description: "Annual parade celebrating Irish heritage and culture.",
    thumbsUp: 95,
    signups: 300,
    primaryCTA: {
      label: "Attend",
      action: "ATTEND",
    },
    secondaryCTA: {
      label: "Parade Route",
      action: "VIEW_ROUTE",
    },
  },
  {
    id: uuidv4(),
    thumbnail: "/images/community-theater.jpg",
    type: "event",
    title: "Community Theater Production",
    dateTime: "March 23, 2024 7:00 PM",
    description: "Local theater group presents a classic play.",
    thumbsUp: 52,
    signups: 120,
    primaryCTA: {
      label: "Buy Tickets",
      action: "BUY_TICKETS",
    },
    secondaryCTA: {
      label: "Cast List",
      action: "VIEW_CAST",
    },
  },
  {
    id: uuidv4(),
    thumbnail: "/images/farmers-market.jpg",
    type: "event",
    title: "Spring Farmers Market Opening",
    dateTime: "April 6, 2024 8:00 AM",
    description: "First farmers market of the season with local produce.",
    thumbsUp: 87,
    signups: 200,
    primaryCTA: {
      label: "Attend",
      action: "ATTEND",
    },
    secondaryCTA: {
      label: "Vendor List",
      action: "VIEW_VENDORS",
    },
  },
  {
    id: uuidv4(),
    thumbnail: "/images/earth-day-fair.jpg",
    type: "event",
    title: "Earth Day Environmental Fair",
    dateTime: "April 22, 2024 10:00 AM",
    description: "Learn about conservation and sustainable living practices.",
    thumbsUp: 68,
    signups: 150,
    primaryCTA: {
      label: "Register",
      action: () => console.log("Registered for Earth Day Environmental Fair"),
    },
    secondaryCTA: {
      label: "Activity Schedule",
      action: () =>
        console.log("Viewed schedule for Earth Day Environmental Fair"),
    },
  },
  {
    id: uuidv4(),
    thumbnail: "/images/talent-show.jpg",
    type: "event",
    title: "Community Talent Show",
    dateTime: "April 27, 2024 6:00 PM",
    description: "Showcase of local talent across all age groups.",
    thumbsUp: 72,
    signups: 100,
    primaryCTA: {
      label: "Buy Tickets",
      action: () => console.log("Bought tickets for Community Talent Show"),
    },
    secondaryCTA: {
      label: "Performer List",
      action: () => console.log("Viewed performers for Community Talent Show"),
    },
  },
];
