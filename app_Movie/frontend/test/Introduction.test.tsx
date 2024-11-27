import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Introduction } from '../src/components/Introduction';
import '@testing-library/jest-dom';

describe('Introduction Component', () => {
	it('renders start button', () => {
		const mockSelectStart = vi.fn();
		const mockRandomURLList = [
			{ poster_path: 'path1.jpg' },
			{ poster_path: 'path2.jpg' },
			{ poster_path: 'path3.jpg' },
		];

		render(
			<Introduction
				selectStart={mockSelectStart}
				randomURLList1={mockRandomURLList}
				randomURLList2={mockRandomURLList}
				randomURLList3={mockRandomURLList}
				randomURLList4={mockRandomURLList}
			/>
		);

		const buttonElement = screen.getByText(/映画を選ぶ/i);
		expect(buttonElement).toBeInTheDocument();
		fireEvent.click(buttonElement);
		expect(mockSelectStart).toHaveBeenCalledTimes(1);
	});
});