import React from 'react';

const Tag = (props) => {
    return (
        <li className='tags'>
            {props.tagName}
        </li>
    );
};

export default Tag;