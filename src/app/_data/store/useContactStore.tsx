"use client"

import { create } from "zustand"
import { ContactEntity, ContactInterface } from "../entity/ContactEntity"


interface Props {
    data: ContactInterface
    errors: ContactInterface
    isSubmitting: boolean
    clearErrors: () => void
    resetData: () => void
    setData: (i: ContactInterface) => void
    setIsSubmitting: (i: boolean) => void
    setInputValue: (
        e: React.ChangeEvent<HTMLInputElement> |
            React.ChangeEvent<HTMLTextAreaElement> |
            React.ChangeEvent<HTMLSelectElement>
    ) => void
    validateField: (name: string, value: string) => string
    validateForm: () => { isValid: boolean; errors: ContactInterface }
    setError: (name: string, value: string) => void
}


export const useContactStore = create<Props>((set, get) => ({
    data: ContactEntity,
    errors: ContactEntity,
    isSubmitting: false,
    clearErrors: () => {
        set({
            errors: ContactEntity
        })
    },
    resetData: () => {
        set({
            data: ContactEntity
        })
    },
    setData: (i) => {
        set({
            data: i
        })
    },
    setIsSubmitting: (i) => {
        set({
            isSubmitting: i
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
            default:
                break;
        }
        return error
    },
    validateForm: () => {
        const { data } = get();
        let errors = { ...ContactEntity };
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
        const addressError = get().validateField("address", data.address);
        if (addressError) {
            errors.address = addressError;
            hasError = true;
        }
        set({ errors });
        return {
            isValid: !hasError,
            errors
        };
    },
}))