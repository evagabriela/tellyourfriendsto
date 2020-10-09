# Getting Started

https://tellyourfriendsto.github.io/ is a static HTML site that just randomly shows 1 element at random on page load.
Javascript will randomly pick an element and toggle the CSS to show it.

Each snippet is called a 'action'.
It can be a simple thought, a suggestion or an action.

You can interact with actions by clicking:

1. External links
2. Clickable words that show/hide additional context or educational tidbits.
3. Clicking on hashtags to refresh the page in that category of hashtag.
4. Watching a video

The site just loads all the HTML hidden from view, and then uses jquery to randomly pick a action (sometimes scoped to a hashtag).
There's a ruby script that helps generate the HTML from plain text - this is just a helper.

```console
# from the project root
ruby src/scripts/text_to_html.rb
```

The HTML is saved into snippets which you can modify and are the main source of truth for the site.
You can just manually write your own snippets instead of generating them.
Just `cat` all the HTML snippets and manually update the contents of index.html if there are changes.

This page uses GitHub pages so you can update it simply by pushing to Github's master branch.

For debugging production, just add `show=1` as a URL parameter to see all actions at once.
E.g. `https://tellyourfriendsto.github.io/?show=1`
