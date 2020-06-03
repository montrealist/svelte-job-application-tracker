import Navbar from '../src/components/Navbar.svelte';
import { render } from '@testing-library/svelte';

/* 

Tutorials:

https://timdeschryver.dev/blog/how-to-test-svelte-components
https://dev.to/jpblancodb/testing-svelte-components-with-jest-53h3

*/

it('Navbar renders', async () => {
    const { getByText } = render(Navbar);
    expect(getByText('Add Item'));
})