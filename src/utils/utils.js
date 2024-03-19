

export const formatDateTime = (datetime) => {
    return new Intl.DateTimeFormat('en-US').format(datetime);
}

