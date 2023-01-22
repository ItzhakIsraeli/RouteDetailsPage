import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {Button, Divider, Grid, IconButton, Paper, Typography} from "@mui/material";
import {Colors} from "../Constant/Colors";
import Checkbox from '@mui/material/Checkbox';

interface SearchBarProps {
    handleApply: (searchText: string, piiFilter: boolean) => void
}

export const SearchBar = ({handleApply}: SearchBarProps) => {

    const [searchText, setSearchText] = React.useState<string>('');
    const [showPiiFilter, setShowPiiFilter] = React.useState<boolean>(false);

    const handleResetFilter = () => {
        setSearchText('');
        setShowPiiFilter(false);
        handleApply('', false);
    }

    return (
        <>
            <Grid item xs>
                <Paper
                    component="form"
                    sx={{p: '2px 4px', display: 'flex', alignItems: 'center'}}
                    onSubmit={(e) => e.preventDefault()}
                >
                    <IconButton disabled sx={{p: '10px'}} aria-label="menu">
                        <SearchIcon/>
                    </IconButton>
                    <InputBase
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        sx={{ml: 1, flex: 1}}
                        placeholder="Search"
                    />
                    <Divider sx={{height: 28, m: 1}} orientation="vertical"/>
                    <Checkbox checked={showPiiFilter}
                              onChange={(event, checked) => setShowPiiFilter(checked)}
                              sx={{
                                  color: Colors.DEFAULT_COLOR,
                                  '&.Mui-checked': {
                                      color: Colors.DEFAULT_COLOR,
                                  },
                              }}/>
                    <Typography>
                        Show PII Only
                    </Typography>
                    <Divider sx={{height: 28, m: 1}} orientation="vertical"/>
                    <Button variant={'contained'} sx={{
                        borderRadius: 0, minWidth: 120,
                        backgroundColor: Colors.DEFAULT_COLOR,
                        "&:hover": {backgroundColor: Colors.SECONDARY_COLOR}
                    }} onClick={() => handleApply(searchText, showPiiFilter)}>
                        <Typography>
                            Apply
                        </Typography>
                    </Button>
                </Paper>
            </Grid>
            <Grid container>
            </Grid>
            <Typography onClick={handleResetFilter} sx={{
                color: Colors.DEFAULT_COLOR,
                '&:hover': {
                    cursor: 'pointer',
                    fontWeight: "bold"
                }
            }}>
                Reset Filter
            </Typography>
        </>
    )
}