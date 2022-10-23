import React, { Component } from 'react';
import styled from 'styled-components';
import './TextAreaComponentStyle.css';
import FilePath from './FilePath';


const StyledTextarea = styled.textarea`
    resize: none;
    autofocus: false;
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

    var line = null;
    this.setState({ textAreaValue: event.target.value });

    var arrayOfLines = this.state.textAreaValue.split('\n');
    console.log(arrayOfLines);


    arrayOfLines.forEach(line => {
      this.setState({
        command: false
      });
      if (line[0] === "[" && line[1] === "]") {
        var l = line.split("", line.length)


        l.forEach(char => {
          var fchar = "";

          if (char == "[") {
            fchar = "{"
            this.setState({
              command: true
            });
          }
          else if (char === "]") {
            fchar = '}';
            this.setState({
              command: true
            });
          } else {
            fchar = char

          }

        });


      }

    });


  }


  render() {
    const { filePathText, handleOnChange } = this.props;

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
            onChange={
              this.handleChange
             
            }
          >

          </StyledTextarea>

        </div>
      </StyledEditor>

    )
  }
}

export default TextAreaComponent;