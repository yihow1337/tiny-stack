D=new Int32Array(257),C=[],g=_=>p.readIntLE(m,k-m),
{mkdirSync:K,readFileSync:R,readdirSync:L,writeFileSync:W}=require("fs"),
{MAKEFUN_INPUT_DIR:I="/input",MAKEFUN_OUTPUT_DIR:O="/output"}=process.env;
L(I).map(d=>{S="";d="/"+d;try{
for(p=R(I+d+"/program.bin"),q=R(I+d+"/input.bin"),M=[s=e=j=h=0],n=1e6;!(x=(
t="0Dt15263        222::::12221222 222             PQQP0           12              1141".charCodeAt(c=p[h]),
m=++h,k=h+=(t>>4)-3,n--?t>47?p[k-1]+1?t%4>s?2:t&4&&s>>8?3:
t^58|D[s-1]?c>82?D[--s]|256:c?
c<51|c>81?(c<8|c>81?t&4?D[s++]=c<3?g():c&64?q[j++]??-1:D[s-c/2]:t&2?
(D[s]=D[a=s-t%4],D.copyWithin(a,a+1)):s--:
c<35?(b=D[--s],a=D[m=(s+=t&1)-1],k=a>>>0,t=b>>>0,D[m]=
[a+b,a-b,Math.imul(a,b),a/b,a%b,k/t,k%t,-a,a&b,a|b,a^b,~a,a<<b,a>>b,a>>>b,,a==b,a<b,k<t][c-16]):
t%4&&!D[--s]^c&1?0:h+=g(),0):
c<53?(c&1?e>63?7:(C[e++]=k,h=g()&65535,0):e?(h=C[--e],0):8):
c<66?(a=D[s-1],a>>8?6:(c&1?M[a]=D[s-=2]:D[s-1]=M[a],0)):
(a=D[--s],b=c&1?String.fromCharCode(a):""+a,(S+b)[65536]?11:(S+=b,0)):256:4:9:5:10)););
}catch{}
K(d=O+d,{recursive:!0});W(d+"/stdout.bin",S,"ascii");W(d+"/exit.txt",(x&255)+"")})