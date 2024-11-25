import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ResetArea } from '../src/components/ResetArea.tsx';
import '@testing-library/jest-dom';

describe('AddButton Component', () => {
    it('renders start button', () => {
        const mockResetMoviePosterList = vi.fn();
        const mockHandleCapture = vi.fn();

        render(
            <ResetArea
                resetMoviePosterList={mockResetMoviePosterList}
                handleCapture={mockHandleCapture}
            />
        );

        const resetImgElement = screen.getByAltText('リセットボタンのアイコン');
        const rotateImgElement = screen.getByAltText('キャプチャボタンのアイコン');

        expect(resetImgElement).toBeInTheDocument();
        expect(rotateImgElement).toBeInTheDocument();
    });
});