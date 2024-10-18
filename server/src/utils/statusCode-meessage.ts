export const getStatusMessage = (statusCode:number) : string => {
    const statusMessage : {[key:number]:string} = {
        200 : "Success",
        201 : 'Created Successgully',
        400 : "Bad Request",
        401 : "Unauthorized",
        403 : "Forbidden",
        404 : "Not Found",
        405 : "Method Not Allowed",
        500 : "Internal Server Error",
    }

    return statusMessage[statusCode] || "Unknown status code"
};