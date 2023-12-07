import { createContext,useState, useMemo } from "react";
import {createTheme}  from '@mui/material/styles'


export const Tokens =(mode)=>({
    ...(mode === "dark" 
         ? {indigo: {
            100: "#e0e0e0",
            200: "#c2c2c2",
            300: "#a3a3a3",
            400: "#858585",
            500: "#666666",
            600: "#525252",
            700: "#3d3d3d",
            800: "#292929",
            900: "#141414"
        },
        black: {
            100: "#d0d1d5",
            200: "#a1a4ab",
            300: "#727681",
            400: "#434957",
            500: "#141b2d",
            600: "#101624",
            700: "#0c101b",
            800: "#080b12",
            900: "#040509"
        },
        green: {
            100: "#dbf5ee",
            200: "#b7ebde",
            300: "#94e2cd",
            400: "#70d8bd",
            500: "#4cceac",
            600: "#3da58a",
            700: "#2e7c67",
            800: "#1e5245",
            900: "#0f2922"
        },
        red: {
            100: "#f8dcdb",
            200: "#f1b9b7",
            300: "#e99592",
            400: "#e2726e",
            500: "#db4f4a",
            600: "#af3f3b",
            700: "#832f2c",
            800: "#58201e",
            900: "#2c100f"
        },
        yellow: {
            100: "#e1e2fe",
            200: "#c3c6fd",
            300: "#a4a9fc",
            400: "#868dfb",
            500: "#6870fa",
            600: "#535ac8",
            700: "#3e4396",
            800: "#2a2d64",
            900: "#151632"
        },
        
    }:{
        darkIndigo: {
            900: "#141414",
            800: "#292929",
            700: "#3d3d3d",
            600: "#525252",
            500: "#666666",
            400: "#858585",
            300: "#a3a3a3",
            200: "#c2c2c2",
            100: "#e0e0e0",
        },
        blackScent: {
            900: "#040509",
            800: "#080b12",
            700: "#0c101b",
            600: "#101624",
            500: "#141b2d",
            400: "#434957",
            300: "#727681",
            200: "#a1a4ab",
            100: "#d0d1d5",
        },
        greenHumor: {
            900: "#0f2922",
            800: "#1e5245",
            700: "#2e7c67",
            600: "#3da58a",
            500: "#4cceac",
            400: "#70d8bd",
            300: "#94e2cd",
            200: "#b7ebde",
            100: "#dbf5ee",
        },
        redLantan: {
            900: "#2c100f",
            800: "#58201e",
            700: "#832f2c",
            600: "#af3f3b",
            500: "#db4f4a",
            400: "#e2726e",
            300: "#e99592",
            200: "#f1b9b7",
            100: "#f8dcdb",
        },
        ballin: {
            100: "#e1e2fe",
            200: "#c3c6fd",
            300: "#a4a9fc",
            400: "#868dfb",
            500: "#6870fa",
            600: "#535ac8",
            700: "#3e4396",
            800: "#2a2d64",
            900: "#151632"
        },

        
    
    }
         )

})  





export const themeSettings =(mode)=>{
    const color = Tokens(mode)
    console.log(mode)


    return{
      palette:{
        mode:mode,

        ...(mode === "dark"
        ?{
            indigo:{
                main:color.indigo[500],
            },
            red:{
                main:color.indigo[500],
            },
            secondary:{
                main:color.green[500],
            },
            neutral:{
                dark:color.ballin[400],
                main:color.blackScent[400],
                light:color.greenHumor[100],
            },
            background:{
                main:color.redLantan[200]
            }
            
        }
        :{
            indigo:{
                main:color.ballin[500],
            },
            red:{
                main:color.greenHumor[500],
            },
            secondary:{
                main:color.green[500],
            },
            neutral:{
                dark:color.blackScent[400],
                main:color.yellow[400],
                light:color.red[100],

            },
            background:{
                main:color.redLantan[200]
            }
        }
        ),
      },
    }

}


export const ColorModeContext= createContext({
    toggleColorMode:()=>{}
})

export const useMode = ()=>{
    const [mode , setMode]=useState('dark')

    const colorMode = useMemo(()=>({
        toggleColorMode:()=> setMode((prev)=> (prev === "light" ? "dark":"light"))  
    }),[])

    const theme = useMemo(()=> createTheme(themeSettings(mode)),[mode])
    
    return [theme,colorMode]
}
