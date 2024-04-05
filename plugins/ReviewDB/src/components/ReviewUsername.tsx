import { ReactNative as RN, stylesheet } from "@vendetta/metro/common";
import { Forms } from "@vendetta/ui/components";
import { Badge } from "../def";
import { useThemedColor } from "../lib/utils";
import ReviewBadge from "./ReviewBadge";

interface ReviewUsernameProps {
    username: string;
    timestamp: string;
    badges: Badge[];
}

const styles = stylesheet.createThemedStyleSheet({
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    timeStamp: {
        flexDirection: "row",
        alignItems: "flex-end",
    }
})

const { FormLabel } = Forms;
const { FormSubLabel } = Forms;

export default ({ username, badges, timestamp }: ReviewUsernameProps) => (
    <RN.View style={styles.row}>
        <FormLabel text={username} style={{ color: useThemedColor("TEXT_NORMAL") }} />
        <FormSubLabel text={timestamp} style={{ color: useThemedColor("TEXT_NORMAL") }, styles.timeStamp }/>
        <RN.View style={styles.row}>{badges.map(b => <ReviewBadge badge={b} />)}</RN.View>
    </RN.View>
)
