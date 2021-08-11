import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons/lib';
import styled from 'styled-components'
import SubMenu from './SubMenu';
import './Sidebar.css';

const Nav= styled.div`
background: #15171c;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const NavIcon = styled(Link)`
 margin-left  :2rem ;
 margin-top  :2rem ;
 font-size: 3rem;
 height: 80px;
 justify-content: inline;
 align-items:center;
 display: inline !important;

 `;
 const SidebarNav = styled.nav`
 background: #15171c;
 width: 250px;
 height: 100vh;
 display:flex;
 justify-content: left;
 position: fixed;
 top: 0;
 left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
 transition: 350ms;
 z-index: 10;
`;

const SidebarWrap = styled.div`
 width: 100%;

`;

const Sidebar = () => {
 const [sidebar, setSidebar] = useState(false);

 const showSidebar = () => setSidebar(!sidebar);

  return (
    
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
           <h1 className="center ml-200 white">
            Cynzo
          </h1>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;