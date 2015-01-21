# AJAX drill

## Setup

* run `bundle`, `rake db:create` and `rake db:migrate` (there's a silly little table involved...)
* run the server with `shotgun`
* open up the root route on your localhost `localhost:9393/`

## Instructions
1. You'll see a bunch of squares (as `<div>`s) on the page.
2. The goal is that when you interact with each div, it sends a request with some data to different routes on the server via AJAX.
3. The server should store the arbitrary data in the database.
4. The server should respond to the request with something different to what you sent up.
5. When the browser receives the response, use that response to somehow manipulate the `<div>` with which you interacted. Remember that the an AJAX call is expecting a limited number of things in response, usually a string or a JSON object.

I've already set up the first `<div>` to do something interactive when you click on it. Now go have fun playing with the rest!

## Background on this drill  
This was an exercise I built for my friends Laura and Lydia when I went through DBC myself. It is a pretty free-form exercise, but it gives you the opportunity to play around with AJAX calls to the server and DOM manipulation with the return value.

The original plan for this exercise was to play a sort of telephone game. Person one (me in this case) would bind some event to the first square, send some arbitrary data to the server, get a response and then change the DOM based on the response. Person two would then do the same for the second square and try to out-do the first person creatively!

You can pass this off to your cohort-mates, or you can play telephone with yourself.



