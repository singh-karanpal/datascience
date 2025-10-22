import React from 'react'

export const AddDataset = ({ datasets, setDatasets, status, setStatus, record, setRecord }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        if (record.id) {
            const selectedDataset = datasets.map((x) => (
                x.id === record.id ? { ...x, name: record.name, status: status } : x
            ));

            setDatasets(selectedDataset);
            setRecord({});

        } else {
            const date = new Date();
            const newDataset = { id: date.getTime(), name: e.target.dataset.value, status }

            // append datasets
            setDatasets([...datasets, newDataset])

            // Reset form
            setRecord({});
        }


    }

    return (
        <div className='addDatasets'>
            <section>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='dataset' value={record.name || ""} autoComplete='off' placeholder='Add Dataset' maxLength="50" onChange={e => setRecord({ ...record, name: e.target.value })} />
                    <label htmlFor='dataset-status'>Status</label>
                    <select id='statusSelector' onChange={(e) => setStatus(e.target.value)} value={status}>
                        <option value='Raw'>Raw</option>
                        <option value='Cleaned'>Cleaned</option>
                        <option value='Augmented'>Augmented</option>
                        <option value='Ready for Training'>Ready for Training</option>
                    </select>
                    <button type='submit'>{record.id ? 'Update' : 'Track'}</button>
                </form>
            </section>
        </div>
    )
}
