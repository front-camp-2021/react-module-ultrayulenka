export const selectParams = (state) => state.params;

export const selectTotalPages = (state) => state.params.totalPages;

export const selectCurrentPage = (state) => state.params.page;

export const selectPageLimit = (state) => state.params.pageLimit;

export const selectFilters = (state) => state.params.filters;

export const selectActiveFilters = (state) => state.params.selectedFilters;

export const selectRanges = (state) => state.params.ranges;

export const selectSearch = (state) => state.params.search;