(()=>{"use strict";var e,t={847:()=>{const e=window.wp.blocks,t=window.React,a=window.wp.i18n,n=window.wp.blockEditor,l=window.wp.components,o=JSON.parse('{"u2":"femart/custom-block-01"}');(0,e.registerBlockType)(o.u2,{title:"Fem Art Custom Block 01",icon:"hammer",category:"design",attributes:{title:{type:"string"},content:{type:"string"},mediaID:{type:"string"},mediaURL:{type:"string"},mediaCaption:{type:"string"},buttonText:{type:"string"},buttonURL:{type:"string"},isInternalLink:{type:"boolean"}},edit:e=>{const{attributes:{title:o,mediaID:i,mediaURL:r,mediaCaption:s,buttonText:c,buttonURL:m,content:p,isInternalLink:u},setAttributes:b}=e,d=(0,n.useBlockProps)();return(0,t.createElement)("div",{...d,className:"fa-media-emphasis-block"},(0,t.createElement)("div",{className:"fa-media-emphasis-image"},(0,t.createElement)(n.MediaUpload,{onSelect:e=>{b({mediaURL:e.url,mediaID:e.id,mediaCaption:e.caption})},allowedTypes:"image",value:i,render:({open:e})=>(0,t.createElement)(l.Button,{className:i?"image-button":"button button-large",onClick:e},i?(0,t.createElement)("img",{src:r,alt:(0,a.__)("Upload Image","femart-custom-block-01")}):(0,a.__)("Upload Image","femart-custom-block-01"))})),s&&(0,t.createElement)("div",null,(0,t.createElement)("span",null,"Caption: ",s)),(0,t.createElement)("div",{className:"fa-emphasis-block-text-container"},(0,t.createElement)(n.RichText,{tagName:"div",multiline:"p",placeholder:(0,a.__)("Title","femart-custom-block-01"),value:o,onChange:e=>{b({title:e})}}),(0,t.createElement)(n.RichText,{tagName:"div",multiline:"p",placeholder:(0,a.__)("Content","femart-custom-block-01"),value:p,onChange:e=>{b({content:e})}})),(0,t.createElement)("div",{className:"fa-emphasis-block-button-container"},(0,t.createElement)("button",{className:"fa-media-emphasis-block-btn wp-block-button__link wp-element-button"},c?c+" →":"Read More →")),(0,t.createElement)(n.InspectorControls,null,(0,t.createElement)(l.PanelBody,{title:"Button"},(0,t.createElement)(l.TextControl,{label:"Link",help:u?"Page Slug":"FULL URL",value:m,onChange:e=>{b({buttonURL:e})}}),(0,t.createElement)(l.TextControl,{label:"Text",value:c,onChange:e=>{b({buttonText:e})}}),(0,t.createElement)(l.ToggleControl,{label:"Internal Link",help:u?"This is an internal link.":"This links outside of FemArt.",checked:u,onChange:e=>{b({isInternalLink:e})}}))))},save:e=>{const{attributes:{title:a,mediaCaption:l,mediaURL:o,buttonText:i,buttonURL:r,content:s,isInternalLink:c}}=e,m=n.useBlockProps.save({className:"fa-media-emphasis-block"});return(0,t.createElement)("div",{...m},(0,t.createElement)("div",{className:"fa-emphasis-block-media-content"},o&&(0,t.createElement)("div",{class:"fa-media-emphasis-image-container",style:{backgroundImage:`url(${o})`}},l&&(0,t.createElement)("span",{className:"inner-caption-span"},l)),(0,t.createElement)("div",{className:"fa-emphasis-block-text-container"},(0,t.createElement)(n.RichText.Content,{tagName:"h2",value:a}),(0,t.createElement)(n.RichText.Content,{tagName:"div",value:s}))),(0,t.createElement)("div",{className:"fa-emphasis-block-button-container"},(0,t.createElement)("a",{href:c?`/${r}`:r,target:c?"_self":"_blank",rel:"noopener"},(0,t.createElement)("button",{className:"fa-media-emphasis-block-btn wp-block-button__link wp-element-button"},i?i+" →":"Read More →"))))}})}},a={};function n(e){var l=a[e];if(void 0!==l)return l.exports;var o=a[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,a,l,o)=>{if(!a){var i=1/0;for(m=0;m<e.length;m++){for(var[a,l,o]=e[m],r=!0,s=0;s<a.length;s++)(!1&o||i>=o)&&Object.keys(n.O).every((e=>n.O[e](a[s])))?a.splice(s--,1):(r=!1,o<i&&(i=o));if(r){e.splice(m--,1);var c=l();void 0!==c&&(t=c)}}return t}o=o||0;for(var m=e.length;m>0&&e[m-1][2]>o;m--)e[m]=e[m-1];e[m]=[a,l,o]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var l,o,[i,r,s]=a,c=0;if(i.some((t=>0!==e[t]))){for(l in r)n.o(r,l)&&(n.m[l]=r[l]);if(s)var m=s(n)}for(t&&t(a);c<i.length;c++)o=i[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(m)},a=globalThis.webpackChunk_femart_custom_block=globalThis.webpackChunk_femart_custom_block||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var l=n.O(void 0,[431],(()=>n(847)));l=n.O(l)})();