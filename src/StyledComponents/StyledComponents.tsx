import {createTheme, styled} from "@mui/material/styles";
import {Button, Divider, Paper, Typography} from "@mui/material";
import {Colors} from "../Constant/Colors";
import Checkbox from '@mui/material/Checkbox';

export const appTheme = createTheme({
    palette: {
        primary: {
            main: Colors.DEFAULT_COLOR,
        },
        secondary: {
            main: Colors.THIRD_COLOR,
        },
        info: {
            main: Colors.SECONDARY_COLOR
        }
    },
});

export const StyledDivider = styled(Divider)(() => ({
    height: 28,
    margin: 2
}));

export const StyledButton = styled(Button)(() => ({
    height: 25,
    borderRadius: 0
}));

export const StyledCheckbox = styled(Checkbox)(() => ({
    color: Colors.DEFAULT_COLOR,
    '&.Mui-checked': {
        color: Colors.DEFAULT_COLOR,
    },
}));

export const ClickableText = styled(Typography)(() => ({
    fontWeight: "bold",
    '&:hover': {
        cursor: 'pointer'
    }
}));

export const HoverClickableText = styled(Typography)(() => ({
    color: Colors.DEFAULT_COLOR,
    '&:hover': {
        cursor: 'pointer',
        fontWeight: "bold"
    }
}));

export const StyledHeadLine = styled(Typography)(() => ({
    fontWeight: 'bold',
    component: 'div'
}));

export const StyledItem = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
}));