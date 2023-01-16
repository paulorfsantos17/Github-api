import React, { useEffect, useState } from "react";
import useGithub from "../../hooks/github-hooks";
import RepositorieItem from "../RepositorieItem";
import * as S from "./styled";

const Repositories = () => {
  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState(false);

  useEffect(() => {
    if (!!githubState.user.login) {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    setHasUserForSearchRepos(!!githubState.user.login);
  }, [githubState.user.login]);

  return (
    <>
      {hasUserForSearchRepos ? (
        <S.WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
          </S.WrapperTabList>
          <S.WrapperTabPainel>
            <S.WrapperList>
              {githubState.repositories.map((repo) => (
                <RepositorieItem
                  fullName={repo.full_name}
                  name={repo.name}
                  linkToRepo={repo.html_url}
                  key={repo.id}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPainel>
          <S.WrapperTabPainel>
            <S.WrapperList>
              {githubState.starred.map((repo) => (
                <RepositorieItem
                  fullName={repo.full_name}
                  name={repo.name}
                  linkToRepo={repo.html_url}
                  key={repo.id}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPainel>
        </S.WrapperTabs>
      ) : (
        <></>
      )}
    </>
  );
};

export default Repositories;
