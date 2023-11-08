(function(f,m,i,a,y,e,g,C,R){"use strict";const{FormSection:B,FormDivider:V,FormIcon:c,FormSwitchRow:u}=C.Forms;function E(){return R.useProxy(e.storage),React.createElement(g.ReactNative.ScrollView,null,React.createElement(B,{title:"User Profile",titleStyleType:"no_border"},React.createElement(u,{label:"Hide call button",leading:React.createElement(c,{source:a.getAssetIDByName("ic_audio")}),onValueChange:function(o){e.storage.upHideVoiceButton=o},value:e.storage.upHideVoiceButton}),React.createElement(V,null),React.createElement(u,{label:"Hide video button",leading:React.createElement(c,{source:a.getAssetIDByName("ic_video")}),onValueChange:function(o){e.storage.upHideVideoButton=o},value:e.storage.upHideVideoButton})),React.createElement(B,{title:"DMs",titleStyleType:"no_border"},React.createElement(u,{label:"Hide call button",leading:React.createElement(c,{source:a.getAssetIDByName("ic_audio")}),onValueChange:function(o){e.storage.dmHideCallButton=o},value:e.storage.dmHideCallButton}),React.createElement(V,null),React.createElement(u,{label:"Hide video button",leading:React.createElement(c,{source:a.getAssetIDByName("ic_video")}),onValueChange:function(o){e.storage.dmHideVideoButton=o},value:e.storage.dmHideVideoButton})),React.createElement(B,{title:"Other",titleStyleType:"no_border"},React.createElement(u,{label:"Hide video button in VC",leading:React.createElement(c,{source:a.getAssetIDByName("video")}),onValueChange:function(o){return e.storage.hideVCVideoButton=o},value:e.storage.hideVCVideoButton})))}let l=[];var _={onLoad:function(){e.storage.upHideVoiceButton??=!0,e.storage.upHideVideoButton??=!0,e.storage.dmHideCallButton??=!1,e.storage.dmHideVideoButton??=!1,e.storage.hideVCVideoButton??=!1;const o=a.getAssetIDByName("ic_video"),b=a.getAssetIDByName("ic_audio"),p=a.getAssetIDByName("video"),H=a.getAssetIDByName("nav_header_connect"),N=m.findByName("UserProfileActions",!1),D=m.find(function(s){return s?.type?.name=="PrivateChannelButtons"}),I=m.findByProps("ChannelButtons"),A=m.findByName("FocusedControlsBottomControls",!1);l.push(i.after("default",N,function(s,d){if(!e.storage.upHideVideoButton&&!e.storage.upHideVoiceButton)return;const t=y.findInReactTree(d,function(v){return v?.props?.children[1]?.type?.name=="_default"})?.props?.children;if(t!==void 0){for(var n in t){var r=t[n];(r?.props?.icon===b&&e.storage.upHideVoiceButton||r?.props?.icon===o&&e.storage.upHideVideoButton)&&delete t[n]}return[d]}})),l.push(i.after("default",A,function(s,d){if(!e.storage.hideVCVideoButton||d?.props?.children?.props?.children===void 0)return;var t=d?.props?.children?.props?.children[1];if(t?.type?.name!=="_default")return;const n=i.after("type",t,function(r,v){var h=v?.props?.children?.props?.children?.props?.children;h!==void 0&&delete h[0],n()})})),l.push(i.after("type",D,function(s,d){if(!e.storage.dmHideCallButton&&!e.storage.dmHideVideoButton)return;const t=d?.props?.children;if(t!==void 0)for(var n in t){var r=t[n];(r?.props?.source===H&&e.storage.dmHideCallButton||r?.props?.source===p&&e.storage.dmHideVideoButton)&&delete t[n]}})),l.push(i.after("ChannelButtons",I,function(s,d){if(!e.storage.dmHideCallButton&&!e.storage.dmHideVideoButton)return;const t=d?.props?.children;if(t!==void 0)for(var n in t){var r=t[n]?.props?.children[0];r!==void 0&&(r?.props?.source===H&&e.storage.dmHideCallButton||r?.props?.source===p&&e.storage.dmHideVideoButton)&&delete t[n]}}))},onUnload:function(){for(const o of l)o()},settings:E};return f.default=_,Object.defineProperty(f,"__esModule",{value:!0}),f})({},vendetta.metro,vendetta.patcher,vendetta.ui.assets,vendetta.utils,vendetta.plugin,vendetta.metro.common,vendetta.ui.components,vendetta.storage);
