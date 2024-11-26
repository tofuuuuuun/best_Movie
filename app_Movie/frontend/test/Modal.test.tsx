import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Modal } from '../src/components/Modal/Modal.tsx';
import '@testing-library/jest-dom';

type MovieType = {
    id: string;
    title: string;
    poster_path: string;
}

describe('AddButton Component', () => {
    it('renders start button', () => {
        const mockToggleModal = vi.fn();
        const mockSearchMovie = vi.fn();
        const mockInputMovieTitle = vi.fn();
        const mockResponseMovies: MovieType[] = [];
        const mockMoviePosterList: { id: string, title: string, poster_path: string }[] = [];
        const mockMovieTitle = '';
        const mockClearModal = vi.fn();
        const mockDeleteAlbum = vi.fn();
        const mockToggleAlbum = vi.fn();
        const mockErrorMessage = '';

        render(
            <Modal
                toggleModal={mockToggleModal}
                searchMovie={mockSearchMovie}
                inputMovieTitle={mockInputMovieTitle}
                responseMovies={mockResponseMovies}
                moviePosterList={mockMoviePosterList}
                movieTitle={mockMovieTitle}
                clearModal={mockClearModal}
                deleteAlbum={mockDeleteAlbum}
                toggleAlbum={mockToggleAlbum}
                errorMessage={mockErrorMessage}
            />
        );

        const buttonElement = screen.getByRole('button');
        const inputElement = screen.getByRole('textbox');
        const modalTextElement = screen.getByText('あと10枚選ぼう');

        expect(buttonElement).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
        expect(modalTextElement).toBeInTheDocument();
    });
});