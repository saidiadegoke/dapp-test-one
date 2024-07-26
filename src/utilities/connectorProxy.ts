import { TonConnectError } from "@tonconnect/ui-react"

const retrier = (property: string | Symbol, caller: () => Promise<any>, retriesLeft = 12): Promise<any> => {
    return new Promise((resolve, reject) => {
        const promise = caller()
        if (promise.then === undefined || promise.catch === undefined) {
            console.warn("The proxied function ${property} is not async")
            return promise
        }
        promise
            .then(result => {
                console.log(`Call of ${property}/${retriesLeft} successful:`, result)
                resolve(result)
            })
            .catch(err => {
                if (retriesLeft <= 0) {
                    console.error(`No more retry trials for ${property}, forwarding error`, err)
                    reject(err)
                }
                console.error(`Error in call of ${property}, retrying, ${retriesLeft} tentatives left`, err)
                setTimeout(() =>
                    retrier(property, caller, retriesLeft - 1)
                        .then(result => resolve(result))
                        .catch(error => reject(error))
                    ,
                    1000)
            })
    })
}

export function connectorProxy(inner: TonConnectError) {
    return new Proxy(inner, {
        get(target, property, receiver) {
            const targetValue = Reflect.get(target, property, receiver)
            if (typeof targetValue === 'function') {
                return (...args: any[]) => {
                    console.log('Calling:', property, " Arguments:", args)
                    return retrier(property, () => targetValue.apply(this, args))
                }
            } else {
                return targetValue
            }
        }
    })
}