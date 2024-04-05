import { storage } from "@vendetta/plugin";
import { Review } from "../def";
import { BASE_URL, API_URL } from "./constants";
import { jsonFetch, filterReviews } from "./utils";

export const getReviews = async (userId: string): Promise<Review[]> => {
    let flags = 0;
    if (!storage.showWarning) flags |= 0b00000010;

    // read utils.ts for more info
    return storage.showWarning ? (await jsonFetch(API_URL + `/users/${userId}/reviews?flags=${flags}`)).reviews : filterReviews((await jsonFetch(API_URL + `/users/${userId}/reviews?flags=${flags}`)).reviews)
}

export const getAdmins = async () => await jsonFetch<string[]>(BASE_URL + "/admins");

export const addReview = async (userId: string, comment: string) => await jsonFetch(API_URL + `/users/${userId}/reviews`, {
    method: "PUT",
    body: JSON.stringify({
        comment: comment,
        token: storage.authToken,
    }),
});

export const deleteReview = async (userId: string, id: number) => await jsonFetch(API_URL + `/users/${userId}/reviews`, {
    method: "DELETE",
    body: JSON.stringify({
        reviewid: id,
        token: storage.authToken,
    }),
});

export const reportReview = async (id: number) => await jsonFetch(API_URL + "/reports", {
    method: "PUT",
    body: JSON.stringify({
        reviewid: id,
        token: storage.authToken,
    }),
});

export const getCurrentUser = async () => await jsonFetch(API_URL + "/users", {
    method: "POST",
    body: JSON.stringify({
        token: storage.authToken,
    }),
});