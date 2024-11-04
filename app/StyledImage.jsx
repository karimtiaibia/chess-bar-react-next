import React from "react";
import styled from "styled-components";


const StyledImage = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    aspect-ratio: 16 / 9;
`;

const ImageContainer = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ImageLayout = ({ children }) => {
    return (
        <>
            <StyledImage>
                <ImageContainer>
                    { children }
                </ImageContainer>
            </StyledImage>
        </>
    );
};

export default StyledLayout;