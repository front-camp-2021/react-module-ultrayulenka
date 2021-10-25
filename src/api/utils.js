const prepareQuery = ({ filters = [], ranges = null, search = null, page = 1, pageLimit = 10 }) => {
    const query = new URLSearchParams();

    query.set('_page', page);
    query.set('_limit', pageLimit);

    if(filters.length > 0) {
        const entries = filters.map(filter => filter.split('='));
        entries.forEach(entry => {
            const [key, value] = entry;
            query.append(key, value);
        });
    }

    if(ranges) {
        for(let key of Object.keys(ranges)) {
            const name = key.toLowerCase();
            const { 
                min,
                max,
                selected:{ from, to } 
            } = ranges[key];

            if(from !== min) query.set(`${name}_gte`, from);
            if(to !== max) query.set(`${name}_lte`, to);
        }
    }

    if(search && search.length > 0) {
        query.set('q', search.toLowerCase());
    }

    return query;
}

const prepareFilters = (arr, prefix) => {
    return arr.map(item => {
        return {
          value: `${prefix}=` + item.toLowerCase().split(' ').join('_'),
          title: item
        }
    });
}

export {
    prepareQuery,
    prepareFilters
}