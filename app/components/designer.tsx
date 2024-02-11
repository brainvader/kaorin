import { ReactElement, useEffect, useRef, useState, PointerEvent } from "react";
import { XML_NAME_SPACE, XML_VERSION } from "../utils/constants";
import styles from './designer.module.css'
import Pointer from "./pointer";
import { Position } from "../types";

export default function Designer(): ReactElement<SVGSVGElement> {
    const ref = useRef<SVGSVGElement | null>(null);
    const [x0, setX0] = useState<number>(0);
    const [y0, setY0] = useState<number>(0);

    const [position, setPosition] = useState<Position>({
        x: 0,
        y: 0
    })

    useEffect(() => {
        if (!ref.current) return;
        const observer = () => {
            if (!ref.current) return;
            setX0(ref.current.getBoundingClientRect().left)
            setY0(ref.current.getBoundingClientRect().top)

        };
        const resizeObserver = new ResizeObserver(observer)
        resizeObserver.observe(ref.current);
        return () => resizeObserver.disconnect();
    }, []);

    const handlePointerMove = (event: PointerEvent<SVGSVGElement>) => {
        const { clientX: x, clientY: y } = event
        setPosition({ ...position, x: x - x0, y: y - y0 })
    }

    return (
        <svg ref={ref}
            onPointerMove={handlePointerMove}
            version={XML_VERSION}
            xmlns={XML_NAME_SPACE}
            className={styles.designer}>
            <Pointer position={position} />
        </svg>
    )
}