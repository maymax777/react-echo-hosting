import { useState, useEffect } from 'react';

export default function usePromise(apiAction) {
    const [loading, setLoading] = useState(false);
    const [resolved, setResolved] = useState(null);
    const [error, setError] = useState(null);
    const [param, setParam] = useState(null);    

    useEffect(() => {        
        const process = async () => {
            setLoading(true);
            let resolved = null;
            try {
                resolved = await apiAction(param);
                setResolved(resolved.data);                
                setError(null);
            } catch (e) {
                setError(e.response.data);                
                setResolved(null);
            }

            setLoading(false);
        };

        if (param) process();

    }, [param]);

    return [{ loading, resolved, error }, setParam];
}

