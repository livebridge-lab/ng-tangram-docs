webpackJsonp([2],{"/y/g":function(e,t){e.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-callout-event',\n  template: `\n    <nt-callout closable>可关闭的提示框</nt-callout>\n    <nt-callout (closed)=\"onClose()\" closable>关闭会弹出提示窗口</nt-callout>\n  `\n})\nexport class DemoCalloutEventComponent {\n\n  onClose() {\n    alert('被关闭了');\n  }\n}\n"},"1sjt":function(e,t){e.exports='<h1 id="提示框-Callout">\n        提示框 Callout\n      </h1><p>警告提示，展现需要关注的信息。</p>\n<h2 id="何时使用">\n        何时使用\n      </h2><ul>\n<li>当某个页面需要向用户显示警告的信息时。</li><li>非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。</li></ul>\n<h2 id="代码演示">\n        代码演示\n      </h2><div class="grid-x grid-margin-x">\n  <div class="medium-6 large-6 cell">\n    <nt-example>\n      <nt-example-showcase>\n        <demo-callout-basic></demo-callout-basic>\n      </nt-example-showcase>\n      <nt-example-legend title="基本提示框">\n        最简单的用法，适用于简短的警告提示。\n      </nt-example-legend>\n      <nt-example-code [code]="basicCode"></nt-example-code>\n    </nt-example>\n    <nt-example>\n      <nt-example-showcase>\n        <demo-callout-reactives></demo-callout-reactives>\n      </nt-example-showcase>\n      <nt-example-legend title="动态提示框">\n        可以动态控制样式类型\n      </nt-example-legend>\n      <nt-example-code [code]="reactivesCode"></nt-example-code>\n    </nt-example>\n    <nt-example>\n      <nt-example-showcase>\n        <demo-callout-event></demo-callout-event>\n      </nt-example-showcase>\n      <nt-example-legend title="可关闭的警告提示">\n        显示关闭按钮，点击可关闭警告提示。\n      </nt-example-legend>\n      <nt-example-code [code]="eventCode"></nt-example-code>\n    </nt-example>\n  </div>\n  <div class="medium-6 large-6 cell">\n    <nt-example>\n      <nt-example-showcase>\n        <demo-callout-color></demo-callout-color>\n      </nt-example-showcase>\n      <nt-example-legend title="多种样式">\n        共有5种样式 <code>primary</code>、<code>secondry</code>、<code>success</code>、<code>warning</code>、<code>alert</code>。\n      </nt-example-legend>\n      <nt-example-code [code]="colorCode"></nt-example-code>\n    </nt-example>\n    <nt-example>\n      <nt-example-showcase>\n        <demo-callout-size></demo-callout-size>\n      </nt-example-showcase>\n      <nt-example-legend title="尺寸控制">\n        共有3种尺寸 <code>small</code>、 <code>medium</code>、<code>large</code>\n      </nt-example-legend>\n      <nt-example-code [code]="sizeCode"></nt-example-code>\n    </nt-example>\n  </div>\n</div>\n\n<h2 id="API">\n        API\n      </h2><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>属性：标题</td>\n<td><code>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>color</td>\n<td>属性：颜色</td>\n<td><code>primary</code>、 <code>secondry</code>、 <code>success</code>、 <code>warning</code>、 <code>alert</code></td>\n<td><code>primary</code></td>\n</tr>\n<tr>\n<td>size</td>\n<td>属性：提示框大小</td>\n<td><code>small</code>、 <code>medium</code>、<code>large</code></td>\n<td><code>medium</code></td>\n</tr>\n<tr>\n<td>closable</td>\n<td>属性：是否显示关闭按钮</td>\n<td><code>boolean</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>closed</td>\n<td>事件：关闭时触发</td>\n<td><code>function</code></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n'},"74JG":function(e,t){e.exports='import { Component, Input } from \'@angular/core\';\n\n@Component({\n  selector: \'demo-callout-size\',\n  template: `\n    <nt-callout size="small">小标题</nt-callout>\n    <nt-callout size="medium">中等</nt-callout>\n    <nt-callout size="large">大标题</nt-callout>\n  `\n})\nexport class DemoCalloutSizeComponent { }\n'},Lhsw:function(e,t){e.exports='import { Component, Input } from \'@angular/core\';\n\n@Component({\n  selector: \'demo-callout-color\',\n  template: `\n    <nt-callout>主要</nt-callout>\n    <nt-callout color="secondary">次要</nt-callout>\n    <nt-callout color="success">成功</nt-callout>\n    <nt-callout color="warning">警告</nt-callout>\n    <nt-callout color="alert">危险</nt-callout>\n  `\n})\nexport class DemoCalloutColorComponent { }\n'},XB3L:function(e,t){e.exports="import { Component, Input } from '@angular/core';\n\n@Component({\n  selector: 'demo-callout-basic',\n  template: `\n    <nt-callout>内容</nt-callout>\n    <nt-callout title=\"标题\">内容</nt-callout>\n  `\n})\nexport class DemoBasicCalloutComponent { }\n"},ehYN:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("WT6e"),l=n("bfOx"),c=n("U5Q8"),a=n("pDuO"),r=n("C5nP"),d=this&&this.__decorate||function(e,t,n,o){var l,c=arguments.length,a=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(a=(c<3?l(a):c>3?l(t,n,a):l(t,n))||a);return c>3&&a&&Object.defineProperty(t,n,a),a},i=function(){return d([Object(o.n)({selector:"nt-callout-document",template:n("1sjt")})],function(){this.basicCode=n("XB3L"),this.colorCode=n("Lhsw"),this.reactivesCode=n("yR6B"),this.sizeCode=n("74JG"),this.eventCode=n("/y/g")})}(),u=this&&this.__decorate||function(e,t,n,o){var l,c=arguments.length,a=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(a=(c<3?l(a):c>3?l(t,n,a):l(t,n))||a);return c>3&&a&&Object.defineProperty(t,n,a),a},s=function(){return u([Object(o.n)({selector:"demo-callout-basic",template:'\n    <nt-callout>内容</nt-callout>\n    <nt-callout title="标题">内容</nt-callout>\n  '})],function(){})}(),p=this&&this.__decorate||function(e,t,n,o){var l,c=arguments.length,a=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(a=(c<3?l(a):c>3?l(t,n,a):l(t,n))||a);return c>3&&a&&Object.defineProperty(t,n,a),a},m=function(){return p([Object(o.n)({selector:"demo-callout-color",template:'\n    <nt-callout>主要</nt-callout>\n    <nt-callout color="secondary">次要</nt-callout>\n    <nt-callout color="success">成功</nt-callout>\n    <nt-callout color="warning">警告</nt-callout>\n    <nt-callout color="alert">危险</nt-callout>\n  '})],function(){})}(),f=this&&this.__decorate||function(e,t,n,o){var l,c=arguments.length,a=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(a=(c<3?l(a):c>3?l(t,n,a):l(t,n))||a);return c>3&&a&&Object.defineProperty(t,n,a),a},h=function(){return f([Object(o.n)({selector:"demo-callout-reactives",template:'\n    <nt-callout [color]="color">\n      动态改变颜色提示\n    </nt-callout>\n    <select #select (change)="color = select.value">\n      <option value="primary">primary</option>\n      <option value="secondary">secondary</option>\n      <option value="success">success</option>\n      <option value="warning">warning</option>\n      <option value="alert">alert</option>\n    </select>\n  '})],function(){this.color="primary"})}(),g=this&&this.__decorate||function(e,t,n,o){var l,c=arguments.length,a=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(a=(c<3?l(a):c>3?l(t,n,a):l(t,n))||a);return c>3&&a&&Object.defineProperty(t,n,a),a},x=function(){return g([Object(o.n)({selector:"demo-callout-size",template:'\n    <nt-callout size="small">小标题</nt-callout>\n    <nt-callout size="medium">中等</nt-callout>\n    <nt-callout size="large">大标题</nt-callout>\n  '})],function(){})}(),y=this&&this.__decorate||function(e,t,n,o){var l,c=arguments.length,a=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(a=(c<3?l(a):c>3?l(t,n,a):l(t,n))||a);return c>3&&a&&Object.defineProperty(t,n,a),a},v=function(){function e(){}return e.prototype.onClose=function(){alert("被关闭了")},y([Object(o.n)({selector:"demo-callout-event",template:'\n    <nt-callout closable>可关闭的提示框</nt-callout>\n    <nt-callout (closed)="onClose()" closable>关闭会弹出提示窗口</nt-callout>\n  '})],e)}();n.d(t,"CalloutDocumentModule",function(){return C});var b=this&&this.__decorate||function(e,t,n,o){var l,c=arguments.length,a=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(a=(c<3?l(a):c>3?l(t,n,a):l(t,n))||a);return c>3&&a&&Object.defineProperty(t,n,a),a},C=function(){return b([Object(o.J)({imports:[r.a,a.a,c.a,l.e.forChild([{path:"",component:i}])],declarations:[i,s,m,h,x,v]})],function(){})}()},yR6B:function(e,t){e.exports='import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'demo-callout-reactives\',\n  template: `\n    <nt-callout [color]="color">\n      动态改变颜色提示\n    </nt-callout>\n    <select #select (change)="color = select.value">\n      <option value="primary">primary</option>\n      <option value="secondary">secondary</option>\n      <option value="success">success</option>\n      <option value="warning">warning</option>\n      <option value="alert">alert</option>\n    </select>\n  `\n})\nexport class DemoCalloutReactivesComponent {\n  color = \'primary\';\n}\n'}});