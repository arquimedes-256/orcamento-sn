const ceil = Math.ceil;
const sqrt = Math.sqrt;
const pow  = Math.pow;
const floor = Math.floor;
const _ = require('underscore')
const print = console.log
const ctx = require('axel');
const scale = .1
var N = 21
var S = BlockOperator(N).squares;
var R = BlockOperator(N).roots;


print('N=',N)
print('S=',S);
print('R=',R);

//(21)
//verifique se para completar o retângulo existe algum quadrdo divisível por epsilon
//caso exista remova a linha proporcional à epislon

var alpha 		= R[0]
var beta 		= R[0]+R[1]+R[2]
var epsilon 	= alpha*beta

console.log('alpha',alpha)
console.log('beta',beta)
console.log('epsilon',epsilon)
console.log('N-epsilon',N-epsilon)

//mova o ultimo quadrado(talvez ultimos) para cima do segundo
//calcule epsion, verifique se algum quadrado é divisível por epsilon

function R(n) 
{
	var v = floor(sqrt(n));
	var square = pow(v,2);

	return {isqrt:v,remainder:n-square,square:square}
}
function BlockOperator(n)
{
	var Y = []
	var Rk = R(n);
	Y.push(Rk)
	while(Rk.remainder > 0) 
	{
		Rk = R(Rk.remainder)
		Y.push(Rk)
	}	
	
	return {squares:_.pluck(Y,'square'),roots:_.pluck(Y,'isqrt')}
}

