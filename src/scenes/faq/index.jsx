import { Box, useTheme } from "@mui/system";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import { Typography } from "@mui/material";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

            {/* First question */}
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti necessitatibus aperiam repudiandae similique sequi molestiae dolorum minima dolor recusandae illo? Commodi praesentium exercitationem unde neque!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* Second question */}
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Another Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti necessitatibus aperiam repudiandae similique sequi molestiae dolorum minima dolor recusandae illo? Commodi praesentium exercitationem unde neque!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* Third question */}
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Your Favorite question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti necessitatibus aperiam repudiandae similique sequi molestiae dolorum minima dolor recusandae illo? Commodi praesentium exercitationem unde neque!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* Fourth question */}
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                       Some random question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti necessitatibus aperiam repudiandae similique sequi molestiae dolorum minima dolor recusandae illo? Commodi praesentium exercitationem unde neque!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* Fifth question */}
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        The Final question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti necessitatibus aperiam repudiandae similique sequi molestiae dolorum minima dolor recusandae illo? Commodi praesentium exercitationem unde neque!
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}

export default FAQ;