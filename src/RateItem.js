import React from 'react';

const style = {
    item: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        padding: '10px',
        border: '1px solid lightgrey'
    },
}

export default props => {
    return (
        <div style={style.item}>
            <div style={style.name}>
                {props.value[0]}
            </div>
            <div>
                {props.value[1]}
            </div>
        </div>
    )
}