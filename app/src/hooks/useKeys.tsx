import { useEffect } from 'react';

export const useKeys = ({ key, meta, callback }: any) => {

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (meta) {
                if (e.metaKey && e.key === key) {
                    e.preventDefault();
                    callback();
                }
            } else {
                if (e.key === key) {
                    e.preventDefault();
                    callback();
                }
            }
        }

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [key, meta, callback]);
}