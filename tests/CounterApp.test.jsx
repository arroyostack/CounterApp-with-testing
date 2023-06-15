import { fireEvent, getByRole, getByText, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe( 'Test in <CounterApp />', () => {
    const countStart = 20;
    test( 'should math the snapshot', () => {
        const { container } = render( <CounterApp value={ countStart } /> );
        expect( container ).toMatchSnapshot();
    } );

    test( 'should show initial value 20 <CounterApp={20}/>', () => {
        render( <CounterApp value={ 20 } /> );
        expect( screen.getByText( 20 ) ).toBeTruthy();
    } );

    test( 'should increment with btn +1', () => {
        render( <CounterApp value={ countStart } /> );
        fireEvent.click( screen.getByText( '+1' ) );
        expect( screen.getByText( '21' ) ).toBeTruthy();

    } );
    test( 'should decrement with btn -1', () => {
        render( <CounterApp value={ countStart } /> );
        fireEvent.click( screen.getByText( '-1' ) );
        expect( screen.getByText( '19' ) ).toBeTruthy();

    } );
    test( 'should reset with btn reset', () => {
        render( <CounterApp value={ countStart } /> );
        fireEvent.click( screen.getByText( '-1' ) );
        fireEvent.click( screen.getByText( '-1' ) );
        fireEvent.click( screen.getByRole( 'button', { name: 'btn-reset' } ) );
        expect( screen.getByText( '20' ) ).toBeTruthy();

    } );
} );