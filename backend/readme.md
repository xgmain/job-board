# Job board backend

## Install
- `docker-compose build`
- `docker-compose up -d`
- `cd backend`
- double check `.env`
- `composer install`
- enter docker container `docker exec -it coding-challenge-backend /bin/bash` 
- `php artisan migrate`
- `php artisan db:seed`
- you may need to do `composer dump-autoload`, if have issue
- check logs, if have issue

## Test
- install postman
- or run `./vendor/bin/phpunit` in docker container `coding-challenge-backend`

## Api endpoint
- `routes/web.php`

## External lib
- `tymon/jwt-auth`

## Secure api
- I installed `tymon/jwt-auth`, tested it, but I don't have time to make auth on front end, so I disable it in middleware
- you need to follow `https://iwader.co.uk/post/tymon-jwt-auth-with-lumen-5-2` to make it work

## Cross Origin
- I did `corMiddleware`

## Didn't do
- use 
```
use Illuminate\Foundation\Testing\DatabaseMigrations;
```
in test, so it is going to write physical data

- pagination



@author xin gao
@email xin.gao.au@outlook.com
