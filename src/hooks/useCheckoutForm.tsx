import {
  type FormData,
  type InputDetails,
  updateFormDetails,
} from '@/redux/features/checkoutSlice';
import {useAppDispatch} from '@/redux/store';
import {isValidString} from '@/utils';
import React from 'react';

const ERROR_INIT = {
  country: false,
  firstName: false,
  lastName: false,
  address1: false,
  address2: false,
  city: false,
  state: false,
  pincode: false,
  mobile: false,
};

const useCheckoutForm = () => {
  const dispatch = useAppDispatch();

  const [error, setError] = React.useState(ERROR_INIT);

  // This function will update the form info
  function handleUserInfo(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) {
    const {
      target: {name, value},
    } = event;
    dispatch(
      updateFormDetails({
        name: name as InputDetails['name'],
        value,
      })
    );
  }

  function validateDetails(userDetails: FormData): boolean {
    const {
      country,
      firstName,
      lastName,
      address1,
      address2,
      city,
      state,
      pincode,
      mobile,
    } = userDetails;

    setError(ERROR_INIT);

    const isValidCountry = isValidString(country) && country !== '0';
    const isValidFirstName = /^[a-zA-Z ]+$/.test(firstName);
    const isValidLastName = /^[a-zA-Z ]+$/.test(lastName);
    const isValidAddress1 = isValidString(address1);
    const isValidAddress2 = isValidString(address2);
    const isValidCity = isValidString(city);
    const isValidState = isValidString(state);
    const isValidPincode = /^(\d{4}|\d{6})$/.test(pincode);
    const isValidNumber =
      /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6-9]\d{9}$/.test(mobile);

    if (!isValidCountry) {
      setError((prev): typeof error => ({
        ...prev,
        country: true,
      }));
    }

    if (!isValidFirstName) {
      setError((prev): typeof error => ({
        ...prev,
        firstName: true,
      }));
    }

    if (!isValidLastName) {
      setError((prev): typeof error => ({
        ...prev,
        lastName: true,
      }));
    }

    if (!isValidAddress1) {
      setError((prev): typeof error => ({
        ...prev,
        address1: true,
      }));
    }

    if (!isValidAddress2) {
      setError((prev): typeof error => ({
        ...prev,
        address2: true,
      }));
    }

    if (!isValidCity) {
      setError((prev): typeof error => ({
        ...prev,
        city: true,
      }));
    }

    if (!isValidState) {
      setError((prev): typeof error => ({
        ...prev,
        state: true,
      }));
    }

    if (!isValidPincode) {
      setError((prev): typeof error => ({
        ...prev,
        pincode: true,
      }));
    }

    if (!isValidNumber) {
      setError((prev): typeof error => ({
        ...prev,
        mobile: true,
      }));
    }

    return (
      isValidCountry &&
      isValidFirstName &&
      isValidLastName &&
      isValidAddress1 &&
      isValidAddress2 &&
      isValidCity &&
      isValidState &&
      isValidPincode &&
      isValidNumber
    );
  }

  return {
    error,
    handleUserInfo,
    validateDetails,
  };
};

export default useCheckoutForm;
