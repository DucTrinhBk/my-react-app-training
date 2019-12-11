import React,{Component} from 'react';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Menu from '../../components/menu';
class MasterLayout extends Component{
    render(){
        return (
            <React.Fragment>
                <div className="container-fluid">
                      <Menu />
                     {this.props.children}
                </div>
            </React.Fragment>
            
        )
    }
}
export default MasterLayout;