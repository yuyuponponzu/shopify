import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const test_photo = [
    'https://images.unsplash.com/photo-1512776397924-7fe3eb1d842b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1536553355071-1f3749962cd5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1505567745926-ba89000d255a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1426170042593-200f250dfdaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1477768663691-75454fd8e870?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1496060169243-453fde45943b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1570451487809-6f9cbee2e0d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    'https://images.unsplash.com/photo-1485201543483-f06c8d2a8fb4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
    'https://images.unsplash.com/photo-1534406315430-4d7cf92bc690?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    'https://images.unsplash.com/photo-1518128958364-65859d70aa41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1508669232496-137b159c1cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    'https://images.unsplash.com/photo-1455218873509-8097305ee378?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    'https://images.unsplash.com/photo-1545769743-16f354c6262b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80,',
    'https://images.unsplash.com/photo-1550236520-7050f3582da0?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
];

// ステート初期値
const initial = {
    effect: 'item',
    loaded: false,
    menu_list: ['top', 'item', 'myAccount', 'question'],
    page_list: ['top', 'item', 'myAccount', 'inquiry'],
    images: [
        ...Array.from(new Array(18)).map(
            (v, i) => 'https://www.awonderfulwonderland.com/img/20aw' + String(10 + i) + '.jpg'
        ),
        ...test_photo,
    ],
};

// レデューサー
function Reducer(state = initial, action) {
    //   actionの作り方サンプル
    switch (action.type) {
        case 'LOADED_TRUE':
            return {
                ...state,
                loaded: true,
            };
        case 'LOADED_FALSE':
            return {
                ...state,
                loaded: false,
            };
        case 'CHENGE_MENU':
            return {
                ...state,
                loaded: false,
                effect: action.effect,
            };
        default:
            return state;
    }
}

// initStore関数（redux-store.jsで必要）
// createStoreをした結果を返してるだけ。
export function initStore(state = initial) {
    return createStore(Reducer, state, applyMiddleware(thunkMiddleware));
}
