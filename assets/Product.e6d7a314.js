import{u as N,a as x,b as R,c as y,r as G,w as D,d as I,o as c,e as v,f as t,g as V,h as z,t as s,F as S,i as E,n as w,j as g,k as B,l as A}from"./index.9feae8e3.js";import{f as U}from"./index.7c535327.js";const T={class:"mainSection"},M={class:"text-right py-2"},q={class:"flex w-full"},H={class:"w-3/12 py-1 tableBorder border-t pl-2"},J={class:"w-3/12 py-1 tableBorder border-t pl-2"},K={class:"w-1/12 py-1 tableBorder border-t text-center"},O={class:"w-1/12 py-1 tableBorder border-t text-center"},Q={class:"w-1/12 py-1 tableBorder border-t text-center"},W={class:"w-2/12 py-1 tableBorder border-t text-center"},X={class:"w-1/12 py-1 tableBorder border-t border-r text-center"},Y={class:"w-full"},Z={class:"w-3/12 py-1 tableBorder pl-2"},m={class:"w-3/12 py-1 tableBorder text-center"},j={class:"w-1/12 py-1 tableBorder text-center"},tt={class:"w-1/12 py-1 tableBorder text-center"},et=["onClick"],st={class:"w-1/12 py-1 tableBorder text-center"},ot=["onClick"],rt={class:"w-2/12 py-1 tableBorder text-center"},lt=["onClick"],nt={class:"w-1/12 py-1 tableBorder border-r text-center"},ct=["onClick"],at={setup(L){const p=N(),a=x(),d=R();y(()=>p.globleInfos.serverURL);const u=y(()=>p.globleInfos.language),n=G({list:[],category:[]}),_=y(()=>n.value.category.reduce((e,i)=>(e[i==null?void 0:i.c_id]=i,e),{})),b=y(()=>(console.log("list"),n.value.list.map(e=>{let i=function(){let r=_.value[e==null?void 0:e.c_id];if(r){let $=`${u.value}_title`;return r[$]}}();return{p_id:(e==null?void 0:e.p_id)||"",title:(e==null?void 0:e.title)||"",category:i||"",sort:(e==null?void 0:e.sort)||"",visibility:(e==null?void 0:e.visibility)||"0"}}))),f=()=>{let e=U.list;n.value.list=Array.isArray(e==null?void 0:e.list)?e.list:[],n.value.category=Array.isArray(e==null?void 0:e.category)?e.category:[]};f();const C=e=>{},l=()=>d.popupFunction("productListAdd",n.value.category),F=e=>d.popupFunction("productListEdit",{item:n.value.list[e],category:n.value.category}),h=e=>d.popupFunction("productListPicture",n.value.list[e]),o=e=>{};return D(()=>a.route.product.list.isRefreshPage,e=>{e&&(f(),a.route.product.list.isRefreshPage=!1)}),(e,i)=>{const k=I("font-awesome-icon");return c(),v("section",T,[t("article",M,[t("button",{class:"blueBtn",onClick:l},[V(k,{icon:"plus"}),z(s(e.$t("General.add")),1)])]),t("article",null,[t("div",null,[t("div",q,[t("div",H,[t("strong",null,s(e.$t("Product.listProductName")),1)]),t("div",J,[t("strong",null,s(e.$t("Product.productCategory")),1)]),t("div",K,[t("strong",null,s(e.$t("General.sort")),1)]),t("div",O,[t("strong",null,s(e.$t("General.visible")),1)]),t("div",Q,[t("strong",null,s(e.$t("General.edit")),1)]),t("div",W,[t("strong",null,s(e.$t("Product.listPictureAndFile")),1)]),t("div",X,[t("strong",null,s(e.$t("General.delete")),1)])]),t("div",Y,[(c(!0),v(S,null,E(B(b),(r,$)=>(c(),v("div",{key:"list"+$,class:"w-full flex"},[t("div",Z,s(r==null?void 0:r.title),1),t("div",m,s(r==null?void 0:r.category),1),t("div",j,s(r==null?void 0:r.sort),1),t("div",tt,[t("button",{class:w([(r==null?void 0:r.visibility)=="1"?"greenCircleBtn text-white":"grayCircleBtn text-black"]),onClick:P=>C()},[(r==null?void 0:r.visibility)=="1"?(c(),g(k,{key:0,icon:"fa-check"})):(c(),g(k,{key:1,icon:"fa-xmark"}))],10,et)]),t("div",st,[t("button",{class:"blueBtn",onClick:P=>F($)},s(e.$t("General.edit")),9,ot)]),t("div",rt,[t("button",{class:"yellowBtn",onClick:P=>h($)},s(e.$t("Product.listUploadFile")),9,lt)]),t("div",nt,[t("button",{class:"redBtn",onClick:P=>o()},s(e.$t("General.delete")),9,ct)])]))),128))])])])])}}},it={class:"mainSection"},dt={class:"text-right py-2"},ut={class:"flex w-full"},pt={class:"w-4/12 py-1 tableBorder border-t pl-2"},_t={class:"w-4/12 py-1 tableBorder border-t pl-2"},yt={class:"w-1/12 py-1 tableBorder border-t text-center"},vt={class:"w-1/12 py-1 tableBorder border-t text-center"},gt={class:"w-1/12 py-1 tableBorder border-t text-center"},bt={class:"w-1/12 py-1 tableBorder border-t border-r text-center"},ht={class:"w-full"},$t={class:"w-4/12 py-1 tableBorder pl-2"},Bt={class:"w-4/12 py-1 tableBorder text-center"},ft={class:"w-1/12 py-1 tableBorder text-center"},kt={class:"w-1/12 py-1 tableBorder text-center"},wt=["onClick"],Ct={class:"w-1/12 py-1 tableBorder text-center"},Pt=["onClick"],xt={class:"w-1/12 py-1 tableBorder border-r text-center"},Gt=["onClick"],St={setup(L){const p=N(),a=x(),d=R();y(()=>p.globleInfos.serverURL),y(()=>p.globleInfos.language);const u=G([]),n=()=>u.value=U.categoryList;n();const _=l=>{},b=()=>d.popupFunction("categoryAdd"),f=l=>d.popupFunction("categoryEdit",l),C=l=>{};return D(()=>a.route.product.category.isRefreshPage,l=>{l&&(n(),a.route.product.category.isRefreshPage=!1)}),(l,F)=>{const h=I("font-awesome-icon");return c(),v("section",it,[t("article",dt,[t("button",{class:"blueBtn",onClick:b},[V(h,{icon:"plus"}),z(s(l.$t("General.add")),1)])]),t("article",null,[t("div",null,[t("div",ut,[t("div",pt,[t("strong",null,s(l.$t("Product.categoryName_zh")),1)]),t("div",_t,[t("strong",null,s(l.$t("Product.categoryName_en")),1)]),t("div",yt,[t("strong",null,s(l.$t("General.sort")),1)]),t("div",vt,[t("strong",null,s(l.$t("General.visible")),1)]),t("div",gt,[t("strong",null,s(l.$t("General.edit")),1)]),t("div",bt,[t("strong",null,s(l.$t("General.delete")),1)])]),t("div",ht,[(c(!0),v(S,null,E(u.value,(o,e)=>(c(),v("div",{key:"categoryList"+e,class:"w-full flex"},[t("div",$t,s(o==null?void 0:o.zh_title),1),t("div",Bt,s(o==null?void 0:o.en_title),1),t("div",ft,s(o==null?void 0:o.sort),1),t("div",kt,[t("button",{class:w([(o==null?void 0:o.visibility)=="1"?"greenCircleBtn text-white":"grayCircleBtn text-black"]),onClick:i=>_()},[(o==null?void 0:o.visibility)=="1"?(c(),g(h,{key:0,icon:"fa-check"})):(c(),g(h,{key:1,icon:"fa-xmark"}))],10,wt)]),t("div",Ct,[t("button",{class:"blueBtn",onClick:i=>f(o)},s(l.$t("General.edit")),9,Pt)]),t("div",xt,[t("button",{class:"redBtn",onClick:i=>C()},s(l.$t("General.delete")),9,Gt)])]))),128))])])])])}}},Lt={class:"mb-4 text-4xl text-center border-b border-black grid grid-cols-2"},Nt={setup(L){const p=x(),a=y(()=>p.route.product.currentPage),d=(n="")=>{p.route.product.currentPage=n},u=G({active:"dark:bg-gray-200 dark:text-black",passive:"cursor-pointer bg-gray-900 bg-opacity-10 hover:bg-opacity-100 text-gray-700 text-opacity-20 hover:text-white dark:text-opacity-50"});return(n,_)=>(c(),v(S,null,[t("h2",Lt,[t("div",{class:w(["py-3 border-r border-black",[B(a)=="list"?u.value.active:u.value.passive]]),onClick:_[0]||(_[0]=b=>d("list"))},s(n.$t("Product.productList")),3),t("div",{class:w(["py-3",[B(a)=="category"?u.value.active:u.value.passive]]),onClick:_[1]||(_[1]=b=>d("category"))},s(n.$t("Product.productCategory")),3)]),B(a)=="list"?(c(),g(at,{key:0})):A("",!0),B(a)=="category"?(c(),g(St,{key:1})):A("",!0)],64))}};export{Nt as default};
