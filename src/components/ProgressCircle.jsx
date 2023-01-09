import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const ProgressCircle = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const angle = props.progress * 360;

    return (
        <Box
            sx={{
                background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
                    conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
                    ${colors.greenAccent[500]}`,
                borderRadius: "50%",
                width: `${props.size}px`,
                height: `${props.size}px`
            }}
        />
    );
}

ProgressCircle.defaultProps = {
    progress: "0.75",
    size: "40"
}

export default ProgressCircle;