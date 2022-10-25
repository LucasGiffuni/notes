import React, { Component } from 'react';
import styled from 'styled-components';
import './TextAreaComponentStyle.css';
import FilePath from './FilePath';


const StyledTextarea = styled.textarea`
    resize: none;
    autofocus: true;
    background-color :#282a3a; 
    text-color: ${props => (props.command ? "red" : "red")};
    line-height: 20px;
    overflow-y: hidden;
    padding: 0;
    border: 0;
    color: ${props => (props.command ? "red" : "white")};
    outline: none;
    resize: none;

  `;

const StyledFilePath = styled.div`
  background-color : #282a3a; 
  width: 100%;
  height: 20px;
  margin-bottom: -3px;

`;
const StyledEditor = styled.div`
  display: row;
  align-items: flex-start;

`;






//https://www.webtips.dev/add-line-numbers-to-html-textarea
class TextAreaComponent extends Component {


  state = {
    textAreaValue: "",
    command: false,
    finalText: ""
  };





  handleChange = (event) => {
    const lineNumbers = document.querySelector('.line-numbers')
    const numberOfLines = event.target.value.split('\n').length

    lineNumbers.innerHTML = Array(numberOfLines)
      .fill('<span></span>')
      .join('');

    this.setState({ textAreaValue: event.target.value });


  }


  render() {
    const { filePathText, changeTextArea } = this.props;

    const sendTextAreaValue = () => {
      changeTextArea(this.state.textAreaValue.split('\n'))
    }

    const textAreaOnChange = e => {
      this.handleChange(e)
      sendTextAreaValue()
    }



    return (
      <StyledEditor>
        <StyledFilePath><FilePath Text={filePathText} /></StyledFilePath>
        <div className="editor">
          <div className="line-numbers">
            <span></span>
          </div>
          <StyledTextarea
            command={this.state.command}
            value={this.state.textAreaValue}
            onChange={textAreaOnChange}
          >

          </StyledTextarea>

        </div>
      </StyledEditor>

    )
  }
}

export default TextAreaComponent;