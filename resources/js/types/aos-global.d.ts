export {};

declare global {
    interface Window {
        AOS: {
            init: (options?: { duration?: number; once?: boolean; [key: string]: any }) => void;
            refresh?: () => void;
            refreshHard?: () => void;
        };
    }
}
