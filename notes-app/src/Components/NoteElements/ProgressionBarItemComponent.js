import React, { Component } from 'react'
import styled from 'styled-components';




const TextStyled = styled.p`   

    color: orange;
    font-family: monospace;
    font-size: 30px;
    

`;


export default class ProgressionBarItemComponent extends Component {



    render() {
        const { text } = this.props;

        return (
            <div>


                <TextStyled>
                    {text}
                </TextStyled>

            </div>
        )
    }

}
