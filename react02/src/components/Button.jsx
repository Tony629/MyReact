import React from 'react';

export default function Button(props){
    let {action, title } = props;
    return <button className="btn btn-primary" onClick={action}>{title}</button>;
}