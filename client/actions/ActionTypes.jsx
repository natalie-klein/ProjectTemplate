


export const CREATE_USER = 'CREATE_USER';
export const CREATE_CARD = 'CREATE_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const SELECT_RESOLVED = 'SELECT_RESOLVED';
export const FILTERBY_ALL = 'FILTERBY_ALL';
export const FILTERBY_STATUS = 'FILTERBY_STATUS';
export const FILTERBY_USER = 'FILTERBY_USER';
export const FILTERBY_DATE = 'FILTERBY_DATE';

export const onUpdateText = (value) => ({
  type: types.UPDATE_TEXT,
  payload: value,
})