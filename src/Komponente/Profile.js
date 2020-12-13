import styled from "styled-components";
import {useState, useEffect} from "react"

const ProfileDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-left: 10%;
    width: 260px;
    font-size: 1rem;
    p{
        font-size: 0.775rem;
        margin-top: 0.2rem;
    }
`;

const ProfileImage = styled.img`
    width: 50%;
`;

const Button = styled.button`
    border: none;
    border-radius: 2px;
    padding: 10px;
    background-color: ${props => props.color || '#1455d9'};
    color: white;
    width: 40%;
    visibility: ${props => props.visibility || 'visible'};
    &:focus{
        outline:none;
    }
`;

export let Profile = () => {
    let [avatar, setAvatar] = useState(localStorage.getItem('avatar'))
    let [buttonColor, setButtonColor] = useState("#1455d9")

    useEffect(() => {
        if(localStorage.getItem('avatar') === null)
        {
            localStorage.setItem('avatar', './images/MojaSlika.jpg')
            setAvatar(localStorage.getItem('avatar'))
            setButtonColor('#1455d9')
        }
        else
        {
            if(avatar === 'https://api.hello-avatar.com/adorables/285/sibircina@gmail.com')
            {
                setButtonColor('#25c2a1')
            }
        }
    }, [])

    const changeAvatar = () => {
        if(avatar === 'https://api.hello-avatar.com/adorables/285/sibircina@gmail.com')
            {
                localStorage.setItem('avatar', './images/MojaSlika.jpg')
                setButtonColor('#1455d9');
            }
        else
            {
                localStorage.setItem('avatar', 'https://api.hello-avatar.com/adorables/285/sibircina@gmail.com')
                setButtonColor('#25c2a1');
            }
        
        setAvatar(localStorage.getItem('avatar'))
    }

    return(
        <ProfileDiv>
            <ProfileImage src = {avatar}></ProfileImage>
            <b>Stefan Ristic</b>
            <p>
                ristic.stefan@outlook.com
                https://github.com/ASCRA
            </p>
            <Button onClick={changeAvatar} color={buttonColor}>Toggle Avatar</Button>
        </ProfileDiv>
    )
}