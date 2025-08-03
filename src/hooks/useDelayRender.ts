import { useEffect, useState, type ReactNode } from "react"

const useDelayRender = (items: ReactNode[], delay: number = 1000):ReactNode[] => {
    const [renderedItems, setRendedredItems] = useState<ReactNode[]>([]);

    useEffect(()=>{
        if(renderedItems.length === items.length){
            return;
        }

        const timer = setTimeout(()=>{
            setRendedredItems(prevItems => [
                ...prevItems,
                items[prevItems.length]
            ]);
        }, delay)

        return () => clearTimeout(timer);
    }, [items, renderedItems, delay]);

    return renderedItems;
    
}

export default useDelayRender;