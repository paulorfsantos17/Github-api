import styled from "styled-components";

export const Wrapper = styled.a`
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 16px 16px;
  padding: 8px;
  align-content: center;
  width: 250px;
  height: 150px;

  &:hover{
    background-color: #B3B3B3 ;
  }
`

export const WrapperTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0;
`
export const WrapperFullName = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
  color: #2d3748
`
export const WrapperLink = styled.p`
  font-size: 12px;
  font-weight: bold;
  margin: 8px 0;
  color: #3182ce
`