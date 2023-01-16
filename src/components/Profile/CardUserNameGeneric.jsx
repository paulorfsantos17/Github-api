import React from "react";
import * as S from "./styled";

export const CardUserNameGeneric = ({ CardTitle, DataTitle }) => {
  return (
    <>
      {DataTitle ? (
        <S.WrapperUserGeneric>
          <h3>{CardTitle}:</h3>
          <span>{DataTitle}</span>
        </S.WrapperUserGeneric>
      ) : (
        ""
      )}
    </>
  );
};
