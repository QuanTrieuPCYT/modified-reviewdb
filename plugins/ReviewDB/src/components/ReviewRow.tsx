import { ReactNative as RN, stylesheet } from "@vendetta/metro/common";
import { findByName } from "@vendetta/metro";
import { Forms } from "@vendetta/ui/components";
import { Review } from "../def";
import { useThemedColor } from "../lib/utils";
import showReviewActionSheet from "../lib/showReviewActionSheet";
const showUserProfileActionSheet = findByName("showUserProfileActionSheet");
import ReviewUsername from "./ReviewUsername";
import { moment } from "@vendetta/metro/common";
import renderTimestamp from "../lib/timestamp";

interface ReviewRowProps {
    review: Review;
}

const styles = stylesheet.createThemedStyleSheet({
    avatar: {
        height: 36,
        width: 36,
        borderRadius: 18,
    },
});

const { FormRow, FormSubLabel } = Forms;

// This component behaves VERY similarly to this custom one, but subLabel doesn't get themed so... here we are!
// const UserProfileRow = findByName("UserProfileRow");

interface ReviewRowProps {
    userPageId: string;
}


export default ({ review, userPageId }: ReviewRowProps) => (
    <FormRow
        label={<ReviewUsername username={review.sender.username} timestamp={renderTimestamp(moment.unix(review.timestamp))} badges={review.sender.badges}/> }
        subLabel={<FormSubLabel text={review.comment} style={{ color: useThemedColor("TEXT_NORMAL") }} />}
        leading={<RN.Image style={styles.avatar} source={{ uri: review.sender.profilePhoto }} />}
        onPress={() => showUserProfileActionSheet({
            userId: review.sender.discordID
          })}
        onLongPress={() => showReviewActionSheet(review, userPageId)}
    />
)