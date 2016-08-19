var jStat = require('jStat').jStat
var _ = require('underscore');
var L = prime(100000,true)//[1,2,3,4,5,7]//["a","b","c",'d','e','f','g','h','i','j','k','l','m','n','o']//prime(100 ,true)

var M = {};

L = _.filter(L,function(l){
    return l <= X; 
});

var X = _.sample(L)*_.sample(L)//100;

//console.log("Começando sobre:...",L)
_.each(L,function(l){
    M[l] = [l];
})

// X = phi(G<*,e>){ alpha * Betaphi *- M( X *- alpha )}

var G_add = {
    '-':function(A){return _.max(A)-_.min(A)},
    '*':function(A){return A[0]+A[1]},
    'e':function(A){return 0}
}

var G_mul = {
    '-':function(A){return A[0] / A[1]},
    '*':function(A){return A[0]*A[1]},
    'e':function(A){return 1}
}

G = G_mul
while(true) { //não pode ser recursiva pois pode estourar o tamanho da pilha
    
    var Lk =  _.sample(L,2);
    var La  = Lk[0];
    var Lb  = Lk[1];

    var e = G.e();
    var sum = G['*'];
    var inv = G['-'];

    var Le = inv([X,sum([La,Lb])]);
    
    madd([La,Lb]);

    
    if(M[Le])
        madd(U([La,Lb],M[Le]));

    //console.log(':',[La,Lb],Le)

    //Garantir que sejam distintos
    // Le \nin {La,Lb} & \exists M(Le) & {La,Lb} \notsubsetof M(Le)
    // => M
    //console.log(M)
    if(M[X])
    {
        console.log("|M|=",M.length,"X=",M[X]);
        break;
    }
    

}

function comute(A,f){
    return _.reduce(A,function(a,b){
        return f([a,b]);
    })
}
function madd(Set){
    M[comute(Set,sum)] = Set;
}
function U(A,B){
    return A.concat(B)
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