"use client"
import { create } from 'zustand';
import { BookingEntity, BookingInterface } from '../entity/BookingEntity';


interface Props {
    data: BookingInterface
    errors: BookingInterface
    toggleModal: boolean
    isSubmitting: boolean
    clearErrors: () => void
    setIsSubmitting: (i: boolean) => void
    setToggleModal: () => void
    setInputValue: (
        e: React.ChangeEvent<HTMLInputElement> |
            React.ChangeEvent<HTMLTextAreaElement> |
            React.ChangeEvent<HTMLSelectElement>
    ) => void
    validateField: (name: string, value: string) => string
    validateForm: () => { isValid: boolean; errors: BookingInterface }
    setError: (name: string, value: string) => void
}

export const useBookingStore = create<Props>((set, get) => ({
    data: BookingEntity,
    errors: BookingEntity,
    toggleModal: false,
    isSubmitting: false,
    clearErrors: () => {
        set({
            errors: BookingEntity
        })
    },
    setIsSubmitting: (i) => {
        set({
            isSubmitting: i
        })
    },
    setToggleModal: () => {
        const i = get().toggleModal
        set({
            toggleModal: !i,
        })
    },
    setInputValue: (e) => {
        const { name, value } = e.target;
        const currentData = get().data;
        const currentErrors = get().errors;
        set({
            data: {
                ...currentData,
                [name]: value
            },
            // Clear error for this field if it exists
            errors: currentErrors[name as keyof typeof currentErrors]
                ? { ...currentErrors, [name]: "" }
                : currentErrors
        });
    },
    setError: (name, value) => {
        const currentErrors = get().errors;
        set({
            errors: { ...currentErrors, [name]: value }
        })
    },
    validateField: (name, value) => {
        let error = ""
        switch (name) {
            case "name":
                if (!value.trim()) {
                    error = "Name is required.";
                }
                break;
            case "email":
                if (!value.trim()) {
                    error = "Email is required.";
                }
                break;
            case "phone":
                if (!value.trim()) {
                    error = "Phone Number is required.";
                }
                break;
            case "address":
                if (!value.trim()) {
                    error = "Address is required.";
                }
                break;
            case "preferredDate":
                if (!value.trim()) {
                    error = "Preferred Date is required.";
                }
                break;
            case "propertySize":
                if (!value.trim()) {
                    error = "Address is required.";
                }
                break;
            default:
                break;
        }
        return error
    },
    validateForm: () => {
        const { data } = get();
        let errors = { ...BookingEntity };
        let hasError = false;
        // Validate NAME
        const nameError = get().validateField("name", data.name);
        if (nameError) {
            errors.name = nameError;
            hasError = true;
        }
        // Validate PHONE
        const phoneError = get().validateField("phone", data.phone);
        if (phoneError) {
            errors.phone = phoneError;
            hasError = true;
        }
        // Validate EMAIL
        const emailError = get().validateField("email", data.email);
        if (emailError) {
            errors.email = emailError;
            hasError = true;
        }
        // Validate WEBSITE
        const preferredDateError = get().validateField("preferredDate", data.preferredDate);
        if (preferredDateError) {
            errors.preferredDate = preferredDateError;
            hasError = true;
        }
        // Validate ADDRESS
        const propertySizeError = get().validateField("propertySize", data.propertySize);
        if (propertySizeError) {
            errors.propertySize = propertySizeError;
            hasError = true;
        }
        set({ errors });
        return {
            isValid: !hasError,
            errors
        };
    },
}));