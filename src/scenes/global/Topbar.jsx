import { Box, IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../../theme';
import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';

// Navigation bar
const Topbar = () => {
    const theme = useTheme(); // access to the theme created
    const colors = tokens(theme.palette.mode); //gives the object of colors shades
    const colorMode = useContext(ColorModeContext);

    return (
        // Box is a div like component but it's very convenient
        // It allows to use css property directly into the box component
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* SEARCH BAR */}
            <Box 
                display="flex" 
                backgroundColor={colors.primary[400]}
                borderRadius="3px"
            >
                {/* for other components we use sx to write css properties */}
                <InputBase sx={{ ml: 2, flex: 1}} placeholder="Search" />
                <IconButton type="button" sx={{ p: 1 }}>
                    <SearchIcon/>
                </IconButton>
            </Box>
            
            {/* ICONS */}
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ?
                        <DarkModeOutlinedIcon /> :
                        <LightModeOutlinedIcon />
                    }
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlineOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    );
}

export default Topbar;