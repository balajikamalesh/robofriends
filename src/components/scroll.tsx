import React from 'react';

const Scroll = (props: any) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;