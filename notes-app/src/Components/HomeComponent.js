import React, { Component } from 'react';
import styled from 'styled-components';
import './HomeComponentStyle.css';

import Folder from './FileManager';
import explorer from './Data/folderData';
import TextArea from './TextAreaComponent';
import Note from './NoteComponent';
 
const fs = require('fs');


const HomeStyle = styled.div`
    display: flex;
    flex-direction: row;
`;

const BorderDiv = styled.div`
    border:1px solid black;
    margin-top: 10px;
    width: 100%;
    height: 68%;
`;



const SideStyle = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;

    margin-left: 10px;
    margin-right: 10px;
    width: 25%;
    height: 100vh;

`;

const TextAreaStyle = styled.div`
    width: 75%;
    height: 100%;
    

    margin-top: 10px;
    margin-bottom: 10px;

    margin-left: 10px;
    margin-right: 10px;

    border:1px solid black;
`;





class HomeComponent extends Component {

    state = {
        pathText: [],
        textAreaText: []

    };


    render() {





        const handleClick = (pathText) => {
            this.setState({
                pathText: pathText
            });

        };

        const textAreaOnChange = (textAreaText) => {
            this.setState({
                textAreaText: textAreaText
            });

            
        };


        return (
            < HomeStyle  >
                <SideStyle id={"Side"}>
                    <div
                        id={"FileManager"}
                        className='FileViwerStyle' >
                        <Folder
                            explorer={explorer}
                            handleClick={handleClick}
                        />
                    </div>
                    <BorderDiv className='TexAreaStyle'>
                        <TextArea
                            changeTextArea={textAreaOnChange}
                            id={"TextArea"}
                            filePathText={this.state.pathText}
                        />
                    </BorderDiv>


                </SideStyle>


                <TextAreaStyle>
                    <Note
                        id={"Note"}
                        textAreaValue={this.state.textAreaText}
                    />
                </TextAreaStyle>



            </HomeStyle >
        )
    }
}

export default HomeComponent;