import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from './Sidebar';

describe('Sidebar component', () => {
  test('renders desktop sidebar and nav items', () => {
    const mockSetMenuOpen = jest.fn();
    render(<Sidebar menuOpen={false} setMenuOpen={mockSetMenuOpen} />);

    // Brand element should be present
    const brand = container.querySelector('.brand');
    expect(brand).toBeTruthy();

    // Nav items should be present by text
    expect(screen.getByText(/Buscar/i)).toBeInTheDocument();
    expect(screen.getByText(/Explorar/i)).toBeInTheDocument();
    expect(screen.getByText(/Tu música/i)).toBeInTheDocument();
  });

  test('mobile drawer reflects `menuOpen` and calls setMenuOpen when closed', () => {
    const mockSetMenuOpen = jest.fn();
    const { container } = render(<Sidebar menuOpen={true} setMenuOpen={mockSetMenuOpen} />);

    // Mobile drawer should have the 'open' class when menuOpen is true
    const mobileDrawer = container.querySelector('.mobile-drawer');
    expect(mobileDrawer).toBeTruthy();
    expect(mobileDrawer.classList.contains('open')).toBe(true);

    // aria-hidden should be false when open
    expect(mobileDrawer).toHaveAttribute('aria-hidden', 'false');

    // Clicking the close button should call setMenuOpen(false)
    const closeButton = screen.getByLabelText(/Close menu/i);
    fireEvent.click(closeButton);
    expect(mockSetMenuOpen).toHaveBeenCalledWith(false);

    // Clicking the backdrop should also call setMenuOpen(false)
    const backdrop = container.querySelector('.mobile-drawer-backdrop');
    expect(backdrop).toBeTruthy();
    fireEvent.click(backdrop);
    expect(mockSetMenuOpen).toHaveBeenCalledWith(false);
  });
});
