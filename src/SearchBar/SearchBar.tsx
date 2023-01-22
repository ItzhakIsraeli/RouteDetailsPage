import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {Button, Grid, IconButton, Paper, Typography} from "@mui/material";
import {Colors} from "../Constant/Colors";
import {HoverClickableText, StyledCheckbox, StyledDivider} from "../StyledComponents/StyledComponents";

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
                    <StyledDivider orientation={"vertical"}/>
                    <StyledCheckbox checked={showPiiFilter}
                                    onChange={(event, checked) => setShowPiiFilter(checked)}/>
                    <Typography paddingRight={2}>
                        Show PII Only
                    </Typography>
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
            <HoverClickableText onClick={handleResetFilter}>
                Reset Filter
            </HoverClickableText>
        </>
    )
}