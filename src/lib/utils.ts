import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function parseTimeFrom(time: Date): string {
    const diffMs = new Date().getTime() - time.getTime();
    const diffDays = diffMs / (1000 * 60 * 60 * 24);

    if (diffDays >= 365) {
        const years = Math.floor(diffDays / 365);
        return `${years} ${years === 1 ? "year" : "years"} ago`;
    }
    if (diffDays >= 30.4166666667) {
        const months = Math.floor(diffDays / 30.4166666667);
        return `${months} ${months === 1 ? "month" : "months"} ago`;
    }
    if (diffDays >= 7) {
        const weeks = Math.floor(diffDays / 7);
        return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
    }
    if (diffDays >= 1) {
        const days = Math.floor(diffDays);
        return `${days} ${days === 1 ? "day" : "days"} ago`;
    }

    const diffHours = diffMs / (1000 * 60 * 60);
    if (diffHours >= 1) {
        const hours = Math.floor(diffHours);
        return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    }

    const diffMinutes = diffMs / (1000 * 60);
    if (diffMinutes >= 1) {
        const minutes = Math.floor(diffMinutes);
        return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    }

    return "Just now"
}