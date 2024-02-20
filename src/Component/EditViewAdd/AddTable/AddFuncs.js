import swal from "sweetalert";

export function PanValidation(value,setvlaue){
    const firstFiveChars = value.slice(0, 5);
    const nextFourChars = value.slice(5, 9);
    const lastChar = value.slice(9);

    if (!/^[A-Za-z]+$/.test(firstFiveChars)) {
        return false; // First 5 characters should be alphabetic
    }
    if (!/^\d+$/.test(nextFourChars)) {
        return false; // Next 4 characters should be numeric
    }
    if (!/^[A-Za-z]+$/.test(lastChar)) {
        return false; // Last character should be alphabetic
    }
    return true; 
}

export function EmailValidation(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
