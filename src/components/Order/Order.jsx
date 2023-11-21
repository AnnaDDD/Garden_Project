import { useRef, useState } from 'react';
import {useForm} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { removeAllProductsFromCart } from '../../store/cartSlice';
import styles from './Order.module.css';
import { fetchGetOrder } from '../../asyncActions/order';
import { Button } from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';
import { CSSTransition } from 'react-transition-group';
import Alert from '../Alert/Alert';


const Order = ({ totalSumm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const onSubmit = (data) => {
    // console.log(data);
    setShowMessage(true);
  };

  const [showMessage, setShowMessage] = useState(false);
  const oferRef = useRef(null);
  const dispatch = useDispatch();

  const cleanCart = () => {
    fetchGetOrder('order');
    setShowMessage(false);
    dispatch(removeAllProductsFromCart());
  };

  const phoneInput = register('phone', {
    required: 'Field must be filled',
    pattern: {
      value: /^(\+49)(\d{3,4}) ?(\d{3,4})(\d{4})$/,
      message: 'Please enter a valid phone number in format +49XXXXXXXXX',
    },
  });

  const active = errors.phone && 'active';

  return (
    <div className={styles.order}>
      <h3 className={styles.order_title}>Order details</h3>
      <div className={styles.order_summ}>
        <p>Total</p>
        <div>
          {totalSumm}
          <span>&#x24;</span>
        </div>
      </div>
      <form className={styles.offer_form} onSubmit={handleSubmit(onSubmit)}>
        <p className={`${styles.error} ${styles.order} ${styles[active]}`}>
          {errors.phone?.message}
        </p>
        <Input
          content="order"
          error_style={errors.phone && 'error'}
          placeholder="+49"
          {...phoneInput}
        />
        <Button content="order" text="Order" onClick={cleanCart} />
      </form>
      <CSSTransition
        in={showMessage}
        nodeRef={oferRef}
        timeout={300}
        classNames='alert'
        unmountOnExit
      >
		<Alert ref={oferRef} setShowMessage={setShowMessage} cleanCart={cleanCart} showMessage={showMessage}/>
      </CSSTransition>
    </div>
  );
};

export default Order;




