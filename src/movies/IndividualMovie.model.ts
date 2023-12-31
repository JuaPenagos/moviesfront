export interface movie{
    id: number;
    title: string;
    poster: string;
}

export interface landingPageDTO{
    cinemaMovies?: movie[];
    premierMovies?: movie[];
}