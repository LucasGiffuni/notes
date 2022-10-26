import React, { Component } from 'react'
import styled from 'styled-components';




const TextStyled = styled.p`   

    color: red;
    font-family: 'SH Pinscher';
    src: url(../Resources/SHPinscher-Regular.otf) format("opentype");    font-size: 30px;
    bold: true;
    align-items: center;
    display: flex;
    justify-content: center;

`;


export default class TitleComponent extends Component {



    render() {
        const { text } = this.props;
        let result = text.replace("#", " ")
        return (
            <div>


                <TextStyled>
                    {result}
                </TextStyled>

            </div>
        )
    }

}
