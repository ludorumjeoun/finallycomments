
/*! iFrame Resizer (iframeSizer.min.js ) - v3.5.16 - 2018-01-21
 *  Desc: Force cross domain iframes to size to content.
 *  Requires: iframeResizer.contentWindow.min.js to be loaded into the target frame.
 *  Copyright: (c) 2018 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 */

!function(a){"use strict";function b(a,b,c){"addEventListener"in window?a.addEventListener(b,c,!1):"attachEvent"in window&&a.attachEvent("on"+b,c)}function c(a,b,c){"removeEventListener"in window?a.removeEventListener(b,c,!1):"detachEvent"in window&&a.detachEvent("on"+b,c)}function d(){var a,b=["moz","webkit","o","ms"];for(a=0;a<b.length&&!N;a+=1)N=window[b[a]+"RequestAnimationFrame"];N||h("setup","RequestAnimationFrame not supported")}function e(a){var b="Host page: "+a;return window.top!==window.self&&(b=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+a:"Nested host page: "+a),b}function f(a){return K+"["+e(a)+"]"}function g(a){return P[a]?P[a].log:G}function h(a,b){k("log",a,b,g(a))}function i(a,b){k("info",a,b,g(a))}function j(a,b){k("warn",a,b,!0)}function k(a,b,c,d){!0===d&&"object"==typeof window.console&&console[a](f(b),c)}function l(a){function d(){function a(){s(U),p(V),I("resizedCallback",U)}f("Height"),f("Width"),t(a,U,"init")}function e(){var a=T.substr(L).split(":");return{iframe:P[a[0]]&&P[a[0]].iframe,id:a[0],height:a[1],width:a[2],type:a[3]}}function f(a){var b=Number(P[V]["max"+a]),c=Number(P[V]["min"+a]),d=a.toLowerCase(),e=Number(U[d]);h(V,"Checking "+d+" is in range "+c+"-"+b),c>e&&(e=c,h(V,"Set "+d+" to min value")),e>b&&(e=b,h(V,"Set "+d+" to max value")),U[d]=""+e}function g(){function b(){function a(){var a=0,b=!1;for(h(V,"Checking connection is from allowed list of origins: "+d);a<d.length;a++)if(d[a]===c){b=!0;break}return b}function b(){var a=P[V]&&P[V].remoteHost;return h(V,"Checking connection is from: "+a),c===a}return d.constructor===Array?a():b()}var c=a.origin,d=P[V]&&P[V].checkOrigin;if(d&&""+c!="null"&&!b())throw new Error("Unexpected message received from: "+c+" for "+U.iframe.id+". Message was: "+a.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}function k(){return K===(""+T).substr(0,L)&&T.substr(L).split(":")[0]in P}function l(){var a=U.type in{"true":1,"false":1,undefined:1};return a&&h(V,"Ignoring init message from meta parent page"),a}function w(a){return T.substr(T.indexOf(":")+J+a)}function y(a){h(V,"MessageCallback passed: {iframe: "+U.iframe.id+", message: "+a+"}"),I("messageCallback",{iframe:U.iframe,message:JSON.parse(a)}),h(V,"--")}function z(){var a=document.body.getBoundingClientRect(),b=U.iframe.getBoundingClientRect();return JSON.stringify({iframeHeight:b.height,iframeWidth:b.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(b.top-a.top,10),offsetLeft:parseInt(b.left-a.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset})}function A(a,b){function c(){u("Send Page Info","pageInfo:"+z(),a,b)}x(c,32)}function B(){function a(a,b){function c(){P[f]?A(P[f].iframe,f):d()}["scroll","resize"].forEach(function(d){h(f,a+d+" listener for sendPageInfo"),b(window,d,c)})}function d(){a("Remove ",c)}function e(){a("Add ",b)}var f=V;e(),P[f]&&(P[f].stopPageInfo=d)}function C(){P[V]&&P[V].stopPageInfo&&(P[V].stopPageInfo(),delete P[V].stopPageInfo)}function D(){var a=!0;return null===U.iframe&&(j(V,"IFrame ("+U.id+") not found"),a=!1),a}function E(a){var b=a.getBoundingClientRect();return o(V),{x:Math.floor(Number(b.left)+Number(M.x)),y:Math.floor(Number(b.top)+Number(M.y))}}function F(a){function b(){M=f,G(),h(V,"--")}function c(){return{x:Number(U.width)+e.x,y:Number(U.height)+e.y}}function d(){window.parentIFrame?window.parentIFrame["scrollTo"+(a?"Offset":"")](f.x,f.y):j(V,"Unable to scroll to requested position, window.parentIFrame not found")}var e=a?E(U.iframe):{x:0,y:0},f=c();h(V,"Reposition requested from iFrame (offset x:"+e.x+" y:"+e.y+")"),window.top!==window.self?d():b()}function G(){!1!==I("scrollCallback",M)?p(V):q()}function H(a){function b(){var a=E(f);h(V,"Moving to in page link (#"+d+") at x: "+a.x+" y: "+a.y),M={x:a.x,y:a.y},G(),h(V,"--")}function c(){window.parentIFrame?window.parentIFrame.moveToAnchor(d):h(V,"In page link #"+d+" not found and window.parentIFrame not found")}var d=a.split("#")[1]||"",e=decodeURIComponent(d),f=document.getElementById(e)||document.getElementsByName(e)[0];f?b():window.top!==window.self?c():h(V,"In page link #"+d+" not found")}function I(a,b){return m(V,a,b)}function N(){switch(P[V]&&P[V].firstRun&&S(),U.type){case"close":P[V].closeRequestCallback?m(V,"closeRequestCallback",P[V].iframe):n(U.iframe);break;case"message":y(w(6));break;case"scrollTo":F(!1);break;case"scrollToOffset":F(!0);break;case"pageInfo":A(P[V]&&P[V].iframe,V),B();break;case"pageInfoStop":C();break;case"inPageLink":H(w(9));break;case"reset":r(U);break;case"init":d(),I("initCallback",U.iframe);break;default:d()}}function O(a){var b=!0;return P[a]||(b=!1,j(U.type+" No settings for "+a+". Message was: "+T)),b}function Q(){for(var a in P)u("iFrame requested init",v(a),document.getElementById(a),a)}function S(){P[V]&&(P[V].firstRun=!1)}var T=a.data,U={},V=null;"[iFrameResizerChild]Ready"===T?Q():k()?(U=e(),V=R=U.id,P[V]&&(P[V].loaded=!0),!l()&&O(V)&&(h(V,"Received: "+T),D()&&g()&&N())):i(V,"Ignored: "+T)}function m(a,b,c){var d=null,e=null;if(P[a]){if(d=P[a][b],"function"!=typeof d)throw new TypeError(b+" on iFrame["+a+"] is not a function");e=d(c)}return e}function n(a){var b=a.id;h(b,"Removing iFrame: "+b),a.parentNode&&a.parentNode.removeChild(a),m(b,"closedCallback",b),h(b,"--"),delete P[b]}function o(b){null===M&&(M={x:window.pageXOffset!==a?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==a?window.pageYOffset:document.documentElement.scrollTop},h(b,"Get page position: "+M.x+","+M.y))}function p(a){null!==M&&(window.scrollTo(M.x,M.y),h(a,"Set page position: "+M.x+","+M.y),q())}function q(){M=null}function r(a){function b(){s(a),u("reset","reset",a.iframe,a.id)}h(a.id,"Size reset requested by "+("init"===a.type?"host page":"iFrame")),o(a.id),t(b,a,"reset")}function s(a){function b(b){a.iframe.style[b]=a[b]+"px",h(a.id,"IFrame ("+e+") "+b+" set to "+a[b]+"px")}function c(b){H||"0"!==a[b]||(H=!0,h(e,"Hidden iFrame detected, creating visibility listener"),y())}function d(a){b(a),c(a)}var e=a.iframe.id;P[e]&&(P[e].sizeHeight&&d("height"),P[e].sizeWidth&&d("width"))}function t(a,b,c){c!==b.type&&N?(h(b.id,"Requesting animation frame"),N(a)):a()}function u(a,b,c,d,e){function f(){var e=P[d]&&P[d].targetOrigin;h(d,"["+a+"] Sending msg to iframe["+d+"] ("+b+") targetOrigin: "+e),c.contentWindow.postMessage(K+b,e)}function g(){j(d,"["+a+"] IFrame("+d+") not found")}function i(){c&&"contentWindow"in c&&null!==c.contentWindow?f():g()}function k(){function a(){!P[d]||P[d].loaded||l||(l=!0,j(d,"IFrame has not responded within "+P[d].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ingored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))}e&&P[d]&&P[d].warningTimeout&&(P[d].msgTimeout=setTimeout(a,P[d].warningTimeout))}var l=!1;d=d||c.id,P[d]&&(i(),k())}function v(a){return a+":"+P[a].bodyMarginV1+":"+P[a].sizeWidth+":"+P[a].log+":"+P[a].interval+":"+P[a].enablePublicMethods+":"+P[a].autoResize+":"+P[a].bodyMargin+":"+P[a].heightCalculationMethod+":"+P[a].bodyBackground+":"+P[a].bodyPadding+":"+P[a].tolerance+":"+P[a].inPageLinks+":"+P[a].resizeFrom+":"+P[a].widthCalculationMethod}function w(c,d){function e(){function a(a){1/0!==P[x][a]&&0!==P[x][a]&&(c.style[a]=P[x][a]+"px",h(x,"Set "+a+" = "+P[x][a]+"px"))}function b(a){if(P[x]["min"+a]>P[x]["max"+a])throw new Error("Value for min"+a+" can not be greater than max"+a)}b("Height"),b("Width"),a("maxHeight"),a("minHeight"),a("maxWidth"),a("minWidth")}function f(){var a=d&&d.id||S.id+F++;return null!==document.getElementById(a)&&(a+=F++),a}function g(a){return R=a,""===a&&(c.id=a=f(),G=(d||{}).log,R=a,h(a,"Added missing iframe ID: "+a+" ("+c.src+")")),a}function i(){switch(h(x,"IFrame scrolling "+(P[x]&&P[x].scrolling?"enabled":"disabled")+" for "+x),c.style.overflow=!1===(P[x]&&P[x].scrolling)?"hidden":"auto",P[x]&&P[x].scrolling){case!0:c.scrolling="yes";break;case!1:c.scrolling="no";break;default:c.scrolling=P[x]?P[x].scrolling:"no"}}function k(){("number"==typeof(P[x]&&P[x].bodyMargin)||"0"===(P[x]&&P[x].bodyMargin))&&(P[x].bodyMarginV1=P[x].bodyMargin,P[x].bodyMargin=""+P[x].bodyMargin+"px")}function l(){var a=P[x]&&P[x].firstRun,b=P[x]&&P[x].heightCalculationMethod in O;!a&&b&&r({iframe:c,height:0,width:0,type:"init"})}function m(){Function.prototype.bind&&P[x]&&(P[x].iframe.iFrameResizer={close:n.bind(null,P[x].iframe),resize:u.bind(null,"Window resize","resize",P[x].iframe),moveToAnchor:function(a){u("Move to anchor","moveToAnchor:"+a,P[x].iframe,x)},sendMessage:function(a){a=JSON.stringify(a),u("Send Message","message:"+a,P[x].iframe,x)}})}function o(d){function e(){u("iFrame.onload",d,c,a,!0),l()}b(c,"load",e),u("init",d,c,a,!0)}function p(a){if("object"!=typeof a)throw new TypeError("Options is not an object")}function q(a){for(var b in S)S.hasOwnProperty(b)&&(P[x][b]=a.hasOwnProperty(b)?a[b]:S[b])}function s(a){return""===a||"file://"===a?"*":a}function t(a){a=a||{},P[x]={firstRun:!0,iframe:c,remoteHost:c.src.split("/").slice(0,3).join("/")},p(a),q(a),P[x]&&(P[x].targetOrigin=!0===P[x].checkOrigin?s(P[x].remoteHost):"*")}function w(){return x in P&&"iFrameResizer"in c}var x=g(c.id);w()?j(x,"Ignored iFrame, already setup."):(t(d),i(),e(),k(),o(v(x)),m())}function x(a,b){null===Q&&(Q=setTimeout(function(){Q=null,a()},b))}function y(){function a(){function a(a){function b(b){return"0px"===(P[a]&&P[a].iframe.style[b])}function c(a){return null!==a.offsetParent}P[a]&&c(P[a].iframe)&&(b("height")||b("width"))&&u("Visibility change","resize",P[a].iframe,a)}for(var b in P)a(b)}function b(b){h("window","Mutation observed: "+b[0].target+" "+b[0].type),x(a,16)}function c(){var a=document.querySelector("body"),c={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0},e=new d(b);e.observe(a,c)}var d=window.MutationObserver||window.WebKitMutationObserver;d&&c()}function z(a){function b(){B("Window "+a,"resize")}h("window","Trigger event: "+a),x(b,16)}function A(){function a(){B("Tab Visable","resize")}"hidden"!==document.visibilityState&&(h("document","Trigger event: Visiblity change"),x(a,16))}function B(a,b){function c(a){return P[a]&&"parent"===P[a].resizeFrom&&P[a].autoResize&&!P[a].firstRun}for(var d in P)c(d)&&u(a,b,document.getElementById(d),d)}function C(){b(window,"message",l),b(window,"resize",function(){z("resize")}),b(document,"visibilitychange",A),b(document,"-webkit-visibilitychange",A),b(window,"focusin",function(){z("focus")}),b(window,"focus",function(){z("focus")})}function D(){function b(a,b){function c(){if(!b.tagName)throw new TypeError("Object is not a valid DOM element");if("IFRAME"!==b.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+b.tagName+">")}b&&(c(),w(b,a),e.push(b))}function c(a){a&&a.enablePublicMethods&&j("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}var e;return d(),C(),function(d,f){switch(e=[],c(d),typeof f){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(f||"iframe"),b.bind(a,d));break;case"object":b(d,f);break;default:throw new TypeError("Unexpected data type ("+typeof f+")")}return e}}function E(a){a.fn?a.fn.iFrameResize||(a.fn.iFrameResize=function(a){function b(b,c){w(c,a)}return this.filter("iframe").each(b).end()}):i("","Unable to bind to jQuery, it is not fully loaded.")}if("undefined"!=typeof window){var F=0,G=!1,H=!1,I="message",J=I.length,K="[iFrameSizer]",L=K.length,M=null,N=window.requestAnimationFrame,O={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},P={},Q=null,R="Host Page",S={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",closedCallback:function(){},initCallback:function(){},messageCallback:function(){j("MessageCallback function not defined")},resizedCallback:function(){},scrollCallback:function(){return!0}};window.jQuery&&E(window.jQuery),"function"==typeof define&&define.amd?define([],D):"object"==typeof module&&"object"==typeof module.exports?module.exports=D():window.iFrameResize=window.iFrameResize||D()}}();


/*! Finally Comments System
 * <div class="finally-comments" data-id=""></div>
*/

let finallyCommentsSystem = {
  init: () => {
    let container = document.querySelector('.finally-comments')
    console.log(container.dataset.id)
    let url = container.dataset.id
    let urlParts = finallyCommentsSystem.getPartsFromLink(url)
    let finallyUrl = `https://finallycomments.com/thread/${urlParts.category}/${urlParts.author}/${urlParts.permlink}`
    let iframe = document.createElement('iframe', { scrolling: 'no' });
    iframe.src = finallyUrl;
    iframe.width = '100%';
    iframe.style = 'border: none;'
    container.appendChild(iframe)
  },
  getPartsFromLink: (url) => {
    let lastChar = url.substr(url.length -1);
    if (lastChar === '/')
    url = url.slice(0, -1);

    let parts = url.split('/')

    return {
      permlink: parts.pop(),
      author: parts.pop(),
      category: parts.pop()
    }
  },
}

finallyCommentsSystem.init();

iFrameResize( {}, '.finally-comments iframe' );



window.addEventListener('message', receiveMessage, false);

function receiveMessage(event)
{
  if (event.data.message == 'sign-in'){
    if (event.origin !== 'https://finallycomments.com' )
      return;
    $('.finally-comments iframe').css('height', 00)
  }

  if (event.data.message == 'new-comment'){
    if (event.origin !== 'https://finallycomments.com' )
      return;


    let frameOffset = getDistanceFromTop(document.querySelector('.finally-comments'))
    let frameHeight = document.querySelector('.finally-comments').getBoundingClientRect().height;

    if ( event.data.depth === undefined || event.data.depth === 0 ){
      document.documentElement.scrollTop = ( frameOffset +  frameHeight )
    } else {
      document.documentElement.scrollTop = ( event.data.offset +  frameOffset - 300)
      console.log('Data offset: ', event.data.offset )
      console.log('Frame offset: ', frameOffset )
    }

  }
}

function getDistanceFromTop(element) {
    var yPos = 0;

    while(element) {
        yPos += (element.offsetTop);
        element = element.offsetParent;
    }

    return yPos;
}
