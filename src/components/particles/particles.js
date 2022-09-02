import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";

function ParticlesLayout() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
    <Particles options={particlesOptions} init={particlesInit} style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(#8b9798 0%, rgb(60, 60, 60) 100%)"
            }}/>
    );
}

export default ParticlesLayout;
