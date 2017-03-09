/**
 * Created by hanxusen on 2017/3/9.
 */
function say(callback) {
    callback()
}

function print() {
    setTimeout(function () {
        console.log('hello world')
    }, 10000);
}

say(print);