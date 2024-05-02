import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { Container } from "../Block/styles"
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import styles from './styles.module.css'
import Switch from "../UI/Switch"
import { sleep } from "../../utils"

export default function HeroSection() {
    const parallax = useRef<IParallax>(null)
    const [auto, setAuto] = useState(true)
    const scroll = (to: number) => {
        if (parallax.current) {
            parallax.current.scrollTo(to)
        }
    }
    useEffect(() => {
        (async () => {
            let i = 0;
            while (auto) {
                await sleep(4000)
                if (i <= 5) {
                    i++;
                } else {
                    i = 0;
                }
                scroll(i)
            }
        })()
    }, [auto])
    return (
        <Background>
            <Switch style={{
                position: "absolute",
                top:30,
                right:30,
                zIndex:5
            }} checked={auto} handleChange={() => setAuto(!auto)} />
            <Parallax className={styles.container} ref={parallax} pages={5} horizontal>
                <Slide offset={0} gradient="slide0" onClick={() => scroll(1)} />
                <Slide offset={1} gradient="slide1" onClick={() => scroll(2)} />
                <Slide offset={2} gradient="slide2" onClick={() => scroll(3)} />
                <Slide offset={3} gradient="slide3" onClick={() => scroll(4)} />
                <Slide offset={4} gradient="slide4" onClick={() => scroll(5)} />
                <Slide offset={5} gradient="slide5" onClick={() => scroll(0)} />
            </Parallax>
        </Background>
    )
}
interface PageProps {
    offset: number
    gradient: string
    onClick: () => void
}

const Slide = ({ offset, gradient, onClick }: PageProps) => (
    <>
        <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
            <div className={styles.slopeBegin} />
        </ParallaxLayer>

        <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
            <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
        </ParallaxLayer>

        <ParallaxLayer className={`${styles.text} ${styles.number}`} offset={offset} speed={0.3}>
            <span>0{offset + 1}</span>
        </ParallaxLayer>
    </>
)

const Background = styled(Container)`
    margin-top: -12px;
    position: relative;
    max-width: 100%;
    min-height: 400px;
    height: 100vh;
    background-color:#00AEF099;
    
`