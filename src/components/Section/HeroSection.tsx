import React, { useRef, useState } from "react"
import styled from "styled-components"
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import styles from './styles.module.css'
import Switch from "../UI/Switch"
import { useSpring, animated } from "@react-spring/web"
import Slider from "../../content/Slides.json"
const MyParallax = animated(Parallax)

export default function HeroSection() {
    const parallax = useRef<IParallax>(null)
    const [auto, setAuto] = useState(true)
    const scroll = (to: number) => {
        if (parallax.current) {
            parallax.current.scrollTo(to)
        }
    }
    const { value } = useSpring({
        from: { value: 0 },
        to: async (next) => {
            while (auto) {
                await next({ value: 5 });
                await next({ value: 0 });
            }
        },
        onChange(result) {
            if (typeof result == 'number' && auto) {
                scroll(Number(result))
            }
        },
        config: { duration: 20000, round: 1 }, // Adjust duration as per your preference
    });

    return (
        <Background>
            <Switch style={{
                position: "absolute",
                bottom: 35,
                right: 30,
                zIndex: 5,
                width: 50,
                height: 20
            }} checked={auto} handleChange={() => setAuto(!auto)} />
            {/* <Counter>
                {value}
            </Counter> */}
            <MyParallax tabIndex={value} className={styles.container} ref={parallax} pages={3} horizontal>
                <Slide offset={0} gradient="slide0" onClick={() => scroll(1)} />
                <Slide offset={1} gradient="slide1" onClick={() => scroll(2)} />
                <Slide offset={2} gradient="slide2" onClick={() => scroll(3)} />
                <Slide offset={3} gradient="slide3" onClick={() => scroll(0)} />
                {/* <Slide offset={4} gradient="slide4" onClick={() => scroll(0)} /> */}
                {/* <Slide offset={5} gradient="slide5" onClick={() => scroll(0)} /> */}
            </MyParallax>
        </Background>)
}
interface PageProps {
    offset: number
    gradient: string
    onClick: () => void
}
// const Counter = styled(animated.span)`
//     position: absolute;
//     top: 35px;
//     left: 55px;
//     z-index: 5;
//     width: 50;
//     height: 20;
//     background-color: #e2e2e2;
//     opacity: 0.3;
//     backdrop-filter: invert(40%);
//     width: 20px;
//     height: 20px;
//     border-radius: 50%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-size: 12px;
//     font-weight: bold;
//     font-family: 'Times New Roman', Times, serif;
//     user-select: none;
// `
const Slide = ({ offset, gradient, onClick }: PageProps) => (
    <>
        <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
            <div className={styles.slopeBegin} />
        </ParallaxLayer>

        <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
            <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
        </ParallaxLayer>

        <ParallaxLayer className={`${styles.text} ${styles.number}`} offset={offset} speed={0.3}>
            <SlidePan>
                <Title>
                    {Slider.section[offset]?.Titre}
                </Title>
                <Description>
                    {Slider.section[offset]?.Description}
                </Description>
            </SlidePan>
        </ParallaxLayer>
    </>
)

const Description = styled(animated.p)`
    font-size: 16px;
    text-transform: lowercase;
    text-decoration: solid;
    font-smooth: inherit;
`
const Title = styled(animated.h2)`
    font-size: 22px;
    @media screen and (max-width: 600px) {
        font-size: 8px;
    }
`
const SlidePan = styled(animated.div)`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: baseline;
    gap: 10px;
    max-width: 50%;
    padding-left:0.5em;
    @media screen and (max-width: 600px) {
        padding-left:0.1em;
        max-width: 100%;
    }
`
const Background = styled.div`
    margin-top: -12px;
    position: relative;
    max-width: 100%;
    min-height: 400px;
    height: 100vh;
    background-color:#00AEF099;
`