export default function(state=null, action) {
    switch(action.type) {
        case 'RECORD_SELECTED':
            return action.id;

    }

    return state;
}