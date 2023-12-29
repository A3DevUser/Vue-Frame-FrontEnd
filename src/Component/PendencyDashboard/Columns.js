export const Columns = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id',
        // Filter: ColumnFilter
        // disableFilters: true
    },
    {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name'
    },
    {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name'
    },
    {
        Header: 'Email',
        Footer: 'Email',
        accessor: 'email',
        // disableFilters: true
    },
    {
        Header: 'Date of Birth',
        Footer: 'Date of Birth',
        accessor: 'date_of_birth',
        // disableFilters: true
    },
    {
        Header: 'Age',
        Footer: 'Age',
        accessor: 'age',
        // disableFilters: true
    },
    {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'country',
        // disableFilters: true
    },
    {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone',
        // disableFilters: true
    }
]



export const Group_Columns = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id'
    },
    {
        Header: 'Name',
        Footer: 'Name',
        columns: [
            {
                Header: 'First Name',
                Footer: 'First Name',
                accessor: 'first_name'
            },
            {
                Header: 'Last Name',
                Footer: 'Last Name',
                accessor: 'last_name'
            }
        ]
    },
    {
        Header: 'Details',
        Footer: 'Details',
        columns: [
            {
                Header: 'Email',
                Footer: 'Email',
                accessor: 'email'
            },
            {
                Header: 'Date of Birth',
                Footer: 'Date of Birth',
                accessor: 'date_of_birth'
            },
            {
                Header: 'Age',
                Footer: 'Age',
                accessor: 'age'
            },
            {
                Header: 'Country',
                Footer: 'Country',
                accessor: 'country'
            },
            {
                Header: 'Phone',
                Footer: 'Phone',
                accessor: 'phone'
            }
        ]
    }
]