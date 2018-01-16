export function selectRecord(record) {
    console.log(record.id);
    return {
        type: 'RECORD_SELECTED',
        id: record.id,
        text: record.content,
        payload: record
    };
}
