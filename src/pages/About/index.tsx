import React from 'react'
import { useTheme } from 'styled-components'
import {Slide} from '../../components/Slide'
import { Subtitle } from '../../components/Text/Subtitle'
import { Title } from '../../components/Text/Title'
import { SlideSection, AboutSection, TitleAboutSection, MessageAboutSection, SubtitleAboutSection, IconAboutSection, MdPetsIcon} from './style'
import {message} from '../../mock/Text';

export const About = () => {
  const Theme = useTheme();
  return (
    <>
      <AboutSection>
        <TitleAboutSection>
          <Title text="Missão" marginTop="20px" color={Theme.palette.primary} fontSize="28px"/>
        </TitleAboutSection>
        <MessageAboutSection>
          <SubtitleAboutSection>
            <Subtitle message={message} fontSize="24" color={Theme.palette.tertiary}/>
          </SubtitleAboutSection>
          <IconAboutSection>
            <MdPetsIcon />
          </IconAboutSection>
          
        </MessageAboutSection>
        </AboutSection>
      <SlideSection>
        <Slide />
      </SlideSection>
    </>
  )
}
