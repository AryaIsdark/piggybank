import React from "react";
import { Switch, Route } from "react-router-dom";
import Posts from "components/modules/posts/posts";
import PostDetails from "components/modules/postDetails/postDetails";
import PiggyBankScreen from "components/screens/piggybank/piggybank";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={PiggyBankScreen} />
      <Route exact path="/home" component={PiggyBankScreen} />
      <Route exact path="/posts" component={Posts} />
      <Route
        exact
        path="/posts/:postId"
        render={(props: any) => <PostDetails {...props} />}
      />
    </Switch>
  );
};

export default Routes;
