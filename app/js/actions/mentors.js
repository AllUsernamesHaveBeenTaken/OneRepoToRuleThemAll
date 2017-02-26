import * as utils from './utils';

export const MENTORS = 'MENTORS';
export const GET_MENTORS = 'MENTORS';
export const CREATE_MENTOR = 'CREATE_MENTOR';
export const UPDATE_MENTOR = 'UPDATE_MENTOR';
export const DESTROY_MENTOR = 'DESTROY_MENTOR';

const createAction = utils.createAction(MENTORS);
const loading = utils.createLoading(MENTORS);

export function getMentors() {
  return (dispatch, getState, api) => {
    dispatch(loading(GET_MENTORS));
    api.Mentors.all({ active: new Date() }, true)
      .then(data => dispatch(createAction(GET_MENTORS, data)))
      .catch(err => dispatch(createAction(GET_MENTORS, err)));
  };
}

export function createMentor(mentor) {
  return (dispatch, getState, api) => {
    dispatch(loading(CREATE_MENTOR));
    api.Mentors.create(mentor)
      .then(data => dispatch(createAction(CREATE_MENTOR, data)))
      .catch(err => dispatch(createAction(CREATE_MENTOR, err)));
  };
}

export function updateMentor(id, mentor) {
  return (dispatch, getState, api) => {
    dispatch(loading(UPDATE_MENTOR));
    api.Mentors.create(id, mentor)
      .then(data => dispatch(createAction(UPDATE_MENTOR, data)))
      .catch(err => dispatch(createAction(UPDATE_MENTOR, err)));
  };
}

export function destroyMentor(id) {
  return (dispatch, getState, api) => {
    dispatch(loading(DESTROY_MENTOR));
    api.Mentors.create(id)
      .then(data => dispatch(createAction(DESTROY_MENTOR, data)))
      .catch(err => dispatch(createAction(DESTROY_MENTOR, err)));
  };
}
