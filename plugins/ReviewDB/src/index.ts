import { storage } from "@vendetta/plugin";
import { getAdmins } from "./lib/api";
import patchProfile from "./patches/patchProfile";
import exposeAPI from "./patches/exposeAPI";

// Default settings
storage.authToken ??= "";
// storage.timestampsformat ??= "hh:mm A DD/MM/YYYY";
storage.showWarning ??=true;
storage.timestamps ??=true;
storage.useThemedSend ??= true;
storage.developerThingies ??=false;
storage.beautifyJSON ??=false;

const patches = [
    exposeAPI(),
    patchProfile(),
];

export const admins = [];
getAdmins().then(i => admins.push(...i));

export const onUnload = () => patches.forEach(p => p());

export { default as settings } from "./Settings";