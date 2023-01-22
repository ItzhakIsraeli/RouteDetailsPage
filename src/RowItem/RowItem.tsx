import {Grid, Typography} from "@mui/material";
import React from "react";
import {ItemType} from "../Data/Data";
import {CustomTypeIcon} from "./CustomTypeIcon";
import {StyledButton, StyledItem} from "../StyledComponents/StyledComponents";

interface RowItemProps {
    item: ItemType,
    piiFilter: boolean
}

export const RowItem = ({item, piiFilter}: RowItemProps) => {
    const [isPii, setIsPii] = React.useState<boolean>(item.pii);
    const [isMasked, setIsMasked] = React.useState<boolean>(item.masked);

    return (<>
            {(!piiFilter || isPii) ? <StyledItem>
                <StyledItem elevation={2}>
                    <Grid container gap={1}>
                        <Grid item container xs={4} justifyContent={'flex-start'} alignItems={'center'} paddingLeft={5}>
                            <Typography color={'primary'} fontWeight={'bold'}>
                                {item.name}
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <StyledButton variant={isPii ? 'contained' : 'outlined'} color={"secondary"}
                                          onClick={() => setIsPii(prevState => !prevState)}>
                                <Typography fontWeight={'bold'} variant={'subtitle2'}>
                                    PII
                                </Typography>
                            </StyledButton>
                        </Grid>
                        <Grid item xs>
                            <StyledButton variant={isMasked ? 'contained' : 'outlined'} color={"primary"}
                                          onClick={() => setIsMasked(prevState => !prevState)}>
                                <Typography fontWeight={'bold'} variant={'subtitle2'}>
                                    MASKED
                                </Typography>
                            </StyledButton>
                        </Grid>
                        <Grid item container xs={4} justifyContent={'center'}>
                            <Grid container alignItems={'center'} justifyContent={'center'}>
                                <CustomTypeIcon text={item.type}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </StyledItem>
            </StyledItem> : ""}
        </>
    )
}