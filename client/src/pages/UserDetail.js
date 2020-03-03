import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import usersAPI from "../utils/usersAPI";

class userDetail extends Component {
    state = {
        user: {}
    };

    //When the component mounts, grab user with id of this.props.match.params.id
    componentDidMount() {
        usersAPI.getUser(this.props.match.params.id)
        .then(res => this.setState({ user: res.data }))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <Container fluid>
                <h1>{this.state.user.name}</h1>
            </Container>
        )
    }
}

export default userDetail;