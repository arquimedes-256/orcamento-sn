var jStat = require('jStat').jStat
var _ = require('underscore');
var L = prime(10,true)//["a","b","c",'d','e','f','g','h','i','j','k','l','m','n','o']//prime(100 ,true)
var X = 1;
var Combinatorics = require('js-combinatorics');
var M = [];







// X = phi(G<*,e>){ alpha * Betaphi *- M( X *- alpha )}

var G_add = {
    '*-':function(a,b){return a-b },
    '*':function(a,b){ return a+b },
    'e':function(a,b){return 1},
    'isComutative':true
}

phi(G,L,X);

function phi(G,L,X) {
    var K = {
        alpha : alpha(G,L),
        beta: 0,
        a1 : G('a1'),
        a2 : G('a2')
    } 
    var MxAlpha = M(X - alpha)
    var expr =  G['*-'](
                    G['*']( G['*'](G.a1,G.a2) ,K.beta) 
                , MxAlpha)

}
function alpha(G,L) {
    var alpha = G.isComutative ? _.sample(L,2).sort() : _.sample(L,2);
    if(!M[])
    return 
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