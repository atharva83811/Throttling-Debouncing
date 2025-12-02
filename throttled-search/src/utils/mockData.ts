const MOCK_DATA = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    title: `Project Element ${i + 1}`,
    description: `High-performance simulation data point #${i + 1} for testing latency.`
}));

export default MOCK_DATA;