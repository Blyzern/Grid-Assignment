export const childGridOptions = (data) => ({
  columns: [
    {
      field: 'Emails',
      headerText: 'Emails',
      width: '100',
      textAlign: 'Left',
    },
  ],
  dataSource: data,
  editSettings: {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    mode: 'Dialog',
  },
  queryString: 'Emails',
});

export const filterOptions = {
  type: 'CheckBox',
};

export const columnConfig = ({ accessor, genderTemplate }) => [
  {
    field: 'UserName',
    headerText: 'User Name',
    width: '50',
    textAlign: 'Left',
    valueAccessor: accessor,
    template: null,
  },
  {
    field: 'FirstName',
    headerText: 'First Name',
    width: '50',
    textAlign: 'Left',
    valueAccessor: accessor,
    template: null,
  },
  {
    field: 'LastName',
    headerText: 'Last Name',
    width: '50',
    textAlign: 'Left',
    valueAccessor: accessor,
    template: null,
  },
  {
    field: 'Gender',
    headerText: 'Gender',
    width: '40',
    textAlign: 'Left',
    valueAccessor: accessor,
    template: genderTemplate,
  },
  {
    field: 'Age',
    headerText: 'Age',
    width: '40',
    textAlign: 'Left',
    valueAccessor: accessor,
    template: null,
  },
  {
    field: 'Emails',
    headerText: 'Emails',
    width: '100',
    textAlign: 'Left',
    format: 'C2',
    valueAccessor: accessor,
    template: null,
  },
];
