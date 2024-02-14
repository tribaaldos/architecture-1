import { degToRad } from "three/src/math/MathUtils.js";
import { Casa } from "./components/Casa"
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { CameraControls } from "@react-three/drei";
import { sections } from "./UI";
const cameraPositions = {
    primera: [3, 5, 50, 5, 5, 0],
    segunda: [-2.5, 3.53, 11.15, -8.89, -0.65, 0.17],
    tercera: [-12.5, 12.53, 11.15, -8.89, -0.65, 0.17],
    cuarta: [-15.5, 12.53, 11.15, -8.89, -0.65, 0.17],

};

const cameraPositionsSmallScreen = {
    primera: [4.25, 2.75, 50.91, -0.05, -0.34, 0.20],
    segunda: [-3.18, 3.78, 20.09, -10.01, -0.57, 0.47],
    tercera: [-13.18, 12.78, 20.09, -10.01, -0.57, 0.47],
    cuarta: [-15.18, 12.78, 20.09, -10.01, -0.57, 0.47],

};

const SMALL_SCREEN_THRESHOLD = 900;




export const Experience = ({ section }) => {
    const controls = useRef();
    const [introFinished, setIntroFinished] = useState(false);
    const intro = async () => {
        controls.current.setLookAt(0, 5, 25, 0, 0, 0, false);
        await controls.current.dolly(3, true);
        await controls.current.rotate(degToRad(180), degToRad(-5), true);

        setIntroFinished(true);
        playTransition();
    }

    const playTransition = () => {
        if (window.innerWidth > SMALL_SCREEN_THRESHOLD) {
            controls.current.setLookAt(...cameraPositions[sections[section]], true);
        } else {
            controls.current.setLookAt(
                ...cameraPositionsSmallScreen[sections[section]],
                true
            );
        }
    };
    useEffect(() => {
        intro();
    }, []);

    useEffect(() => {
        if (!introFinished) {
            return;
        }
        playTransition();
    }, [section]);

    return (
        <>
            <CameraControls ref={controls} />
            <mesh>
                <boxGeometry args={[500, 1, 500]} />
                <meshStandardMaterial />
            </mesh>
            <Casa />
        </>
    )
}