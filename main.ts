({mkdirSync:K,readFileSync:R,readdirSync:L,writeFileSync:W}=require("fs"),
{MAKEFUN_INPUT_DIR:I="/input",MAKEFUN_OUTPUT_DIR:O="/output"}=process.env,
D=new Int32Array(257),C=[],g=_=>p.readIntLE(m,k-m));
L(I).map(d=>{S="";d="/"+d;try{
for(p=R(I+d+"/program.bin"),q=R(I+d+"/input.bin"),M=[],sp=cp=ip=pc=0,st=1e6;!(x=(
t="0Dt15263        222::::12221222 222             PQQP0           12              1141".charCodeAt(c=p[pc]),
m=++pc,k=pc+=(t>>4)-3,st--?t>47?p[k-1]+1?t%4>sp?2:t&4&&sp>>8?3:
t&8&&!D[sp-1]?4:c>82?D[--sp]|256:c?
c<51?(c<8?t&4?D[sp++]=c<3?g():D[sp-c/2]:t&2?
(D[sp]=D[a=sp-t%4],D.copyWithin(a,a+1)):sp--:
c<35?(b=D[--sp],a=D[m=(sp+=t&1)-1],k=a>>>0,t=b>>>0,D[m]=
[a+b,a-b,Math.imul(a,b),a/b,a%b,k/t,k%t,-a,a&b,a|b,a^b,~a,a<<b,a>>b,a>>>b,,a==b,a<b,k<t][c-16]):
t%4&&!D[--sp]^c&1?0:pc+=g(),0):
c<53?(c&1?cp>63?7:(C[cp++]=k,pc=g()&65535,0):cp?(pc=C[--cp],0):8):
c<66?(a=D[sp-1],a>>8?6:(c&1?M[a]=D[sp-=2]:D[sp-1]=M[a],0)):
c>81?(D[sp++]=q[ip++]??-1,0):
(a=D[--sp],b=c&1?String.fromCharCode(a):""+a,(S+b)[65536]?11:(S+=b,0)):256:9:5:10)););
x&=255}catch{x=0}
K(d=O+d,{recursive:!0});W(d+"/stdout.bin",S,"latin1");W(d+"/exit.txt",x+"")})