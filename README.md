# Help - What's for lunch?

[Heroku link][heroku]

[heroku]: http://help-whats-for-lunch.herokuapp.com

## Minimum Viable Product
Help - What's for lunch? is a clone of Yelp created to solve the problem of
never knowing what to eat for lunch. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [x] Create accounts
- [x] Create sessions (log in)
- [x] Create restaurants
- [x] Create reviews
- [x] View restaurant reviews
- [x] User star rating of a restaurant
- [x] Implement omniauth
- [x] Allow users to add avatars
- [x] Add image posts
- [x] Add root page
- [x] Add local restaurants to database
- [x] Add google maps plugin for directions to restaurant
- [x] Search for restaurants by name
- [x] Vote on the helpfulness of reviews

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Review Creation (~1 day)
I will implement user authentication in rails. By the end of this phase, users
will be able to log in, add restaurants, and review restaurants that are already
in the database. The website will not be limited to users who are signed up but
only signed up users can add restaurants and write reviews. Users will also have
a show page to update their profiles. Pushing to Heroku is the most important
part of this day.

[Details][phase-one]

### Phase 2: Writing reviews, viewing reviews of other users, home page (~2 days)
I will be adding API routes to serve restaurant and review data as JSON. I will
then add Backbone models and collections for restaurants and reviews that fetch
from these routes. At the end of this phase, users will be able to view basic
restaurant information. Users will also be able to see the reviews of other
users as well as the site home page. Users will also be able to give a star
rating of a restaurant.

[Details][phase-two]

###Phase 3: Allow users to post pictures of restaurants and avatars (~1-2 day)
I will add a pictures collection in backbone. I will allow users to upload an
avatar. This will allow users to post pictures that they took while in the
restaurant. I will also allow users to add a description to their uploaded
pictures.

[Details][phase-three]

### Phase 4: Adding Google maps plugin (~1 day)
I will add the google maps javascript plugin to generate maps that will give the
users viewing specific restaurants the directions to those restaurants based on
the location that the user is viewing the reviews from. By the end of this phase
users should be able to see a map on the review page of a restaurant with the
closest train station to the restaurant.

[Details][phase-four]

### Phase 5: Searching for restaurants (~1-2 days)
I will add a search routes to the restaurants. I will implement a search results
composite view in backbone that will use the restaurant and review collections.
These collections would fetch from the search routes. At the end of this phase,
users should be able to use the search bar to find restaurants either by name
or by food type.

[Details][phase-five]

### Phase 6: Allow users to vote on reviews (~1 day)
I will implement user voting on reviews. I will implement reviews by adding new
tables to the database that will hold the number of votes that the review
has gotten. I will use three separate tables to hold the number of votes for
userful, funny, and cool. Users will only be able to vote once for each upvote
type. Clicking on the button to vote for a column that they have already voted
on will remove their vote. By the end of this phase, users will be able to vote
on whether a review from another user is useful, funny, or cool.

[Details][phase-six]

### Bonus Features (TBD)
- [ ] Search for restaurants by taggings
- [ ] View restaurant information
- [ ] Add infinite scroll to first page reviews
- [ ] Paginate search results
- [ ] Track number of reviews for each user
- [ ] Search filters
- [ ] Typeahead search bar
- [ ] User review quotes on restaurants show page
- [ ] Mobile friendly

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md
