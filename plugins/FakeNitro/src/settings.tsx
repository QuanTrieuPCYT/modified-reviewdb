import { ReactNative as RN } from "@vendetta/metro/common";
import { Forms } from "@vendetta/ui/components";
import { useProxy } from "@vendetta/storage";
import { storage } from "@vendetta/plugin";

const { FormSection, FormRadioRow, FormSwitchRow, FormDivider } = Forms;

const sizeOptions = {
    Tiny: 16,
    Small: 32,
    Medium: 48,
    Large: 64,
    Huge: 96,
    Jumbo: 128,
}

const previewUri = "https://cdn.discordapp.com/emojis/926602689213767680.webp";

export default () => {
    useProxy(storage);

    return (
        <RN.ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 38 }}>
            <FormSection title="Emoji Size" titleStyleType="no_border">
                {Object.entries(sizeOptions).map(([name, size]) => <FormRadioRow
                    label={name}
                    subLabel={size}
                    selected={storage.emojiSize === size}
                    onPress={() => {
                        storage.emojiSize = size;
                    }}
                />)}
            </FormSection>
            <FormSection title="Preview">
                <RN.Image
                    source={{ 
                        uri: `${previewUri}?size=${storage.emojiSize}`,
                        width: storage.emojiSize,
                        height: storage.emojiSize 
                    }}
                />
            </FormSection>
            <FormSection title="User Profile" titleStyleType="no_border">
                <FormSwitchRow
                    label="Use hyperlinks when sending fake emojis"
                    onValueChange={(v) => {
                        storage.hyperLink = v;
                    }}
                    value={storage.hyperLink}
                />
                <FormDivider />
                <FormSwitchRow
                    label="Transform fake emojis into real ones"
                    onValueChange={(v) => {
                        storage.transformEmoji = v;
                    }}
                    value={storage.transformEmoji}
                />
            </FormSection>
        </RN.ScrollView>
    )
}