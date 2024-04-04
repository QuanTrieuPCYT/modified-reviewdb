import type { moment } from "@vendetta/metro/common";
import { storage } from "@vendetta/plugin";

export default function renderTimestamp(timestamp) {
    if (timestamp == "0" /* for system message thingy */ || !storage.timestamps) return "";
    return outputTimestamp(timestamp);
}

export function outputTimestamp(timestamp: typeof moment.fn): string {
    return timestamp.format(" hh:mm A DD/MM/YYYY");
}