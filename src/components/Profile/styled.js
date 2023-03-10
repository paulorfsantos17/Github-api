import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const WrapperStatuscCount = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  div {
    text-align: center;
    margin: 8px;
  }
`;

export const WrapperUserName = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  h3 {
    margin-right: 8px;
  }
  a {
    color: blue;
    font-weight: bold;
    font-size: 18px;
  }
`;
export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  h3 {
    margin-right: 8px;
  }

`;

export const WrapperInfoUser = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  height: 200px ;
  margin-left: 8px;
  h1 {
    font-size: 32px;
    font-weight: bold;
  }
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
  h4 {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const WrapperImage = styled.img`
  border-radius:  50%;
  width: 200px;
  margin: 8px;
`;

