/**
 * Created by admin on 2018/1/19.
 */
import { createStore } from 'redux';
import todoApp from '../reducers/reducers';


let store = createStore(todoApp);

export default store;