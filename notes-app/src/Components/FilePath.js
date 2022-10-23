import React, { Component } from 'react'
import styled from 'styled-components';




const PathTextStyle = styled.div`

    font-family: 'Roboto';
    font-size: 12px;
    color: blanchedalmond;
    margin-left: 5px;
 
`;

export default class FilePath extends Component {



    render() {
        const { Text } = this.props;


        return (
            <div><PathTextStyle>{Text}</PathTextStyle></div>

        )
    }





}
