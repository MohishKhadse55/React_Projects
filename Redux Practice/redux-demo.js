const redux = requier("redux");

//  reducer function

const counterReducer = (state = { counter: 0 }, action) => {
    // this will return the new state which will update the new state
    return {
        counter: state.counter + 1,
    };
};

const store = redux.createStore(counterReducer);

// subscribtion
const counterSubscriber = () => {
    // THis subscription function will be triggered whenever the state chnages
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "counter update" });
