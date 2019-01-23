const initialState = JSON.parse(window.localStorage.getItem('Columns')) || [
  { id: 0, columnName: 'TODO' },
  { id: 1, columnName: 'In Progress' },
  { id: 2, columnName: 'Testing' },
  { id: 3, columnName: 'Done' },
];

const columns = (state = initialState, action) => {
  switch (action.type) {
    case 'RENAME_COLUMN':
      return state.map((column) => {
        if (column.id === action.columnId) {
          return {
            ...column,
            columnName: action.name,
          };
        }
        return column;
      });
    default:
      return state;
  }
};

export default columns;
