webpackJsonp([20],{"9o2x":function(l,n){l.exports='import { Component, AfterContentInit } from \'@angular/core\';\nimport { Subject } from \'rxjs\';\nimport { NtUploadControlError } from \'@ng-tangram/components/upload\';\n// import { NtFile } from \'@ng-tangram/components/file\';\nimport { Validators, FormControl } from \'@angular/forms\';\n\n@Component({\n  selector: \'demo-file-basic\',\n  template: `\n    <nt-form-field label="文件列表">\n      <nt-file url="/files/logos" maxFiles="5" name="file" [formControl]="fileControl">\n        <nt-ant-icon type="upload"></nt-ant-icon>&nbsp;Select File\n      </nt-file>\n    </nt-form-field>\n  `\n})\nexport class DemoFileBasciComponent {\n\n  fileControl = new FormControl([\n    {\n      id: "nt-file-032132121",\n      name: "microMsg.1430457292873的副本.jpg",\n      status: 4,\n      link: \'https://www.baidu.com\'\n    },\n    {\n      id: "nt-file-1",\n      name: "microMsg.1430457292873的副本.jpg",\n      status: 4,\n      link: \'https://www.baidu.com\'\n    }\n  ], [Validators.required]);\n\n  files = [\n    { id: "nt-file-032132121", name: "microMsg.1430457292873的副本.jpg", },\n    { id: "nt-file-1", name: "microMsg.1430457292873的副本.jpg", }\n  ];\n}\n'},XEi3:function(l,n,t){"use strict";function e(l){return _._49(0,[(l()(),_._29(0,0,null,null,1,"a",[["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),_._47(1,null,["",""]))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.link),l(n,1,0,n.parent.context.$implicit.name)})}function u(l){return _._49(0,[(l()(),_._29(0,0,null,null,1,null,null,null,null,null,null,null)),(l()(),_._47(1,null,["",""]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.name)})}function i(l){return _._49(0,[(l()(),_._29(0,0,null,null,1,"span",[["class","nt-file-error"]],null,null,null,null,null)),(l()(),_._47(1,null,["Error - ",""]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.error)})}function o(l){return _._49(0,[(l()(),_._29(0,0,null,null,2,"div",[["class","nt-close-button"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.removeFile(l.parent.context.$implicit)&&e),e},null,null)),(l()(),_._29(1,0,null,null,1,"span",[["aria-hidden","true"]],null,null,null,null,null)),(l()(),_._47(-1,null,["×"]))],null,null)}function r(l){return _._49(0,[(l()(),_._29(0,0,null,null,2,"nt-progress",[["size","tiny"]],[[24,"@fadeOut",0],[2,"success",null],[2,"alert",null],[8,"className",0]],null,null,w.b,w.a)),_._28(1,49152,null,0,k.a,[],{value:[0,"value"],size:[1,"size"]},null),_._40(2,4)],function(l,n){l(n,1,0,n.parent.context.$implicit.progress,"tiny")},function(l,n){l(n,0,0,void 0,2===n.parent.context.$implicit.status,3===n.parent.context.$implicit.status,l(n,2,0,"progress",_._39(n,1).color,_._39(n,1).size,_._39(n,1).class).join(" "))})}function a(l){return _._49(0,[(l()(),_._29(0,0,null,null,15,"div",[["class","nt-file-item"]],[[24,"@fadeOut",0]],null,null,null,null)),(l()(),_._29(1,0,null,null,12,"div",[["class","nt-file-info"]],[[2,"success",null],[2,"error",null],[2,"remote",null]],null,null,null,null)),(l()(),_._29(2,0,null,null,0,"span",[["class","nt-file-symbol nt-file-symbol-icon"]],null,null,null,null,null)),(l()(),_._47(-1,null,["  "])),(l()(),_._22(16777216,null,null,1,null,e)),_._28(5,16384,null,0,S.k,[_._4,_._0],{ngIf:[0,"ngIf"]},null),(l()(),_._22(16777216,null,null,1,null,u)),_._28(7,16384,null,0,S.k,[_._4,_._0],{ngIf:[0,"ngIf"]},null),(l()(),_._47(8,null,["  ","  "])),_._43(9,1),(l()(),_._22(16777216,null,null,1,null,i)),_._28(11,16384,null,0,S.k,[_._4,_._0],{ngIf:[0,"ngIf"]},null),(l()(),_._22(16777216,null,null,1,null,o)),_._28(13,16384,null,0,S.k,[_._4,_._0],{ngIf:[0,"ngIf"]},null),(l()(),_._22(16777216,null,null,1,null,r)),_._28(15,16384,null,0,S.k,[_._4,_._0],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,5,0,n.context.$implicit.link),l(n,7,0,!n.context.$implicit.link),l(n,11,0,n.context.$implicit.error),l(n,13,0,!t.disabled),l(n,15,0,1===n.context.$implicit.status)},function(l,n){l(n,0,0,void 0),l(n,1,0,2===n.context.$implicit.status,3===n.context.$implicit.status,4===n.context.$implicit.status),l(n,8,0,_._48(n,8,0,l(n,9,0,_._39(n.parent,0),n.context.$implicit.size)))})}function s(l){return _._49(0,[_._41(0,z,[]),_._45(402653184,1,{fileElement:0}),(l()(),_._29(2,0,null,null,1,"button",[["class","button hollow small nt-file-trigger"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.onTriggerClick()&&e),e},null,null)),_._38(null,0),(l()(),_._29(4,0,[[1,0],["fileElement",1]],null,0,"input",[["hidden",""],["type","file"]],[[8,"accept",0]],[[null,"change"]],function(l,n,t){var e=!0;return"change"===n&&(e=!1!==l.component._fileChanged()&&e),e},null,null)),(l()(),_._29(5,0,null,null,2,"div",[["class","nt-file-list"]],null,null,null,null,null)),(l()(),_._22(16777216,null,null,1,null,a)),_._28(7,278528,null,0,S.j,[_._4,_._0,_.C],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,7,0,n.component.files)},function(l,n){var t=n.component;l(n,2,0,t.files.length>=t.maxFiles||t.disabled),l(n,4,0,t.accept)})}function c(l){return _._49(0,[(l()(),_._29(0,0,null,null,11,"nt-form-field",[["class","nt-form-field"],["label","文件列表"]],[[2,"nt-form-error",null],[2,"nt-form-horizontal",null]],null,null,x.b,x.a)),_._28(1,4374528,null,1,O.a,[_.K,_.j,[2,j.o],[2,j.h],[2,C.a],[2,F.a]],{label:[0,"label"]},null),_._45(335544320,1,{control:0}),(l()(),_._29(3,0,null,0,8,"nt-file",[["class","nt-form-control nt-file"],["maxFiles","5"],["name","file"],["url","/files/logos"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,s,V)),_._28(4,540672,null,0,j.f,[[8,null],[8,null],[8,null],[2,j.w]],{form:[0,"form"]},null),_._44(2048,null,j.l,null,[j.f]),_._28(6,16384,null,0,j.m,[[4,j.l]],null,null),_._28(7,245760,null,0,B,[D.a,[6,j.l]],{url:[0,"url"],name:[1,"name"],maxFiles:[2,"maxFiles"]},null),_._44(2048,[[1,4]],I.a,null,[B]),(l()(),_._29(9,0,null,0,1,"nt-ant-icon",[["type","upload"]],null,null,null,m.c,m.b)),_._28(10,49152,null,0,A.a,[],{type:[0,"type"]},null),(l()(),_._47(-1,0,[" Select File "]))],function(l,n){var t=n.component;l(n,1,0,"文件列表"),l(n,4,0,t.fileControl),l(n,7,0,"/files/logos","file","5"),l(n,10,0,"upload")},function(l,n){l(n,0,0,_._39(n,1)._invalid,_._39(n,1).horizontal),l(n,3,0,_._39(n,6).ngClassUntouched,_._39(n,6).ngClassTouched,_._39(n,6).ngClassPristine,_._39(n,6).ngClassDirty,_._39(n,6).ngClassValid,_._39(n,6).ngClassInvalid,_._39(n,6).ngClassPending)})}function f(l){return _._49(0,[(l()(),_._29(0,0,null,null,1,"h1",[["id","文件-File"]],null,null,null,null,null)),(l()(),_._47(-1,null,[" 文件 File "])),(l()(),_._29(2,0,null,null,1,"h2",[["id","何时使用"]],null,null,null,null,null)),(l()(),_._47(-1,null,[" 何时使用 "])),(l()(),_._29(4,0,null,null,1,"h2",[["id","代码演示"]],null,null,null,null,null)),(l()(),_._47(-1,null,[" 代码演示 "])),(l()(),_._29(6,0,null,null,11,"p",[],null,null,null,null,null)),(l()(),_._29(7,0,null,null,10,"nt-example",[],null,null,null,g.b,g.a)),_._28(8,49152,null,0,b.a,[],null,null),(l()(),_._29(9,0,null,0,3,"nt-example-showcase",[],null,null,null,y.b,y.a)),_._28(10,49152,null,0,v.a,[],null,null),(l()(),_._29(11,0,null,0,1,"demo-file-basic",[],null,null,null,c,R)),_._28(12,49152,null,0,G,[],null,null),(l()(),_._29(13,0,null,0,2,"nt-example-legend",[["title","基本"]],null,null,null,K.b,K.a)),_._28(14,49152,null,0,X.a,[],{title:[0,"title"]},null),(l()(),_._47(-1,0,["最简单的下拉菜单。"])),(l()(),_._29(16,0,null,0,1,"nt-example-code",[],null,null,null,Z.b,Z.a)),_._28(17,1097728,null,0,H.a,[_.N,_.q],{code:[0,"code"]},null),(l()(),_._29(18,0,null,null,1,"h2",[["id","API"]],null,null,null,null,null)),(l()(),_._47(-1,null,[" API "]))],function(l,n){var t=n.component;l(n,14,0,"基本"),l(n,17,0,t.basicCode)},null)}Object.defineProperty(n,"__esModule",{value:!0});var p,_=t("TdOr"),d=function(){},m=t("g30d"),h=t("OvSy"),g=t("SIRZ"),b=t("2I22"),y=t("UWX+"),v=t("3E/G"),x=t("p+kO"),O=t("xrvQ"),j=t("B+Nj"),C=t("Asoi"),F=t("BK/N"),w=t("/x5q"),k=t("VR5t"),S=t("wTuo"),z=function(){function l(){this.units=["bytes","KB","MB","GB","TB","PB"]}return l.prototype.transform=function(l,n){if(void 0===l&&(l=0),void 0===n&&(n=2),isNaN(parseFloat(String(l)))||!isFinite(l))return"?";for(var t=0;l>=1024;)l/=1024,t++;return l.toFixed(+n)+" "+this.units[t]},l}(),I=t("eGOD"),P=t("akf3"),E=t("GNhy"),$=t("l7vE"),M=t("Nyrq"),T=t("0nHL"),N=this&&this.__extends||(p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,n){l.__proto__=n}||function(l,n){for(var t in n)n.hasOwnProperty(t)&&(l[t]=n[t])},function(l,n){function t(){this.constructor=l}p(l,n),l.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),U=0,q=function(l){function n(){var n=null!==l&&l.apply(this,arguments)||this;return n.id="nt-file-"+U++,n}return N(n,l),n}($.e),B=function(l){function n(n,t){var e=l.call(this,n,t)||this;return e._destroy=new T.d,e._disabled=!1,e._required=!1,e._autoupload=!0,e._value=[],e._maxFiles=1,e._maxSize=5,e._accept=["*"],e.files=[],e.url="",e.name="",e.error=new _.t,e.remove=new _.t,e}return N(n,l),Object.defineProperty(n.prototype,"value",{get:function(){return this._value},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"disabled",{get:function(){return this._disabled},set:function(l){this._disabled=Object(P.b)(l)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"required",{get:function(){return this._required},set:function(l){this._required=Object(P.b)(l)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"accept",{get:function(){return this._accept},set:function(l){this._accept="string"==typeof l?l.replace(" ","").split(","):Object(P.a)(l)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"maxSize",{get:function(){return this._maxSize},set:function(l){this._maxSize=Object(P.d)(l,5)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"maxFiles",{get:function(){return this._maxFiles},set:function(l){this._maxFiles=Object(P.d)(l,1)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"autoupload",{get:function(){return this._autoupload},set:function(l){this._autoupload=Object(P.b)(l)},enumerable:!0,configurable:!0}),n.prototype.ngOnInit=function(){},n.prototype.ngOnDestroy=function(){this._destroy.next(),this._destroy.complete(),this.error.complete(),this.remove.complete()},n.prototype.onTriggerClick=function(){this.files.length<this.maxFiles&&this.fileElement.nativeElement.click()},n.prototype._fileChanged=function(){var l=this,n=this.fileElement.nativeElement.files[0];if(n&&this.files.length<this.maxFiles){if(!this._fileSizeValid(n))return void this.error.next(new $.b(n,1024*this.maxSize*1024,this.maxSize+"MB"));if(!this._fileTypeValid(n))return void this.error.next(new $.a(n,n.type));var t=new q(n.name,n.size,n.type);this.files.push(t);var e={begin:function(){return l._onUploadBegin(t)},progress:function(n){return l._onUploadProgress(n,t)},done:function(){return l._onUploadDone(t)}};this.autoupload&&(t.uploader=this._uploader.upload(this.url,this._getFormData(n),e).pipe(Object(M.r)(this._destroy)).subscribe(function(n){(t.status=n.status)===$.f.SUCCESS&&(t.data=n.data,l._value.push(t),l._onChange(l._value))},function(n){t.status=$.f.ERROR,t.error=n.statusText,t.progress=100,l.error.next(new $.c(n.status,n.statusText))}))}this._onTouched&&this._onTouched(),this.fileElement.nativeElement.value=""},n.prototype.removeFile=function(l){if(!this.disabled){l.uploader&&l.uploader.unsubscribe();var n=this._value.indexOf(l);n>-1&&this._value.splice(n,1);var t=this.files.indexOf(l);t>-1&&this.files.splice(t,1),this.remove.next(l),this._onChange(this._value)}},n.prototype.setDisabledState=function(l){this._disabled=l},n.prototype.setValue=function(l){var n,t;l&&(this._value.length=0,(n=this._value).push.apply(n,l),this.files.length=0,(t=this.files).push.apply(t,this._value))},n.prototype._fileTypeValid=function(l){return!!l&&(this.accept.indexOf(l.type)>-1||this.accept.indexOf("*")>-1)},n.prototype._fileSizeValid=function(l){return!!l&&l.size<=1024*this.maxSize*1024},n.prototype._onUploadBegin=function(l){l.status=$.f.SENDING},n.prototype._onUploadProgress=function(l,n){l.total&&l.total>0&&(n.progress=Math.round(l.loaded/l.total*100))},n.prototype._onUploadDone=function(l){l.status=$.f.SUCCESS},n}($.d),D=t("ctoT"),V=_._27({encapsulation:2,styles:[],data:{animation:[{type:7,name:"fadeOut",definitions:[{type:1,expr:"* => void",animation:{type:8,animation:{type:4,styles:{type:5,steps:[{type:6,styles:{opacity:1,transform:"translate3d(0, 0, 0)",offset:0},offset:null},{type:6,styles:{opacity:0,transform:"translate3d(0, 0, 0)",offset:1},offset:null}]},timings:"0.3s 0s"},options:null},options:null}],options:{}}]}});_._25("nt-file",B,function(l){return _._49(0,[(l()(),_._29(0,0,null,null,2,"nt-file",[["class","nt-form-control nt-file"]],null,null,null,s,V)),_._44(6144,null,I.a,null,[B]),_._28(2,245760,null,0,B,[D.a,[8,null]],null,null)],function(l,n){l(n,2,0)},null)},{url:"url",name:"name",disabled:"disabled",required:"required",accept:"accept",maxSize:"maxSize",maxFiles:"maxFiles",autoupload:"autoupload"},{error:"error",remove:"remove"},["*"]);var A=t("Wk8R"),G=function(){this.fileControl=new j.e([{id:"nt-file-032132121",name:"microMsg.1430457292873的副本.jpg",status:4,link:"https://www.baidu.com"},{id:"nt-file-1",name:"microMsg.1430457292873的副本.jpg",status:4,link:"https://www.baidu.com"}],[j.s.required]),this.files=[{id:"nt-file-032132121",name:"microMsg.1430457292873的副本.jpg"},{id:"nt-file-1",name:"microMsg.1430457292873的副本.jpg"}]},R=_._27({encapsulation:2,styles:[],data:{}});_._25("demo-file-basic",G,function(l){return _._49(0,[(l()(),_._29(0,0,null,null,1,"demo-file-basic",[],null,null,null,c,R)),_._28(1,49152,null,0,G,[],null,null)],null,null)},{},{},[]);var K=t("d9RJ"),X=t("EsUz"),Z=t("MNnU"),H=t("SIoQ"),J=function(){this.basicCode=t("9o2x")},Q=_._27({encapsulation:2,styles:[],data:{}}),W=_._25("nt-file-document",J,function(l){return _._49(0,[(l()(),_._29(0,0,null,null,1,"nt-file-document",[],null,null,null,f,Q)),_._28(1,49152,null,0,J,[],null,null)],null,null)},{},{},[]),L=t("+j5Y"),Y=t("9Sd6"),ll=t("3DPZ"),nl=t("UMtG"),tl=t("bkcK"),el=t("XHgV"),ul=t("1T37"),il=t("Th76"),ol=t("gX28"),rl=t("zpp5"),al=t("xPGC"),sl=t("PB6A"),cl=function(){},fl=t("Ki53"),pl=t("yZfy");t.d(n,"FileDocumentModuleNgFactory",function(){return _l});var _l=_._26(d,[],function(l){return _._36([_._37(512,_.m,_._17,[[8,[m.a,h.a,W]],[3,_.m],_.I]),_._37(4608,S.m,S.l,[_.E,[2,S.y]]),_._37(4608,L.c,L.c,[L.i,L.e,_.m,L.h,L.f,_.A,_.K,S.c,Y.b]),_._37(5120,L.j,L.k,[L.c]),_._37(4608,j.v,j.v,[]),_._37(4608,j.d,j.d,[]),_._37(4608,ll.a,ll.b,[]),_._37(4608,D.a,D.a,[E.c,[2,ll.a]]),_._37(1073742336,S.b,S.b,[]),_._37(1073742336,nl.a,nl.a,[]),_._37(1073742336,Y.a,Y.a,[]),_._37(1073742336,tl.f,tl.f,[]),_._37(1073742336,el.b,el.b,[]),_._37(1073742336,ul.a,ul.a,[]),_._37(1073742336,L.g,L.g,[]),_._37(1073742336,il.a,il.a,[]),_._37(1073742336,ol.a,ol.a,[]),_._37(1073742336,rl.a,rl.a,[]),_._37(1073742336,j.t,j.t,[]),_._37(1073742336,j.i,j.i,[]),_._37(1073742336,j.q,j.q,[]),_._37(1073742336,al.a,al.a,[]),_._37(1073742336,sl.a,sl.a,[]),_._37(1073742336,cl,cl,[]),_._37(1073742336,fl.a,fl.a,[]),_._37(1073742336,pl.p,pl.p,[[2,pl.w],[2,pl.m]]),_._37(1073742336,d,d,[]),_._37(1024,pl.k,function(){return[[{path:"",component:J}]]},[])])})}});