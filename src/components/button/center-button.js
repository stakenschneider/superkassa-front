import React from 'react';
import "./center-button.css"
import {store} from "../../redux/store";
import {CHANGE_STATE} from "../../actions/types"

function changeState(bttn) {
    return {
        type: CHANGE_STATE,
        bttn
    };
}

function CenterButton({bttn}) {
    function onClick() {
        store.dispatch(changeState(!bttn));
    }

    const buttonClasses = [
        'circle',
        bttn ? 'circle__on' : 'circle__off',
    ];

    return (


        <div onClick={onClick} className={buttonClasses.join(' ')}>
            <div className="state_text">
                {bttn ? "ON" : "OFF"}
            </div>
        </div>
    );
}

export default CenterButton;