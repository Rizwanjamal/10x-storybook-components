import React from "react";
import '@storybook/addon-knobs/register';
import { storiesOf } from "@storybook/react";

import Toggle from './Buttons/ToggleButton'
import BuisnessButton from './Buttons/BuisnessButton'

import TopCover from './covers/TopCover'

import MiddleCover from './covers/MiddleCover'
import LowerMiddle from './covers/LowerMiddle'
import GetStarted from './Buttons/GetStarted'
import Image from './Image'
import CheckBox from './CheckBox'
import Range from './Slider/Range'



storiesOf("10x", module)
    .add("Toggle Button",() => <Toggle />)
   
    .add('Buisness Button',() => <BuisnessButton />)
   
    .add('Top Cover',() => <TopCover />)
  
    .add('Middle Cover',() => <MiddleCover />)
    .add('Lower Middle',() => <LowerMiddle />)
    .add('Get Started Button',() => <GetStarted />)
    .add('Image',() => <Image />)
    .add('CheckBox',() => <CheckBox />)
    .add('Range',() => <Range />)
   
    
    


// Knobs for React props
