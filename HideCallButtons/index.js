(function(B,l,m,a,e,C,R,E){"use strict";const{FormSection:f,FormDivider:V,FormIcon:i,FormSwitchRow:c}=R.Forms;function b(){return E.useProxy(e.storage),React.createElement(C.ReactNative.ScrollView,null,React.createElement(f,{title:"User Profile",titleStyleType:"no_border"},React.createElement(c,{label:"Hide call button",leading:React.createElement(i,{source:a.getAssetIDByName("ic_audio")}),onValueChange:function(o){e.storage.upHideVoiceButton=o},value:e.storage.upHideVoiceButton}),React.createElement(V,null),React.createElement(c,{label:"Hide video button",leading:React.createElement(i,{source:a.getAssetIDByName("ic_video")}),onValueChange:function(o){e.storage.upHideVideoButton=o},value:e.storage.upHideVideoButton})),React.createElement(f,{title:"DMs",titleStyleType:"no_border"},React.createElement(c,{label:"Hide call button",leading:React.createElement(i,{source:a.getAssetIDByName("ic_audio")}),onValueChange:function(o){e.storage.dmHideCallButton=o},value:e.storage.dmHideCallButton}),React.createElement(V,null),React.createElement(c,{label:"Hide video button",leading:React.createElement(i,{source:a.getAssetIDByName("ic_video")}),onValueChange:function(o){e.storage.dmHideVideoButton=o},value:e.storage.dmHideVideoButton})),React.createElement(f,{title:"Other",titleStyleType:"no_border"},React.createElement(c,{label:"Hide video button in VC",leading:React.createElement(i,{source:a.getAssetIDByName("video")}),onValueChange:function(o){return e.storage.hideVCVideoButton=o},value:e.storage.hideVCVideoButton})))}let s=[];var _={onLoad:function(){e.storage.upHideVoiceButton??=!0,e.storage.upHideVideoButton??=!0,e.storage.dmHideCallButton??=!1,e.storage.dmHideVideoButton??=!1,e.storage.hideVCVideoButton??=!1;const o=a.getAssetIDByName("ic_video"),p=a.getAssetIDByName("ic_audio"),H=a.getAssetIDByName("video"),h=a.getAssetIDByName("nav_header_connect"),D=l.findByName("UserProfileActions",!1),N=l.find(function(u){return u?.type?.name=="PrivateChannelButtons"}),A=l.findByProps("ChannelButtons"),I=l.findByProps("VideoButton");s.push(m.after("default",D,function(u,d){if(!e.storage.upHideVideoButton&&!e.storage.upHideVoiceButton)return;let t=d?.props?.children?.props?.children[1]?.props?.children;if(t?.props?.children!==void 0&&(t=t?.props?.children),t!==void 0)for(var n in t){var r=t[n];if(r?.props?.children!==void 0){var v=r?.props?.children;for(var g in v){var y=v[g];(y?.props?.icon===p&&e.storage.upHideVoiceButton||y?.props?.icon===o&&e.storage.upHideVideoButton)&&delete v[g]}}(r?.props?.icon===p&&e.storage.upHideVoiceButton||r?.props?.icon===o&&e.storage.upHideVideoButton)&&delete t[n]}})),s.push(m.after("default",I,function(u,d){if(!e.storage.hideVCVideoButton)return;const t=d?.props?.children?.props?.children?.props?.children;t!==void 0&&delete t[0]})),s.push(m.after("type",N,function(u,d){if(!e.storage.dmHideCallButton&&!e.storage.dmHideVideoButton)return;const t=d?.props?.children;if(t!==void 0)for(var n in t){var r=t[n];(r?.props?.source===h&&e.storage.dmHideCallButton||r?.props?.source===H&&e.storage.dmHideVideoButton)&&delete t[n]}})),s.push(m.after("ChannelButtons",A,function(u,d){if(!e.storage.dmHideCallButton&&!e.storage.dmHideVideoButton)return;const t=d?.props?.children;if(t!==void 0)for(var n in t){var r=t[n]?.props?.children[0];r!==void 0&&(r?.props?.source===h&&e.storage.dmHideCallButton||r?.props?.source===H&&e.storage.dmHideVideoButton)&&delete t[n]}}))},onUnload:function(){for(const o of s)o()},settings:b};return B.default=_,Object.defineProperty(B,"__esModule",{value:!0}),B})({},vendetta.metro,vendetta.patcher,vendetta.ui.assets,vendetta.plugin,vendetta.metro.common,vendetta.ui.components,vendetta.storage);
