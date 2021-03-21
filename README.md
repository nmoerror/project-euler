# Project Euler
# Table of Contents
1. [Project Description](#project-description)
2. [How to use](#how-to-use)
2. [Assumptions](#assumptions)
3. [Notes](#notes)

### API Documentation: https://documenter.getpostman.com/view/11536909/Tz5wVtxQ

## Project Description
  Basic server that runs locally and supports two questions from project euler website.

|  |  | port |
| ---         |     ---      |          --- |
| server   | node    | 3131    |
| database     | mongodb       | 27017      |

## How to use
  cd into directory
  run docker-compose up --build
  open browser or postman on localhost:3131
  
## Assumptions
  * The answer of a Problem can be stored in database
  * submissionTime was calculated in the database intead of passed in by client

## Notes
  current limitations are fetures such as dynamic routes and template rendering.
  Other potential improvements:
  * creation a User entity
  * reinforce MVC pattern

