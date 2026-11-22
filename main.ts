// make.fun tiny-stack-vm-01 (ISA.md, vm.mjs): runs every <input>/<id>/program.bin and writes the bytes
// it printed to <output>/<id>/stdout.bin and its exit code - 0, an EXIT byte or a trap 2-11 - to
// exit.txt. T gives each opcode byte imm*8+pops*2+grows ('0' is 0); a space, or past T, is trap 5.
import{mkdirSync as K,readFileSync as R,readdirSync as L,writeFileSync as W}from"fs";
const T="09Q23456        444444424442444 444             @BB@0           24              2212";
export const V=(p,q)=>{
 const n=p.length,D=new Int32Array(256),C=new Int32Array(64),M=new Int32Array(256),o=Buffer.alloc(65536),E=x=>[o.subarray(0,ol),x];
 let sp=0,cp=0,ol=0,ip=0,pc=0,st=0,a,b;
 for(;;){
  if(st===1e6)return E(10);
  if(pc<0||pc>=n)return E(9);
  const c=p[pc],t=T.charCodeAt(c)-48;
  if(!(t>=0))return E(5);
  const m=t>>3,k=pc+1+m;
  if(pc+m>=n)return E(9);
  st++;
  if(sp<(t>>1&3))return E(2);
  if(t&1&&sp>255)return E(3);
  pc=k;
  switch(c){
   case 0x00:return E(0);
   case 0x01:D[sp++]=p[k-1]<<24>>24;break;
   case 0x02:D[sp++]=p[k-4]|p[k-3]<<8|p[k-2]<<16|p[k-1]<<24;break;
   case 0x03:sp--;break;
   case 0x04:D[sp]=D[sp-1];sp++;break;
   case 0x05:a=D[sp-1];D[sp-1]=D[sp-2];D[sp-2]=a;break;
   case 0x06:D[sp]=D[sp-2];sp++;break;
   case 0x07:a=D[sp-3];D[sp-3]=D[sp-2];D[sp-2]=D[sp-1];D[sp-1]=a;break;
   case 0x17:D[sp-1]=-D[sp-1];break;
   case 0x1b:D[sp-1]=~D[sp-1];break;
   case 0x30:case 0x31:case 0x32:a=(p[k-2]|p[k-1]<<8)<<16>>16;if(c<0x31||(D[--sp]===0)===(c<0x32))pc=k+a;break;
   case 0x33:if(cp>63)return E(7);C[cp++]=k;pc=p[k-2]|p[k-1]<<8;break;
   case 0x34:if(!cp)return E(8);pc=C[--cp];break;
   case 0x40:a=D[sp-1];if(a<0||a>255)return E(6);D[sp-1]=M[a];break;
   case 0x41:a=D[sp-1];if(a<0||a>255)return E(6);M[a]=D[sp-2];sp-=2;break;
   case 0x50:b=""+D[sp-1];if(ol+b.length>65536)return E(11);sp--;ol+=o.write(b,ol);break;
   case 0x51:if(ol>65535)return E(11);o[ol++]=D[--sp];break;
   case 0x52:D[sp++]=ip<q.length?q[ip++]:-1;break;
   case 0x53:return E(D[--sp]&255);
   default:
    b=D[--sp];a=D[sp-1];
    if(c>0x12&&c<0x17&&!b)return E(4);
    D[sp-1]=c<0x11?a+b:c<0x12?a-b:c<0x13?Math.imul(a,b):c<0x14?a/b:c<0x15?a%b:c<0x16?(a>>>0)/(b>>>0):c<0x17?(a>>>0)%(b>>>0):c<0x19?a&b:c<0x1a?a|b:c<0x1b?a^b:c<0x1d?a<<b:c<0x1e?a>>b:c<0x1f?a>>>b:c<0x21?a==b:c<0x22?a<b:(a>>>0)<(b>>>0);
  }
 }
};
const I=process.env.MAKEFUN_INPUT_DIR??"/input",O=process.env.MAKEFUN_OUTPUT_DIR??"/output";
for(const d of L(I)){
 let s="",x=0;
 try{[s,x]=V(R(I+"/"+d+"/program.bin"),R(I+"/"+d+"/input.bin"))}catch{}
 K(O+"/"+d,{recursive:!0});
 W(O+"/"+d+"/stdout.bin",s);
 W(O+"/"+d+"/exit.txt",x+"")
}
