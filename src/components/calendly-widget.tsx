import React from 'react';
import { InlineWidget } from 'react-calendly';

const CalendlyWidget = () => {
  return (
    <div style={{ height: '600px', margin: '0 auto', maxWidth: '800px' }}>
      <InlineWidget
        url='https://calendly.com/thegrowthhunger/30min'
        pageSettings={{
          backgroundColor: 'ffffff',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: '00a2ff',
          textColor: '4d5055',
        }}
      />
    </div>
  );
};

export default CalendlyWidget;
