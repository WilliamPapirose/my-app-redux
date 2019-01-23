// eslint-disable-next-line import/prefer-default-export
export const renameColumn = (name, columnId) => ({
  type: 'RENAME_COLUMN',
  name,
  columnId,
});
