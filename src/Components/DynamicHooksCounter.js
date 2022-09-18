import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/dynamicCounter/actions';

const DynamicHooksCounter = () => {
    const count = useSelector((state) => state.dynamicCounter.value);
    const dispatch = useDispatch();

    const incrementHandler = (value) => {
        dispatch(increment(value));
    }

    const decrementHandler = (value) => {
        dispatch(decrement(value));
    }

    return (
        <div class="max-w-md mx-auto mt-10 space-y-5">
                <div
                    class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
                >
                    <div id="counter" class="text-2xl font-semibold">{count}</div>
                    <div class="flex space-x-3">
                        <button onClick={() => incrementHandler(5)}
                           id="increment" class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                        >
                            Increment
                        </button>
                        <button  onClick={() => decrementHandler(2)}
                            id="decrement" class="bg-red-400 text-white px-3 py-2 rounded shadow"
                        >
                            Decrement
                        </button>
                    </div>
                </div>
            </div>
    );
};

export default DynamicHooksCounter;