(self.webpackChunk_ozon_ozon_ru=self.webpackChunk_ozon_ozon_ru||[]).push([["ui-kit-modal"],{"8536f":function(e,t,o){!function(){"use strict";o("f3dc9");var t={93:function(e,t,o){var n=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]}),r=this&&this.__exportStar||function(e,t){for(var o in e)"default"===o||Object.prototype.hasOwnProperty.call(t,o)||n(t,e,o)},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.OzModal=void 0;var a=o(210);Object.defineProperty(t,"OzModal",{enumerable:!0,get:function(){return i(a).default}}),r(o(238),t)},238:function(e,t,o){o.r(t),o.d(t,{THEMES:function(){return n}});var n={DEFAULT:"default",WIDE:"wide",EMPTY:"empty",FULL_SCREEN:"fullScreen",BOTTOM:"bottom"}},742:function(e,t,o){var n=o(558),r=o.n(n),i=o(361),a=o.n(i)()(r());a.push([e.id,"\n",""]),a.locals={exZindex:"1000"},t.Z=a},361:function(e){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o="",n=void 0!==t[5];return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),n&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),n&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o})).join("")},t.i=function(e,o,n,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(a[s]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);n&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),o&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=o):u[2]=o),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},558:function(e){e.exports=function(e){return e[1]}},210:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=o("24a14"),l=o("4b060"),i=n.n(l),a={functional:!0,name:"icMCross",meta:{width:24,height:24,viewBox:"0 0 24 24"},render(e,t){const{attrs:o,...n}=t.data;return e("svg",{...n,attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",...o},domProps:{innerHTML:'<path fill="currentColor" d="m12 10.586 6.293-6.295a1 1 0 0 1 1.414 1.414L13.414 12l6.293 6.294a1 1 0 1 1-1.414 1.415L12 13.414 5.707 19.71a1 1 0 0 1-1.414-1.415L10.586 12 4.293 5.705a1 1 0 1 1 1.414-1.414L12 10.586Z"/>'}})}},c=o("320bc"),s=n(238),d=o("ba613"),u={name:"OzModal",components:{MountingPortal:r.MountingPortal,VueClientOnly:i(),OzButton:c.OzButton},provide:function(){return{modalZIndex:parseInt(this.$styleExport.exZindex,10)}},props:{withPortal:{type:Boolean,default:!0},theme:{type:String,default:s.THEMES.DEFAULT,validator:function(e){return Object.values(s.THEMES).includes(e)}},centered:{type:Boolean,default:!0},isMobileTheme:{type:Boolean,default:!1},closeButton:{type:Boolean,default:!0},closeButtonPosition:{type:String,default:"inside"},scrollingWrapper:{type:Boolean,default:!0},name:{type:String,default:void 0},append:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},order:{type:Number,default:0},opaqueBackground:{type:Boolean,default:!1},forceShow:{type:Boolean,default:!1},noSelfClose:{type:Boolean,default:!1},autoFocus:{type:Boolean,default:!0},testInfo:{type:Object,default:function(){return{}}}},data:function(){return{prevActiveElement:null,prevMouseTarget:null,isRendered:!0,IconClose:a}},computed:{renderComponent:function(){return this.forceShow?"div":"VueClientOnly"},rootComponent:function(){return this.withPortal&&!this.forceShow?"MountingPortal":"div"},rootComponentProps:function(){return this.withPortal?{append:!0,mountTo:"body",name:this.name,multiple:this.multiple,order:this.order}:{}},closeButtonColor:function(){return"inside"===this.closeButtonPosition?"ozTextPrimary":"ozTextPrimaryNegative"},isOutsideButtonPosition:function(){return"outside"===this.closeButtonPosition&&!this.isMobileTheme}},mounted:function(){var e=this;this.prevActiveElement=document.activeElement,this.$nextTick((function(){var t=e.$refs.container,o=e.$refs.content;e.$refs.modal&&e.autoFocus&&e.$refs.modal.focus(),t&&o.offsetHeight<window.innerHeight&&!e.isMobileTheme&&(t.style.paddingRight="".concat((0,d.getScrollBarWidth)(),"px"))})),document.addEventListener("keydown",this.onKeyDown)},beforeDestroy:function(){this.prevActiveElement&&this.prevActiveElement.focus(),document.removeEventListener("keydown",this.onKeyDown)},methods:{closeButtonClick:function(){this.$emit("closeButtonClick"),this.close()},close:function(){if(this.$emit("beforeClose"),!this.noSelfClose){var e=this.$refs.container;this.isRendered=!1,e&&(e.style.paddingRight=0)}},onMouseDown:function(e){this.prevMouseTarget=e.target},clickOutsideContent:function(e){var t=e.target;t===this.$refs.container&&t===this.prevMouseTarget&&this.close(),this.prevMouseTarget=null},onKeyDown:function(e){27===e.keyCode&&(e.stopPropagation(),this.close())},afterLeave:function(){this.$emit("close")}}},f=n(742),m={modal:"_28-a",modalOverlay:"_28-a0",opaque:"_28-a1",modalWrapper:"_28-a2",modalContainer:"_28-a3",centered:"_28-a4",modalContent:"_28-a5",modalScrollingContent:"_28-a6",modalCloseWrapper:"_28-a7",wide:"_28-a8",empty:"_28-a9",fullScreen:"_28-b",mobile:"_28-b0",bottom:"_28-b1",modalCloseContainer:"_28-b2",outside:"_28-b3",modalFadeEnter:"_28-b4",modalFadeLeaveActive:"_28-b5",modalFadeEnterActive:"_28-b6"},p=function(e,t,o,n,r,i,a,l){var s,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=[],c._compiled=!0),r&&(s=r),s)if(c.functional){c._injectStyles=s;var u=c.render;c.render=function(e,t){return s.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,s):[s]}return{exports:e,options:c}}(u,(function(){var e,t,o=this,n=o._self._c||o.$createElement;return n(o.renderComponent,{tag:"component"},[n(o.rootComponent,o._b({tag:"component"},"component",o.rootComponentProps,!1),[n("transition",{attrs:{appear:"","enter-class":o.forceShow?"":o.$style.modalFadeEnter,"enter-active-class":o.forceShow?"":o.$style.modalFadeEnterActive,"leave-active-class":o.forceShow?"":o.$style.modalFadeLeaveActive},on:{"after-leave":o.afterLeave}},[o.isRendered?n("div",{directives:[{name:"qa",rawName:"v-qa:id",value:o.testInfo.automatizationId,expression:"testInfo.automatizationId",arg:"id"}],ref:"modal",class:[o.$style.modal,o.$style[o.theme],(e={},e[o.$style.mobile]=o.isMobileTheme,e[o.$style.modalScrollingContent]=!o.scrollingWrapper,e[o.$style.opaque]=o.opaqueBackground,e)],attrs:{tabindex:"-1"}},[n("div",{ref:"overlay",class:o.$style.modalOverlay}),o._v(" "),n("div",{directives:[{name:"body-scroll-lock",rawName:"v-body-scroll-lock"}],class:o.$style.modalWrapper},[n("div",{ref:"container",class:[o.$style.modalContainer,(t={},t[o.$style.centered]=o.centered,t)],on:{mousedown:o.onMouseDown,mouseup:o.clickOutsideContent}},[n("div",{ref:"content",class:o.$style.modalContent},[o.closeButton?n("div",{class:[o.$style.modalCloseContainer,o.$style[o.closeButtonPosition]]},[n("OzButton",{class:o.$style.modalCloseWrapper,attrs:{"test-info":{automatizationId:o.testInfo.automatizationCloseId},"icon-color":o.closeButtonColor,theme:"inline","fill-auto":o.isOutsideButtonPosition,"border-radius":"50%",icon:o.IconClose},on:{click:o.closeButtonClick}})],1):o._e(),o._v(" "),o._t("default")],2)])])]):o._e()])],1)],1)}),0,0,(function(e){this.$styleExport=f.Z.locals||f.Z,this.$style=m.locals||m})).exports}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={id:e,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l=r(93);e.exports=l}()},f3dc9:function(e,t,o){"use strict";o.r(t)}}]);