import React from 'react';
import { connect } from 'react-redux';
import { decrement, increment } from '../redux/counter/actions';
import { decrement as dynamicDecrement, increment as dynamicIncrement } from '../redux/dynamicCounter/actions';

const VariableCounter = ({count, increment, decrement}) => {
    return (
        <div class="max-w-md mx-auto mt-10 space-y-5">
                <div
                    class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
                >
                    <div id="counter" class="text-2xl font-semibold">{count}</div>
                    <div class="flex space-x-3">
                        <button onClick={() => increment(1)}
                           id="increment" class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                        >
                            Increment
                        </button>
                        <button  onClick={() => decrement(2)}
                            id="decrement" class="bg-red-400 text-white px-3 py-2 rounded shadow"
                        >
                            Decrement
                        </button>
                    </div>
                </div>
            </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return{
        count: ownProps.dynamic
        ? state.dynamicCounter.value
        : state.staticCounter.value,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        increment: ownProps.dynamic ? (value) => dispatch(dynamicIncrement(5)) : () => dispatch(increment()),
        decrement: ownProps.dynamic ? (value) => dispatch(dynamicDecrement(2)) : () => dispatch(decrement()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VariableCounter);