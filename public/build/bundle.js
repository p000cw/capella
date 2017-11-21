var capella=function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){r(this,e),this.uploadUrl="/upload",this.uploadFileButton=document.getElementById("uploadFileButton"),this.uploadLinkField=document.getElementById("uploadLinkField"),this.pageWrapper=document.getElementsByClassName("capella")[0],this.progressBar=document.getElementsByClassName("js-capella__uploading-progress")[0],this._this=this,this.uploadFileButton&&this.uploadFileButton.addEventListener("click",this.uploadByTransport.bind(this),!1),this.uploadLinkField&&this.uploadLinkField.addEventListener("keydown",this.uploadByUrl.bind(this),!1)}return a(e,[{key:"uploadByTransport",value:function(){capella.transport.init({url:this.uploadUrl,multiple:!1,accept:"image/*",data:{},before:this.before,progress:this.progress,success:this.success,error:this.error,after:this.after})}},{key:"uploadByUrl",value:function(e){13===e.keyCode&&(e.preventDefault(),this.uploadLinkField&&this.upload({link:this.uploadLinkField.value}))}},{key:"upload",value:function(e){capella.ajax.call({type:"POST",url:this.uploadUrl,data:e,before:this.before,progress:this.progress,success:this.success,error:this.error,after:this.after})}},{key:"before",value:function(){capella.scene.uploadScreen.show()}},{key:"progress",value:function(e){console.log(e+"%"),capella.scene.uploadScreen.progress(e)}},{key:"success",value:function(e){console.log(e),e.success&&(window.location.href=e.url)}},{key:"error",value:function(e){console.log(e)}},{key:"after",value:function(){capella.scene.uploadScreen.hide()}}]),e}();t.default=o},function(e,t,n){"use strict";n(2),e.exports=n(3)},function(e,t){},function(e,t,n){"use strict";var r={},a=n(0).default,o=n(4).default,i=n(5).default;r.ajax=n(6),r.transport=n(7),r.scene=n(8),r.uploader=n(0),r.copyable=n(9),r.uploader=new a,r.clipboard=new o,r.dnd=new i(".capella"),r.init=function(){r.copyable.init()},e.exports=r},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){r(this,e),document.body.addEventListener("paste",this.pasteFromClipboard)}return a(e,[{key:"pasteFromClipboard",value:function(e){for(var t=(e.clipboardData||e.originalEvent.clipboardData).items,n=null,r=t.length-1;r>=0;--r)if(0===t[r].type.indexOf("image")){n=t[r].getAsFile();break}if(null!==n){var a=new FileReader;a.onload=function(){var e=new FormData;e.append("file",n,n.name),capella.uploader.upload(e)},a.readAsDataURL(n)}}}]),e}();t.default=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t){r(this,e),this.wrapper=document.querySelector(t),this.wrapper.addEventListener("dragenter",this.dragover.bind(this)),this.wrapper.addEventListener("dragover",this.dragover.bind(this)),this.wrapper.addEventListener("dragleave",this.drageleave.bind(this)),this.wrapper.addEventListener("drop",this.drop.bind(this))}return a(e,[{key:"dragover",value:function(e){e.preventDefault(),this.wrapper.classList.add("capella--dark")}},{key:"drageleave",value:function(e){e.preventDefault(),this.wrapper.classList.remove("capella--dark")}},{key:"drop",value:function(e){this.wrapper.classList.remove("capella--dark");var t=e.dataTransfer.files[0],n=new FormData;n.append("file",t,t.name),capella.uploader.upload(n),e.preventDefault()}}]),e}();t.default=o},function(e,t,n){!function(t,n){e.exports=n()}(0,function(){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";e.exports=function(){var e=function(e){return e instanceof FormData};return{call:function(t){if(t&&t.url){var n=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP"),r=t.progress||null,a=t.success||function(){},o=t.error||function(){},i=t.before||null,u=t.after||null;if(t.async=!0,t.type=t.type||"GET",t.data=t.data||"",t["content-type"]=t["content-type"]||"application/json; charset=utf-8","GET"===t.type&&t.data&&(t.url=/\?/.test(t.url)?t.url+"&"+t.data:t.url+"?"+t.data),t.withCredentials&&(n.withCredentials=!0),i&&"function"==typeof i&&i(),n.open(t.type,t.url,t.async),!e(t.data)){var l=new FormData;for(var s in t.data)l.append(s,t.data[s]);t.data=l}r&&"function"==typeof r&&n.upload.addEventListener("progress",function(e){var t=parseInt(e.loaded/e.total*100);r(t)},!1),n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.onreadystatechange=function(){if(4===n.readyState){var e=n.responseText;try{e=JSON.parse(e)}catch(e){}200===n.status?a(e):o(e),u&&"function"==typeof u&&u()}},n.send(t.data)}}}}()}])})},function(e,t,n){!function(t,n){e.exports=n()}(0,function(){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=n(1);e.exports=function(e){var t=null;e.input=null;var n=function(){e.input.click()},o=function(){var n=t.url,o=t.data,i=t.before,u=t.progress,l=t.success,s=t.error,c=t.after,p=new FormData,d=e.input.files;if(d.length>1)for(var f=0;f<d.length;f++)p.append("files[]",d[f],d[f].name);else p.append("file",d[0],d[0].name);if(null!==o&&"object"===(void 0===o?"undefined":r(o)))for(var y in o)p.append(y,o[y]);a.call({type:"POST",data:p,url:n,before:i,progress:u,success:l,error:s,after:c})};return e.init=function(r){if(!r.url)return void console.log("Can't send request because `url` is missed");t=r;var a=document.createElement("INPUT");a.type="file",t&&t.multiple&&a.setAttribute("multiple","multiple"),t&&t.accept&&a.setAttribute("accept",t.accept),a.addEventListener("change",o,!1),e.input=a,n()},e}({})},function(e,t,n){!function(t,n){e.exports=function(){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";e.exports=function(){var e=function(e){return e instanceof FormData};return{call:function(t){if(t&&t.url){var n=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP"),r=t.progress||null,a=t.success||function(){},o=t.error||function(){},i=t.before||null,u=t.after||null;if(t.async=!0,t.type=t.type||"GET",t.data=t.data||"",t["content-type"]=t["content-type"]||"application/json; charset=utf-8","GET"===t.type&&t.data&&(t.url=/\?/.test(t.url)?t.url+"&"+t.data:t.url+"?"+t.data),t.withCredentials&&(n.withCredentials=!0),i&&"function"==typeof i&&i(),n.open(t.type,t.url,t.async),!e(t.data)){var l=new FormData;for(var s in t.data)l.append(s,t.data[s]);t.data=l}r&&"function"==typeof r&&n.upload.addEventListener("progress",function(e){var t=parseInt(e.loaded/e.total*100);r(t)},!1),n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.onreadystatechange=function(){if(4===n.readyState){var e=n.responseText;try{e=JSON.parse(e)}catch(e){}200===n.status?a(e):o(e),u&&"function"==typeof u&&u()}},n.send(t.data)}}}}()}])}()}()}])})},function(e,t,n){"use strict";e.exports=function(){var e=document.getElementsByClassName("capella")[0],t=document.getElementsByClassName("js-capella__uploading-progress")[0].querySelector("div");return{uploadScreen:{show:function(){e.classList.add("capella--loading")},hide:function(){e.classList.remove("capella--loading")},progress:function(e){t.style.width=e+"%"}}}}()},function(e,t,n){"use strict";e.exports=function(){var e={copyable:"js-copyable",authorized:"js-copyable-authorize"},t=function(e,t){e.addEventListener("click",a),e.addEventListener("copied",t)},n=function(e){e.addEventListener("click",r)},r=function(){this.querySelector("[name="+e.copyable+"]").click()},a=function(e){var t=window.getSelection(),n=document.createRange();n.selectNodeContents(this),t.removeAllRanges(),t.addRange(n),document.execCommand("copy"),t.removeAllRanges();var r=new CustomEvent("copied",{bubbles:!1,cancelable:!1,detail:n.toString()});this.dispatchEvent(r),e.stopPropagation()};return{init:function(r){var a=document.getElementsByName(e.copyable);if(!a)return void console.log("There are no copyable elements");for(var o=0;o<a.length;o++)t(a[o],r);for(var i=document.getElementsByName(e.authorized),u=0;u<i.length;u++)n(i[u]);console.log("Copyable module initialized")}}}()}]);
//# sourceMappingURL=bundle.js.map