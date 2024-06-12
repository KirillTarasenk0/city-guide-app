import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Logo from '../../assets/header/logo.svg'
import SearchIcon from '../../assets/header/search-icon.svg'
import BookmarkIcon from '../../assets/header/bookmark-icon.svg'
import {Link, Outlet} from "react-router-dom";
import './Header.css';

export const Header = () => {
    return (
      <>
          <div className="header__component-container">
              <header className="header">
                  <div className="header__container">
                      <div className="header__logo-container">
                          <Link to={'/'}>
                              <img src={Logo} alt="Logo icon"/>
                          </Link>
                      </div>
                      <Stack spacing={2} direction="column">
                          <Button className="" variant="contained">
                              <img src={SearchIcon} alt="Search icon"/>
                          </Button>
                          <Button className="" variant="outlined">
                              <img src={BookmarkIcon} alt="Bookmark icon"/>
                          </Button>
                      </Stack>
                  </div>
              </header>
              <main>
                  <Outlet/>
              </main>
          </div>
      </>
    );
}