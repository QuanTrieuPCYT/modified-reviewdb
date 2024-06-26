import { findByStoreName, find, findByProps } from "@vendetta/metro";
import { semanticColors } from "@vendetta/ui";
import { APIResponse, Review } from "../def";
import { admins } from "..";

const { getCurrentUser } = findByStoreName("UserStore");
const resolveSemanticColor: (theme: Theme, semanticColor: object) => string
    = find(m => m.default?.internal?.resolveSemanticColor)?.default.internal.resolveSemanticColor
        ?? find(m => m.meta?.resolveSemanticColor)?.meta.resolveSemanticColor ?? (() => {});
const { useThemeContext } = findByProps("useThemeContext");

export const canDeleteReview = (review: Review, userPageId: string) => userPageId == getCurrentUser()?.id || review.sender.discordID === getCurrentUser()?.id || admins.includes(getCurrentUser()?.id);
export const canReportReview = (review: Review) => review.sender.discordID !== getCurrentUser()?.id;

export async function jsonFetch<T = APIResponse>(input: RequestInfo | URL, options?: RequestInit): Promise<T> {
    const req = await fetch(input, {
        headers: {
            "content-type": "application/json",
            accept: "application/json",
        },
        ...options,
    });

    const json = await req.json();
    if (json.success === false) throw new Error(json.message);
    
    return json;
}

// I think Discord have a hook like this but it confused me to no end, so I made my own!
export const useThemedColor = (key: string) => resolveSemanticColor(useThemeContext()?.theme ?? "dark", semanticColors[key]);

// ReviewDB broke the hide warning option on the latest update as of 5th April 2024, so this is a fallback mechanism that I came up with
// Should work as long as they still keep the JSON scheme.
export function filterReviews(reviews: Review[]): Review[] {
    return reviews.filter(review => review.id !== 0 && !review.comment.includes("Spamming and writing"));
}

/*
export function needsFilter(review: Review): boolean {
    return review.id === 0 && review.comment.includes("Spamming and writing");
}
*/