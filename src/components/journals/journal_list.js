import React, {Component} from 'react';
import {JournalEntry} from "./journal_entry"

const rawJournalData = [
    {title: 'Post One', content: 'post content', status: 'draft'},
    {title: 'Post two', content: 'post content', status: 'published'},
    {title: 'Post three', content: 'post content', status: 'published'},
    {title: 'Post four', content: 'post content', status: 'published'}
]

// class component
export default class JournalList extends Component {
    constructor(props){
        super();

        this.state = {
            journalData: rawJournalData, 
            greeting: 'hithere',
            isOpen: true
        }
    }
    render(){
        return(
            <div>
                <h2>{this.props.heading}</h2>
                <JournalEntry title = 'dg' content = 'dsjfg' />
                <JournalEntry title = 'dsdsg' content = 'dssfjfg' />
                <JournalEntry title = 'dddg' content = 'dsjsadsafg' />
            </div>
        )
    }
}