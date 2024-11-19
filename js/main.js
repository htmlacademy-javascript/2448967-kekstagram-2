const COUNT_PHOTO = 25;
const MIN_LIKES = 15;
const MAX_LIKES= 200;
const DESCRIPTIONS = [
    'Утро',
    'Котик',
    'Луна',
    'Молния',
    'Море',
    'Горы',
    'Компьютер',
    'Солнышко',
    'Велосипед',
    'Машина',
] 
const COUNT_COMMENT = 30;
const MIN_AVATAR = 1;
const MAX_AVATAR = 6;
const MESSAGE = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
]

const NAME = [
    'Артем',
    'Настя',
    'Михаил',
    'Анна',
    'Павел',
    'Елена',
    'Костя',
    'Сергей'
]

const getRandomInteger = (min, max) => {
    const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
    const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
    const result = Math.random() * (upper - lower + 1) + lower;

    return Math.floor(result)
}


const getComment = (j) => {
    return {
        id: getRandomInteger(0,1000),
    avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
    message: MESSAGE[getRandomInteger(0, MESSAGE.length - 1)],
    name:  NAME[getRandomInteger(0, NAME.length - 1)]
    }
}

const getComments = () => {
    const comments = [];
    const countComments = getRandomInteger(0, COUNT_COMMENT);
    for(let i = 1; i<=countComments; i++) {
        comments.push({
            id: getRandomInteger(0,1000),
    avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
    message: MESSAGE[getRandomInteger(0, MESSAGE.length - 1)],
    name:  NAME[getRandomInteger(0, NAME.length - 1)]
        }
        )  
    }
    return comments  
}


const getPhoto = (i) => {
    return {
        id: i,
       url: `photos/${i}.jpg`,
       description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
       likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
       comments: getComments()
           }
}

 const getData = () => {
    const data = [];
    for(let i = 1; i<=COUNT_PHOTO; i++) {
    data.push(getPhoto(i))
}

return data;
 }

 console.log(getData());