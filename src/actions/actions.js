const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export function increment() {
    return {
        type: INCREMENT
    };
}

export function decrement() {
    return {
        type: DECREMENT
    };
}