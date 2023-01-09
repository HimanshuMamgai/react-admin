import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
    return (
        <Box m="20px">
            <Header title="Line Chart" subtitle="Simple Line Chart" />
            <Box height="70vh">
                <LineChart isDashBoard={false} />
            </Box>
        </Box>
    );
};

export default Line;