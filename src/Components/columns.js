import { format } from "date-fns";
import { ColumnFilterInput } from "./ColumnFilterInput";
export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    Filter: ColumnFilterInput
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
    Filter: ColumnFilterInput
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
    Filter: ColumnFilterInput
  },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "date_of_birth",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
    Filter: ColumnFilterInput
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
    Filter: ColumnFilterInput
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
    Filter: ColumnFilterInput
  }
];

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id"
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name"
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name"
      }
    ]
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "date_of_birth"
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country"
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone"
      }
    ]
  }
];
