import React, { Component } from 'react'
import styled from 'styled-components';
import CheckBoxComponent from './NoteElements/CheckBoxComponent'
import TitleComponent from './NoteElements/TitleComponent'


const NoteContainerStyle = styled.div`   
    background-color:#20222e;
   
    height: 100vh;
    width: 100%;

    overflow-y: hidden;
    background: #282a3a;
    color: #FFF;
    font-family: monospace;


`;
const NormalTextStyle = styled.div`   
 
    color: #FFF;
    font-family: monospace;
    font-size: 15px;
    margin-left: 15px;
    margin-top: 2px;


`;
const BlankSpaceStyle = styled.span`   
white-space: pre-line

`;


const CommandTextStyled = styled.div`   
    background-color:#20222e;
   
    height: 100vh;
    width: 100%;

    overflow-y: hidden;
    background: #282a3a;
    color: red;
    font-family: monospace;


`;


export default class NoteComponent extends Component {


    state = {
        command: false

    };



    render() {

        const lines = [];

        const { textAreaValue } = this.props;

        const renderLines = textAreaValue.map((item, index) => {
            let actualLine = item;
            let previousLine = lines.at(lines.length - 2);



            if (actualLine[0] === "[" && actualLine != previousLine) {
                console.log("Imprimiendo linea comando")
                return (
                    <div>
                        <CheckBoxComponent text={actualLine} />

                    </div>

                )


            } else if (actualLine[0] === "#" && actualLine != previousLine) {
                console.log("Imprimiendo linea comando")
                return (
                    <div>
                        <TitleComponent text={actualLine} />

                    </div>

                )


            } else if (actualLine === " " && actualLine != previousLine) {
                console.log("/n")
                return (
                    <BlankSpaceStyle />

                )


            } else {
                console.log("Imprimiendo linea normal")
                return (
                    <NormalTextStyle key={index}>
                        {actualLine}
                    </NormalTextStyle>
                )

            }





        })



        return (
            <NoteContainerStyle>
                {renderLines}
            </NoteContainerStyle>
        )
    }





}
