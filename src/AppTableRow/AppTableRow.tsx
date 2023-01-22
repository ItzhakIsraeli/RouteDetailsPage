import React from "react";
import {ItemType} from "../Data/Data";
import {Box, Grid} from "@mui/material";
import {RowItem} from "../RowItem/RowItem";
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import {Colors} from "../Constant/Colors";
import {FilterContext} from "../Main/Main";
import {ClickableText} from "../StyledComponents/StyledComponents";

interface RowAppTable {
    dataName: string,
    rowData: ItemType[]
}

const dataNames: { [index: string]: any } = {
    urlParams: "URL Parameters",
    queryParams: "Query Parameters",
    headers: "Headers",
    body: "Body"
}

export const AppTableRow = ({dataName, rowData}: RowAppTable) => {
    const filterContext = React.useContext(FilterContext);
    const [isRowOpen, setIsRowOpen] = React.useState<boolean>(true);

    return (
        <>
            <Grid container gap={1} paddingTop={2}>
                <ClickableText onClick={() => setIsRowOpen(prevState => !prevState)}>
                    <Grid container alignItems={'center'} justifyContent={'center'} gap={1}>
                        {isRowOpen ? <ArrowDropDownCircleIcon fontSize={'small'} sx={{color: Colors.PRIMARY_COLOR}}/> :
                            <PlayCircleFilledIcon fontSize={'small'} sx={{color: Colors.PRIMARY_COLOR}}/>}
                        {dataNames[dataName]}
                    </Grid>
                </ClickableText>
            </Grid>
            <Box
                sx={{
                    display: 'grid',
                    gap: 1.5
                }}
            >
                {isRowOpen &&
                    rowData.map((item: ItemType) =>
                        (item.name.includes(filterContext.textFilter) ||
                            item.type.toLowerCase().includes(filterContext.textFilter.toLowerCase())) &&
                        <RowItem item={item} key={item.name} piiFilter={filterContext.piiFilter}/>
                    )
                }
            </Box>
        </>
    )
}