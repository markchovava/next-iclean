export interface BookingInterface {
    name: string
    phone: string
    address: string,
    propertySize: string
    email: string
    preferredDate: string
}

export const BookingEntity: BookingInterface = {
    name: '',
    phone: '',
    propertySize: '',
    email: '',
    address: '',
    preferredDate: '',
}