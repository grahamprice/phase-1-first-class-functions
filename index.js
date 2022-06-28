function receivesAFunction(callback) {
    callback(); 
}
function returnsANamedFunction() {
    return function namedFN() {
        console.log(returnsANamedFunction)
    }
}

function returnsAnAnonymousFunction() {
    return () => console.log('This is an anonymous function.')
}

