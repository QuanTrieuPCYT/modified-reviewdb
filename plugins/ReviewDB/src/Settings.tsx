import { findByProps } from "@vendetta/metro";
import { ReactNative as RN } from "@vendetta/metro/common";
import { useProxy } from "@vendetta/storage";
import { storage } from "@vendetta/plugin";
import { getAssetIDByName } from "@vendetta/ui/assets";
import { Forms } from "@vendetta/ui/components";
import showAuthModal from "./lib/showAuthModal";
const { ClearButtonVisibility, default: InputView } = findByProps("ClearButtonVisibility");

const { FormSection, FormRow, FormSwitchRow, FormDivider } = Forms;

export default () => {
    useProxy(storage);

    return (
        <RN.ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 38 }}>
            <FormSection title="Authentication" titleStyleType="no_border">
                <FormRow
                    label="Authenticate with ReviewDB"
                    leading={<FormRow.Icon source={getAssetIDByName("copy")} />}
                    trailing={FormRow.Arrow}
                    onPress={showAuthModal}
                />
                <FormDivider />
                <FormRow
                    label="Log out of ReviewDB"
                    subLabel="Note that this does not remove ReviewDB from your Authorized Apps page in Discord."
                    leading={<FormRow.Icon source={getAssetIDByName("ic_logout_24px")} />}
                    disabled={storage.authToken.length === 0}
                    onPress={() => storage.authToken = ""}
                />
            </FormSection>
            <FormSection title="Settings">
            <FormSwitchRow
                    label="Show warning"
                    subLabel="Controls whether the review warning should be shown."
                    leading={<FormRow.Icon source={getAssetIDByName("ic_warning_24px")} />}
                    value={storage.showWarning}
                    onValueChange={(v: boolean) => storage.showWarning = v}
                />
                <FormSwitchRow
                    label="Show timestamps"
                    subLabel="Controls whether timestamps should be shown."
                    leading={<FormRow.Icon source={getAssetIDByName("clock")} />}
                    value={storage.timestamps}
                    onValueChange={(v: boolean) => storage.timestamps = v}
                />
                <FormSwitchRow
                    label="Use profile-themed send button"
                    subLabel="Controls whether the review send button should attempt to match the user's profile colors."
                    leading={<FormRow.Icon source={getAssetIDByName("ic_paint_brush")} />}
                    value={storage.useThemedSend}
                    onValueChange={(v: boolean) => storage.useThemedSend = v}
                />
                <FormSwitchRow
                    label="Show developer thingies :3"
                    subLabel="Self-explanatory, lol."
                    leading={<FormRow.Icon source={getAssetIDByName("ic_gear")} />}
                    value={storage.developerThingies}
                    onValueChange={(v: boolean) => storage.developerThingies = v}
                />
            </FormSection>
        </RN.ScrollView>
    )
}