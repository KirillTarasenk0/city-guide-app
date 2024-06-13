import {useState, useEffect, useRef} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import './SearchToolbar.css';
import {sightItems} from "../../helpers/searchToolbarHelper";
import Button from "@mui/material/Button";
import SearchIcon from "../../assets/searchToolbar/search-icon.svg";

export const SearchToolbar = () => {
    const [value, setValue] = useState(0);
    const ref = useRef(null);
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        ref.current.ownerDocument.body.scrollTop = 0;
        setMessages(sightItems);
    }, [value, setMessages]);
    return (
      <>
          <section className="search__toolbar-section">
              <div className="search__toolbar-container">
                  <div>
                      <Box
                          component="form"
                          sx={{
                              '& > :not(style)': {m: 1, width: '25ch'},
                          }}
                          noValidate
                          autoComplete="off"
                      >
                          <TextField id="outlined-basic" label="Место, адрес" variant="outlined"/>
                      </Box>
                  </div>
                  <h2>Искать</h2>
                  <Box sx={{pb: 7, maxHeight: '300px', overflowY: 'auto'}} ref={ref}>
                      <CssBaseline/>
                      <List>
                          {messages.map(({primary, person}, index) => (
                              <ListItemButton key={index + person}>
                                  <ListItemAvatar>
                                      <Avatar alt="Profile Picture" src={person}/>
                                  </ListItemAvatar>
                                  <ListItemText primary={primary}/>
                              </ListItemButton>
                          ))}
                      </List>
                  </Box>
                  <h2>В радиусе</h2>
                  <TextField className="search__radius-field" InputLabelProps={{ shrink: true }} type='number' placeholder='км'/>
                  <div className="search__button-container">
                      <Button className="search__button" variant="contained">
                          <img src={SearchIcon} alt="search icon"/>
                      </Button>
                  </div>
              </div>
          </section>
      </>
    );
}