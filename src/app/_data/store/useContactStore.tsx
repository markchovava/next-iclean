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
}))