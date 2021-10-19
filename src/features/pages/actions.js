const CHANGE_PAGE = 'CHANGE_PAGE';
const CHANGE_TOTAL_PAGES = 'CHANGE_TOTAL_PAGES'

function changePage (payload) {
    return {
        type: 'CHANGE_PAGE',
        payload
    };
};

function changeTotalPages (payload) {
    return {
        type: 'CHANGE_TOTAL_PAGES',
        payload
    }
}

export {
    CHANGE_PAGE,
    CHANGE_TOTAL_PAGES,
    changePage,
    changeTotalPages
}