import { Box, styled } from "@mui/material";
import React from "react";
import headerImage from "../images/jobs.jpg";
import SearchInputEI from "./SearchInputEI";

const Header = () => {
  const StyleHeader = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 400,
    backgroundImage: `url(${headerImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: theme.palette.secondary.main,
  }));
  return (
    <>
      <StyleHeader>
        <SearchInputEI />
      </StyleHeader>
    </>
  );
};

export default Header;
