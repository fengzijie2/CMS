import{o as l,c as i,e as _,u as z,j as g,a as E,b as e,w as t,g as b,E as k,k as y,l as F}from"./index-d4928f24.js";import{E as B,a as $}from"./el-form-item-6be46729.js";import{E as C}from"./el-input-8b980146.js";import"./castArray-ae0f5a93.js";import"./_baseClone-652de094.js";import"./event-9519ab40.js";const M={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},H=_("path",{fill:"currentColor",d:"M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"},null,-1),q=_("path",{fill:"currentColor",d:"M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm192-160v-64a192 192 0 1 0-384 0v64h384zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64z"},null,-1),I=[H,q];function L(m,r){return l(),i("svg",M,I)}const N={name:"ep-lock",render:L},R={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},U=_("path",{fill:"currentColor",d:"M288 320a224 224 0 1 0 448 0a224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"},null,-1),S=[U];function j(m,r){return l(),i("svg",R,S)}const A={name:"ep-user-filled",render:j};const D={class:"login-container"},Q={__name:"LoginView",setup(m){const r=z(),s=g({username:"丸子",password:"wz123456"}),f=g({username:[{required:!0,message:"账户名不能为空",trigger:"blur"},{min:2,max:6,message:"字符长度在2~6之间",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:2,max:8,message:"密码长度在2~6之间",trigger:"blur"}]}),u=E(),v=()=>{u.value.validate((c,o)=>{c?r.reqLogin(s):k.error("账户密码格式不规范,请正确填写再登录")})};return(c,o)=>{const h=A,d=y,p=C,a=B,w=N,V=F,x=$;return l(),i("div",D,[e(x,{ref_key:"loginFormRef",ref:u,model:s,rules:f,id:"login-form"},{default:t(()=>[e(a,{prop:"username"},{default:t(()=>[e(d,{size:14,class:"svg-container"},{default:t(()=>[e(h)]),_:1}),e(p,{modelValue:s.username,"onUpdate:modelValue":o[0]||(o[0]=n=>s.username=n),type:"text"},null,8,["modelValue"])]),_:1}),e(a,{prop:"password"},{default:t(()=>[e(d,{size:14,class:"svg-container"},{default:t(()=>[e(w)]),_:1}),e(p,{modelValue:s.password,"onUpdate:modelValue":o[1]||(o[1]=n=>s.password=n),type:"password","show-password":""},null,8,["modelValue"])]),_:1}),e(a,null,{default:t(()=>[e(V,{type:"primary",onClick:o[2]||(o[2]=n=>v())},{default:t(()=>[b("登录")]),_:1})]),_:1})]),_:1},8,["model","rules"])])}}};export{Q as default};