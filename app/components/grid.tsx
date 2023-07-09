import { ReactElement } from "react";

export default function Grid(): ReactElement<SVGGElement> {
    return (
        <g>
            <defs>
                <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
                    <path d="M 8 0 H 0 0 V 0 8" fill="none" stroke="gray" strokeWidth="0.5" />
                </pattern>
                <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                    <rect width="80" height="80" fill="url(#smallGrid)" />
                    <path d="M 80 0 H 0 0 V 0 80" fill="none" stroke="gray" strokeWidth="1" />
                </pattern>
            </defs>

            <rect width="100%" height="100%" fill="url(#grid)" />
        </g>
    )
}