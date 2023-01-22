import {Button, Typography} from "@mui/material";
import * as React from "react";

interface CustomTypeIconProps {
    text: string
}

export const CustomTypeIcon = ({text}: CustomTypeIconProps) => {
    return (
        <>
            <Button variant="contained" disabled sx={{height: 25, borderRadius: 0, minWidth:100}}>
                <Typography color={'white'} fontWeight={'bold'} sx={{color: "#58a7c0"}} variant={'subtitle2'}>
                    {text}
                </Typography>
            </Button>
        </>
    )
}