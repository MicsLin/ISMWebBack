import{_ as p,u as v,a as h,c as _,r as g,w as k,o as r,e as o,f as e,t,F as b,i as y,h as u}from"./index.9feae8e3.js";import{f as w}from"./index.7c535327.js";const B={class:"px-2 py-4 text-4xl text-center border-b"},x={class:"mainSection"},F={class:"flex w-full"},S={class:"w-6/12 py-1 tableBorder border-t pl-2"},$={class:"w-3/12 py-1 tableBorder border-t text-center"},G={class:"w-2/12 py-1 tableBorder border-t text-center"},P={class:"w-1/12 py-1 tableBorder border-t border-r text-center"},L={class:"w-full"},D={class:"w-6/12 py-1 tableBorder pl-2"},R={class:"FeedbackP"},I={class:"w-3/12 py-1 tableBorder text-center"},N={class:"FeedbackP"},C={class:"w-2/12 py-1 tableBorder text-center"},E={class:"w-1/12 py-1 tableBorder border-r text-center"},M=["onClick"],V={setup(j){const l=v(),n=h();_(()=>l.globleInfos.serverURL),_(()=>l.globleInfos.language);const c=g([]),d=()=>c.value=w.feedbackList;d();const i=a=>{};return k(()=>n.route.feedback.isRefreshPage,a=>{a&&(d(),n.route.feedback.isRefreshPage=!1)}),(a,T)=>(r(),o(b,null,[e("h2",B,t(a.$t("Menu.feedback")),1),e("section",x,[e("article",null,[e("div",null,[e("div",F,[e("div",S,[e("strong",null,t(a.$t("General.title")),1)]),e("div",$,[e("strong",null,t(a.$t("General.name")),1)]),e("div",G,[e("strong",null,t(a.$t("General.date")),1)]),e("div",P,[e("strong",null,t(a.$t("General.delete")),1)])]),e("div",L,[(r(!0),o(b,null,y(c.value,(s,f)=>(r(),o("div",{key:"feedbackList"+f,class:"w-full flex FeedbackDiv hover:bg-gray-400 dark:hover:bg-gray-700"},[e("div",D,[u(t(s==null?void 0:s.Fb_Subject)+" ",1),e("p",R,t(s==null?void 0:s.Fb_Message),1)]),e("div",I,[u(t(s==null?void 0:s.Fb_Name)+" ",1),e("p",N,t(s==null?void 0:s.Fb_Email),1)]),e("div",C,t(s==null?void 0:s.created_at),1),e("div",E,[e("button",{class:"redBtn",onClick:U=>i()},t(a.$t("General.delete")),9,M)])]))),128))])])])])],64))}};var A=p(V,[["__scopeId","data-v-fe013046"]]);export{A as default};