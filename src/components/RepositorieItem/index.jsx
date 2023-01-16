import React from "react";
import * as S from  "./styled"

const RepositorieItem = ({name, linkToRepo, fullName}) => {
  return (
    <S.Wrapper href={linkToRepo} target="_blank">
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperFullName>Full name:</S.WrapperFullName>
      <S.WrapperLink >
          {fullName}
      </S.WrapperLink>
    </S.Wrapper>
  );
};

export default RepositorieItem;
