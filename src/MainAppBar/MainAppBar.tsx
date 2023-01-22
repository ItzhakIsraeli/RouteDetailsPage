import {Grid, Typography} from "@mui/material";
import React from "react";
import {SettingsType} from "../Data/Data";
import {AppBarComponent} from "../AppBarComponent/AppBarComponent";

interface MainAppBarProps {
    settingsData: SettingsType
}

export const MainAppBar = ({settingsData}: MainAppBarProps) => {
    return (
        <AppBarComponent children={<Grid container gap={2} alignItems={'flex-start'}>
            <Grid item container direction={"row"} gap={1}>
                <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    fontWeight={'bold'}
                    color={"#c179cd"}
                >
                    {settingsData.method.toUpperCase()}
                </Typography>
                <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    fontWeight={'bold'}
                    color={"#6a1b9a"}
                >
                    {settingsData.path}
                </Typography>
            </Grid>
            <Grid item>
                <Typography
                    variant="body1"
                    noWrap
                    component="div"
                    color={"#6a1b9a"}
                    fontWeight={'bold'}
                    sx={{flexGrow: 1, alignSelf: 'flex-start'}}
                >
                    All APIs {">"} {settingsData.api} {">"} {settingsData.path}
                </Typography>
            </Grid>
        </Grid>}/>
    )
}