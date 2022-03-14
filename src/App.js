import { useReducer } from 'react';
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Q1 from './Q1';
import Q2 from './Q2';
import Q3 from './Q3';
import Q4 from './Q4';
import Q5 from './Q5';
import Loading from './Loading';
import Res1 from './Res1';
import Res2 from './Res2';
import Res3 from './Res3';
import Res4 from './Res4';
import { DispatchContext, StateContext } from "./store/context";
import Reducer, { initialState } from "./store/reducer";
import Questions from './Questions';

const App = () => {
  const [state, dispatch] = useReducer(Reducer, initialState)
  return (
    <div className="App"><DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/question" element={<Questions />} />
            <Route path="/q1" element={<Q1 />} />
            <Route path="/q2" element={<Q2 />} />
            <Route path="/q3" element={<Q3 />} />
            <Route path="/q4" element={<Q4 />} />
            <Route path="/q5" element={<Q5 />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="/res1" element={<Res1 />} />
            <Route path="/res2" element={<Res2 />} />
            <Route path="/res3" element={<Res3 />} />
            <Route path="/res4" element={<Res4 />} />
          </Routes>
        </Router>
      </StateContext.Provider>
    </DispatchContext.Provider>
    </div>
  );
};

export default App;
