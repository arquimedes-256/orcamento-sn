var gcd = require('mathjs').gcd;

var pow = Math.pow;
var round = Math.round;
var sqrt = Math.sqrt;
var ceil = Math.ceil;
var log = Math.log;
var abs = Math.abs;

var _ = require('underscore');
var sum = require('jstat').jStat.sum

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

S(pow(1000,2)+pow(3,3));


function S(x)
{
var M = {};
var k = 0;
	while(true){

		var exp = ceil(log(x) - _.random(1,log(x))+1)
		var r = ceil(_.random(pow(Math.E,exp-1),pow(Math.E,exp+1))) * _.sample([0,1])
		var v = pow(ceil(pow(Math.E,exp))+r,2);
	
		//console.log(_.size(M),isSquare(v),v)
		if(isSquare(x - v)) {
			if(!M[v]) {
				M[v] = true;
				console.log('achou',v,x-v)
				if(k < 3)
					k++;
				else
					return;
			}
		}
	}

}
function pascalLine(n) {
    var line = [1];
    for(var k=0;k<n;k++) {
      line.push(line[k] *(n-k)/(k+1));
    }
    return line;
}
function isSquare(x){
	var s = sqrt(abs(x));
	return s == round(s);
}