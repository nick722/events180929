import React from 'react';

import './Layout.css';
import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar';

const Layout = ({children}) => (
    <Aux>
        <Toolbar/>
        <main className="Content">
            {children}
        </main>
    </Aux>
);

export default Layout;
