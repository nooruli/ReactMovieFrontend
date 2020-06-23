import React from 'react';
import Cards from '../components/cards';
export default class favourite extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }
    componentDidMount() {
        fetch('http://localhost:8080/Getallmovies')
            .then(res => res.json())
            .then(res => {
                this.setState({ data: res.data })
            })
    }
    handleRemoveFavrouite = (id) => { 
                // Locally removing the element from favourite
                let tempArray = this.state.data;
                tempArray.splice(tempArray.findIndex(id), 1);
                this.setState({ data: tempArray })
            
    }
    render() {https://ap-south-1.signin.aws.amazon.com
        return (
            <div>
                {
                    this.state.data.length ?
                        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                            {
                                this.state.data.map(data => {
                                    return <Cards movieData={data} favouriteList={this.state.favouriteList}></Cards>
                                })
                            }
                        </div>
                        : <div>No Favourites</div>
                }
            </div>
        )
    }
}