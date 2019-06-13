import React, {Component} from 'react';
import {Media} from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props){
        super(props);
        //console.log("DISH DETAIL :" , props)
    }

    renderComments(comments){
    return (
        <div className="col-12 col-md-5 m-1">
        <Card>
            <CardTitle> Comments</CardTitle>
            {comments.map((comment) => {
                return(
                    <div>
                        <p>{comment.author}</p>
                        <p>{comment.comment}</p>
                        <p>{comment.rating}</p>
                    </div>
                );
            })
            }
        </Card>
        </div>
    );
    }

    render(){
        let dish = this.props.dish;
        //console.log("DISH DETAILS SelectedDish :", dish.comments)
        if (dish != null){
            return (
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-5 m-1">
                            <Card key={dish.id} >
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                            </Card>
                            </div>
                        {this.renderComments(dish.comments)}
                        </div>

                    </div>
                )
        } else {
            return <div></div> ;
        }

    }
}

export default DishDetail;