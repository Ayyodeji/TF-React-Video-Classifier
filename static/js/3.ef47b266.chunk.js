(window.webpackJsonptfclassifier=window.webpackJsonptfclassifier||[]).push([[3],{188:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a.n(n),o=a(8),r=a(48),c=a(49),s=a(88),u=a(50),d=a(89),l=a(4),h=a.n(l),v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).audioSource=h.a.createRef(),a.audioOutput=h.a.createRef(),a.videoSource=h.a.createRef(),a.videoElement=null,a.state={cameraLoading:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setupMediaWithOptions(this)}},{key:"setupMediaWithOptions",value:function(){var e=Object(o.a)(i.a.mark(function e(t){var a,n,r,c,s,u,d,l,h,v,p,m,f,g,E;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:E=function(){window.stream&&window.stream.getTracks().forEach(function(e){e.stop()}),navigator.mediaDevices.getUserMedia(l).then(m).then(h).catch(g)},g=function(e){"Permission denied"===e.message&&navigator.permissions.query({name:"camera"}).then(function(e){"granted"!==e.state&&(t.setState({cameraLoading:"Kindly grant access to the camera"}),navigator.mediaDevices.getUserMedia(l).then(m).then(h).catch(g))}),console.log("navigator.MediaDevices.getUserMedia error: ",e.message,e.name)},f=function(){return(f=Object(o.a)(i.a.mark(function e(n){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return window.stream=n,a.style.visibility="visible",a.srcObject=n,e.next=5,t.props.parentStateUpdate({mediaControlReady:!0});case 5:return e.abrupt("return",navigator.mediaDevices.enumerateDevices());case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)},m=function(e){return f.apply(this,arguments)},p=function(){var e=r.value;v(a,e)},v=function(e,t){"undefined"!==typeof e.sinkId?e.setSinkId(t).then(function(){console.log("Success, audio output device attached: ".concat(t))}).catch(function(e){var t=e;"SecurityError"===e.name&&(t="You need to use HTTPS for selecting audio output device: ".concat(e)),console.error(t),r.selectedIndex=0}):console.warn("Browser does not support output device selection.")},h=function(e){var t=s.map(function(e){return e.value});s.forEach(function(e){for(;e.firstChild;)e.removeChild(e.firstChild)});for(var a=0;a!==e.length;++a){var i=e[a],o=document.createElement("option");o.value=i.deviceId,"audioinput"===i.kind?(o.text=i.label||"microphone ".concat(n.length+1),n.appendChild(o)):"audiooutput"===i.kind?(o.text=i.label||"speaker ".concat(r.length+1),r.appendChild(o)):"videoinput"===i.kind?(o.text=i.label||"camera ".concat(c.length+1),c.appendChild(o)):console.log("Some other kind of source/device: ",i)}s.forEach(function(e,a){Array.prototype.slice.call(e.childNodes).some(function(e){return e.value===t[a]})&&(e.value=t[a])})},a=this.videoElement,n=this.audioSource.current,r=this.audioOutput.current,c=this.videoSource.current,s=[n,r,c],u=n.value,d=c.value,l={audio:{deviceId:u?{exact:u}:void 0},video:{deviceId:d?{exact:d}:void 0}},r.disabled=!("sinkId"in HTMLMediaElement.prototype),navigator.mediaDevices.enumerateDevices().then(h).catch(g),n.onchange=E,r.onchange=p,c.onchange=E,E();case 21:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return h.a.createElement("div",null,""===this.state.cameraLoading?h.a.createElement("div",{className:"videoContainer"},h.a.createElement("div",{className:"optionsContainer"},h.a.createElement("div",{className:"select",hidden:!0},h.a.createElement("label",{htmlFor:"audioSource"},"Audio input source: "),h.a.createElement("select",{id:"audioSource",ref:this.audioSource})),h.a.createElement("div",{className:"select",hidden:!0},h.a.createElement("label",{htmlFor:"audioOutput"},"Audio output destination: "),h.a.createElement("select",{id:"audioOutput",ref:this.audioOutput})),h.a.createElement("div",{className:"select"},h.a.createElement("label",{htmlFor:"videoSource"},"Video source: "),h.a.createElement("select",{id:"videoSource",ref:this.videoSource}))),h.a.createElement("div",null,h.a.createElement("video",{autoPlay:!0,playsInline:!0,muted:!0,width:this.props.parentState.videoSize.width,height:this.props.parentState.videoSize.height,ref:function(t){return e.videoElement=t},required:!0})),h.a.createElement("div",null,"(for best experience try in chrome browser)")):h.a.createElement("div",{className:"loadingMessage"},this.state.cameraLoading))}}]),t}(l.Component);t.default=v}}]);
//# sourceMappingURL=3.ef47b266.chunk.js.map