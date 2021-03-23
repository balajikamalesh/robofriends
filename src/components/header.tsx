import React, { useMemo } from 'react';

const Header = () => {
    return useMemo(() => {
        return <h1>RoboFriends</h1>
      }, [])
    
}

export default Header;