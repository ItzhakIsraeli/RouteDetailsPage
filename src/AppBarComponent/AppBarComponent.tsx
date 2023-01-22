import {AppBar, Grid, styled, Toolbar} from "@mui/material";
import React, {ReactComponentElement} from "react";

interface MainAppBarProps {
    children: ReactComponentElement<any>
}

const StyledToolbar = styled(Toolbar)(({theme}) => ({
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
}));

export const AppBarComponent = ({children}: MainAppBarProps) => {
    return (
        <AppBar position="static" color={'default'}>
            <Toolbar>
                <StyledToolbar sx={{width: "100%"}}>
                    <Grid container>
                        {children}
                    </Grid>
                </StyledToolbar>
            </Toolbar>
        </AppBar>
    )
}