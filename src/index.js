import {App} from "./App";
import ReactDOM from "react-dom";
import store from './store/store'
import {Provider} from "react-redux";

store.subscribe(() => console.log(store.getState()))
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root"))
