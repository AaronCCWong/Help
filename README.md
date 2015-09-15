# Help - What's for lunch?

<!-- [Heroku link][heroku] -->

<!-- [heroku]: http://flux-capacitr.herokuapp.com -->

## Minimum Viable Product
Help - What's for lunch? is a clone of Yelp created to solve the problem of
never knowing what to eat for lunch. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [v] Create accounts
- [v] Create sessions (log in)
- [ ] Add local restaurants to database
- [ ] Create reviews
- [ ] View restaurant information
- [ ] View restaurant reviews
- [ ] Add google maps plugin for map to restaurant
- [ ] Search for restaurants by name
- [ ] Search for restaurants by taggings
- [ ] Vote on the helpfulness of reviews
- [ ] Add image posts

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Seed Database, Review Creation (~1 day)
I will implement user authentication in rails. By the end of this phase, users
will be able to log in and review restaurants that are already in the database.
The website will not be limited to users who are signed up but only signed up
users can write reviews. Users will also have a show page to update their
profiles. Pushing to Heroku is the most important part of this day.

[Details][phase-one]

### Phase 2: Writing reviews, viewing reviews of other users (~2 days)
I will be adding API routes to serve restaurant and review data as JSON. I will
then add Backbone models and collections for restaurants and reviews that fetch
from these routes. At the end of this phase, users will be able to view basic
restaurant information. Users will also be able to see the reviews of other
users.

[Details][phase-two]

### Phase 3: Adding Google maps plugin (~1 day)
I will add the google maps javascript plugin to generate maps that will give the
users viewing specific restaurants the directions to those restaurants based on
the location that the user is viewing the reviews from. By the end of this phase
users should be able to see a map on the review page of a restaurant with the
closest train station to the restaurant.

[Details][phase-three]

### Phase 4: Searching for restaurants (~1-2 days)
I will add a search routes to the restaurants. I will implement a search results
composite view in backbone that will use the restaurant and review collections.
These collections would fetch from the search routes. At the end of this phase,
users should be able to use the search bar to find restaurants either by name
or by food type.

[Details][phase-four]

### Phase 5: Allow users to vote on reviews (~1 day)
I will implement user voting on reviews. I will implement reviews by adding new
tables to the database that will hold the number of votes that the review
has gotten. I will use three separate tables to hold the number of votes for
userful, funny, and cool. Users will only be able to vote once for each upvote
type. Clicking on the button to vote for a column that they have already voted
on will remove their vote. By the end of this phase, users will be able to vote
on whether a review from another user is useful, funny, or cool.

###Phase 6: Allow users to post pictures of restaurants (~1-2 day)
I will add a pictures collection in backbone. This will allow users to post
pictures that they took while in the restaurant. I will also allow users to
add a description to their uploaded pictures.

[Details][phase-five]

### Bonus Features (TBD)
- [ ] Paginate search results
- [ ] User star rating of a restaurant
- [ ] User avatars
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
