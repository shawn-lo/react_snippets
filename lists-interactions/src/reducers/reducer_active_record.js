export default function(state, action) {
    switch(action.type) {
        case 'RECORD_SELECTED':
            console.log('The last record state is ' + state);
            return action.id;
    }

    return state;
}