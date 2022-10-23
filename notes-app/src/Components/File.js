import React, { Component } from 'react'
import styled from 'styled-components';



const FileItemContainerStyle = styled.div`   
    background-color:#20222e;
    :hover {
        background-color: #323449;
    }
    height: 25px;
`;
const Text = styled.h1`
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 5px;
    margin-left: ${props => (props.lvl * 25) +10}px;
    padding-top: 4px;
`;

const FileTitleText = styled.p`
    font-size: 10px;
    margin-right:  50%;
    margin-left: ${props => (props.lvl * 25) +10}px;
    padding-top: 5px;

    display: flex;
    align-items: flex-start;
`;
const VerticalSeparator = styled.hr`
    border-left: 0px gray;
    height: 30px;
    margin-left: -4px;

`;


export default class File extends Component {


    renderFolder = () => {
        const {isSelected, explorer, expand } = this.props;
        if (!explorer.lvl == 0) {
            if (expand) {
                return (
                    <FileItemContainerStyle>
                        <Text  lvl={explorer.lvl}>{explorer.name + " <---"}</Text>

                    </FileItemContainerStyle>

                )
            } else {
                return (
                    <FileItemContainerStyle l>
                        <Text  lvl={explorer.lvl}>{explorer.name + " --->"}</Text>

                    </FileItemContainerStyle>
                )
            }
        } else {
            if (expand) {
                return (
                    <FileItemContainerStyle >
                        <Text  lvl={explorer.lvl}>{explorer.name + " <---"}</Text>

                    </FileItemContainerStyle>
                )
            } else {
                return (
                    <FileItemContainerStyle >
                        <Text  lvl={explorer.lvl}>{explorer.name + " --->"}</Text>

                    </FileItemContainerStyle>
                )
            }
        }



    };

    renderFile = () => {
        const { isSelected, explorer } = this.props;
        if (!explorer.isRoot) {
            return (
                <div>
                    <FileItemContainerStyle>
                        <FileTitleText  lvl={explorer.lvl}>{explorer.name}</FileTitleText>

                    </FileItemContainerStyle>
                </div>

            )
        }

    };
    render() {
        const { explorer } = this.props;

        return explorer.isFolder ? this.renderFolder() : this.renderFile();
    }





}
