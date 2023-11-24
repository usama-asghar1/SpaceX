import { render, screen } from '@testing-library/react';
import Summary from './index';

test('renders the title of the app',  () => {
    render(<Summary />);
  
    //page initially renders loading because no api data for the test
    const loadingElement = screen.queryByText(/Loading/i);
    expect(loadingElement).toBeInTheDocument(); 

});



