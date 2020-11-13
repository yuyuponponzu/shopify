import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';


// ステート初期値
const initial = {
    effect: 'fade',
    loaded: false,
}


// レデューサー
function Reducer (state = initial, action) {
//   actionの作り方サンプル
    switch (action.type) {
        case 'LOADED_TRUE':
            return {
                loaded: true
            };
        case 'LOADED_FALSE':
            return {
                loaded: false
            };
    }
}

// initStore関数（redux-store.jsで必要）
// createStoreをした結果を返してるだけ。
export function initStore(state = initial) {
    return createStore(Reducer, state, applyMiddleware(thunkMiddleware))
}