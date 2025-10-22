import React from 'react'

export const ShowDataset = ({ datasets, setDatasets, status, setStatus, record, setRecord }) => {

    const statusColors = {
        Raw: 'pink',
        Cleaned: '#4CAF50',
        Augmented: '#FF9800',
        'Ready for Training': '#2196F3',
    };

    const handleEdit = (id) => {
        const selectedDataset = datasets.find(x => x.id === id);
        setRecord(selectedDataset)
        setStatus(selectedDataset.status)
    }

    const handleDelete = (id) => {
        const updatedDatasets = datasets.filter(x => x.id !== id);
        setDatasets(updatedDatasets);

    }

    return (
        <section className='showDataset'>
            <div className='head'>
                <div>
                    <span className='title'>Datasets</span>
                    <span className='count'>{datasets.length}</span>
                </div>
                <button className="removeAll bi-trash3" onClick={() => { }}>Remove All</button>
            </div>
            <ol>
                {datasets.map((dataset, index) => (
                    <li key={dataset.id} style={{ borderLeftColor: statusColors[dataset.status] }}>
                        <p>
                            <span className='name'>{dataset.name}</span>
                            <span className='status' style={{ backgroundColor: statusColors[dataset.status] }}>{dataset.status}</span>
                        </p>
                        <i className='bi bi-pencil-square' onClick={() => handleEdit(dataset.id)} />
                        <i className='bi bi-x-square-fill' onClick={() => handleDelete(dataset.id)} />
                    </li>
                ))}

            </ol>
        </section>
    )
}
