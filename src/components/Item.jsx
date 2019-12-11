import React, { Component } from 'react';
/*
    Hiển thị các item trong danh mục
*/
class Item extends Component {
    state = {  }
    render() { 
        return ( 
            <a href={this.props.url} className="slim-boder card-fs-content-body-unit hp-mod-card-hover J_FSItemUnit" data-spm-anchor-id="a2o4n.home.flashSale.2" data-spm-anchor-id="a2o4n.home.flashSale.2">
              <div className="fs-card-img-container">
                <img className="fs-card-img" alt={this.props.desc} src={this.props.img_link}/>
              </div>
              
              <div className="fs-card-text">
                    <div className="fs-card-title" data-spm-anchor-id="a2o4n.home.flashSale.i0.1172e182EcKE8i">{this.props.desc}</div>
                            <div className="fs-card-price">
                <span className="currency">{this.props.currency}</span><span className="price">{this.props.price.toLocaleString('us-en')}</span>
                            </div>
                            <div className="fs-card-origin-price">
                            <span className="fs-origin-price">
                    <span className="currency">{this.props.currency}</span><span className="price">{this.props.org_price.toLocaleString('us-en')}</span>
                            </span>
                            <span className="fs-discount">
                            {this.props.discount + '%'}
                            </span>
                            </div>
                            <div className="fs-card-sold">
                            
                            </div>
                </div>
            </a>     
        );
    }
}
 
export default Item;