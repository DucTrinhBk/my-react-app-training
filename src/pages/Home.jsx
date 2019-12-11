import React,{Component} from 'react';
import {Helmet} from 'react-helmet';
import '../css/home.css';
import Category from '../components/Category';

class Home extends Component{
    render(){
        return (
            <div className="container">
                <Helmet>
                    <title>{this.props.title}</title>
                    <meta name="description" content={this.props.description}/>
                </Helmet>
                
                <Category>
                    <h2 style={{color: 'red'}}>1.Mới</h2>
                </Category>
                <Category>
                    <h2 style={{color: 'black',fontWeight:'bold'}}>2.Mua nhiều</h2>
                </Category>
                <Category>
                    <h2>3.Giá rẻ</h2>
                </Category>
            </div>
        )
    }
}
export default Home;