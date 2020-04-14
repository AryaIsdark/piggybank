import React, { useEffect } from "react";
import * as queryString from "query-string";
import { getFbUser, getFbAccessTokenFromCode } from "api/apiFunctions";
import { useHistory } from "react-router-dom";
import { Button } from "antd";

const stringifiedParams = queryString.stringify({
  client_id: process.env.REACT_APP_FB_CLIENT_ID,
  redirect_uri: `${process.env.REACT_APP_FB_REDIRECT_URL}/authenticate/facebook/`,
  scope: ["email"].join(","), // comma seperated string
  response_type: "code",
  auth_type: "rerequest",
  display: "popup",
});

const facebookLoginUrl = `https://www.facebook.com/v4.0/dialog/oauth?${stringifiedParams}`;

const FacebookAuth = () => {
  const history = useHistory();
  const { code } = queryString.parse(window.location.search);
  const handleLoginClick = () => window.location.replace(facebookLoginUrl);

  useEffect(() => {
    const getUser = async (accessToken: string) => {
      try {
        const response = await getFbUser({
          fields: ["id", "email", "first_name", "last_name", "picture"].join(
            ","
          ),
          access_token: accessToken,
        });
        console.log(response);
        localStorage.setItem("fbuser", JSON.stringify(response.data));
        history.replace("/");
      } catch (e) {
        console.log(e);
      }
    };

    const getAccessToken = async () => {
      try {
        const response = await getFbAccessTokenFromCode({
          client_id: "690019945084216",
          redirect_uri: `${process.env.REACT_APP_FB_REDIRECT_URL}/authenticate/facebook/`,
          client_secret: process.env.REACT_APP_FB_SECRET_ID,
          code,
        });
        getUser(response.data.access_token);
      } catch (err) {
        console.log(err);
      }
    };
    if (code) {
      getAccessToken();
    }
  }, [code, history]);

  return (
    <div className={"fb-login"}>
      <Button className={"fb-login-button"} onClick={handleLoginClick}>
        Login with Facebook
      </Button>
    </div>
  );
};

export default FacebookAuth;
