export const reducer = (state, action) => {

    if (action.type === 'ERROR') {
        return { ...state, isError: true, errMessage: action.err, errCode: action.errCode, isLoading: false }
    }
    if (action.type === 'DATAFETCHED') {
        return { ...state, isLoading: false, mainData: action.res }
    }

}