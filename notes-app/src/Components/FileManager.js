import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

import File from './File';



const FilesStyle = styled.div`

    font-family: 'Roboto', sans-serif ;
    font-size: 14px;
    color: blanchedalmond;

    width:100%;
    min-height:100%;
 
    margin-top: -10px;
    margin-bottom: -10px;

`;

const FileItemStyle = styled.div`


`;


const state = {
    pathText: []

};


function addToPathVariable(explorer, expand) {
    if (!state.pathText.includes(explorer)) {
        let lastElement = state.pathText.at(state.pathText.length - 1)

        if (state.pathText.length === 0) {
            state.pathText.push(explorer)
        } else {
            if (explorer.lvl !== lastElement.lvl) {
                state.pathText.push(explorer)
            } else {
                state.pathText.pop()
                state.pathText.push(explorer)
            }
        }
    } else {
        if (expand) {
            state.pathText.pop(explorer)
        }
    }
}

function returnPathFromState() {
    var pathText = "";
    state.pathText.forEach(element => {
        if (element.isFolder) {
            pathText = pathText + element.name + " -> ";
        } else {
            pathText = pathText + " " + element.name;
        }
    });
    return pathText;
}


function Folder({ explorer, handleClick }) {
    const [expand, setExpand] = useState(false);

    return (
        <div>
            <FilesStyle
                onClick={() => {
                    setExpand(!expand);
                    addToPathVariable(explorer, explorer.lvl, expand);
                    handleClick(returnPathFromState())

                }}>
                <span  >
                    <File isSelected={false} explorer={explorer} expand={expand} />
                </span>
            </FilesStyle>

            <FileItemStyle
                style={{ display: expand ? "block" : "none", paddingLeft: 0 }}>
                {
                    explorer.items.map((explorer) => (
                        <div key={explorer.name}>
                            <Folder explorer={explorer}
                                handleClick={handleClick} />

                        </div>
                    ))}
            </FileItemStyle>

        </div >
    )
}

export default Folder;

