import { ReactElement, useEffect, useRef, useState, PointerEvent } from "react";
import { XML_NAME_SPACE, XML_VERSION } from "../utils/constants";
import styles from './designer.module.css'
import Pointer from "./pointer";
import { PointerPosition } from "../types";
import Grid from "./grid";

export default function Designer(): ReactElement<SVGSVGElement> {
    const ref = useRef<SVGSVGElement | null>(null);
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);

    const [position, setPosition] = useState<PointerPosition>({
        x: 0,
        y: 0
    })

    useEffect(() => {
        if (!ref.current) return;
        const observer = () => {
            if (!ref.current) return;
            setWidth(ref.current.getBoundingClientRect().width)
            setHeight(ref.current.getBoundingClientRect().height)
        };
        const resizeObserver = new ResizeObserver(observer)
        resizeObserver.observe(ref.current);
        return () => resizeObserver.disconnect();
    }, []);

    const handlePointerMove = (event: PointerEvent<SVGSVGElement>) => {
        setPosition({ ...position, x: event.clientX, y: event.clientY })
    }

    return (
        <svg ref={ref}
            onPointerMove={handlePointerMove}
            version={XML_VERSION}
            xmlns={XML_NAME_SPACE}
            className={styles.designer}>
            <Pointer position={position} />
            <Grid />
        </svg>
    )
}