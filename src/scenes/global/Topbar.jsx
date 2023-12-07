import { Box,IconButton,colors,useTheme,OutlinedInput } from "@mui/material"
import { useContext } from "react"
import { ColorModeContext,Tokens } from "../../theme"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import SailingIcon from '@mui/icons-material/Sailing';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import HouseboatIcon from '@mui/icons-material/Houseboat';
import WeekendIcon from '@mui/icons-material/Weekend';

const Topbar =()=>{
    const theme = useTheme()
    const color = Tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)

    return (
        <Box display={"flex"} justifyContent={"space-between"} p={2}>
        
        
        <Box  bgcolor={color.blackScent[100]} borderRadius={3}   >
        <IconButton type="button">
        <SavedSearchIcon/>
        </IconButton>
        
        
        <OutlinedInput placeholder="Search"/>
        
        </Box>

        <Box display={'flex'} >
        <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === 'dark' ?(
            <HouseboatIcon/>

        ):(
            <WeekendIcon/>
        )}
        </IconButton>

        <IconButton>
        <AcUnitIcon/>
        </IconButton>
        
        <IconButton>
        <CoronavirusIcon/>
        </IconButton>

        <IconButton>
        <SailingIcon/>
        </IconButton>

        </Box>
        
        </Box>
       
      
    )
  }
  
  export default Topbar