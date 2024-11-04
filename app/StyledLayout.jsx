'use client';
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

const GlobalStyles = createGlobalStyle`
    body {
        background: #ffffff();
        list-style: none;
        text-align: center;
    }
`;

const Container = styled.body`
    position: relative;
    width: 100vw;
    min-height: 100vh;
    margin: 2vh;
`;

const StyledLayout = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            <Container>
                <Header />
                {children}
                <Footer />
            </Container>
        </>
    );
};

export default StyledLayout;
