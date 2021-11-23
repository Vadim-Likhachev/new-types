import Cart from './service/Cart';
import Movie from './service/movie';

const movie = new Movie (
    1,
    'Мстители',
    500,
    2012,
    'США',
    'Avengers Assemble!',
    ['фантастика', 'боевик', 'фэнтази', 'приключения'],
    137,

);

const cart = new Cart();
cart.add(movie);
cart.getAll();