import Navbar from '../src/components/Navbar.svelte';
import { render, fireEvent } from '@testing-library/svelte';

// https://timdeschryver.dev/blog/how-to-test-svelte-components

it('Navbar renders', async () => {
    const { getByText } = render(Navbar);
    expect(getByText('Hello World!')).toBeInTheDocument();
})