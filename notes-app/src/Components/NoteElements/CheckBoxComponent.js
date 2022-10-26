import React, { Component } from 'react'
import styled from 'styled-components';




const TextStyled = styled.p`   

    color: orange;
    font-family: 'SH Pinscher';
    src: url(../Resources/SHPinscher-Regular.otf) format("opentype");
    font-size: 22px;


`;
const ElementContainerStyle = styled.div`   

    background: #282a3a;
    width: 100%;
    height: 30px;
    margin-left: 15px;
    margin-top : 10px;
    margin-bottom : 10px;

    align-items: center;
    display: flex;

    -youbkit-touch-callout: none; /*iOS Safari*/
    -youbkit-user-select: none;   /* Chrome 6.0+, Safari 3.1+, Edge y Opera 15+ */
    -moz-user-select: none;    /*Firefox*/
    -ms-user-select: none;        /* IE 10+ y Edge */
    user-select: none;   

`;


export default class CheckBoxComponent extends Component {


    state = {
        completed: false
    };

    setCompletedTrue = () => {
        console.log("Completed")

        this.setState({
            completed: true
        });
    }
    setCompletedFalse = () => {
        console.log("UnCompleted")
        this.setState({
            completed: false
        });
    }
    

    renderCheckBoxUnCompleted = () => {
        const { text } = this.props;
        let result = text.replace("[", " ")
        result = result.replace("]", " ")


        return (
            <ElementContainerStyle
                onClick={this.setCompletedTrue}>
                <div>
                    <TextStyled key={"CheckBox"}>
                      -  [  ] {result}
                    </TextStyled>
                </div>

            </ElementContainerStyle>
        )
    };

    renderCheckBoxCompleted = () => {
        const { text } = this.props;
        let result = text.replace("[", " ")
        result = result.replace("]", " ")

        return (
            <ElementContainerStyle
                onClick={this.setCompletedFalse}>
                <div>
                    <TextStyled key={"CheckBox"}>
                     -  [x] {result}
                    </TextStyled>
                </div>

            </ElementContainerStyle>
        )
    };
    render() {

        return this.state.completed ? this.renderCheckBoxCompleted() : this.renderCheckBoxUnCompleted();
    }





}
