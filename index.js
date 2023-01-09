
function receivesAFunction(callback){
    return callback();
    }


function returnsANamedFunction(){
    const namedFunc = () => {console.log('named function')}
    return namedFunc
}

function returnsAnAnonymousFunction(){
    return () => {console.log('anon func')}
}