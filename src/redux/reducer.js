import {CHANGE_STATE} from "../actions/types"

export default function (state = {}, action) {
    switch (action.type) {
        case CHANGE_STATE:
            return {
                state,
                bttn: action.bttn
            };

        default:
            return state;
    }
}
