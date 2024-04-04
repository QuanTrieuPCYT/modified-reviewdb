import type { moment } from "@vendetta/metro/common";

export default function renderTimestamp(timestamp) {
    if (timestamp == "0") return "";
    return outputTimestamp(timestamp);
}

export function outputTimestamp(timestamp: typeof moment.fn): string {
    return timestamp.format(" hh:mm A DD/MM/YYYY");
}