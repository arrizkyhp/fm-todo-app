/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';

import { Header, InputTodo } from '../ui';

describe(Header, () => {
  it('Should display TODO header', () => {
    const { getByRole } = render(<Header />);
    const headerTitle = getByRole('heading', { name: /todo/i });

    expect(headerTitle).toBeInTheDocument();
  });

  it('Should display Button Switch Darkmode', () => {
    const { getByRole } = render(<Header />);
    const buttonSwitch = getByRole('button', { name: /button-switch-dark/i });

    expect(buttonSwitch).toBeInTheDocument();
  });
});

describe(InputTodo, () => {
  it('Should display input todo', () => {
    const { getByTitle } = render(<InputTodo />);
    const inputTodo = getByTitle('input todo');

    expect(inputTodo).toBeInTheDocument();
  });
});
