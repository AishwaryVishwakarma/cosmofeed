'use client';

import Layout from '@/components/Layout/Layout';
import CountryPicker from '@/components/commons/CountryPicker';
import Field from '@/components/commons/Field';
import useCheckoutForm from '@/hooks/useCheckoutForm';
import {useAppSelector} from '@/redux/store';
import React from 'react';

import styles from './styles.module.scss';

const CheckoutPage = () => {
  const formData = useAppSelector((state) => state.checkout);

  const {error, handleUserInfo, validateDetails} = useCheckoutForm();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateDetails(formData)) return;

    console.log(formData);
  };

  return (
    <Layout
      navbar={{
        show: true,
        styles: styles.navbar,
      }}
      layouted
    >
      <div className={styles.content}>
        <h1>Checkout</h1>
        <form onSubmit={onSubmit}>
          <CountryPicker
            label='Country'
            id='country'
            name='country'
            onChange={(e) => handleUserInfo(e)}
            value={formData.country}
            required
            className={error.country ? styles.inputError : ''}
            showError={error.country}
            errorText='Please pick a Country'
            errorStyle={styles.error}
          />
          <div>
            <Field
              label='First Name'
              type='text'
              id='first_name'
              name='firstName'
              onChange={(e) => handleUserInfo(e)}
              value={formData.firstName}
              required
              autoComplete='given-name'
              placeholder='Enter your first name'
              className={error.firstName ? styles.inputError : ''}
              showError={error.firstName}
              errorText='Please enter a valid first name'
              errorStyle={styles.error}
            />
            <Field
              label='Last Name'
              type='text'
              id='last_name'
              name='lastName'
              onChange={(e) => handleUserInfo(e)}
              value={formData.lastName}
              required
              autoComplete='family-name'
              placeholder='Enter your Last name'
              className={error.lastName ? styles.inputError : ''}
              showError={error.lastName}
              errorText='Please enter a valid last name'
              errorStyle={styles.error}
            />
          </div>
          <Field
            label='Address Line 1'
            type='text'
            id='address_line_1'
            name='address1'
            onChange={(e) => handleUserInfo(e)}
            value={formData.address1}
            required
            autoComplete='address-line1'
            placeholder='Enter your Address Line 1'
            className={error.address1 ? styles.inputError : ''}
            showError={error.address1}
            errorText='Please enter a valid address'
            errorStyle={styles.error}
            minLength={6}
          />
          <Field
            label='Address Line 2'
            type='text'
            id='address_line_2'
            name='address2'
            onChange={(e) => handleUserInfo(e)}
            value={formData.address2}
            required
            autoComplete='address-line2'
            placeholder='Enter your Address Line 2'
            className={error.address1 ? styles.inputError : ''}
            showError={error.address1}
            errorText='Please enter a valid address'
            errorStyle={styles.error}
            minLength={6}
          />
          <div>
            <Field
              label='City'
              type='text'
              id='city'
              name='city'
              onChange={(e) => handleUserInfo(e)}
              value={formData.city}
              required
              autoComplete='on'
              placeholder='Enter your Ciy'
              className={error.city ? styles.inputError : ''}
              showError={error.city}
              errorText='Please enter a valid city'
              errorStyle={styles.error}
            />
            <Field
              label='State'
              type='text'
              id='state'
              name='state'
              onChange={(e) => handleUserInfo(e)}
              value={formData.state}
              required
              autoComplete='on'
              placeholder='Enter your Country'
              className={error.state ? styles.inputError : ''}
              showError={error.state}
              errorText='Please enter a valid Country'
              errorStyle={styles.error}
            />
            <Field
              label='Pin Code'
              type='text'
              id='pincode'
              name='pincode'
              onChange={(e) => handleUserInfo(e)}
              value={formData.pincode}
              required
              autoComplete='postal-code'
              placeholder='Enter your Pincode'
              className={error.pincode ? styles.inputError : ''}
              showError={error.pincode}
              errorText='Please enter a valid Pincode'
              errorStyle={styles.error}
            />
          </div>
          <Field
            label='Mobile Number'
            type='tel'
            id='mobile'
            name='mobile'
            onChange={(e) => handleUserInfo(e)}
            value={formData.mobile}
            required
            autoComplete='tel'
            placeholder='Enter your Mobile Number'
            className={error.mobile ? styles.inputError : ''}
            showError={error.mobile}
            errorText='Please enter a valid Number'
            errorStyle={styles.error}
          />
          <button type='submit' className={styles.cta}>
            Continue to Payment
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
