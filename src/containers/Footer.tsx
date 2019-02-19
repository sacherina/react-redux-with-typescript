import Footer from "../components/Footer";

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

export default connect<IStateProps, IDispatchProps, IInheritedProps>(MapStateToProps, MapDispatchToProps)(Footer);

interface IStateProps {

}

interface IDispatchProps {
    
}

interface IInheritedProps {

}

export type IFooterProps = IStateProps & IDispatchProps & IInheritedProps;
