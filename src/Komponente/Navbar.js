import styled from "styled-components"
import {Link} from "react-router-dom"
import {useEffect, useState} from "react"
import LogInContext from "./LogInContext"
const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content:${props => props.align || "center"};
    background-color: #101216;
    color: white;
    margin: 0;
    padding: 30px;
    margin-bottom: 20px;
`;

const Ul = styled.ul`
    float: left;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding-left: 1rem;
    font-size: 0.75rem;
    list-style-type: none;
    li{
        margin: 0 5px;
    }
    a{
        text-decoration: none;
        vertical-align: sub;
        color: #c4c4c5;
    }
`;

const Button = styled.button`
    margin-left: auto;
    border: none;
    border-radius: 2px;
    padding: 5px 10px;
    background-color: #1455d9;
    color: white;
    visibility: ${props => props.visibility || 'visible'}
`;

export let Navbar = () => {
    return(
            <LogInContext.Consumer>
            {({ loggedIn, logIn }) =>
                loggedIn?(
                    <Nav align={'left'}>
                        <b>Navbar</b>
                        <Ul>
                            <li>
                                <Link to = "/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to = "/profile">
                                    Profile
                                </Link>
                            </li>
                        </Ul>
                    </Nav>
                ):
                (
                    <Nav>
                        <b>Navbar</b>
                        <Ul>
                            <li>
                                <Link to = "/">
                                    Home
                                </Link>
                            </li>
                        </Ul>
                        <Button onClick = {logIn}>Login</Button>
                    </Nav>
                )
            }
            </LogInContext.Consumer>
    )
}