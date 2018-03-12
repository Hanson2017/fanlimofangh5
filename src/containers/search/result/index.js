import React, { Component } from 'react';
import Api from '../../../utils/api';
import Loading from '../../../components/loading';
import Header from './header';
import List from './list';

export default class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchKey: '',
            searchList: [],
            loading: true
        };
    }
    componentWillMount() {
        const { location } = this.props;
        this.setState({
            searchKey: location.state.searchKey
        })
    }
    render() {
        return (
            <div className='searchResultContainer'>
                <Header keywords={this.state.searchKey} history={this.props.history} />
                {
                    this.state.loading ?
                        <Loading />
                        :
                        <List data={this.state.searchList} />
                }

            </div>
        )
    }
    componentDidMount() {
        this.getSearch()
    }
    getSearch() {
        const that = this;
        const keywords = this.state.searchKey;
        const url = Api.searchActivity + '?keywords=' + keywords + '&page=1' + '&pagesize=100';

        fetch(url)
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function (response) {
                if (response.result == 1) {
                    that.setState({
                        searchList: response.data,
                        loading: false
                    })
                }
            });
    }

}