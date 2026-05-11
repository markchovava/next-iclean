"use client"
import { create } from 'zustand';
import { ServiceEntity, ServiceInterface } from '../entity/ServiceEntity';


interface Props {
    data: ServiceInterface
    errors: ServiceInterface
    selectedData: ServiceInterface
    toggleModal: boolean
    isSubmitting: boolean
    clearErrors: () => void
    setIsSubmitting: (i: boolean) => void
    setToggleModal: () => void
    setSelectedData: (i: ServiceInterface) => void
    setInputValue: (
        e: React.ChangeEvent<HTMLInputElement> |
            React.ChangeEvent<HTMLTextAreaElement> |
            React.ChangeEvent<HTMLSelectElement>
    ) => void
}

export const useServiceStore = create<Props>((set, get) => ({
    data: ServiceEntity,
    selectedData: ServiceEntity,
    errors: ServiceEntity,
    toggleModal: false,
    isSubmitting: false,
    clearErrors: () => {
        set({
            errors: ServiceEntity
        })
    },
    setIsSubmitting: (i) => {
        set({
            isSubmitting: i
        })
    },
    setSelectedData: (i) => {
        set({
            selectedData: i
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