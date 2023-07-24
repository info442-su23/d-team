import React from 'react';

export default function Creator() {
    const centerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    };

    return (
        <div style={{textAlign: 'center'}}>
            <div style={{ color: '#32668C', fontSize: 50 }}>
                Creator Form
            </div>
            <div style={{ color: '#4F9DD6', fontSize: 26, padding: 25}}>
                Do you work for a nonprofit and want to share a volunteer opportunity on our page? Fill out the form below and volunteers will be able to sign up directly from the volunteer map!
            </div>
            <div style={centerStyle}>
                <iframe title="creator-form" src="https://docs.google.com/forms/d/e/1FAIpQLSep7FNKzVVquhesfR1LmgIJ6bHUr4YTwJtZ7dFEOPu8gE7cEw/viewform?embedded=true" width="640" height="2050" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </div>
    )

}
