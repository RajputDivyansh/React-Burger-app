import React, { Component } from "react";
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        // console.log(this.props.ingredients);
          this.setState({loading: true});
        // alert('you continue');
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Divyansh',
                address: {
                    street: 'abc',
                    zipCode: '123',
                    country: 'India'
                },
                email: 'test@gmail.com'
            },
            deliveryMode: 'fastest'
        }

        axios.post("/orders.json",order)
            .then((response) => {
                this.setState({loading: false, purchasing: false});
                this.props.history.push('/');
            })
            .catch((err) => { 
                this.setState({loading: false, purchasing: false});
            });
    }

    render()   {
        let form =(
        <form>
            <input className={classes.Input}type="text" name="name" placeholder="Your name"/>
            <input className={classes.Input}type="email" name="email" placeholder="Email"/>
            <input className={classes.Input}type="text" name="street" placeholder="Street"/>
            <input className={classes.Input}type="text" name="postal" placeholder="Postal Code"/>
            <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>
        );

        if(this.state.loading) {
            form = <Spinner />
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter Your Contact data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;