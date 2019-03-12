import { createStore, applyMiddleware, compose } from 'redux';

// Import Combined Reducers
import reducers from '../reducers/index';

export default function configureStore() {
    const enhancer = compose(
        applyMiddleware(

        )
    )
    const store = createStore(reducers, enhancer)
    return store
}