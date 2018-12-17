import React from 'react';
import ReactDOM from 'react-dom';

class TODOLIST extends React.Component {
    state = {
        data: this.props.data
    }
    render() {
        const { data } = this.state;
        return (
            <div className="">
                <h1>MY TODOLIST</h1>
                
            </div>
        )
    }

}
ReactDOM.render(
    <TODOLIST/>,
    document.getElementById('app')
)

