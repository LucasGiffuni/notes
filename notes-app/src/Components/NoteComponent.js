import React, { Component } from 'react'
import styled from 'styled-components';
import CheckBox from './NoteElements/CheckBoxComponent'


const NoteContainerStyle = styled.div`   
    background-color:#20222e;
   
    height: 100vh;
    width: 100%;

    overflow-y: hidden;
    background: #282a3a;
    color: #FFF;
    font-family: monospace;


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
        command: false,

    };



    render() {

        const lines = [];

        const { textAreaValue } = this.props;

        const renderLines = textAreaValue.map((item, index) => {
            let actualLine = item;
            lines.push(actualLine);
            let previousLine = lines.at(lines.length - 2);
            console.log(lines)



            if (actualLine[0] === "[" && actualLine != previousLine) {
                console.log("Imprimiendo linea comando")
                return (
                    <div>
                       <CheckBox text={actualLine}/>
                        <div>

                        </div>
                    </div>

                )


            } else {
                console.log("Imprimiendo linea normal")
                return (
                    <div key={index}>
                        {actualLine}
                    </div>
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
