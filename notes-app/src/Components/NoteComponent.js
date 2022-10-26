import React, { Component } from 'react'
import styled from 'styled-components';
import CheckBoxComponent from './NoteElements/CheckBoxComponent'
import TitleComponent from './NoteElements/TitleComponent'


const NoteContainerStyle = styled.div`  

    color: #FFF;
    font-family: 'SH Pinscher';
    src: url(../Resources/SHPinscher-Regular.otf) format("opentype");
    font-size: 18px
    background-color:#20222e;
    height: 100vh;
    width: 100%;

    overflow-y: hidden;
    background: #282a3a;
  

`;
const NormalTextStyle = styled.div`   
 
    color: #FFF;
    font-family: 'SH Pinscher';
    src: url(../Resources/SHPinscher-Regular.otf) format("opentype");
    font-size: 18px
    padding-left: 15px;
    margin-top: 2px;


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

            const RE1 = new RegExp('^[*,\s]+:+[a-z]');

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
