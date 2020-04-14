import React from "react";
import { Switch, Route } from "react-router-dom";
import Posts from "components/modules/posts/posts";
import PostDetails from "components/modules/postDetails/postDetails";
import PiggyBankScreen from "components/screens/piggybank/piggybank";
import PiggyPayScreen from "components/screens/piggypay/piggypay";
import PiggyRecieptScreen from "components/screens/piggyreciept/piggyreciept";
import FacebookAuth from "components/modules/facebookAuth/facebookAuth";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={PiggyBankScreen} />
      <Route exact path="/home" component={PiggyBankScreen} />
      <Route exact path="/pay" component={PiggyPayScreen} />
      <Route
        exact
        path="/reciept/:type"
        strict={false}
        component={PiggyRecieptScreen}
      />
      <Route exact path="/posts" component={Posts} />
      <Route
        exact
        path="/posts/:postId"
        render={(props: any) => <PostDetails {...props} />}
      />
      <Route
        path="/authenticate/facebook"
        render={(props: any) => <FacebookAuth {...props} />}
      />
    </Switch>
  );
};

export default Routes;
