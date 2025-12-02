import './App.css'
import useDebounce from './hooks/useDebounce';
import useThrottle from './hooks/useThrottle';
import MOCK_DATA from './utils/mockData';

import React, { useState, useEffect, useRef } from 'react';
import ResultsList from './components/ResultsList';

export default function App() {
  const [input, setInput] = useState('');

  // Debounced: Updates only after 1000ms of silence
  const debouncedInput = useDebounce(input, 1000);

  // Throttled: Updates at most every 1500ms
  const throttledInput = useThrottle(input, 1500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
      <style>{`
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');

        .custom-scrollbar-bs::-webkit-scrollbar {
            width: 8px;
        }
        .custom-scrollbar-bs::-webkit-scrollbar-thumb {
            background-color: #dee2e6; 
            border-radius: 4px;
        }
        .custom-scrollbar-bs {
            scrollbar-width: thin;
            scrollbar-color: #dee2e6 transparent;
        }
      `}</style>

      <div className="bg-dark h-100">
        <div className="container">

          <header className="text-center d-flex justify-content-center flex-column align-items-center">
            <h1 className="w-100 fw-bold text-light my-2">Deep JS: Event Loop Visualizer</h1>
            <p className="text-secondary lead fs-6 w-75">
              Type rapidly in the box below to observe how <strong>Debounce</strong> (waits for silence) and <strong>Throttle</strong> (paces execution) process the Event Loop differently compared to standard React state updates.
            </p>
          </header>

          <div className="d-flex justify-content-center mb-2">
            <div className="w-50">
              <div className="input-group">
                <input
                  type="text"
                  value={input}
                  onChange={handleChange}
                  placeholder="Type here rapidly to test performance..."
                  className="form-control form-control-lg bg-dark text-light"
                />
              </div>
              <div className="text-light" style={{ zIndex: 100 }}>
                Current render count: {useRenderCount()}
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-evenly mb-2 flex-nowrap w-100">

            <ResultsList
              title="Instant (Standard)"
              data={MOCK_DATA}
              query={input}
              colorClass="#353535"
            />

            <ResultsList
              title="Debounced (1000ms)"
              data={MOCK_DATA}
              query={debouncedInput}
              colorClass="#353535"
            />

            <ResultsList
              title="Throttled (1500ms)"
              data={MOCK_DATA}
              query={throttledInput}
              colorClass="#353535"
            />

          </div>

          <div className="row g-4 text-center small text-dark">
            <div className="col-md-4">
              <div className="p-3 border border-primary-subtle bg-primary-subtle rounded">
                <strong className="text-primary d-block mb-1">Standard Render</strong>
                Updates on every single keystroke. Uses standard React state. Can cause performance issues if the calculation is heavy.
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 border border-success-subtle bg-success-subtle rounded">
                <strong className="text-success d-block mb-1">Debouncing</strong>
                "Wait until I stop talking." <br />
                Best for: <strong>Search bars</strong>, auto-save forms. <br />
                Fires only once the user stops typing for the delay period.
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 border border-info-subtle bg-info-subtle rounded">
                <strong className="text-info d-block mb-1">Throttling</strong>
                "Don't talk over me." <br />
                Best for: <strong>Scroll events</strong>, resize listeners, button spam prevention. <br />
                Guarantees updates at a fixed rate (e.g., once every 1.5s).
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

// Helper hook just for debugging renders
function useRenderCount() {
  const ref = useRef(0);
  useEffect(() => {
    ref.current++;
  });
  return ref.current;
}