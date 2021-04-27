import { DefaultTheme } from "styled-components/native";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    fonts: {
      heading: string;
      text: string;
      complement: string;
    }
    colors: {
      green: string;
      green_dark: string;
      green_light: string;
    
      heading: string;
      body_dark: string;
      body_light: string;
    
      background: string;
      shape: string;
      white: string;
      gray: string;
    
      blue: string;
      blue_light: string;
    
      red: string;
    }
  }
}

export const light: DefaultTheme = {
  title: "light",
  colors:{
    green: '#32B768',
    green_dark: '#2B7A4B',
    green_light: '#DAF2E4',

    heading: '#52665A',
    body_dark: '#738078',
    body_light: '#AAB2AD',

    background: '#FFFFFF',
    shape: '#F0F0F0',
    white: '#FFFFFF',
    gray: '#CFCFCF',

    blue: '#3D7199',
    blue_light: '#EBF6FF',

    red: '#E83F5B'
  },
  fonts:{
    heading: 'Jost_600SemiBold',
    text: 'Jost_400Regular',
    complement: 'Jost_400Regular'
  }
  
};