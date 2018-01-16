export default function (state, action) {
    switch (action.type) {
        case 'TRANS_BTN_CLICKED':
            if (action.id == 'btn-l2r') {
                state.rightRecords = state.rightRecords.concat(state.leftRecords.find(record => {
                    return record.id == state.activeRecord;
                })).sort((a, b) => {
                    return a.id - b.id;
                });
                state.leftRecords = state.leftRecords.filter(record => {
                    return record.id != state.activeRecord;
                });
            } else {
                state.leftRecords = state.leftRecords.concat(state.rightRecords.find(record => {
                    return record.id == state.activeRecord;
                })).sort((a, b) => {
                    return a.id - b.id;
                });
                state.rightRecords = state.rightRecords.filter(record => {
                    return record.id != state.activeRecord;
                });
            }
            return state;
    }

    return state;
}

