import React, { useReducer } from "react";
import reducer, { initialState } from "./reducers";
import {
  CLEAR_DISPLAY,
  MEMORY_ADD,
  MEMORY_CLEAR,
  MEMORY_RECALL,
  addOne,
  applyNumber,
  changeOperation,
  ADD_NUMBER,
  MEMORY_SUM,
} from "./actions";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  function eventHandler(number) {
    //dispatch(applyNumber(number));
    dispatch({ type: ADD_NUMBER, payload: number });
  }
  function operationHandler(operation) {
    dispatch(changeOperation(operation));
  }
  function handleMemoryAndOperation(operator) {
    dispatch({ type: MEMORY_ADD });
    dispatch(changeOperation(operator));
    dispatch({ type: CLEAR_DISPLAY });
  }

  console.log(state);
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton
                value={"M+"}
                onClick={() => dispatch({ type: MEMORY_ADD })}
              />
              <CalcButton
                value={"MR"}
                onClick={() => dispatch({ type: MEMORY_RECALL })}
              />
              <CalcButton
                value={"MC"}
                onClick={() => dispatch({ type: MEMORY_CLEAR })}
              />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => eventHandler(1)} />
              <CalcButton value={2} onClick={() => eventHandler(2)} />
              <CalcButton value={3} onClick={() => eventHandler(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => eventHandler(4)} />
              <CalcButton value={5} onClick={() => eventHandler(5)} />
              <CalcButton value={6} onClick={() => eventHandler(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => eventHandler(7)} />
              <CalcButton value={8} onClick={() => eventHandler(8)} />
              <CalcButton value={9} onClick={() => eventHandler(9)} />
            </div>

            <div className="row">
              <CalcButton
                value={"+"}
                onClick={() => handleMemoryAndOperation("+")}
              />
              <CalcButton
                value={"*"}
                onClick={() => handleMemoryAndOperation("*")}
              />
              <CalcButton
                value={"-"}
                onClick={() => handleMemoryAndOperation("-")}
              />
            </div>

            <div className="row ce_button">
              <CalcButton
                value={"CE"}
                onClick={() => dispatch({ type: CLEAR_DISPLAY })}
              />
              <CalcButton
                value={"="}
                onClick={() => dispatch({ type: MEMORY_SUM })}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
