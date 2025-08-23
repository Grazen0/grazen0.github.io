---
title: Lessons Learned From a Web Development Class
summary: a
tags: [web, java, typescript, react]
---

The semester's over now, and I with it ended one of the most time-consuming classes I've taken so far: Platforms-Based Development ("Desarrollo Basado en Plataformas" for my pals). Fancy way to say "web development".

## Backend

Funnily enough, I was quite the Java hater before the semester started. I didn't have a lot of experience in it besides an old, abandoned [Minecraft plugin][userlogin]. Despite that, I would make fun of the language a lot with my friends. Sure enough, I had seen the memes and all the `AbstractBuilderFactoryImplementorFactoryBuilderBuilder` jokes. This is why I used to be a bit worried about Java being the language we'd be using for the backend half of the course.

We used [Spring Boot] as our backend framework. ¿What can I say? I had experience with Node.js frameworks like Express and Nest.js, tooling like mongoose, etc., but I kid you not, _nothing_ compares to the sheer amount of (to put it in a way) _battle-readiness_ I found in Spring Boot.

- Database mapping via Spring Data JPA. (Generating SQL queries from method names is crazy...)
- Security with JWTs via Spring Security (and some extra libs).
- DTO validations via Spring Validation.
- Caching via [Caffeine].
- Database migrations via [Flyway].

Most of these features could be enabled and used just by slapping some annotations onto the code (or by literally just including the dependency in the build configuration).

Another incredibly useful library was [Lombok], which I have no idea how I had not heard about before. Literally never had to write a single getter or setter, _ever_.

### A note on Spring Data JPA

## Frontend

### Next.js

### SWR / React Query

### Zod

## Deployment

Learning to deploy my app was surprisingly fun! As some friends had told me before, it really feels like building with Legos.

### All on a single EC2

Our first official deployments ran everything on an EC2 instance with [Docker Compose]. My `docker-compose.yml` had these containers:

- `db`: A PostgreSQL container for the database.
- `backend`: My app's backend.
- `frontend`: My app's frontend.
- `caddy`: A Caddy container that forwards requests to `backend` and `frontend` while also enabling HTTPS.

Of course, volumes were properly configured to persist database data and some Caddy output files.

### With an actually passable AWS architecture

At some point, I realized having everything on a single EC2 instance wasn't going to cut it due to a few reasons:

- Due to AWS Academy limits, the app would shut 4 hours after turning it on.
- Our teachers might not like it as much.
- I wanted to learn a bit more about AWS.
- It just wasn't the best use of our AWS Academy credits, anyways.

[userlogin]: https://www.spigotmc.org/resources/userlogin.80669/
[spring boot]: https://spring.io/projects/spring-boot/
[docker compose]: https://docs.docker.com/compose/
[caffeine]: https://github.com/ben-manes/caffeine/
[flyway]: https://www.red-gate.com/products/flyway/community/
[lombok]: https://projectlombok.org/
