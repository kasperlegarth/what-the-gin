"use strict";(self["webpackChunkwhat_the_gin"]=self["webpackChunkwhat_the_gin"]||[]).push([[491],{8491:function(e,n,r){r.r(n),r.d(n,{default:function(){return oe}});var a=r(3396);const t={class:"dashboard"},i=(0,a._)("h1",null,"Dashbaord",-1),o={class:"dashboard__form"},s=(0,a._)("p",null,"Test",-1),p={class:"dashboard__form"},d={class:"dashboard__form"};function l(e,n,r,l,y,m){const c=(0,a.up)("GarnishForm"),h=(0,a.up)("Panel"),f=(0,a.up)("TonicForm"),u=(0,a.up)("GinForm");return(0,a.wg)(),(0,a.iD)("section",t,[i,(0,a._)("article",o,[(0,a.Wm)(h,{headline:"Add new Garnish",onConfirm:m.addGarnish,confirmText:"Add garnish"},(0,a.Nv)({body:(0,a.w5)((()=>[(0,a.Wm)(c,{ref:"garnishForm",typesOfGarnish:r.typesOfGarnish,onNewType:m.addNewGarnishType},null,8,["typesOfGarnish","onNewType"])])),_:2},[y.garnishError?{name:"error",fn:(0,a.w5)((()=>[s])),key:"0"}:void 0]),1032,["onConfirm"])]),(0,a._)("article",p,[(0,a.Wm)(h,{headline:"Add new Tonic",onConfirm:m.addTonic,confirmText:"Add tonic"},{body:(0,a.w5)((()=>[(0,a.Wm)(f,{ref:"tonicForm",typesOfTonic:r.typesOfTonic,onNewType:m.addNewTonicType},null,8,["typesOfTonic","onNewType"])])),_:1},8,["onConfirm"])]),(0,a._)("article",d,[(0,a.Wm)(h,{headline:"Add new Gin",onConfirm:m.addGin,confirmText:"Add gin"},{body:(0,a.w5)((()=>[(0,a.Wm)(u,{ref:"ginForm",typesOfGin:r.typesOfGin},null,8,["typesOfGin"])])),_:1},8,["onConfirm"])])])}r(7658);var y=r(7139);const m={class:"panel"},c={class:"panel__header"},h={class:"panel__body"},f={class:"panel__footer"};function u(e,n,r,t,i,o){return(0,a.wg)(),(0,a.iD)("div",m,[(0,a._)("h2",c,(0,y.zw)(r.headline),1),(0,a._)("div",h,[(0,a.WI)(e.$slots,"body")]),(0,a._)("div",f,[(0,a._)("button",{onClick:n[0]||(n[0]=(...e)=>o.confirm&&o.confirm(...e)),class:"button button--main"},(0,y.zw)(r.confirmText),1)])])}var _={name:"Panel",props:{headline:{type:String,default:"",required:!0},confirmText:{type:String,default:"Ok"}},methods:{confirm(){this.$emit("confirm")}}},w=r(89);const T=(0,w.Z)(_,[["render",u]]);var g=T,G=r(9242);const v={class:"form"},A={class:"form__group"},N=(0,a._)("strong",{class:"form__group-title"},"Garnish",-1),k={class:"form__group-field"},b={class:"form__group"},D=(0,a._)("strong",{class:"form__group-title"},"Garnish type",-1),O=["value","id"],F=["for"],C={class:"form__group-footer"},$={class:"form__group-field"};function x(e,n,r,t,i,o){return(0,a.wg)(),(0,a.iD)("div",v,[(0,a._)("div",A,[N,(0,a._)("div",k,[(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=e=>i.garnishName=e),placeholder:"Name of the Garnish"},null,512),[[G.nr,i.garnishName]])])]),(0,a._)("div",b,[D,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.typesOfGarnish,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"form__group-field",key:e.id},[(0,a.wy)((0,a._)("input",{type:"radio","onUpdate:modelValue":n[1]||(n[1]=e=>i.pickedGarnishType=e),name:"type",value:e.id,id:e.id},null,8,O),[[G.G2,i.pickedGarnishType]]),(0,a._)("label",{for:e.id},(0,y.zw)(e.name),9,F)])))),128)),(0,a._)("div",C,[(0,a._)("a",{href:"#",onClick:n[2]||(n[2]=(0,G.iM)((e=>i.showNewType=!0),["prevent"]))},"Add new type"),(0,a._)("div",$,[i.showNewType?(0,a.wy)(((0,a.wg)(),(0,a.iD)("input",{key:0,onKeyup:n[3]||(n[3]=(0,G.D2)(((...e)=>o.addType&&o.addType(...e)),["enter"])),type:"text",class:"small",placeholder:"Name of new type","onUpdate:modelValue":n[4]||(n[4]=e=>i.newType=e)},null,544)),[[G.nr,i.newType]]):(0,a.kq)("",!0),i.showNewType?((0,a.wg)(),(0,a.iD)("button",{key:1,onClick:n[5]||(n[5]=(...e)=>o.addType&&o.addType(...e)),type:"button",class:"button button--main button--small"},"Add")):(0,a.kq)("",!0)])])])])}var U={name:"Garnish Form",emits:["newType"],props:{garnish:{type:Array,default:Array.empty},typesOfGarnish:{type:Array,default:Array.empty}},data(){return{showNewType:!1,newType:"",garnishName:"",pickedGarnishType:""}},methods:{addGarnish(){console.log("something worked")},addType(){this.$emit("newType",this.newType),this.newType="",this.showNewType=!1},reset(){this.garnishName="",this.pickedGarnishType=""}}};const V=(0,w.Z)(U,[["render",x]]);var E=V;const W={class:"form__group"},q=(0,a._)("strong",{class:"form__group-title"},"Tonic",-1),Z={class:"form__group-field"},z={class:"form__group"},K=(0,a._)("strong",{class:"form__group-title"},"Tonic type",-1),H=["value","id"],P=["for"],R={class:"form__group-footer"},S={class:"form__group-field"};function Y(e,n,r,t,i,o){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",W,[q,(0,a._)("div",Z,[(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=e=>i.tonicName=e),placeholder:"Name of the Tonic"},null,512),[[G.nr,i.tonicName]])])]),(0,a._)("div",z,[K,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.typesOfTonic,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"form__group-field",key:e.id},[(0,a.wy)((0,a._)("input",{type:"radio","onUpdate:modelValue":n[1]||(n[1]=e=>i.pickedTonicType=e),name:"type",value:e.id,id:e.id},null,8,H),[[G.G2,i.pickedTonicType]]),(0,a._)("label",{for:e.id},(0,y.zw)(e.name),9,P)])))),128)),(0,a._)("div",R,[(0,a._)("a",{href:"#",onClick:n[2]||(n[2]=(0,G.iM)((e=>i.showNewType=!0),["prevent"]))},"Add new type"),(0,a._)("div",S,[i.showNewType?(0,a.wy)(((0,a.wg)(),(0,a.iD)("input",{key:0,onKeyup:n[3]||(n[3]=(0,G.D2)(((...e)=>o.addType&&o.addType(...e)),["enter"])),type:"text",class:"small",placeholder:"Name of new type","onUpdate:modelValue":n[4]||(n[4]=e=>i.newType=e)},null,544)),[[G.nr,i.newType]]):(0,a.kq)("",!0),i.showNewType?((0,a.wg)(),(0,a.iD)("button",{key:1,onClick:n[5]||(n[5]=(...e)=>o.addType&&o.addType(...e)),type:"button",class:"button button--main button--small"},"Add")):(0,a.kq)("",!0)])])])],64)}var M={name:"Tonic Form",emits:["newType"],props:{tonics:{type:Array,default:Array.empty},typesOfTonic:{type:Array,default:Array.empty}},data(){return{showNewType:!1,newType:"",tonicName:"",pickedTonicType:""}},methods:{addGarnish(){console.log("something worked")},addType(){this.$emit("newType",this.newType),this.newType="",this.showNewType=!1}}};const I=(0,w.Z)(M,[["render",Y]]);var j=I;const B={class:"form"},J={class:"form__group"},L=(0,a._)("strong",{class:"form__group-title"},"Gin",-1),Q={class:"form__group-field"},X={class:"form__group-field"};function ee(e,n,r,t,i,o){return(0,a.wg)(),(0,a.iD)("div",B,[(0,a._)("div",J,[L,(0,a._)("div",Q,[(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=e=>i.ginName=e),placeholder:"Name of the Gin"},null,512),[[G.nr,i.ginName]])]),(0,a._)("div",X,[(0,a.wy)((0,a._)("textarea",{"onUpdate:modelValue":n[1]||(n[1]=e=>i.ginDescription=e),placeholder:"Say something clever about the gin"},null,512),[[G.nr,i.ginDescription]])])])])}var ne={name:"Gin form",props:{garnish:{type:Array,default:Array.empty},typesOfGarnish:{type:Array,default:Array.empty},tonics:{type:Array,default:Array.empty},typesOfTonic:{type:Array,default:Array.empty}},data(){return{ginName:"",ginDescription:""}}};const re=(0,w.Z)(ne,[["render",ee]]);var ae=re,te={name:"Dashboard",components:{Panel:g,GarnishForm:E,TonicForm:j,GinForm:ae},emits:["newGin","newTonic","newGarnish","newGarnish","newGarnishType","newTonicType"],props:{gins:{type:Array,default:Array.empty},typesOfGin:{type:Array,default:Array.empty},tonics:{type:Array,default:Array.empty},typesOfTonic:{type:Array,default:Array.empty},garnish:{type:Array,default:Array.empty},typesOfGarnish:{type:Array,default:Array.empty}},data(){return{garnishError:null}},methods:{addGarnish(){this.garnishError=null;let e=this.$refs.garnishForm.$data.garnishName,n=this.$refs.garnishForm.$data.pickedGarnishType;""==e&&(this.garnishError=["Remember to fill out the name of the garnish"]),""==n&&(null==this.garnishError?this.garnishError=["Remember to pick af type of garnish"]:this.garnishError.push("Remember to pick af type of garnish")),null!=n&&(this.$emit("newGarnish",{name:e,type:n}),this.$refs.garnishForm.reset())},addNewGarnishType(e){this.$emit("newGarnishType",e)},addTonic(){console.log("add tonic")},addNewTonicType(e){this.$emit("newTonicType",e)},addGin(){console.log("add gin")}}};const ie=(0,w.Z)(te,[["render",l]]);var oe=ie}}]);
//# sourceMappingURL=491.1d159ee8.js.map