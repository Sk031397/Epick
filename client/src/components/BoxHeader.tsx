import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import FlexBetween from "./FlexBetween";

type Props = {
    title:string;
    subTitle?:string;
    icon?:React.ReactNode;
    children?:React.ReactNode;
}

const BoxHeader = ({icon,subTitle,title,children}:Props) => {
    const { palette } = useTheme();

    return (
        <FlexBetween
        color={palette.grey[400]}
        margin="1.5rem 1rem 0 1rem"
        >
        <FlexBetween>
            {icon}
            <Box width="100%">
                <Typography variant="h4" mb="-0.1ren">
                    {title}
                </Typography>
                <Typography variant="h4">{subTitle}</Typography>
            </Box>
        </FlexBetween>
        <Typography variant="h5" fontWeight="700" color={palette.secondary[500]}>
            {children}
        </Typography>
        </FlexBetween>
    )
}
export default BoxHeader;