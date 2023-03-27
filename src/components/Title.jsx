import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import classes from './Title.module.css';

//title and intro for dashboard
const Title = () =>{
  const {siteConfig} = useDocusaurusContext();
    return (
        <div>
            <h1 className={classes.Title}>
                {siteConfig.title}
            </h1>
            <p className={classes.Intro}>
                {/*
                <b>For each repo card:</b>
                The left side (<i>Latest Run</i>) displays the test status for the most recent run (caused by commits, pull requests or manual dispatch).
                The right side (<i>Nightly Tests</i>) displays status of nightly integration tests for the past week (7 day history).
                */}
                {siteConfig.customFields.description}
            </p>
        </div>
    );
}

export default Title;