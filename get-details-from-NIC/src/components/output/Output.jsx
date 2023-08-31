import {Divider, List, ListItem, ListItemText, Stack, Typography} from "@mui/material";
import './style.css'

export default function Output(prop){
    console.log(prop);
    function renderDetails(){
        return(
            // eslint-disable-next-line react/jsx-key
            <Stack sx={{display: 'flex', flexDirection: 'row'} }>
                <List
                    sx={{
                        width: '100%',
                        maxWidth: 632,
                        borderRadius: '16px',
                        mx:'auto',
                        backgroundColor: 'aqua'
                    }}

                >
                    <ListItem >
                        <ListItemText primary="Gender:"/><div className={"text"}>{prop.Details.gender}</div>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemText primary="Birthday:"  /><div className={"text"}>{prop.Details.birthday}</div>

                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemText  primary="Input:"/><div className={"text"}>{prop.Details.input}</div>
                    </ListItem>

                </List>
            </Stack>
        );

    }

    return (
    <div>
        <Typography variant="h6" component="div">
            {renderDetails()}
        </Typography>



    </div>
    )
}