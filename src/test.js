var p = 15;
var q = 17;

var C = p * q;

var logC = Math.ceil(Math.log2(C))
var n = Math.ceil(Math.log2(C)/2)
console.log('p',p.toString(2))
console.log('q',q.toString(2))
console.log('C',(C).toString(2))


for(var k=0;k<n;k++)
{
	var Ma = Math.pow(2,n+k)-1
	var Mb = Math.pow(2,n-k);
	var Mn = Ma * Mb;
	var Mask = Mn - C;
	console.log('Ma*Mb=',Mn.toString(2))
	console.log('Mask =',Mask,'=',Mask.toString(2))
	console.log('Ma=',Ma,'=',Ma.toString(2))
	console.log('Mb=',Mb,'=',Mb.toString(2))
	//console.log('p*q+Mask=',(p*q+Mask),(p*q+Mask).toString(2))
	//console.log('p*q+Mask=',(p*q+Mask),(p*q+Mask).toString(2))
	console.log('---')
	for(var j=0;j<=n;j++)
	{
		console.log('j:')
		var Maj = Ma - Math.pow(2,j);
		var Mbj = Mb + Math.pow(2,j);
		console.log('-Ma(j)','=',Maj,Maj.toString(2))
		console.log('-Mb(j)','=',Mbj,Mbj.toString(2))
		console.log('-M(j)*Mb(j)',(Mbj*Mbj),'=',(Mbj*Mbj).toString(2))
		console.log('--')
	}
	return;
}