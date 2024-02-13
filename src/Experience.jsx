import { Casa } from "./components/Casa"

export const Experience = ({ section }) => {

    return (
        <>
            <mesh>
                <boxGeometry args={[500, 1, 500]} />
                <meshStandardMaterial />
            </mesh>
            <Casa />
        </>
    )
}