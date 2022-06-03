/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import { darken, rgba } from 'polished'
import {
  Logo,
  Divider,
  RoundButton,
  Icon,
  Loader
} from '../../common/components'
import {
  Label,
  Input
} from '../../features/form/components/fragments/LabeledInput'
import { LoadingBar } from '../../features/preview/components'
import { colors } from '../../common/theme'

const Wrapper = styled.div`
  max-width: 850px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.header`
  width: 100%;
  margin-top: 50px;
`

const Link = styled.a`
  color: ${colors.primary};
`

const SectionDivider = Divider.extend`
  width: 100%;
  margin: 4em 0;
  padding: 0;
`

const Content = styled.main`
  width: 100%;
`

const Heading = styled.h2`
  color: white;
  font-size: 2.25em;
  margin: 10px 0;
`

const Question = styled.p`
  font-size: 1.5em;
`

const Answer = styled.p`
  padding-left: 1em;
`

const ListAnswer = styled.ol`
  padding-left: 2em;
  li {
    padding: 2px 0;
  }
`

const Box = styled.div`
  width: calc(100% - 4px);
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  border: 2px solid ${colors.borders};
`

const Color = styled.div`
  width: 100px;
  height: 100px;
  background: ${props => props.color};
  color: ${props => (props.dark ? 'black' : colors.foreground)};
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 850px) {
    width: 75px;
    height: 75px;
    margin: 2px;
  }
`

const Button = styled.button`
  width: 100px;
  height: 35px;
  padding: 5px 10px;
  border: 1px solid;
  border-color: ${colors.primary};
  border-radius: 2px;
  background: transparent;
  color: ${colors.primary};
  margin: 15px;
  outline: none;
  transition: all 0.4s ease;
  user-select: none;

  &:hover {
    background: ${colors.primary};
    color: ${colors.background};
    cursor: pointer;
  }

  i {
    color: ${colors.primary};
  }

  &:disabled {
    border-color: #444;
    color: #444;

    &:hover {
      background: ${colors.background};
      border-color: #444;
      color: #444;
      cursor: not-allowed;
    }

    i {
      color: #444;
    }

    &:active {
      position: initial;
    }
  }
`

const PrimaryButton = Button.extend`
  background: linear-gradient(
    40deg,
    ${darken(0.3, colors.primary)},
    ${colors.primary}
  );
  color: white;
  border-radius: 100px;
  border: 1px solid ${darken(0.1, colors.primary)};
  box-shadow: 0 0 0 0 ${rgba(colors.primary, 0.7)};

  &:hover {
    background: linear-gradient(
      40deg,
      ${darken(0.4, colors.primary)},
      ${colors.primary}
    );
    color: white;
    cursor: pointer;
  }
`

const UnfilledButton = PrimaryButton.extend`
  background: transparent;
  &:hover {
    background: linear-gradient(
      40deg,
      ${darken(0.5, colors.primary)},
      ${darken(0.3, colors.primary)}
    );
    animation: none;
    cursor: pointer;
  }
`

const RoundedButton = RoundButton.extend`
  margin: 15px;
`

const VerticalBox = Box.extend`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const FormLabel = Label.extend`
  margin-top: 0;
`

const FormInput = Input.withComponent('input').extend`
  width: 50%;
  margin-bottom: 25px;

  @media screen and (max-width: 850px) {
    width: 50%;
  }
`

const FormDivider = Divider.extend`
  width: 50%;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 850px) {
    width: 50%;
  }
`

function About() {
  return (
    <Wrapper>
      <Header>
        <Logo big />
        <p>
          Resume Builder is a tool for automatically generating beautiful ATS proof resumes.
		Understand what goes behind crafting the
		perfect resume that not only showcases
		you in the best light but also gets hiring
		managers interested in you.
        </p>
<p>
 <b> According to a study
by TopResume, 75% of resumes never even reach the hiring manager and
are rejected by the Application Tracking System (ATS). </b>
</p>
        <p>
          The webapp was made by students of Methodist College of Engineering & Technology with the mission to assist students to craft a significant resume.
        </p>
      </Header>
      <SectionDivider />
      <Content>
        <section>
          <Heading>Help</Heading>
          <Question>How do I use this website?</Question>
          <ListAnswer>
            <li>Choose a template.</li>
            <li>Fill in as much (or as little) info as you want.</li>
            <li>
              Press the <strong>MAKE</strong> button to see your output.
            </li>
            <li>
              Once you're happy, download the resume as a PDF, JSON, or TeX
              document.
            </li>
          </ListAnswer>
          <Question> <b>
            Why do I use this product?
</b>
          </Question>
          <Answer>
           <p> <b> You can have solid technical skills. However, if your resume is not
ATS-friendly, then you are nowhere close to getting that much-anticipated
interview call. </b>
</p>
<p>
Of course, there is no one-size-fits-all resume format. Different hiring
managers look for different things in a resume. But there are some
universally common things every hiring manager looks for when scanning
through a resume:
As you read along, you will learn how to adopt these points in your resume
and create a killer resume that will:
<ListAnswer>
<li>Neat formatting</li>

<li>Correct grammar</li>

<li>Personalization</li>

<li>Necessary qualification and certifications</li>

<li>Easy to scan</li>

<li>One-page resume</li>
</ListAnswer>
</p>
          </Answer>
         
        </section>
        <SectionDivider />
        

        
      </Content>
    </Wrapper>
  )
}

export default About
