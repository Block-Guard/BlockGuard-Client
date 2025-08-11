import { useEffect, useState, type ReactNode } from "react"

const useDelayRender = (items: ReactNode[], delay: number = 1000):ReactNode[] => {
    const [renderedItems, setRendedredItems] = useState<ReactNode[]>([]);
    const isDone = renderedItems.length === items.length;
    useEffect(()=>{
        if(isDone){
            return;
        }

        const timer = setTimeout(()=>{
            setRendedredItems(prevItems => [
                ...prevItems,
                items[prevItems.length]
            ]);
        }, delay)

        return () => clearTimeout(timer);
    }, [items, renderedItems, delay, isDone]);

    return [renderedItems, isDone];
    
}

export default useDelayRender;