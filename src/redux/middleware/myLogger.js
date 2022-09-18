import rootReducer from "../rootReducer";

//create our first middleware
const myLogger = (store) => (next) => (action) => {
    console.log(`action: ${JSON.stringify(action)}`);
    console.log(`before: ${JSON.stringify(store.getState())}`);

    const upComingState = [action].reduce(rootReducer, store.getState());

    console.log(`after: ${JSON.stringify(upComingState)}`);

    //pass action
    return next(action);
}

export default myLogger;