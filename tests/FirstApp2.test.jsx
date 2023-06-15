import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';


describe( 'Test in FirstApp.jsx', () => {
  const title = 'Mecano en tus muerto';

  test( 'should match the snapshot', () => {
    const { container } = render( <FirstApp title={ title } /> );

    expect( container ).toMatchSnapshot();
  } );

  test( 'should show mesage "Mecano en tus muerto"', () => {
    render( <FirstApp title={ title } /> );

    expect( screen.getByText( title ) ).toBeTruthy();
  } );

  test( 'should show title in h1', () => {
    render( <FirstApp title={ title } /> );

    expect( screen.getByRole( 'heading', { level: 1 } ).innerHTML ).toContain( title );
  } );


} );