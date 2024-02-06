import { Position } from "../types";

const CIRCLE_RADIUS = 5;

type PointerProps = {
    position: Position
}

export default function Pointer({ position }: PointerProps) {
    const { x, y } = position
    return <circle cx={x} cy={y} r={CIRCLE_RADIUS} fill="red" />
}