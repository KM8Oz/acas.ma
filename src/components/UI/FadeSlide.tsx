import { animated, useTransition } from "@react-spring/web"
import { useState } from "react"
import styled from "styled-components"
interface Props {
    slides: string[]
}
export default function FadeSlide({ slides }: Props) {
    const [index, set] = useState(0)
    const transitions = useTransition(index, {
        key: index,
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 1000 },
        onRest: (_a, _b, item) => {
            if (index === item) {
                set(state => (state + 1) % slides.length)
            }
        },
        exitBeforeEnter: true,
    })
    return (
        <Container>
            {transitions((style, i) => (
                <Slide
                    style={{
                        ...style,
                        backgroundImage: `url(${slides[i]})`,
                    }}
                />
            ))}
        </Container>
    )
}

const Container = styled(animated.div)`
    display: flex;
    height: 250px;
    width: 100%;
    position: relative;
    background-color: #ffffff;
    border-radius: 12px;
    padding: 3px;
    box-shadow: 0px 0px 3px 0px #cccccc;
`
const Slide = styled(animated.div)`
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 12px;
    user-select: none;
    background-blend-mode: hard-light;
`