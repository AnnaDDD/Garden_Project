import React, { useRef, useState } from "react";
import styles from "./CouponForm.module.css";
import gnome from "./images/gnome.png";
import { Modal } from "../Modal/Modal";
import { CSSTransition } from "react-transition-group";
import Alert from "../Alert/Alert";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Input } from "../UI/Input/Input";
import { Button } from "../UI/Button/Button";
import { fetchGetCoupon } from "../../asyncActions/order";

function CouponForm() {
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const [isValid, setIsValid] = useState(true);
  // const [showError, setShowError] = useState("");
  // const [openModal, setOpenModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const onSubmit = (data) => {
    // console.log(data);
    fetchGetCoupon('sale');
    setShowMessage(true);
  };

  const [showMessage, setShowMessage] = useState(false);
  const oferRef = useRef(null);
  const dispatch = useDispatch();

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

  // const validatePhoneNumber = (number) => {
  //     const phoneNumberRegex = /^(\+49)(\d{3,4}) ?(\d{3,4})(\d{4})$/;
  //     return phoneNumberRegex.test(number);
  // };

  // const handlePhoneNumberChange = (event) => {
  //     const newPhoneNumber = event.target.value;
  //     setPhoneNumber(newPhoneNumber);
  //     setIsValid(validatePhoneNumber(newPhoneNumber));
  // };

  // const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     if (isValid) {
  //         setOpenModal(true);
  //     } else {
  //         setShowError('Invalid phone number');
  //     }
  // };

  // const closeModal = () => {
  //     setOpenModal(false);
  // };

  return (
    <div className={styles.wrapper}>
      <img className={styles.imageWrapper} src={gnome} alt="gnome" />
      <div className={styles.formWrapper}>
        <div className={styles.textWrapper}>
          <span className={styles.bigtextWrapper}>5% off </span>
          <br />
          on the first order
        </div>
        {/* <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        className={styles.input}
                        placeholder="+49"
                        type="tel"
                        value={phoneNumber}
                        required
                        onChange={handlePhoneNumberChange}
                    />
                    {!isValid && <p className={styles.message}>Please enter a valid phone number in format +49XXXXXXXXX</p>}
                    {showError && <p className={styles.messageError}>{showError}</p>}
                    <button className={styles.formButton} type="submit">Get a discount</button>
                </form> */}

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
      {/* <Modal open={openModal} onClose={closeModal}>
                <div className={styles.modalContent}>
                    <span onClick={closeModal} className={styles.closeButton}></span>
                    <p>You get your discount code with a message</p>
                </div>
            </Modal> */}
    </div>
  );
}

export default CouponForm;
