'use strict'
function getASTNode () {
    return 1
}

var { op, lhs, rhs } = getASTNode()

//var { fr: a, lr: { ps: b }, tf: c } = getASTNode()

var obj = { a: 1 } 
var list = [ 1 ] 
var { a, b = 2 } = obj 
var [ x, y = 2 ] = list
console.log(obj)