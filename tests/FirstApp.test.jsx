import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';


describe( 'Test in <FirstApp2.jsx/>', () => {



  test( 'should show title in h1', () => {
    const title = 'Mecano en tus muerto';
    const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> );
    expect( getByTestId( 'test-title' ).innerHTML ).toContain( title );
  } );

  test( 'should show subtitle sent by props', () => {
    const title = 'Mecano en tus muerto';
    const subtitle = 'Mecano en tus muerto';
    const { getByText } = render( <FirstApp subtitle={ subtitle } title={ title } /> );

    expect( getByText( subtitle ).innerHTML ).toBeTruthy();
  } );
} );