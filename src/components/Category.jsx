import React, { Component } from 'react';
import Item from './Item';
/*
    Đây là danh mục dùng để hiển thị list các sản phẩm
*/
class Category extends Component {
    state = { 
        listItems : [
            {
                id : 1,
                name: 'Áo Sơ mi cho bé trai',
                desc: 'Áo Sơ Mi Cho Bé Trai Vải Nhập Khẩu Thái Lan Mềm Mịn Co Giản Cực Tốt Nhiều Màu Size Bé 5-10 tuổi Từ 20-34kg',
                url: '//www.lazada.vn/products/ao-so-mi-cho-be-trai-vai-nhap-khau-thai-lan-mem-min-co-gian-cuc-tot-nhieu-mau-size-be-5-10-tuoi-tu-20-34kg-i316850157-s507518457.html?spm=a2o4n.home.flashSale.2.1172e182EcKE8i&amp;search=1&amp;mp=1&amp;c=fs&amp;clickTrackInfo=%7B%22rs%22%3A%220.867873262967769%22%2C%22prior_score%22%3A%220%22%2C%22submission_discount%22%3A%2279%25%22%2C%22rmc%22%3A%2210%22%2C%22type%22%3A%22entrance%22%2C%22prior_type%22%3A%22racing%22%2C%22isw%22%3A%220.3%22%2C%22userid%22%3A%22%22%2C%22sca%22%3A%229%22%2C%22hourtonow%22%3A%229%22%2C%22abid%22%3A%22142638%22%2C%22itemid%22%3A%22316850157_0_racing_0.9326507936507936_0.867873262967769%22%2C%22pvid%22%3A%22e55dd859-aa15-43f7-9ca2-ed12b8f3d856%22%2C%22pos%22%3A%220%22%2C%22ccw%22%3A%220.1%22%2C%22rms%22%3A%220.1388888888888889%22%2C%22c2i%22%3A%220.0%22%2C%22scm%22%3A%221007.17760.142638.%22%2C%22rmw%22%3A%220.06250072338800218%22%2C%22isrw%22%3A%220.1%22%2C%22rkw%22%3A%220.4%22%2C%22ss%22%3A%220.9326507936507936%22%2C%22i2i%22%3A%220.0%22%2C%22ms%22%3A%220.9326507936507936%22%2C%22itr%22%3A%220.9296296296296296%22%2C%22mt%22%3A%22racing%22%2C%22its%22%3A%22540%22%2C%22promotion_price%22%3A%2229000%22%2C%22anonid%22%3A%22d0b444cb-dfe9-49eb-8b22-2916433e6290%22%2C%22ppw%22%3A%220.0%22%2C%22isc%22%3A%22502%22%2C%22iss2%22%3A%220.9996808238443263%22%2C%22iss1%22%3A%221.0%22%2C%22config%22%3A%22%22%7D&amp;scm=1007.17760.142638.0" className="card-fs-content-body-unit hp-mod-card-hover J_FSItemUnit',
                img_link: '//vn-test-11.slatic.net/p/cf75529ef84fa82b0cc29eabbe7d6628.jpg_400x400Q100.jpg_.webp',
                price: 29000,
                org_price: 135000,
                currency: 'đ',
                discount: -79
            },
            {
                id : 2,
                name: 'Áo Sơ mi cho bé trai',
                desc: 'Áo Sơ Mi Cho Bé Trai Vải Nhập Khẩu Thái Lan Mềm Mịn Co Giản Cực Tốt Nhiều Màu Size Bé 5-10 tuổi Từ 20-34kg',
                url: '//www.lazada.vn/products/ao-so-mi-cho-be-trai-vai-nhap-khau-thai-lan-mem-min-co-gian-cuc-tot-nhieu-mau-size-be-5-10-tuoi-tu-20-34kg-i316850157-s507518457.html?spm=a2o4n.home.flashSale.2.1172e182EcKE8i&amp;search=1&amp;mp=1&amp;c=fs&amp;clickTrackInfo=%7B%22rs%22%3A%220.867873262967769%22%2C%22prior_score%22%3A%220%22%2C%22submission_discount%22%3A%2279%25%22%2C%22rmc%22%3A%2210%22%2C%22type%22%3A%22entrance%22%2C%22prior_type%22%3A%22racing%22%2C%22isw%22%3A%220.3%22%2C%22userid%22%3A%22%22%2C%22sca%22%3A%229%22%2C%22hourtonow%22%3A%229%22%2C%22abid%22%3A%22142638%22%2C%22itemid%22%3A%22316850157_0_racing_0.9326507936507936_0.867873262967769%22%2C%22pvid%22%3A%22e55dd859-aa15-43f7-9ca2-ed12b8f3d856%22%2C%22pos%22%3A%220%22%2C%22ccw%22%3A%220.1%22%2C%22rms%22%3A%220.1388888888888889%22%2C%22c2i%22%3A%220.0%22%2C%22scm%22%3A%221007.17760.142638.%22%2C%22rmw%22%3A%220.06250072338800218%22%2C%22isrw%22%3A%220.1%22%2C%22rkw%22%3A%220.4%22%2C%22ss%22%3A%220.9326507936507936%22%2C%22i2i%22%3A%220.0%22%2C%22ms%22%3A%220.9326507936507936%22%2C%22itr%22%3A%220.9296296296296296%22%2C%22mt%22%3A%22racing%22%2C%22its%22%3A%22540%22%2C%22promotion_price%22%3A%2229000%22%2C%22anonid%22%3A%22d0b444cb-dfe9-49eb-8b22-2916433e6290%22%2C%22ppw%22%3A%220.0%22%2C%22isc%22%3A%22502%22%2C%22iss2%22%3A%220.9996808238443263%22%2C%22iss1%22%3A%221.0%22%2C%22config%22%3A%22%22%7D&amp;scm=1007.17760.142638.0" className="card-fs-content-body-unit hp-mod-card-hover J_FSItemUnit',
                img_link: '//vn-test-11.slatic.net/p/cf75529ef84fa82b0cc29eabbe7d6628.jpg_400x400Q100.jpg_.webp',
                price: 29000,
                org_price: 135000,
                currency: 'đ',
                discount: -79
            },{
                id : 3,
                name: 'Áo Sơ mi cho bé trai',
                desc: 'Áo Sơ Mi Cho Bé Trai Vải Nhập Khẩu Thái Lan Mềm Mịn Co Giản Cực Tốt Nhiều Màu Size Bé 5-10 tuổi Từ 20-34kg',
                url: '//www.lazada.vn/products/ao-so-mi-cho-be-trai-vai-nhap-khau-thai-lan-mem-min-co-gian-cuc-tot-nhieu-mau-size-be-5-10-tuoi-tu-20-34kg-i316850157-s507518457.html?spm=a2o4n.home.flashSale.2.1172e182EcKE8i&amp;search=1&amp;mp=1&amp;c=fs&amp;clickTrackInfo=%7B%22rs%22%3A%220.867873262967769%22%2C%22prior_score%22%3A%220%22%2C%22submission_discount%22%3A%2279%25%22%2C%22rmc%22%3A%2210%22%2C%22type%22%3A%22entrance%22%2C%22prior_type%22%3A%22racing%22%2C%22isw%22%3A%220.3%22%2C%22userid%22%3A%22%22%2C%22sca%22%3A%229%22%2C%22hourtonow%22%3A%229%22%2C%22abid%22%3A%22142638%22%2C%22itemid%22%3A%22316850157_0_racing_0.9326507936507936_0.867873262967769%22%2C%22pvid%22%3A%22e55dd859-aa15-43f7-9ca2-ed12b8f3d856%22%2C%22pos%22%3A%220%22%2C%22ccw%22%3A%220.1%22%2C%22rms%22%3A%220.1388888888888889%22%2C%22c2i%22%3A%220.0%22%2C%22scm%22%3A%221007.17760.142638.%22%2C%22rmw%22%3A%220.06250072338800218%22%2C%22isrw%22%3A%220.1%22%2C%22rkw%22%3A%220.4%22%2C%22ss%22%3A%220.9326507936507936%22%2C%22i2i%22%3A%220.0%22%2C%22ms%22%3A%220.9326507936507936%22%2C%22itr%22%3A%220.9296296296296296%22%2C%22mt%22%3A%22racing%22%2C%22its%22%3A%22540%22%2C%22promotion_price%22%3A%2229000%22%2C%22anonid%22%3A%22d0b444cb-dfe9-49eb-8b22-2916433e6290%22%2C%22ppw%22%3A%220.0%22%2C%22isc%22%3A%22502%22%2C%22iss2%22%3A%220.9996808238443263%22%2C%22iss1%22%3A%221.0%22%2C%22config%22%3A%22%22%7D&amp;scm=1007.17760.142638.0" className="card-fs-content-body-unit hp-mod-card-hover J_FSItemUnit',
                img_link: '//vn-test-11.slatic.net/p/cf75529ef84fa82b0cc29eabbe7d6628.jpg_400x400Q100.jpg_.webp',
                price: 29000,
                org_price: 135000,
                currency: 'đ',
                discount: -79
            },{
                id : 4,
                name: 'Áo Sơ mi cho bé trai',
                desc: 'Áo Sơ Mi Cho Bé Trai Vải Nhập Khẩu Thái Lan Mềm Mịn Co Giản Cực Tốt Nhiều Màu Size Bé 5-10 tuổi Từ 20-34kg',
                url: 'https://www.lazada.vn/products/ao-so-mi-cho-be-trai-vai-nhap-khau-thai-lan-mem-min-co-gian-cuc-tot-nhieu-mau-size-be-5-10-tuoi-tu-20-34kg-i316850157-s507518457.html?spm=a2o4n.home.flashSale.2.1172e182EcKE8i&amp;search=1&amp;mp=1&amp;c=fs&amp;clickTrackInfo=%7B%22rs%22%3A%220.867873262967769%22%2C%22prior_score%22%3A%220%22%2C%22submission_discount%22%3A%2279%25%22%2C%22rmc%22%3A%2210%22%2C%22type%22%3A%22entrance%22%2C%22prior_type%22%3A%22racing%22%2C%22isw%22%3A%220.3%22%2C%22userid%22%3A%22%22%2C%22sca%22%3A%229%22%2C%22hourtonow%22%3A%229%22%2C%22abid%22%3A%22142638%22%2C%22itemid%22%3A%22316850157_0_racing_0.9326507936507936_0.867873262967769%22%2C%22pvid%22%3A%22e55dd859-aa15-43f7-9ca2-ed12b8f3d856%22%2C%22pos%22%3A%220%22%2C%22ccw%22%3A%220.1%22%2C%22rms%22%3A%220.1388888888888889%22%2C%22c2i%22%3A%220.0%22%2C%22scm%22%3A%221007.17760.142638.%22%2C%22rmw%22%3A%220.06250072338800218%22%2C%22isrw%22%3A%220.1%22%2C%22rkw%22%3A%220.4%22%2C%22ss%22%3A%220.9326507936507936%22%2C%22i2i%22%3A%220.0%22%2C%22ms%22%3A%220.9326507936507936%22%2C%22itr%22%3A%220.9296296296296296%22%2C%22mt%22%3A%22racing%22%2C%22its%22%3A%22540%22%2C%22promotion_price%22%3A%2229000%22%2C%22anonid%22%3A%22d0b444cb-dfe9-49eb-8b22-2916433e6290%22%2C%22ppw%22%3A%220.0%22%2C%22isc%22%3A%22502%22%2C%22iss2%22%3A%220.9996808238443263%22%2C%22iss1%22%3A%221.0%22%2C%22config%22%3A%22%22%7D&amp;scm=1007.17760.142638.0%22%20className=%22card-fs-content-body-unit%20hp-mod-card-hover%20J_FSItemUnit',
                img_link: '//vn-test-11.slatic.net/p/cf75529ef84fa82b0cc29eabbe7d6628.jpg_400x400Q100.jpg_.webp',
                price: 29000,
                org_price: 135000,
                currency: 'đ',
                discount: -79
            }
        ]
     }
    render() { 
        return (
            <div className="container">
                {this.props.children}
                <div className="card-fs-content-body J_FSBody" title="Flash Sale">
                    {this.state.listItems.map(item=>(
                        <React.Fragment key={item.id+" "+item.name}>
                            <Item
                                id = {item.id}
                                name = {item.name}
                                desc = {item.desc}
                                url = {item.url}
                                img_link = {item.img_link}
                                price = {item.price}
                                org_price = {item.org_price}
                                currency = {item.currency}
                                discount = {item.discount}
                            />
                        </React.Fragment>
                        
                    ))}
            </div>
            </div> );
    }
}
 
export default Category;