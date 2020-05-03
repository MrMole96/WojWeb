export const categoriesMiddleware = store => next => action => {
    if (action.type === 'GET_CATEGORIES_SUCCESS') {
        const { genres } = action.payload;
        console.log('categories', genres)
        action.payload = genres;
    }
    next(action);
};
