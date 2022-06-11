import React, { Component } from 'react'
import '../App.css';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
const getPopularDishList = async () => {
let res =await fetch("https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/",{
    method:"GET",
});
let list = await res.json();
console.log(list);

// console.log(list.items);
return list.popularDishes;
};
const getDishList = async () => {
    let res =await fetch("https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/",{
        method:"GET",
    });
    let list = await res.json();
    console.log(list);
    
    // console.log(list.items);
    return list.dishes;
    };
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state ={
            dishes:[],
             popularDishes:[],
        }
    }

    componentDidMount() {
        getPopularDishList().then((popularDishes) => {
            this.setState({
                
                popularDishes:popularDishes,
            
            })
        }
        );
        getDishList().then((dishes) => {
            this.setState({
                
                dishes:dishes,
            
            })
        }
        );
    }

    
  render() {
      
    return (
      <div>
          <div>
               Select Dishes
          </div>
          <hr></hr>
          <div className="header">
              <h2> 21 May 2021</h2>
              <h2>10:30 Pm -12:30 Pm</h2>

          </div>
          <div>
              <h6 className="categories1">Italian</h6>
              <h6 className="categories2">Indian</h6>
              <h6 className="categories3">Chinese</h6>
              <h6 className="categories4">English</h6>
              <h6 className="categories5">Spanish</h6>
              <br></br>
          </div>
          
          <div className="popularDishes">
              
          <h1>Popular Dishes</h1>
              {this.state.popularDishes.map((item) => (
                  
                  <div className="item" key ="{item.id}">
                  
                  <div className='imageset'>
                  <img src={item.image} alt="" />
                  <h4>{item.name}</h4>
                  </div>
                </div>
              )
              )
              }
              <br></br>
          </div>

          <div className='dish'>
              <div className="dishmenu">
                  <h1 className="alignleft">Recommended</h1>
                  <h3 className="alignright">Menu</h3>
              </div>
              <div className='dishmain'>
              {this.state.dishes.map((foodList) => (
                  <div className="foodlist" key ="{foodList.id}">
                  <h2>{foodList.name}</h2>
                  <h4>{foodList.rating}</h4>
                  <h4>{foodList.equipments}</h4>
                  <img src="" alt="" />
                  <img src="" alt="" />
                  <p>{foodList.description}</p>
                  <img src={foodList.image} alt=""/>
                  <h3>Add</h3>
                  </div>
              )
              )
              }
              </div>    
              <div>
                  3Food items selected
              </div>

          </div>
      </div>
    )
  }
}
