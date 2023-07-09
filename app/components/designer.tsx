import { ReactElement, useEffect, useRef, useState } from "react";
import { XML_NAME_SPACE, XML_VERSION } from "../utils/constants";
import styles from './designer.module.css'

const CIRCLE_RADIUS = 80;

export default function Designer(): ReactElement<SVGSVGElement> {
    const ref = useRef<SVGSVGElement | null>(null);
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);

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

    return (
        <svg ref={ref}
            version={XML_VERSION}
            xmlns={XML_NAME_SPACE}
            className={styles.designer}>
            <circle
                cx={width / 2 + CIRCLE_RADIUS / 2}
                cy={height / 2 - CIRCLE_RADIUS / 2}
                r={CIRCLE_RADIUS}
                fill="green" />
        </svg>
    )
}