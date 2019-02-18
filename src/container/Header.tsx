import Header from "../components/Header";

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

export default connect<IStateProps, IDispatchProps, IInheritedProps>(MapStateToProps, MapDispatchToProps)(Header);

interface IStateProps {

}

interface IDispatchProps {
    
}

interface IInheritedProps {

}

export type IHeaderProps = IStateProps & IDispatchProps & IInheritedProps;
