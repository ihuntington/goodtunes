export const useSessionStorage = () => {
    const set = (key: string, value: string) => {
        window.sessionStorage.setItem(key, value);
    };

    const get = <T>(key: string): T | null => {
        const item = window.sessionStorage.getItem(key);

        if (!item) {
            return null;
        }

        return JSON.parse(item);
    };

    const remove = (key: string) => {
        window.sessionStorage.removeItem(key);
    }

    return {
        set,
        get,
        remove,
    };
}