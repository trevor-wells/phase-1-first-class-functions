function receivesAFunction(callback) {
    callback();
    return "Useless function!";
}

function returnsANamedFunction() {
    return function uselessFunction() {
        return "I'm useless!";
    }
}

function returnsAnAnonymousFunction() {
    return function(){
        return "Who am I?";
    }
}