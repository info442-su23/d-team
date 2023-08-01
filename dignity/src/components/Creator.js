import React from 'react';

export default function Creator() {

    return (
        <div className="creator-content">
            <h1 className="creator-header">Creator Form</h1>
            <p className="creator-desc">
                Do you work for a nonprofit and want to share a volunteer opportunity on our page? Fill out the form below and volunteers will be able to sign up directly from the volunteer map!
            </p>
            <div className="creator-form">
                <iframe title="creator-form" src="https://docs.google.com/forms/d/e/1FAIpQLSep7FNKzVVquhesfR1LmgIJ6bHUr4YTwJtZ7dFEOPu8gE7cEw/viewform?embedded=true" >Loading…</iframe>
            </div>
        </div>
    )

}
