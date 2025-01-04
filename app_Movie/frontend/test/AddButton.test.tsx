import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { AddButton } from '../src/components/AddButton.tsx';
import '@testing-library/jest-dom';

describe('AddButton Component', () => {
    it('renders start button', () => {
        const mockIsModalOpen = false;
        const mockSetModalIsOpen = vi.fn();

        render(
            <AddButton
                isModalOpen={mockIsModalOpen}
                setModalIsOpen={mockSetModalIsOpen}
            />
        );

        const textElement = screen.getByText(/あなただけの10作品を選ぼう！/i);
        const buttonElement = screen.getByRole('button');
        expect(textElement).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
    });
});