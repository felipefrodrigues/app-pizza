import React from 'react'
import Card from '../card'
import Summary from '../summary'
import { StepsProps } from './types'

function Steps({ steps, data, currentStep, next, prev }: StepsProps): JSX.Element {
  const current = steps[currentStep]
  const stepActive = data[current]
  if (stepActive) {
    return (
      <>
        <Card datas={stepActive} steps={steps} currentStep={currentStep} next={next} prev={prev} />
      </>
    )
  }
  return (
    <Summary />
  )
}

export default Steps
