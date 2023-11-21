import React, { useRef, useState } from "react";
import styles from "./CouponForm.module.css";
import gnome from "./images/gnome.png";
import { CSSTransition } from "react-transition-group";
import Alert from "../Alert/Alert";
import { useForm } from "react-hook-form";
import { Input } from "../UI/Input/Input";
import { Button } from "../UI/Button/Button";
import { fetchGetCoupon } from "../../asyncActions/order";

function CouponForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const onSubmit = (data) => {
    fetchGetCoupon('sale');
    setShowMessage(true);
  };

  const [showMessage, setShowMessage] = useState(false);
  const oferRef = useRef(null);
  
  const cleanCart = () => {
    setShowMessage(false);
  };

  const phoneInput = register("phone", {
    required: "Field must be filled",
    pattern: {
      value: /^(\+49)(\d{3,4}) ?(\d{3,4})(\d{4})$/,
      message: "Please enter a valid phone number in format +49XXXXXXXXX",
    },
  });

  const active = errors.phone && "active";

  return (
    <div className={styles.wrapper}>
      <img className={styles.imageWrapper} src={gnome} alt="gnome" />
      <div className={styles.formWrapper}>
        <div className={styles.textWrapper}>
          <span className={styles.bigtextWrapper}>5% off </span>
          <br />
          on the first order
        </div>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <p className={`${styles.error} ${styles.order} ${styles[active]}`}>
            {errors.phone?.message}
          </p>
          <Input
            content="coupon"
            error_style={errors.phone && "error"}
            placeholder="+49"
            {...phoneInput}
          />
          <Button content="coupon" text="Get a discount" type="submit" />
        </form>
      </div>

      <CSSTransition
        in={showMessage}
        nodeRef={oferRef}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
        <Alert
          ref={oferRef}
          setShowMessage={setShowMessage}
          cleanCart={cleanCart}
          showMessage={showMessage}
          context="coupon"
        />
      </CSSTransition>
    </div>
  );
}

export default CouponForm;
