(self.webpackChunk=self.webpackChunk||[]).push([[466],{1252:(t,a,n)=>{"use strict";n.d(a,{U:()=>o,t:()=>r});var e=n(9669),s=n.n(e);function o(t,a){return s()({method:"GET",url:t,params:a})}function r(t,a,n){return s()({method:t,url:a,data:n})}},9466:(t,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>o});var e=n(1252);const s={name:"PageNotFound",data:function(){return{}},methods:{save:function(){console.log("sbsbs"),this.id=1,(0,e.U)("/process-transaction?id="+this.id).then((function(t){t.data&&window.open(t.data,"_blank"),console.log(t.data)}))}}};const o=(0,n(1900).Z)(s,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"text-center"},[n("div",{staticClass:"error mx-auto",attrs:{"data-text":"404"}},[t._v("PayPal")]),t._v(" "),n("button",{on:{click:t.save}},[t._v("Pay Now")]),t._v(" "),n("router-link",{attrs:{to:"/admin"}},[t._v("← Back to Dashboard")])],1)}),[],!1,null,null,null).exports}}]);