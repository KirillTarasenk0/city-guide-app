import './Login.css';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

export const Login = () => {
    return (
        <>
            <div className="registration-container">
                <h1>Логин</h1>
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
                            label="Имя"
                            placeholder="Имя"
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
                    <Link className="login__link" to={'/registration'}>
                        Нет аккаунта? Зарегистрируйся!
                    </Link>
                    <Button variant="contained">Войти</Button>
                </Box>
            </div>
        </>
    );
}