let n1=0,
n2=1;
 let   n3;
 let no=13;
function fib( n1,n2){ 

for(i=1;i<=no;i++)
{
   n3=n1+n2;
   console.log(n3);
   n1=n2;
   n2=n3;
}
}
fib(0,1);
