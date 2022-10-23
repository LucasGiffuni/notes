import React, { Component } from 'react'
import styled from 'styled-components';



const NoteContainerStyle = styled.div`   
    background-color:#20222e;
   
    height: 100vh;
    width: 100%;

    overflow-y: hidden;
    background: #282a3a;
    color: #FFF;
    font-family: monospace;


`;



export default class NoteComponent extends Component {

    render() {
        const { line } = this.props;

        return (
            <NoteContainerStyle>
                <p>
                    {line}
                </p>
            </NoteContainerStyle>
        )
    }





}
