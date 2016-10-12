import React from 'react';
import { storiesOf } from '@kadira/storybook';

import InputField from '../components/InputField/index.jsx';
import { currency, currencyTruncated } from '../utils/numberFormat';

storiesOf('Input field', module)
  .add('Input mask with currency', () => (
    <div>
      <InputField label="Amount" id="amount" value={123} formatter={currency} mask />
    </div>
  ))
  .add('Input mask with currency and truncation', () => (
    <div>
      <InputField label="Amount" id="amount" value={1234} formatter={currencyTruncated} mask />
    </div>
  ))
  .add('Floating input mask with currency and truncation', () => (
    <div>
      <InputField
        label="Amount"
        id="amount"
        value={1234}
        formatter={currencyTruncated}
        mask
        style="floatingMask"
      />
    </div>
  ))
  .add('Floating input mask that appears when editing', () => (
    <div>
      <InputField
        label="Amount"
        id="amount"
        value={1234}
        formatter={currencyTruncated}
        style="floatingMask"
        mask={false}
        showOnEdit
      />
    </div>
  ))
  ;
