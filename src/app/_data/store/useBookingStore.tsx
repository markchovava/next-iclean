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
}));