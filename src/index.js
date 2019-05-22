// // import './css/main.css';
// import './scss/main.scss';
// import {hello, sup} from './js/module';
// import a from './js/about';

// a()

// hello();
// sup();

import reducer from './reducers/reducers';
import {increment, decrement} from './actions/actions';

// State Store
let store = 0; // Initial state

// UI state change method
function render() {
    let $div = document.querySelector('#result');
    $div.innerHTML = store;
}

render();

document.addEventListener('state', render);

document.addEventListener('action', function (e) {
    store = reducer(store, e.detail);
    document.dispatchEvent(new CustomEvent('state'));
}, false);

// UI event handler
let $incrementBtn = document.querySelector('#increment');
let $decrementBtn = document.querySelector('#decrement');

$incrementBtn.addEventListener("click", function (e) {
    document.dispatchEvent(
        new CustomEvent('action', { detail: increment() })
    );
});


$decrementBtn.addEventListener("click", function (e) {
    document.dispatchEvent(
        new CustomEvent('action', { detail: decrement() })
    );
});