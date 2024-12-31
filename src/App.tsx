import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import BlockForm from "./components/BlockForm";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BlockForm />
      </PersistGate>
    </Provider>
  );
}

export default App;
