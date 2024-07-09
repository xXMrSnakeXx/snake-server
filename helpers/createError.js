const messages = {
    400: "Bad Request",
    403: "Forbidden",
    404: "Not found",
    409: "Conflict",
  };
  export const createError = (status, message = messages[status]) => {
    const error = new Error(message);
    error.status = status;
    return error;
  };