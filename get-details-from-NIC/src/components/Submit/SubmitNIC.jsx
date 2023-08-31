import {useState} from "react";
import {
    AppBar,
    Box,
    Button,
    Card,
    CardActions,
    createTheme,
    styled,
    TextField,
    Toolbar,
    Typography
} from "@mui/material";
import {grey, lightGreen, purple} from "@mui/material/colors";
import './style.css'


export default function SubmitNIC(props){
    const [NICNumber, setNICNumber] = useState('');


    function handleSubmit(e){
        e.preventDefault();
        if(NICNumber===""){
            alert("Please enter your NIC number");
            return;
        }
        props.SubmitData(NICNumber);
        setNICNumber('');
        console.log(NICNumber);

    }


    return (
        <Box onSubmit={handleSubmit} sx={{ flexGrow: 1, width: 633, mx: 'auto' }} >
            <AppBar position="static" theme={theme}>
                <Toolbar sx={{ width: 600 }} color="primary">
                    <Typography variant="h5" component="div" align={"center"} sx={{ flexGrow: 1}} >
                        Details Form
                    </Typography>
                </Toolbar>
            </AppBar>
            <Card
                variant="outlined"
                component="form"
                sx={{mx: 'auto',borderRadius: '16px', width: 600, backgroundColor: 'aqua', p:2}}>

                <TextField className="textField"
                           fullWidth
                           required
                           type="text"
                           label="NIC Nubmber"
                           variant="outlined"
                           value={NICNumber}
                           onChange={(e)=>{setNICNumber(e.target.value)}}

                />

                <CardActions>
                    <ColorButton onClick={handleSubmit} size="large" variant="contained"  sx={{display: 'flex', mx: 'auto', width: 200, borderRadius: '16px' }}>Submit</ColorButton>
                </CardActions>

            </Card>
        </Box>


    )

}

const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: grey[50],
        },
    },
});

const ColorButton = styled(Button)(() => ({
    backgroundColor: lightGreen['A400'],
    '&:hover': {
        backgroundColor: lightGreen['A400'],
    },
}));