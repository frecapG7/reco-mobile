


export const i18nError = (error) => {
    if (error?.message)
        return error.message;
    switch (error?.type) {
        case "required":
            return "This field is required";
        case "minLength":
            return "This field is too short";
        case "maxLength":
            return "This field is too long";
        case "pattern":
            return "This field is invalid";
        case "validate":
            return "This field is invalid";
        default:
            return JSON.stringify(error);
    }
}