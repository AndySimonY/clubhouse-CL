import React from 'react';

import Head from 'next/head'

import  {WelcomeStep} from '../components/steps/WelcomeStep/index.tsx';

import  {EnterNameStep} from '../components/steps/EnterNameStep/index.tsx';
import  {GitHubStep} from '../components/steps/GitHubStep/index.tsx';
import  {ChooseAvatarStep} from '../components/steps/ChooseAvatarStep/index.tsx';
import  {EnterPhoneStep} from '../components/steps/EnterPhoneStep/index.tsx';
import  {EnterCodeStep} from '../components/steps/EnterCodeStep/index.tsx';


const stepsComponents = {
  0: WelcomeStep,
  1: GitHubStep,
  2: EnterNameStep,
  3: ChooseAvatarStep,
  4: EnterPhoneStep,
  5: EnterCodeStep
}
type MainContextProps = {
  onNextStep: () => void
  step: number
}

export const MainContext = React.createContext({} as MainContextProps)

export default function Home() {

  const [step, setStep] = React.useState<number>(0);
  const Step = stepsComponents[step]

  const onNextStep = () => {
    setStep((prev) => prev + 1)
  }

  return (
<MainContext.Provider value={{step, onNextStep}}>
    <Step/>
</MainContext.Provider>
  )
}
