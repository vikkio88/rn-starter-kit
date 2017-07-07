import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Switch, Scene, Router} from 'react-native-router-flux';
import {
    Loading,
    NewPlayerForm,
    MainDash,
} from './components/views';
import * as routes from './const/routes';
import {store} from './store';
import {fetchUser} from './store/actions';

class App extends Component {
    componentWillMount() {
        store.dispatch(fetchUser());
    }

    sceneSelector() {
        return store.getState().user ? routes.MAIN_DASH : routes.NEW_PLAYER;
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Scene
                        key="root"
                        component={Switch}
                        tabs
                        unmountScenes
                        selector={this.sceneSelector.bind(this)}
                    >
                        <Scene key={routes.LOADING} component={Loading} initial hideNavBar/>
                        <Scene key={routes.NEW_PLAYER} component={NewPlayerForm} title="New Player"/>
                        <Scene key={routes.MAIN_DASH} component={MainDash} title="Dashboard"/>
                    </Scene>
                </Router>
            </Provider>
        );
    }
}
export {App};
