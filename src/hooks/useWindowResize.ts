import {useEffect} from "react";
import {usePathname} from "next/navigation";

export function useWindowResize(callback: () => void) {
    const pathname = usePathname();
    useEffect(() => {
        callback();

        const handleResize = () => { callback(); };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [callback, pathname]);
}
