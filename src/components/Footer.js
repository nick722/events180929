import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';

const Footer = () => (
    <p>
        Show:
        {' '}
        <Filterlink filter={VisibilityFilters.SHOW_ALL}>
            All
        </Filterlink>
        {', '}
        <Filterlink filter={VisibilityFilters.SHOW_ACTIVE}>
            Active
        </Filterlink>
        {', '}
        <Filterlink filter={VisibilityFilters.SHOW_COMPLETED}>
            Completed
        </Filterlink>
    </p>
)

export default Footer;