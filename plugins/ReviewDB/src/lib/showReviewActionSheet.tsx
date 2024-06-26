import { clipboard } from "@vendetta/metro/common";
import { findByName, findByProps } from "@vendetta/metro";
import { storage } from "@vendetta/plugin";
import { showConfirmationAlert } from "@vendetta/ui/alerts";
import { showToast } from "@vendetta/ui/toasts";
import { getAssetIDByName } from "@vendetta/ui/assets";
import { Review } from "../def";
import { deleteReview, reportReview } from "./api";
import { canDeleteReview, canReportReview, jsonFetch } from "./utils";
import { API_URL } from "./constants";
const { hideActionSheet } = findByProps("openLazy", "hideActionSheet");
const { showSimpleActionSheet } = findByProps("showSimpleActionSheet");
const showUserProfileActionSheet = findByName("showUserProfileActionSheet");

export default (review: Review, userPageId: string) => showSimpleActionSheet({
    key: "ReviewOverflow",
    header: {
        title: review.type !== 3 ? `Review by ${review.sender.username}` : "ReviewDB System Message",
        // TODO: Return to the user profile
        // onClose: () => hideActionSheet(),
    },
    options: [
        {
            label: "Copy Text",
            onPress: () => {
                clipboard.setString(review.comment);
                showToast("Copied Review Text", getAssetIDByName("ic_message_copy"));
            }
            /* // yes later i do realize that this does not work
            onLongPress: () => {
                clipboard.setString(String(review.timestamp));
                showToast("Copied Review Timestamp", getAssetIDByName("ic_message_copy"));
            }
            */
        },
        {
            label: "View Profile",
            onPress: () => showUserProfileActionSheet({
                userId: review.sender.discordID
              }),
            /* // yes later i do realize that this does not work
            onLongPress: () => {
                clipboard.setString(review.sender.discordID);
                showToast("Copied Sender's ID!", getAssetIDByName("ic_message_copy"));
            }
            */
        },
        ...(storage.authToken && review.type !== 3 ? [
            ...(canDeleteReview(review, userPageId) ? [{
                label: "Delete Review",
                isDestructive: true,
                onPress: () => showConfirmationAlert({
                    title: "Delete Review",
                    content: "Are you sure you want to delete this review?",
                    confirmText: "Yes",
                    cancelText: "No",
                    // @ts-ignore
                    confirmColor: "red",
                    onConfirm: () => deleteReview(review.sender.discordID, review.id),
                })
            }] : []),
            ...(canReportReview(review) ? [{
                label: "Report Review",
                isDestructive: true,
                onPress: () => showConfirmationAlert({
                    title: "Report Review",
                    content: "Are you sure you want to report this review?",
                    confirmText: "Yes",
                    cancelText: "No",
                    // @ts-ignore
                    confirmColor: "red",
                    onConfirm: () => reportReview(review.id),
                })
            }] : [])
        ]: []),
        ...(storage.developerThingies ? [
            {
                label: "Copy UNIX Timestamp",
                onPress: () => {
                    clipboard.setString(String(review.timestamp));
                    showToast("Copied Review UNIX Timestamp", getAssetIDByName("ic_message_copy"));
                }
            },
            {
                label: "Copy JSON Review Data from this page",
                onPress: async () => {
                    try {
                        const jsonData = await jsonFetch(API_URL + `/users/${userPageId}/reviews`);
                        if (jsonData) {
                            clipboard.setString(storage.beautifyJSON ? JSON.stringify(jsonData, null, 4) : JSON.stringify(jsonData));
                            showToast("Copied Review JSON Data", getAssetIDByName("ic_message_copy"));
                        } else {
                            showToast("Failed to fetch review data", getAssetIDByName("ic_close_16px"));
                        }
                    } catch (error) {
                        showToast("Error fetching review data", getAssetIDByName("ic_close_16px"));
                    }
                }
            },
            {
                label: "Copy JSON Review Data from this selected user",
                onPress: async () => {
                    try {
                        const jsonData = await jsonFetch(API_URL + `/users/${review.sender.discordID}/reviews`);
                        if (jsonData) {
                            clipboard.setString(storage.beautifyJSON ? JSON.stringify(jsonData, null, 4) : JSON.stringify(jsonData));
                            showToast("Copied Review JSON Data", getAssetIDByName("ic_message_copy"));
                        } else {
                            showToast("Failed to fetch review data", getAssetIDByName("ic_close_16px"));
                        }
                    } catch (error) {
                        showToast("Error fetching review data", getAssetIDByName("ic_close_16px"));
                    }
                }
            }
        ]: []),
    ]
})