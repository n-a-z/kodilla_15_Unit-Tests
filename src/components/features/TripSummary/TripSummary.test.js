import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate link to correct url', () => {
    const expectedUrlId = 'abc';
    const expectedUrl = '/trip/abc';
    const component = shallow(<TripSummary id={expectedUrlId} />);

    expect(component.find('.link').prop('to')).toEqual(expectedUrl);
  });
});
