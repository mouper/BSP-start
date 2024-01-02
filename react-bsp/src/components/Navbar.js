import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const Dropdown = ({ linkTo, text, dropdownClass, playlistsDrop, topsongsDrop,  }) => {
    const [isHover, setHover] = useState(false);

    const handleYesHover = () => {
      setHover(true);
    };

    const handleNoHover = () => {
      setHover(false);
    };

    return (
        <div
          className="trigger"
          onMouseEnter={handleYesHover}
          onMouseLeave={handleNoHover}
        >
        <Link to={linkTo} className={text.toLowerCase()}>
          {text}
        </Link>
        {isHover && (
          <div
            className={`${text.toLowerCase()}-dropdown ${dropdownClass}`}
            onMouseEnter={handleYesHover}
            onMouseLeave={handleNoHover}
          >
            {playlistsDrop && (
            <>
              <Link to={`${linkTo}-top`} className={`${text.toLowerCase()}-top`}>
                Top
              </Link>
              <Link to={`${linkTo}-recent`} className={`${text.toLowerCase()}-recent`}>
                Recent
              </Link>
            </>
            )}
            {topsongsDrop && (
            <>
              <Link to={`${linkTo}-weekly`} className={`${text.toLowerCase()}-weekly`}>
                Weekly
              </Link>
              <Link to={`${linkTo}-monthly`} className={`${text.toLowerCase()}-monthly`}>
                Monthly
              </Link>
              <Link to={`${linkTo}-all-time`} className={`${text.toLowerCase()}-all-time`}>
                All Time
              </Link>
            </>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Dropdown linkTo="/topsongs" text="Top Songs" dropdownClass="topsongs" topsongsDrop />
        <Dropdown linkTo="/playlists" text="Playlists" dropdownClass="playlists" playlistsDrop />
      </div>
    </nav>
  );
};

export default Navbar;