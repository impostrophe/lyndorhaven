import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleEventAction = (action: string, eventId: string): void => {
  switch (action) {
    case "SIGN_UP":
      console.log(`Signed up for event ${eventId}`);
      break;
    case "LEARN_MORE":
      console.log(`Opened details for event ${eventId}`);
      break;
    // Add more cases as needed
    default:
      console.log(`Unknown action ${action} for event ${eventId}`);
  }
};
