import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        // Creating a timer pushes the callback to the Macro Task Queue
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Clean up effect: Clears the timer if value changes before delay finishes
        // This creates the "cancellation" effect of debouncing
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

export default useDebounce;