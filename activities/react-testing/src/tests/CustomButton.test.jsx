import { vi, describe, it, expect} from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CustomButton } from './../components/CustomButton';

describe('CustomButton', () => {
  it("should render a button with a text 'Click Me Please'", () => {
    render(<CustomButton onClick={() => {}} />);
    const button = screen.getByRole('button', {name: "Click me please"});
    expect(button).toBeInTheDocument();
  })

  it("should call the onClick function when clicked", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup()
    render(<CustomButton onClick={onClick} />);

    const button = screen.getByRole('button', {name: "Click me please"});
    const button2 = screen.getByText(/Click me please/i);
    screen.debug(button2)

    await user.click(button);

    expect(onClick).toHaveBeenCalled();
  })

  it("should not have been called when is not clicked", async () => {
    const onClick = vi.fn();
    render(<CustomButton onClick={onClick}/>)

    expect(onClick).not.toHaveBeenCalled();
  })
})

