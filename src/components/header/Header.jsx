import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Logo from '../../assets/header/logo.svg'
import SearchIcon from '../../assets/header/search-icon.svg'
import BookmarkIcon from '../../assets/header/bookmark-icon.svg'
import {Link, Outlet} from "react-router-dom";
import './Header.css';
import {useState} from "react";
import {SearchToolbar} from "../searchToolbar/SearchToolbar";

export const Header = () => {
    const [searchButtonIsOpen, setSearchButtonIsOpen] = useState(false);
    const [bookmarkButtonIsOpen, setBookmarkButtonIsOpen] = useState(false);
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
                          <Button
                              variant="contained"
                              onClick={() => setSearchButtonIsOpen(!searchButtonIsOpen)}
                          >
                              <img src={SearchIcon} alt="Search icon"/>
                          </Button>
                          <Button
                              variant="outlined"
                              onClick={() => setBookmarkButtonIsOpen(!bookmarkButtonIsOpen)}
                          >
                              <img src={BookmarkIcon} alt="Bookmark icon"/>
                          </Button>
                      </Stack>
                  </div>
              </header>
              <main>
                  {searchButtonIsOpen && <SearchToolbar/>}
                  <Outlet/>
              </main>
          </div>
      </>
    );
}