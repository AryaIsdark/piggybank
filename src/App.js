import React, { Suspense, useEffect } from "react";
import "antd/dist/antd.css";
import "./App.css";
import Routes from "router/Routes";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

const App = () => {
  const { t } = useTranslation("preload", { useSuspense: false });
  const history = useHistory();
  const fbUser = JSON.parse(localStorage.getItem("fbuser"));

  useEffect(() => {
    if (!fbUser || !fbUser.email) {
      history.replace("/authenticate/facebook");
    }
  }, []);

  return (
    <div className="App">
      <Suspense fallback={t("loading...")}>
        {fbUser && fbUser.email && (
          <div className={"page-header"}>
            <img
              className={"profile-image"}
              src={fbUser.picture.data.url}
              alt={"profile"}
            />
            <span className={"profile-name"}>
              {fbUser.first_name} {fbUser.last_name}
            </span>
          </div>
        )}
        <Routes />
      </Suspense>
    </div>
  );
};

export default App;
