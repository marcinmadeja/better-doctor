import * as selectors from './selectors';
import { initialState } from './index';

const mockState = {
  data: initialState,
};

describe('data selectors', () => {
  it('should return doctors', () => {
    expect(selectors.getDoctors(mockState))
      .toEqual(initialState.doctors);
  });

  it('should return fetchDoctors state', () => {
    expect(selectors.fetchDoctorsState(mockState))
      .toEqual({
        request: initialState.doctorsRequest,
        success: initialState.doctorsSuccess,
        failure: initialState.doctorsFailure,
      });
  });
});
