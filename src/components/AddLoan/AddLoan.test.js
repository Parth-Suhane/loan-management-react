import React from 'react';
import { mount, shallow } from 'enzyme';
import AddLoanComponent from './AddLoanComponent';
import { Form } from 'react-bootstrap';

it('AddLoanComponent loanAmount input check', () => {
    const component = mount(<Form.Control type="number" name="loanAmount" min={1} />);
    expect(component.find('input')).toHaveLength(1);
    expect(component.min).toBeFalsy();
})

it('AddLoanComponent loanTerm input check', () => {
    const component = mount(<Form.Control type="number" name="loanTerm" min={1} />);
    expect(component.find('input')).toHaveLength(1);
    expect(component.min).toBeFalsy();
})

describe('AddLoanComponent tests', ()=> { 
    const wrapper = shallow(<AddLoanComponent />);
   
    it('should have a btn component', ()=> {
      //Button should be present
      expect(wrapper.find('button')).toHaveLength(1);
      //Button should have matching text
      expect(wrapper.find('button').text()).toEqual('Save');
      
})

})


