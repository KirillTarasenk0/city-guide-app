import './Registration.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const Registration = () => {
    return (
        <>
            <div className="registration-container">
                <h1>Регистрация</h1>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': {m: 1, width: '25ch'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            id="outlined-error"
                            label="Логин"
                            placeholder="Логин"
                        />
                    </div>
                    <div>
                        <TextField
                            id="outlined-error"
                            label="Почта"
                            placeholder="Почта"
                        />
                    </div>
                    <div>
                        <TextField
                            id="outlined-error"
                            label="Пароль"
                            placeholder="Пароль"
                        />
                    </div>
                    <div>
                        <TextField
                            id="outlined-error"
                            label="Повторите пароль"
                            placeholder="Повторите пароль"
                        />
                    </div>
                    <Button variant="contained">Зарегистрироваться</Button>
                </Box>
            </div>
        </>
    );
}
