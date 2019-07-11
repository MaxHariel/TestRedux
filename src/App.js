import React from 'react';
import {Provider} from "react-redux";
import store from "./store";
import Sidebar from "./components/Sidebar"
import Videos from "./components/Videos"
import AdicionarModulo from "./components/Adicionar-modulo"
function App() {
  return (
    <Provider store={store}>
     <Videos />  
     <Sidebar />
     <AdicionarModulo/>
    </Provider>
  );
}

export default App;
