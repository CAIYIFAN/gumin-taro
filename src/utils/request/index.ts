import Taro from '@tarojs/taro'

function compose(...funcs) {
    if (funcs.length === 0) {
        return arg => arg
    }
    if (funcs.length === 1) {
        return funcs[0]
    }
    return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

function applyRequestMiddlewares(...middlewares) {
    return function (request) {
        const otherParams = {}
        let chain: Function[] = []
        chain = middlewares.map(middleware => middleware(otherParams));
        return compose(...chain)(request)
    }
}

function errorCatchenhance(next) {
    try {
        next()
    } catch(e) {
        throw Error(e)
    }
}

function requestGet() {
    // Taro.request({

    // })
}

function requestPost() {
    
}