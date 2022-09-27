export const COMMONCONST ={
    emailPattern:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phoneNumberPattern: "^(?!0+$)((\\+91-?)|0)?[0-9]{11}$",
    passwordPattern:/^(?!.* )(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[a-z])(?=.*[A-Z]).{8,15}$/,
}
export const MaxLength ={
    addressMaxLength:"150",
    phonenUmberMaxLength:"11",
    occupationMaxLength:"50",
    nameMaxLength:"100",
    fieldMaxLength:'30',
    fileMaxSize:"2",
    passwordLength:"15",
    quoteRequestIdLength:"6"
}