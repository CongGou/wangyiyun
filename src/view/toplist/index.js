import React, { Component } from 'react'
import { Route, Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import OffListing from '../../commons/offer_listing'
import './index.css'
export default class TopList extends Component {
    constructor(arg) {
        super(arg)
        this.state = ({
            List:[]
        })
        this.getAllTopList()
    }
    
    getAllTopList = () => {
        axios.get('http://guohaucong.top:8800/toplist')
            .then(res => {
                // console.log(res.data)
                let List = res.data.list
                this.setState({
                    List
                })
               
            }).catch(e => {

            })
    }
    render() {
        //云音乐特色榜
        let FeaturesList = this.state.List.map((item, index) => {
            if (index < 4) {
                return (
                    <li className={'Item'} key={index}>
                        <Link to={'/home/toplist/' + item.id}>
                            <img src={item.coverImgUrl} alt='' />
                            <p>
                                <span>{item.name}</span><br />
                                <span>{item.updateFrequency}</span>
                            </p>
                        </Link>
                    </li>
                )
            }
            
        })
        //全球媒体榜
        let GlobalMedia = this.state.List.map((item, index) => {
            if (index >= 4) {
                return (
                    <li className={'Item'} key={index}>
                        <Link to={'/home/toplist/' + item.id}>
                            <img src={item.coverImgUrl} alt='' />
                            <p>
                                <span>{item.name}</span><br />
                                <span>{item.updateFrequency}</span>
                            </p>
                        </Link>
                    </li>
                )
            }

        })
        return (
            <div className={'TopLists'}>
                <div className={'ArrayList'}>
                    <h2>云音乐特色榜</h2>
                    <ul className={'ListItem'}>
                        {FeaturesList}
                        
                    </ul>
                    <h2>全球媒体榜</h2>
                    <ul className={'ListItem'}>
                        {GlobalMedia}
                    </ul>
                </div>
                <div className={'offer-listing'}>
                        <Route exact path={'/home/toplist/'} render={() => (
                        <Redirect to={'/home/toplist/19723756'}/>
                        )}/>
                        <Route path={'/home/toplist/:id'} component={OffListing} />
                </div>
            </div>
        )
    }
}
