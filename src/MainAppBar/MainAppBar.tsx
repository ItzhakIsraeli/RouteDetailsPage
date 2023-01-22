import {Grid} from "@mui/material";
import React from "react";
import {SettingsType} from "../Data/Data";
import {AppBarComponent} from "../AppBarComponent/AppBarComponent";
import {Colors} from "../Constant/Colors";
import {StyledHeadLine} from "../StyledComponents/StyledComponents";

interface MainAppBarProps {
    settingsData: SettingsType
}

export const MainAppBar = ({settingsData}: MainAppBarProps) => {
    return (
        <AppBarComponent children={<Grid container gap={2} alignItems={'flex-start'}>
            <Grid item container direction={"row"} gap={1}>
                <StyledHeadLine
                    variant={'h5'}
                    noWrap
                    color={Colors.SECONDARY_COLOR}
                >
                    {settingsData.method.toUpperCase()}
                </StyledHeadLine>
                <StyledHeadLine
                    variant="h5"
                    noWrap
                    color={'primary'}
                >
                    {settingsData.path}
                </StyledHeadLine>
            </Grid>
            <Grid item>
                <StyledHeadLine
                    variant="body1"
                    noWrap
                    color={'primary'}
                    sx={{flexGrow: 1, alignSelf: 'flex-start'}}
                >
                    All APIs {">"} {settingsData.api} {">"} {settingsData.path}
                </StyledHeadLine>
            </Grid>
        </Grid>}/>
    )
}