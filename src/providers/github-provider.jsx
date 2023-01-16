import { createContext, useCallback, useState } from "react";
import api from "../service/api";

export const GithubContext = createContext({
  user: {},
  repositories: [],
  starred: [],
});

export const GithubProvider = ({ children }) => {
  const [githubState, setGithubState] = useState({
    loading: false,
    hasUser: false,
    user: {
      login: undefined,
      name: undefined,
      avatar_url: undefined,
      html_url: undefined,
      blog: undefined,
      company: undefined,
      location: undefined,
      followers: 0,
      following: 0,
      public_repos: 0,
      public_gists: 0,
    },
    repositories: [],
    starred: [],
  });

  const getUser = (userName) => {
    setGithubState((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }));

    api
      .get(`users/${userName}`)
      .then(({ data }) => {
        const {
          login,
          name,
          avatar_url,
          html_url,
          blog,
          company,
          location,
          followers,
          following,
          public_repos,
          public_gists,
        } = data;
        setGithubState((prevState) => ({
          ...prevState,
          hasUser: true,
          user: {
            login,
            name,
            avatar_url,
            html_url,
            blog,
            company,
            location,
            followers,
            following,
            public_repos,
            public_gists,
          },
        }));
      })
      .finally(() => {
        setGithubState((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
        }));
      });
  };

  const getUserRepos = (username) => {
    setGithubState((prevState) => ({
      ...prevState,
    }));

    api.get(`users/${username}/repos`).then(({ data }) => {
      setGithubState((prevState) => ({
        ...prevState,
        repositories: data,
      }));
    });
  };
  const getUserStarred = (username) => {
    setGithubState((prevState) => ({
      ...prevState,
    }));

    api.get(`users/${username}/starred`).then(({ data }) => {

      setGithubState((prevState) => ({
        ...prevState,
        starred: data,
      }));
    });
  };

  const contextValue = {
    githubState,
    getUser: useCallback((userName) => getUser(userName), []),
    getUserRepos: useCallback((username) => getUserRepos(username), []),
    getUserStarred: useCallback((username) => getUserStarred(username), []),
  };
  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );
};
