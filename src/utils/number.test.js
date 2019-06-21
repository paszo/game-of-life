import { clamp } from './number';

describe('[Utils] Number - clamp', () => {
  it('should use min value,when provided value is lower', () => {
    expect(clamp(5, 7, 10)).toEqual(7);
  });

  it('should use max value, when provided value is greater', () => {
    expect(clamp(12, 7, 10)).toEqual(10);
  });

  it('should use provided value, when inside of boundaries', () => {
    expect(clamp(5, 0, 10)).toEqual(5);
  });

  it('should use provided value, when no higher boundary is provided', () => {
    expect(clamp(5, 3)).toEqual(5);
  });
});
