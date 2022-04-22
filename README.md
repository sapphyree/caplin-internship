# caplin-internship

## Decisions Made
Firstly, "words" is quite an ambiguous term, especially when it comes to hyphenation which is where a majority of decisions were made.
Primarily, "should hyphenated words count as one or two words?" was one of the first questions that came up. To solve this, hyphenated words are treated as a single word where possible.

Another decision made was not to exclude any non-word elements as that requires a lot more polishing than is realistically required. As a result, thing such as "http.." will count as a word starting ih h.
This shouldn't make *too* much of a difference however - in fact, it doesn't change the outcome of the program at all. 
Though this is the case, questions such as "Should 'http' and other non-word elements be counted?" is a question to ask.

Also, numbers are NOT handled whatsoever. Given that my interpretation of "word" is that it must be alphabetical, numbers are not translated (i.e: 2 != two).
Questions should be asked about what to do with numbers.

In addition to the above, there is the issue of double hyphens before words or between. Whilst the specification doesn't say that words that came after double hyphens should be treated:

> letters start words even if they’re inside quotes, underscores or brackets

I still went ahead and attempted to treat them properly as they appeared quite frequently. 
All three versions of quotes (", \`, '), brackets ( \[({ ), single underscores and double-hyphens are handled.
Note that underscores that are 2 or more in length are NOT handled as they do not appear in the data.

For fun I also added in the relative frequency of each letter, to check against the actual frequency across all texts (i.e: letter `t` frequency in the data provided is 16.02% whereas in all texts it is 16%)

## Trade-offs / Preferences
Preferably letter frequency analyses should be done in a language that is easier to do this with - possibly stuffing all the data into a .txt file and then executing it with a script to launch a Python
file which does all the processing. Given that it is pulling data from the web, however, doing this in JS is arguably the better solution rather than messing around with Python as packages like Axios make doing HTTP requests ridiculously easy.

## Prerequisties
- Latest version of JavaScript
- Latest version of Node.js
- Latest Axios package, installable via `npm i` when in `/src/` or `npm install axios` prior to running.

## Running Instructions
To run the script, navigate to the `/src/` folder and type `node main.js`.
The results will output in the terminal, with all other char values available to see as a reference.