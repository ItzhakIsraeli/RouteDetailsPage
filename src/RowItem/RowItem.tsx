import {createTheme, styled, ThemeProvider} from "@mui/material/styles";
import {Button, Grid, Paper, Typography} from "@mui/material";
import React from "react";
import {ItemType} from "../Data/Data";
import {CustomTypeIcon} from "./CustomTypeIcon";
import {Colors} from "../Constant/Colors";

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
}));

interface RowItemProps {
    item: ItemType,
    piiFilter: boolean
}

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.THIRD_COLOR,
        },
        secondary: {
            main: Colors.DEFAULT_COLOR,
        },
    },
});

export const RowItem = ({item, piiFilter}: RowItemProps) => {
    const [isPii, setIsPii] = React.useState<boolean>(item.pii);
    const [isMasked, setIsMasked] = React.useState<boolean>(item.masked);

    return (<ThemeProvider theme={theme}>
            {(!piiFilter || piiFilter && isPii) ? <Item>
                <Item elevation={2}>
                    <Grid container gap={1}>
                        <Grid item container xs={4} justifyContent={'flex-start'} alignItems={'center'} paddingLeft={5}>
                            <Typography color={'primary'} fontWeight={'bold'} >
                                {item.name}
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Button variant={isPii ? 'contained' : 'outlined'} color={"primary"}
                                    onClick={() => setIsPii(prevState => !prevState)} sx={{height: 25, borderRadius: 0}}>
                                <Typography fontWeight={'bold'} variant={'subtitle2'}>
                                    PII
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid item xs>
                            <Button variant={isMasked ? 'contained' : 'outlined'} color={"secondary"}
                                    onClick={() => setIsMasked(prevState => !prevState)} sx={{height: 25, borderRadius: 0}}>
                                <Typography fontWeight={'bold'} variant={'subtitle2'}>
                                    MASKED
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid item container xs={4} justifyContent={'center'}>
                            <Grid container alignItems={'center'} justifyContent={'center'}>
                                <CustomTypeIcon text={item.type}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Item>
            </Item> : ""}
        </ThemeProvider>
    )
}