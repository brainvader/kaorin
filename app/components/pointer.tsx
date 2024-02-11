import { Position } from "../types";

const CIRCLE_RADIUS = 5;

type PointerProps = {
    position: Position
}

export default function Pointer({ position }: PointerProps) {
    const { x, y } = position
    return <circle cx={x - CIRCLE_RADIUS / 2} cy={y - CIRCLE_RADIUS / 2} r={CIRCLE_RADIUS} fill="red" />
}