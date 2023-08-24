import{r as w}from"./index-76fb7be0.js";import{g as j}from"./_commonjsHelpers-de833af9.js";var _={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O=w,E=Symbol.for("react.element"),N=Symbol.for("react.fragment"),P=Object.prototype.hasOwnProperty,R=O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,B={key:!0,ref:!0,__self:!0,__source:!0};function x(n,t,o){var e,a={},r=null,s=null;o!==void 0&&(r=""+o),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(s=t.ref);for(e in t)P.call(t,e)&&!B.hasOwnProperty(e)&&(a[e]=t[e]);if(n&&n.defaultProps)for(e in t=n.defaultProps,t)a[e]===void 0&&(a[e]=t[e]);return{$$typeof:E,type:n,key:r,ref:s,props:a,_owner:R.current}}l.Fragment=N;l.jsx=x;l.jsxs=x;_.exports=l;var m=_.exports,S={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(n){(function(){var t={}.hasOwnProperty;function o(){for(var e=[],a=0;a<arguments.length;a++){var r=arguments[a];if(r){var s=typeof r;if(s==="string"||s==="number")e.push(r);else if(Array.isArray(r)){if(r.length){var p=o.apply(null,r);p&&e.push(p)}}else if(s==="object"){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var c in r)t.call(r,c)&&r[c]&&e.push(c)}}}return e.join(" ")}n.exports?(o.default=o,n.exports=o):window.classNames=o})()})(S);var k=S.exports;const C=j(k),d=({children:n,variant:t="primary",buttonStyle:o,...e})=>m.jsx("div",{className:"flex space-x-2 justify-center",children:m.jsx("button",{type:"button","data-mdb-ripple":"true","data-mdb-ripple-color":"light",className:C("inline-block uppercase font-medium text-xs leading-tight","px-6 py-2.5 text-white shadow-md rounded","hover:shadow-lg active:shadow-lg","focus:shadow-lg focus:outline-none focus:ring-0","transition duration-150 ease-in-out",{"rounded-full":o==="rounded"},{"bg-blue-600 focus:bg-blue-700  hover:bg-blue-700 active:bg-blue-800":t==="primary","bg-gray-600 focus:bg-gray-700  hover:bg-gray-700 active:bg-gray-800":t==="secondary"}),...e,children:n})});try{d.displayName="Button",d.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},buttonStyle:{defaultValue:null,description:"",name:"buttonStyle",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"rounded"'},{value:'"outline"'},{value:'"rounded-outline"'}]}}}}}catch{}const q={title:"Components/Button",component:d,argTypes:{children:{defaultValue:"Default Button"}}},i={args:{variant:"primary",children:"Primary",buttonStyle:"rounded"}},u={args:{variant:"secondary",children:"Secondary",buttonStyle:"base"}};var f,y,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Primary",
    buttonStyle: "rounded"
  }
}`,...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var b,g,h;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Secondary",
    buttonStyle: "base"
  }
}`,...(h=(g=u.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const A=["Primary","Secondary"];export{i as Primary,u as Secondary,A as __namedExportsOrder,q as default};
//# sourceMappingURL=Button.stories-8fd2bdea.js.map
