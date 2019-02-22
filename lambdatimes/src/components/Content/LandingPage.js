import React from 'react';
import styled from 'styled-components';

const LandingPage = () => {
    return (
        <Container>
            <LandingPageContent>
                Please Log In to View Content
            </LandingPageContent>
        </Container>
    );
}

const Container = styled.div`
    width: 300px;
    height: 300px;
    background-color: #FFF;
    border: 1px solid grey;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10% auto;
`;

const LandingPageContent = styled.h2`
    color: red;
`;

export default LandingPage;