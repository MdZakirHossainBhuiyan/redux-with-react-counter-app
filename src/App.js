import { Provider } from 'react-redux';
import './App.css';
import Counter from './Components/Counter';
import DynamicHooksCounter from './Components/DynamicHooksCounter';
import HooksCounter from './Components/HooksCounter';
import VariableCounter from './Components/VariableCounter';
import store from './redux/store';

function App() {
  return (
      <Provider store={store}>
          <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">
              <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
                  Simple Counter Application
              </h1>
              <HooksCounter />
              <DynamicHooksCounter />

              <VariableCounter />
              <VariableCounter dynamic />
          </div>
      </Provider>
  );
}

export default App;
