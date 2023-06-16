import React,{useState} from 'react'
import { 
        HeroBg, 
        VideoBg,
        HeroContainer,
        HeroContent,
        HeroH1,
        HeroP,
        HeroBtnWrapper,
        ArrowForward,
        ArrowRight     
    } from './HeroElements'

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = ()=>{
        setHover(!hover)
    }

    return (
        <HeroContainer id="home" >
            <HeroContent>
                <HeroH1> Encontre o seu profissional </HeroH1>
                <HeroP>
                    Junte-se à Workana e encontre as melhores oportunidades para o seu talento.
                </HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection