export function onclick (btn_id) {
    return {
        type: 'TRANS_BTN_CLICKED',
        id: btn_id,
    };
}