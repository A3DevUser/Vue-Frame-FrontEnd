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
        accessor: 'id',
        // disableFilters: true
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

export const Group_columns_Name = [
    // {
    //     Header: 'Id',
    //     Footer: 'Id',
    //     accessor: 'id',
    //     disableFilters: true
    // },
    {
        Header : 'Vishal',
        Footer : 'Vishal',
        columns : [
            {
                Header: 'First Name',
                Footer: 'First Name',
                accessor: 'first_namev'
            },
            {
                Header: 'Last Name',
                Footer: 'Last Name',
                accessor: 'last_namev'
            }
        ]
    },
    {
        Header : 'Nitin',
        Footer : 'Nitin',
        columns : [
            {
                Header: 'First Name',
                Footer: 'First Name',
                accessor: 'first_namen'
            },
            {
                Header: 'Last Name',
                Footer: 'Last Name',
                accessor: 'last_namen'
            }
        ]
    },
    {
        Header : 'Tej',
        Footer : 'Tej',
        columns : [
            {
                Header: 'First Name',
                Footer: 'First Name',
                accessor: 'first_namet'
            },
            {
                Header: 'Last Name',
                Footer: 'Last Name',
                accessor: 'last_namet'
            }
        ]
    }
]

