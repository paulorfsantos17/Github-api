import React from "react";

import Header from "../Header";
import * as S from "./styled";

export const Layout = ({ children }) => {
 
  return (
    <S.WrapperLayout>
      <Header />
      {children}
    </S.WrapperLayout>
  );
};
