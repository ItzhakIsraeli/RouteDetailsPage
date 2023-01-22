import {Divider, Grid, Typography} from "@mui/material";
import {Colors} from "../Constant/Colors";
import React from "react";
import {RequestType, ResponseType} from "../Data/Data";
import {AppTableRow} from "../AppTableRow/AppTableRow";

interface AppTableProps {
    data: RequestType | ResponseType | any
}

export const AppTable = ({data}: AppTableProps) => {

    return (
        <>
            <Grid container gap={1}>
                <Grid item container xs={4} justifyContent={'flex-start'}>
                    <Typography color={Colors.PRIMARY_COLOR} fontWeight={'bold'}>
                        NAME
                    </Typography>
                </Grid>
                <Grid item xs>
                    <Typography color={Colors.PRIMARY_COLOR} fontWeight={'bold'}>
                        PII
                    </Typography>
                </Grid>
                <Grid item xs>
                    <Typography color={Colors.PRIMARY_COLOR} fontWeight={'bold'}>
                        MASKING
                    </Typography>
                </Grid>
                <Grid item container xs={4} justifyContent={'center'}>
                    <Typography color={Colors.PRIMARY_COLOR} fontWeight={'bold'}>
                        TYPE
                    </Typography>
                </Grid>
            </Grid>
            <Divider sx={{color: 'grey', paddingTop: 1}}/>
            {Object.keys(data).map((item) =>
                <AppTableRow dataName={item} rowData={data[item]} key={item}/>
            )}
        </>
    )
}