import React from "react";
import { HeaderStyle } from "./headerStyle";

interface Props {
  headerName?: any;
}

const Header: React.FC<Props> = ({ headerName }: { headerName?: any }) => {
  return <HeaderStyle>{headerName}</HeaderStyle>;
};

export default Header;
