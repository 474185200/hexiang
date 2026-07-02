import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{r as t,t as n}from"./index-Bvh62PjO.js";import{_ as r,a as i,b as a,i as o,l as s,p as c,r as l,t as u,v as d}from"./three.module-BYWZ944y.js";var f=e(t(),1),p=n(),m=`
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`,h=`
  precision highp float;

  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;
  uniform float uIntensity;
  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 5; i++) {
      value += amplitude * noise(p);
      p *= 2.03;
      amplitude *= 0.48;
    }
    return value;
  }

  void main() {
    vec2 uv = vUv;
    vec2 mouse = uMouse * 0.5 + 0.5;
    float t = uTime * 0.16;

    vec2 flow = uv;
    flow.x += sin((uv.y + t) * 6.0) * 0.045;
    flow.y += cos((uv.x - t) * 5.2) * 0.045;
    flow += (mouse - 0.5) * 0.09;

    float n = fbm(flow * 3.1 + vec2(t, -t * 0.7));
    float n2 = fbm(flow * 6.2 - vec2(t * 0.5, t));
    float ribbon = smoothstep(0.36, 0.86, n + n2 * 0.42);
    float glow = 1.0 - smoothstep(0.0, 0.56, distance(uv, mouse));

    vec3 color = mix(uColorA, uColorB, ribbon);
    color = mix(color, uColorC, smoothstep(0.42, 0.92, n2));
    color += glow * uColorB * 0.42 * uIntensity;

    float alpha = (ribbon * 0.34 + glow * 0.24) * uIntensity;
    gl_FragColor = vec4(color, alpha);
  }
`;function g(e){return new i(e)}function _({colors:e=[`#5227FF`,`#FF9FFC`,`#B497CF`],mouseForce:t=20,cursorSize:n=100,resolution:i=.5,style:_={},className:v=``,autoDemo:y=!0,autoSpeed:b=.5,autoIntensity:x=2.2}){let S=(0,f.useRef)(null),C=(0,f.useRef)(new a(0,0)),w=(0,f.useRef)(new a(0,0)),T=(0,f.useRef)(0);return(0,f.useEffect)(()=>{let n=S.current;if(!n)return;let a=new r,f=new l,p=new u({alpha:!0,antialias:!0}),_=new o,v=new c(2,2),E=new d({vertexShader:m,fragmentShader:h,transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uMouse:{value:C.current},uColorA:{value:g(e[0]||`#5227FF`)},uColorB:{value:g(e[1]||`#FF9FFC`)},uColorC:{value:g(e[2]||`#B497CF`)},uIntensity:{value:x}}}),D=new s(v,E),O;a.add(D),p.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),p.setClearColor(0,0),p.domElement.className=`liquid-ether-canvas`,n.appendChild(p.domElement);let k=()=>{let e=n.getBoundingClientRect();p.setSize(Math.max(1,Math.floor(e.width*i))/i,Math.max(1,Math.floor(e.height*i))/i,!1)},A=(e,t)=>{let r=n.getBoundingClientRect();!r.width||!r.height||(C.current.x=(e-r.left)/r.width*2-1,C.current.y=-((t-r.top)/r.height*2-1),T.current=performance.now())},j=e=>A(e.clientX,e.clientY),M=e=>{e.touches[0]&&A(e.touches[0].clientX,e.touches[0].clientY)},N=()=>{let e=_.getElapsedTime();E.uniforms.uTime.value=e,y&&performance.now()-T.current>1800&&(w.current.x=Math.sin(e*b)*.72,w.current.y=Math.cos(e*b*1.37)*.62,C.current.lerp(w.current,.025+t*15e-5)),p.render(a,f),O=requestAnimationFrame(N)};return k(),N(),window.addEventListener(`resize`,k),window.addEventListener(`mousemove`,j,{passive:!0}),window.addEventListener(`touchmove`,M,{passive:!0}),()=>{cancelAnimationFrame(O),window.removeEventListener(`resize`,k),window.removeEventListener(`mousemove`,j),window.removeEventListener(`touchmove`,M),v.dispose(),E.dispose(),p.dispose(),p.domElement.remove()}},[y,x,b,e,t,i]),(0,p.jsx)(`div`,{ref:S,className:`liquid-ether-container ${v}`,style:_})}export{_ as default};