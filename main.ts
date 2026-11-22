const{mkdirSync:K,readFileSync:R,readdirSync:L,writeFileSync:W}=require("fs");
const T="09Q23456        444444424442444 444             @BB@0           24              2212",o=Buffer.alloc(65536);let ol;
const V=(p,q)=>{
const n=p.length,D=new Int32Array(256),C=[],M=[];
let sp=0,cp=0,ip=0,pc=0,st=ol=0,a,b,A,B;
for(;;){
if(st===1e6)return 10;
if(pc>>>0>=n)return 9;
const c=p[pc],t=T.charCodeAt(c)-48;if(!(t>=0))return 5;
const k=pc+1+(t>>3);if(k>n)return 9;
st++;if(sp<(t>>1&3))return 2;if(t&1&&sp>255)return 3;pc=k;
switch(c){
case 0:return 0;
case 1:case 2:D[sp++]=c<2?p[k-1]<<24>>24:p.readInt32LE(k-4);break;
case 3:sp--;break;
case 4:case 6:D[sp]=D[sp+1-c/2];sp++;break;
case 5:case 7:a=(c-1)/2;b=D[sp-a];while(--a)D[sp-a-1]=D[sp-a];D[sp-1]=b;break;
case 23:case 27:D[sp-1]=~D[sp-1]+(c<27);break;
case 48:case 49:case 50:if(c<49||!D[--sp]===(c<50))pc=k+p.readInt16LE(k-2);break;
case 51:if(cp>63)return 7;C[cp++]=k;pc=p[k-2]|p[k-1]<<8;break;
case 52:if(!cp)return 8;pc=C[--cp];break;
case 64:case 65:a=D[sp-1];if(a&-256)return 6;c<65?D[sp-1]=M[a]:(M[a]=D[sp-2],sp-=2);break;
case 80:b=""+D[--sp];if(ol+b.length>65536)return 11;ol+=o.write(b,ol);break;
case 81:if(ol>65535)return 11;o[ol++]=D[--sp];break;
case 82:D[sp++]=q[ip++]??-1;break;
case 83:return D[--sp]&255;
default:b=D[--sp];a=D[sp-1];A=a>>>0;B=b>>>0;if(c>18&&c<23&&!b)return 4;D[sp-1]=c<17?a+b:c<18?a-b:c<19?Math.imul(a,b):c<20?a/b:c<21?a%b:c<22?A/B:c<23?A%B:c<25?a&b:c<26?a|b:c<27?a^b:c<29?a<<b:c<30?a>>b:c<31?a>>>b:c<33?a==b:c<34?a<b:A<B;
}
}
};
const{MAKEFUN_INPUT_DIR:I="/input",MAKEFUN_OUTPUT_DIR:O="/output"}=process.env;
for(const d of L(I)){
let P=O+"/"+d,x=0;
try{x=V(R(I+"/"+d+"/program.bin"),R(I+"/"+d+"/input.bin"))}catch{ol=0}
K(P,{recursive:!0});W(P+"/stdout.bin",o.slice(0,ol));W(P+"/exit.txt",x+"")
}