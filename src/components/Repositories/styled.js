import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 12px;
  width: 100%;
  margin-top: 16px;

`;
export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  border-radius: 16px;
  border: 1px solid #ccc;
  padding: 8px;
  cursor: pointer;
  z-index: 99999;

  margin-left: 8px;
  padding:16px;
  &:focus {
    outline: none;
  }

  &.is-selected {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    background-color: white;

    box-shadow:  1px 1px 15px rgba(0,0,0,0.3);
  }
`;

WrapperTab.tabsRole = "Tab";

export const WrapperTabPainel = styled(TabPanel)`
  display: none;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius:8px;
  box-shadow:  1px 1px 15px rgba(0,0,0,0.1);
  margin-top: -5px;
  background-color: #fff;
  
  &.is-selected {
    display: block;
  }

`;


export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap; 
`