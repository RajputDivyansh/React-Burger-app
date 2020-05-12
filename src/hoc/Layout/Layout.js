import React, { Component } from "react";
// import Aux from "../Aux/Aux"
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    
    sideDrawerClosedHandler = () => {
        // console.log("inside closed handler",this.state.showSideDrawer);
        this.setState({showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            // console.log("inside toggle",this.state.showSideDrawer,"prevState",prevState);
            return { showSideDrawer: !prevState.showSideDrawer }
        });
    }

    render() {
        return(
            // <Aux>
            <>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                open={this.state.showSideDrawer} 
                closed={this.sideDrawerClosedHandler}/>
                <div>Toolbar,Sidedrawer,Backdrop</div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </>
            // </Aux>
        )};
};

export default Layout;