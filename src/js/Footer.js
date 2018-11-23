import React from 'react';

class Footer extends React.Component {
    render (){
        return (
            <div className="text-muted">
                <small>&copy; {new Date().getFullYear()} by Mr Protein Brewery</small>
            </div>
        );
    }
}

export default Footer;