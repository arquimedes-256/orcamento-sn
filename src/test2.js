var gcd = require('mathjs').gcd;

var a,b,c,d;

a = 1000;
b = 3;
c = 972;
d = 235;

var A,B,C,D;

A = a - c;
B = a + c;
C = d - b;
D = d + b;

k = gcd(A,C);
h = gcd(B,D);

l = (a-c)/k
m = (d-b)/k


X = (Math.pow(k/2,2) + Math.pow(h/2,2)) * (Math.pow(l,2)+Math.pow(m,2))

console.log(X);


function S(x)
{
	for(var k = 1;k <= Math.log2(x) ; k++) 
	{
		
	}	
}