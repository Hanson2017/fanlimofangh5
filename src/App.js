import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import MainTabBar from './containers/tabBar';
import TabInvest from './containers/tabInvest';
import Search from './containers/search';
import SearchResult from './containers/search/result';
import InvestDetail from './containers/investDetail';
import InvestComments from './containers/investDetail/comments';

import LoginOther from './containers/account/login/other';
import Callback from './containers/account/login/callback';
import MemberActiveList from './containers/account/member/activeList';
import MemberActiveListEdit from './containers/account/member/activeList/edit';
import MemberSet from './containers/account/member/set';
import MemberChangepwd from './containers/account/member/changepwd';
import MemberKefu from './containers/account/member/kefu';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={MainTabBar} />
      <Route path="/firstInvest" component={MainTabBar} />
      <Route path="/repeatInvest" component={MainTabBar} />
      <Route path="/tabInvest" component={TabInvest} />
      <Route path="/help" component={MainTabBar} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/search/result" component={SearchResult} />
      <Route path="/Activity/Detail/:id" component={InvestDetail} />
      <Route path="/comments/:id" component={InvestComments} />
      <Route exact path="/member" component={MainTabBar} />      
      <Route path="/member/login/qqlogin" component={Callback} />
      <SignInRoute path="/member/login/other" component={LoginOther} />
      <PrivateRoute  path="/member/changepwd" component={MemberChangepwd} />
      <PrivateRoute  exact path="/member/active" component={MemberActiveList} />
      <PrivateRoute  path="/member/active/edit" component={MemberActiveListEdit} />
      <PrivateRoute  path="/member/set" component={MemberSet} />
      <PrivateRoute  path="/member/kefu" component={MemberKefu} />

    </Switch>
  </Router >
)


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.loginState ? (
      <Component {...props} />
    ) : (
        <Redirect to={{
          pathname: '/member',
          state: { from: props.location }
        }} />
      )
  )} />
)

const SignInRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.loginState ? (
      <Redirect to={{
        pathname: '/member',
        state: { from: props.location }
      }} />
    ) : (
        <Component {...props} />
      )
  )} />
)

export default App;


