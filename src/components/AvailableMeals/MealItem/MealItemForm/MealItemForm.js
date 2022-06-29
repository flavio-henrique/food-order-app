import { useContext, useState } from 'react';
import classes from './MealItemForm.module.css';
import CartContext from '../../../../store/CartContext';

const MealItemForm = (props) => {

    const [amount, setAmount] = useState(1);
    const cartContext = useContext(CartContext);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        cartContext.add({...props.meal, amount});
    }

    const amountOnChangeHanlder = (e) => {
        setAmount(+e.target.value);
    }

    
    return <form className={classes.form} onSubmit={onSubmitHandler}>
        <label htmlFor="amount">Amount</label><input id='amount' value={amount} onChange={amountOnChangeHanlder} type="number"></input>
        <button>+ Add</button>
    </form>
}

export default MealItemForm;