import React, {Component} from 'react';
import {Media} from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedDish: null
    }

  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish}, function() {
      //console.log(this.state.selectedDish)
    });
}

renderDish(dish) {
  if (dish != null)
      return(
          <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
          </Card>
      );
  else
      return(
          <div></div>
      );
}

  render(){
    //console.log("this.props.dishes: ", this.props.dishes)
    const menu = this.props.dishes.map((dish) => {
        return (
          <div className="col-12 col-md-5 m-1">
            <Card key={dish.id}
              onClick={() => this.onDishSelect(dish)}>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardImgOverlay>
                  <CardTitle>{dish.name}</CardTitle>
              </CardImgOverlay>
            </Card>
          </div>
        );
    });
    //console.log("MENU Seleteddish: ", this.state.selectedDish)
      return (
        <div>
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>

          {this.state.selectedDish != null &&
              <DishDetail dish={this.state.selectedDish}> 
              </DishDetail>
          }

      </div>
    );
    
  }
}

export default Menu;
