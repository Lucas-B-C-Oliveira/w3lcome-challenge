# W3lcome - Challenge 

## Monorepo
This monorepo contains the following applications:
* API ``./apps/api``
    -  Restfull API in express JS with Typescript
* Web ``./apps/web`` 
    - frontend to consume api in NextJS with Typescript

## Steps to run
1. ``npm install`` (run on root folder) 
2. ``cd ./apps/api``
3. ``docker-compose up -d`` (OBS: you will need docker and docker-compose on your pc)
4. ``npx prisma migrate dev`` (OBS: you will need prisma to run CLI commands, but just running npm install in the root folder should work)
5.  check your ``.env`` on ``./apps/api`` and make sure you have the correct ``DATABASE_URL``. See ``.env.example`` (OBS: you will need create ``.env`` based on ``.env.example`` in ``./apps/api``)

### Common scripts for all applications:

`` npm run dev`` (run on root folder to start all applications)

# API

```cd ./apps/api```

## FRs (Functional Requirements)

- [x]  It must be possible to view tasks.
- [x]  It must be possible to paginate tasks.
- [x]  It must be possible to create a task.
- [x]  It must be possible to update a task.
- [x]  It must be possible to delete a task.
