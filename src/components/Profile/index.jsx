import React, { useEffect } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";
import { CardUserNameGeneric } from "./CardUserNameGeneric";

export const Profile = ({}) => {
  const { githubState } = useGithub();

  return (
    <S.Wrapper>
      <S.WrapperImage
        src={githubState.user.avatar_url}
        alt="Pictures of user"
      />

      <S.WrapperInfoUser>
        <div>
          <h1>{githubState.user.name}</h1>
          <S.WrapperUserName>
            <h3>Username: </h3>
            <a href={githubState.user.html_url} target="_blank">
              {githubState.user.login}
            </a>
          </S.WrapperUserName>
          <CardUserNameGeneric
            CardTitle="Company"
            DataTitle={githubState.user.company}
          />
          <CardUserNameGeneric
            CardTitle="Location"
            DataTitle={githubState.user.location}
          />
          
          <CardUserNameGeneric
            CardTitle="Blog"
            DataTitle={githubState.user.blog}
          />
        </div>
        <S.WrapperStatuscCount>
          <div>
            <h4>Followers</h4>
            <span>{githubState.user.followers}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span>{githubState.user.public_gists}</span>
          </div>
          <div>
            <h4>Repos</h4>
            <span>{githubState.user.public_repos}</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span>{githubState.user.following}</span>
          </div>
        </S.WrapperStatuscCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
};
