import React from 'react';

const authenticate = LandingPage => Content => (
    class extends React.Component {
        constructor() {
            super();
            this.state = {
                isLoggedIn: false
            }
        }

        componentDidMount() {
            if(localStorage.getItem('User')) {
                this.setState({ isLoggedIn: true })
            }
        }

        render() {
            if(this.state.isLoggedIn) return <Content />

            return <LandingPage />
        }
    }
)

export default authenticate;