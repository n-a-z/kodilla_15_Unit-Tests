import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate link to correct url', () => {
    const expectedUrlId = 'abc';
    const expectedUrl = '/trip/abc';
    const component = shallow(<TripSummary id={expectedUrlId} />);

    expect(component.find('.link').prop('to')).toEqual(expectedUrl);
    //console.log(component.debug());
  });

  it('should have correct src and alt of <img>', () => {
    const expectedImgSrc = 'picture.jpg';
    const expectedImgAlt = 'picture';
    const component = shallow(
      <TripSummary image={expectedImgSrc} name={expectedImgAlt} />
    );

    expect(component.find('img').prop('src')).toEqual(expectedImgSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedImgAlt);
  });

  it('should render correct name, cost and days props', () => {
    const expectedPropsName = 'name';
    const expectedPropsCost = '1';
    const expectedPropsDays = 1;

    const component = shallow(
      <TripSummary
        name={expectedPropsName}
        days={expectedPropsDays}
        cost={expectedPropsCost}
      />
    );
    console.log(component);

    expect(component.find('.title').text()).toEqual(expectedPropsName);
    expect(component.find('.details > span').at(0).text()).toEqual(
      `${expectedPropsDays} days`
    );
    expect(component.find('.details > span').at(1).text()).toEqual(
      `from ${expectedPropsCost}`
    );
  });
});
