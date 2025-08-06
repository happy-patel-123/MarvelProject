import { Platform } from "react-native";
import { EMAIL_REGEX } from "../shared/constants";

const isEmpty = (value: string | undefined) => {
    return !value || value.toString().trim().length <= 0;
};

const isNotValidEmail = (email: string) => {
    return !EMAIL_REGEX.test(email) && email.length <= 40;
};

const isNotValidMobile = (mobile: string) => {
    const tenDigitMobileRegex = /^\d{10}$/u;
    return !tenDigitMobileRegex.test(mobile);
};

const isIos = () => {
    return Platform.OS === 'ios';
};


const reformatDateToISO = (dateOfBirth: string) => {
    const [day, month, year] = dateOfBirth.split('-');
    const formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    return formattedDate;
};

export {
    isEmpty,
    isNotValidEmail,
    isNotValidMobile,
    isIos,
    reformatDateToISO
};