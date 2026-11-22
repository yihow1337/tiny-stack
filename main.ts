let{mkdirSync:K,readFileSync:R,readdirSync:L,writeFileSync:W}=require("fs"),S,x,
V=(p,q,D=new Int32Array(256),C=[],M=[],g=_=>p.readIntLE(m,k-m),
sp=0,cp=0,ip=0,pc=0,st=1e6,a,b,c,t,k,m)=>{for(;;){
t="0Dt15263        222::::12221222 222             PQQP0           12              1141".charCodeAt(c=p[pc]),
m=++pc,k=pc+=(t>>4)-3;if(x=!st--?10:t>47?p[k-1]+1?t%4>sp?2:t&4&&sp>>8?3:
t&8&&!D[sp-1]?4:c^51?c^52?c>82?D[--sp]|256:!c<<8:!cp&&8:cp>63&&7:9:5)return x&255;
if(c<53)c<8?t&4?D[sp++]=t>63?g():D[sp-c/2]:t&2?
(b=D[a=sp-t%4],D.copyWithin(a,a+1),D[sp-1]=b):sp--:
c<35?(b=D[--sp],a=D[m=(sp+=t&1)-1],k=a>>>0,t=b>>>0,D[m]=
[a+b,a-b,Math.imul(a,b),a/b,a%b,k/t,k%t,-a,a&b,a|b,a^b,~a,a<<b,a>>b,a>>>b,,a==b,a<b,k<t][c-16]):
c<51?t%4&&!D[--sp]==c>49?0:pc+=g():
c<52?(C[cp++]=k,pc=g()&65535):pc=C[--cp];else if(c<66){a=D[sp-1];if(a>>8)return 6;
c&1?M[a]=D[sp-=2]:D[sp-1]=M[a]}else if(c>81)D[sp++]=q[ip++]??-1;
else{a=D[--sp],b=c<81?""+a:String.fromCharCode(a);
if((S+b).length>65536)return 11;S+=b}}},{MAKEFUN_INPUT_DIR:I="/input",
MAKEFUN_OUTPUT_DIR:O="/output"}=process.env;
L(I).map(d=>{S="";d="/"+d;try{x=V(R(I+d+"/program.bin"),R(I+d+"/input.bin"))}catch{x=0}
K(O+d,{recursive:!0});W(O+d+"/stdout.bin",S,"latin1");W(O+d+"/exit.txt",x+"")})