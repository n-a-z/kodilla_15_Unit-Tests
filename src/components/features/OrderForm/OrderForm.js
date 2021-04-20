import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
//import styles from './OrderForm.scss';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';
import Button from '../../common/Button/Button';

const OrderForm = ({ options, tripCost, setOrderOption }) => (
  <Row>
    {pricing.map((option) => (
      <Col md={4} key={option.id}>
        <OrderOption
          currentValue={options[option.id]}
          {...option}
          setOrderOption={setOrderOption}
        />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options} />
      <Button
        onClick={() =>
          sendOrder(options, tripCost, tripName, tripId, tripCountry)
        }
      >
        Order now!
      </Button>
    </Col>
  </Row>
);
OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.string,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
