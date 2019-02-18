import { AnyAction } from "redux";
import { testAction } from "../actions/Test";

const initialState : ITestState = {
    test: ""
  }
  
  function TestReducer(state = initialState, action: AnyAction) {
    switch(action.type) {
      case testAction.pending: {
        console.log("pending")
      }
      case testAction.success: {
        console.log(action)
      }
      case testAction.failure: {
        console.log(action)
      }
    }
    return state
  }

export default TestReducer;

export interface ITestState {
  test: string
}
