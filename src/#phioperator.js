var jStat = require('jStat').jStat
var _ = require('underscore');
var L = prime(10,true)//["a","b","c",'d','e','f','g','h','i','j','k','l','m','n','o']//prime(100 ,true)
var X = 1;
var M = _.clone(L);

var $M = function(l){
    if (_.contains(L,l))
        return [l]
    if (M[l])
        return M[l];

}
// X = phi(G<*,e>){ alpha * Betaphi *- M( X *- alpha )}

var G_add = {
    '-':function(a,b){return a-b },
    '*':function(a,b){ return a+b },
    'e':function(a,b){return 1},
    'isComutative':true
}

phi(G_add,L,X);

function phi(G,L,X) {
    
    $ = {};
    var L_sample = _.sample(L,2);
    $["Lk"]     = L_sample[0];
    $["Lk+1"]   = L_sample[1];

    var alpha = G["(+)"]($["Lk"] , $["Lk+1"])

    var Xi = G["(-)"](X,alpha); 

    if(Xi == G["e"])
    {
        return [ $["Lk"], $["Lk+1"] ]
    }

    if( $M(Xi) ) {
        return _.union($M(Xi),[ $["Lk"], $["Lk+1"] ])
    }
    M[alpha] = [$["Lk"], $["Lk+1"]]

}
















function prime(n,flag) {
    ( typeof flag === "undefined" || flag === false ) ? flag = false : flag = true;

    function isPrime(num) {
        if ( num === 0 || num === 1 ) {
            return false;
        }
        for ( var i = 2; i < num; i++ ) {
            if ( num % i === 0 ) {
                return false;
            }
        }
        return true;
    }

    if ( flag ) {
        var arr = [2];
        for ( var i = 3; i <= n; i+=2 ) {
            if ( isPrime(i) ) {
                arr.push(i);
            }
        }
        return arr;
    } else {
        return isPrime(n);
    }
}