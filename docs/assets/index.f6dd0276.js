import{D as e,a as t}from"./vendor.9ce9d333.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(r){const n=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((r,a)=>{const o=new URL(e,n);if(self[t].moduleMap[o])return r(self[t].moduleMap[o]);const c=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),s=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){a(new Error(`Failed to import: ${e}`)),l(s)},onload(){r(self[t].moduleMap[o]),l(s)}});document.head.appendChild(s)})),self[t].moduleMap={}}}("/assets/");function r(){const[t,r]=e.useState(0);return e.createElement("div",{className:"App"},e.createElement("header",{className:"App-header"},e.createElement("img",{src:"/assets/logo.ecc203fb.svg",className:"App-logo",alt:"logo"}),e.createElement("p",null,"Hello Vite + React!"),e.createElement("p",null,e.createElement("button",{onClick:()=>r((e=>e+1))},"count is: ",t)),e.createElement("p",null,"Edit ",e.createElement("code",null,"App.jsx")," and save to test HMR updates."),e.createElement("p",null,e.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")," | ",e.createElement("a",{className:"App-link",href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener noreferrer"},"Vite Docs"))))}t.render(e.createElement(e.StrictMode,null,e.createElement(r,null)),document.getElementById("root"));