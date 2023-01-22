import {Typography} from "@mui/material";
import * as React from "react";
import {StyledButton} from "../StyledComponents/StyledComponents";
import {Colors} from "../Constant/Colors";

interface CustomTypeIconProps {
    text: string
}

export const CustomTypeIcon = ({text}: CustomTypeIconProps) => {
    return (
        <>
            <StyledButton variant="contained" disabled sx={{minWidth: 100}}>
                <Typography color={'white'} fontWeight={'bold'} sx={{color: Colors.TYPE_COLOR}} variant={'subtitle2'}>
                    {text}
                </Typography>
            </StyledButton>
        </>
    )
}