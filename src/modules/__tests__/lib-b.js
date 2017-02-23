import * as b from '../lib-b';

describe('sanity', () => {
  it('should exist', () => {
    expect(b).toBeDefined();
  });
  it('should contain the right methods', () => {
    expect(Object.keys(b)).toMatchSnapshot();
  });
});
