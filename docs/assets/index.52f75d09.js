import{D as e,a as t}from"./vendor.9ce9d333.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const r=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,l)=>{const c=new URL(e,r);if(self[t].moduleMap[c])return o(self[t].moduleMap[c]);const m=new Blob([`import * as m from '${c}';`,`${t}.moduleMap['${c}']=m;`],{type:"text/javascript"}),a=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(m),onerror(){l(new Error(`Failed to import: ${e}`)),n(a)},onload(){o(self[t].moduleMap[c]),n(a)}});document.head.appendChild(a)})),self[t].moduleMap={}}}("/assets/");function o(){return e.createElement("div",null)}t.render(e.createElement(e.StrictMode,null,e.createElement(o,null)),document.getElementById("root"));