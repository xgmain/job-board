# Sidekicker coding challenge frontend

## Install
- `cd frontend`
- `npm install` or `yarn install`
- just in case
  - `docker-compose build`
  - `docker-compose up -d`
  - `npm start` will launch react instance on port 3000, shouldn't need
  - you may need `docker-compose up -d --force-recreate` when front end has issue

## Test
- don't have time to do

## Api url
- in .env file

## External lib
- `redux`
- `react-redux`
- `redux-thunk`
- `react-router-dom`
- `bootstrap`
- `axios`
- `enzyme` and others

## Didn't do
- login
- comment my code
- front end validation

## Improvement
- better error handle, I only did when create a new job, it definitely need a lot improvement
- better redux, reducer, I kinda throw everything in reducer
- better web UI, It's way to simple for a site using bootstrap
- better css/sass or less, I used style, should seperate into css file
- better comment
- better test, I only did simple App component test
- sorting on api endpoint, should return jobs list in desc order, shouldn't sort on front end

@author xin gao
@email xin.gao.au@outlook.com