import { v4 as uuidv4 } from 'uuid';

const creatBookWithId = (book) => {
  return {
    ...book,
    isFavorite: false,
    id: uuidv4(),
  };
};

export default creatBookWithId;
