import App from "../components/App";

import { connect } from "react-redux";
import { Dispatch } from "redux";

const MapStateToProps = (state: any) : IStateProps => {
    return {

    }
}

const MapDispatchToProps = (dispatch: Dispatch<any>) : IDispatchProps => {
    return {
        
    }
}

export default connect<IStateProps, IDispatchProps, IInheritedProps>(MapStateToProps, MapDispatchToProps)(App);

interface IStateProps {

}

interface IDispatchProps {
    
}

interface IInheritedProps {

}

export type IAppProps = IStateProps & IDispatchProps & IInheritedProps;
