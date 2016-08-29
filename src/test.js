var Table = require('cli-table2');
var _ = require('underscore');
var colors = require('colors');
const TABLE_CONFIG_VAR_VAL_BIN = {head:["-","Value","Binary Form"]};
var INIT_TABLE = new Table(TABLE_CONFIG_VAR_VAL_BIN);


var pow = Math.pow;
var p = 13;
var q = 11;
var C = p * q;
var logC = Math.ceil(Math.log2(C))+1
var n = Math.ceil(Math.log2(C)/2)+1

//inicia tabela de constantes
INIT_TABLE.push(
	['C'	,C 		,C.toString(2)],
	['p'	,p 		,p.toString(2)],
	['q'	,q		,q.toString(2)],
	['logC'	,logC 	,logC.toString(2)]
)
console.log(INIT_TABLE.toString());

for(var k=0;k<n;k++)
{
	var tableK = new Table(TABLE_CONFIG_VAR_VAL_BIN);

	tableK.push(
		["Ma",				Ma=pow(2,n+k)-1 		,Ma.toString(2)],
		["Mb",				Mb=(pow(2,n-k)/2)+1 	,Mb.toString(2)],
		["Ma*(Mb-1)",		Mask=Ma*(Mb-1)			,Mask.toString(2)],
		["Mask for C="+C,	MaskForC=Mask-C			,MaskForC.toString(2)]
	);
	//http://www.wolframalpha.com/input/?i=1101_2+*+(1011_2)+-10111_2
	
	console.log('*) k = ',k,':')
	console.log(tableK.toString());
	
	if(iterate(Ma,Mb,0) || iterate(Mb,Ma,0))
		return;
	return;
}
function iterate(Ma,Mb,lastMinBitFromElement)
{
	var tableJ = new Table(
		header = {head:[
			"j","2^(j-1)",
			"Ma-(2^(j-1))",
			"Mb+(2^(j-1))",
			"Maj_2","Mbj_2",
			"MaskOperation",
			"MaskOperation_2",
			"MskOp-Mask",
			'MskOp-Mask_2',
			"Residue",
			"Residue_2",
			'Bits da Diferença']}
	);
	var data = {};
	for(var j = 1;j<=n;j++)
	{
		data[j] = [
			j,powerJ=pow(2,j-1),
			Maj=Ma-pow(2,j-1),
			Mbj=Mb+pow(2,j-1),
			Maj.toString(2),
			Mbj.toString(2),
			MaskOperation=(Maj*(Mbj))+MaskForC,
			MaskOperation.toString(2),
			//http://www.wolframalpha.com/input/?i=1111000_2+-+101000_2
			Diff=Mask-MaskOperation,
			Diff.toString(2),
			Residue=Math.abs(Diff)/Math.pow(2,Math.ceil(Math.log2(Math.abs(Diff))/2 ))+1,
			Residue.toString(2),
			_.size(Diff.toString(2).match(/1/g))];

		tableJ.push(data[j])
	}
	console.log('*) Ma,Mb = ', Ma,Mb,':')
	console.log(tableJ.toString());
	var minSetedBitsElement = _.min(data,function(d){return _.last(d)});
	var MaMin 				= minSetedBitsElement[2];
	var MbMin 				= minSetedBitsElement[3];
	var minBitFromElement 	= _.last(minSetedBitsElement)


	// if(minBitFromElement == 0) {
	// 	var VictoryTable = new Table({head:header});
	// 	VictoryTable.push(minSetedBitsElement);
		
	// 	console.log("*) Encontrou:")
	// 	console.log(VictoryTable.toString())
	// 	return true;
	// }
	// else if(lastMinBitFromElement > minSetedBitsElement){
	// 	console.log("Não encontrou solução suficiente")
	// 	return;
	// }
	// else
	// 	iterate(MaMin,MbMin,minSetedBitsElement)
}