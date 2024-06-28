import React from 'react';

function Track(props) {
    const { onAdd, onRemove } = props;

    const handleAdd = () => {
        onAdd(props.track);
    }

    const handleRemove = () => {
        onRemove(props.track);
    }

    const renderButton = () => {
        if(props.isAdd) {
            return (
                <button
                onClick={handleAdd}>
                    +</button>
            );
        } else {
            return (
                <button
                onClick={handleRemove}>
                    -</button>
            );
        }
    }

    return (
        <div>
            <p>{props.title}</p>
            <p>{props.artist} | {props.album}</p>
            {renderButton()}
        </div>
    );
}

export default Track;