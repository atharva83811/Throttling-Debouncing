import type MOCK_DATA from "../utils/mockData";
const ResultsList = ({
    title,
    data,
    query,
    colorClass
}: {
    title: string;
    data: typeof MOCK_DATA;
    query: string;
    colorClass: string;
}) => {
    const filtered = data.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) || item.description.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div style={{ width: '30%' }}>
            <div className="card h-100 shadow-sm border-1 border-light bg-dark">
                <div className="d-flex justify-content-center gap-2 mb-3 bg-secondary rounded">
                    <h3 className="h5 mb-0 p-2" style={{ color: `${colorClass}` }}>{title}</h3>
                </div>

                <div className="card-body pt-0 d-flex flex-column">
                    <div className="mb-3 p-1 bg-dark text-light rounded text-monospace small">
                        <span className="text-light">Current Query:</span>
                        <br />
                        <strong className="text-light">"{query || '...'}"</strong>
                    </div>

                    <div className="list-group flex-grow-1 overflow-auto custom-scrollbar-bs" style={{ maxHeight: '250px' }}>
                        {filtered.length === 0 ? (
                            <p className="text-muted text-center fst-italic my-4">No matches found</p>
                        ) : (
                            filtered.map(item => (
                                <a href="#" key={item.id} className="list-group-item list-group-item-action bg-secondary rounded mb-2 shadow-sm border-0">
                                    <p className="fw-semibold text-dark mb-0 small">{item.title}</p>
                                    <p className="text-muted text-truncate mb-0" style={{ fontSize: '0.75rem' }}>{item.description}</p>
                                </a>
                            ))
                        )}
                    </div>
                    <div className="mt-3 text-end text-secondary small">
                        Results: {filtered.length}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultsList;