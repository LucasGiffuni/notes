import React, { Component } from 'react'
import styled from 'styled-components';
import Item from './ProgressionBarItemComponent';



const TextStyled = styled.p`   

    color: orange;
    font-family: monospace;
    font-size: 30px;


    margin-left: 10px;
    

`;


export default class ProgressionBarComponent extends Component {

    state = {
        items: 4

    };





    render() {
        const { text } = this.props;



        for (let index = 0; index < 4; index++) {
            return (
                <div>
                    <TextStyled>
                        <Item text={"a"}/>
                    </TextStyled>
                </div>
            )
        }

    }
}
