import './BookmarkToolbar.css';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {useState} from "react";

export const BookmarkToolbar = () => {
    const [data, setData] = useState(false);
    return (
      <>
        <section className="bookmark__toolbar-section">
            <div>
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
                <h2>Избранное</h2>
                <div>
                    {!data && <p>Нет данных</p>}
                </div>
            </div>
        </section>
      </>
    );
}