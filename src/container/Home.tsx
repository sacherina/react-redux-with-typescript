import Home from "../components/Home";

import { connect } from "react-redux";
import { TestAction } from "../actions/Test";
import { Dispatch } from "redux";

const MapStateToProps = (state: any) : IStateProps => {
    return {

    }
}

const MapDispatchToProps = (dispatch: Dispatch<any>) : IDispatchProps => {
    return {
        onButtonClick: () => dispatch(TestAction())
    }
}

export default connect<IStateProps, any, IInheritedProps>(MapStateToProps, MapDispatchToProps)(Home);

interface IStateProps {

}

interface IDispatchProps {
    onButtonClick: () => void;
}

interface IInheritedProps {

}

export type IHomeProps = IStateProps & IDispatchProps & IInheritedProps;
