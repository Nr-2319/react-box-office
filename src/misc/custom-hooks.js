import { useReducer, useEffect } from 'react';

// Reducer Function
function showsReducer(prevState, action) {
    switch (action.type) {
        case 'ADD': {
            return [...prevState, action.showId];
        }
        case 'REMOVE': {
            return prevState.filter(showId => showId !== action.showId);
        }

        default:
            return prevState;
    }
}

// React-custom Hook
function usePersistedReducer(reducer, initialState, key) {
    const [state, dispatch] = useReducer(reducer, initialState, initial => {
        const persisted = localStorage.getItem(key);

        return persisted ? JSON.parse(persisted) : initial;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);

    return [state, dispatch];
}

// another hook to use one hook
export function useShows(key = 'shows') {
    return usePersistedReducer(showsReducer, [], key);
}
