import React from "react";
import {MainAppBar} from "../MainAppBar/MainAppBar";
import {getRequest, getResponse, getSettings} from "../Data/Data";
import {Box, Grid} from "@mui/material";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {AppBarComponent} from "../AppBarComponent/AppBarComponent";
import {SearchBar} from "../SearchBar/SearchBar";
import {Colors} from "../Constant/Colors";
import {AppTable} from "../AppTable/AppTable";

interface FilterContextType {
    piiFilter: boolean,
    textFilter: string
}

enum TAB_OPTIONS {
    REQUEST = "req",
    RESPONSE = "res"
}

export const FilterContext = React.createContext<FilterContextType>({piiFilter: false, textFilter: ''});

export const Main = () => {
    const [tabValue, setTabValue] = React.useState<TAB_OPTIONS>(TAB_OPTIONS.REQUEST);
    const [showPiiFilter, setShowPiiFilter] = React.useState<boolean>(false);
    const [searchFilterText, setSearchFilterText] = React.useState<string>('');

    const handleChange = (event: React.SyntheticEvent, newValue: TAB_OPTIONS) => {
        setTabValue(newValue);
    };

    const handleApply = (searchText: string, piiFilter: boolean) => {
        setSearchFilterText(searchText);
        setShowPiiFilter(piiFilter);
    }

    return (
        <>
            <MainAppBar settingsData={getSettings()}/>
            <Box sx={{width: '100%', typography: 'body1'}}>
                <TabContext value={tabValue}>
                    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                        <TabList onChange={handleChange}
                                 TabIndicatorProps={{style: {backgroundColor: Colors.DEFAULT_COLOR}}} sx={{
                            "& button.Mui-selected": {color: Colors.DEFAULT_COLOR, fontWeight: "bold"}
                        }}>
                            <Tab label="Request" value={TAB_OPTIONS.REQUEST} sx={{color: Colors.DEFAULT_COLOR}}/>
                            <Tab label="Response" value={TAB_OPTIONS.RESPONSE} sx={{color: Colors.DEFAULT_COLOR}}/>
                        </TabList>
                    </Box>
                    <AppBarComponent children={
                        <Grid container justifyContent={'end'} paddingTop={3}>
                            <SearchBar handleApply={handleApply}/>
                        </Grid>
                    }/>
                    <FilterContext.Provider value={{piiFilter: showPiiFilter, textFilter: searchFilterText}}>
                        <TabPanel value={TAB_OPTIONS.REQUEST}>
                            <AppTable data={getRequest()}/>
                        </TabPanel>
                        <TabPanel value={TAB_OPTIONS.RESPONSE}>
                            <AppTable data={getResponse()}/>
                        </TabPanel>
                    </FilterContext.Provider>
                </TabContext>
            </Box>
        </>
    )
}