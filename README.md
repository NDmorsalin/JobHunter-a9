## Welcome to the [JobHunter](scandalous-lip.surge.sh) responsive web site.

# Live Preview [scandalous-lip.surge.sh](scandalous-lip.surge.sh)

### Features of this web site

## Nav bar
1.  When click on Logo go to home route path is '/'
2.  when click on Star Applying button redirect to '/allJobs' route.
3.  on middle navigation buttons redirect on their respective pages

## Home page

- When clicking on each Job item page is redirected to the '/job/id' route like '/job/3
- When clicking on See All Jobs button is shown 10 jobs items

## Statistics Page

The chart items container is given `overflow: auto ` 

## Applied Jobs page

in this page get jobs items from the  `localStorage` 

if clicked on View details button then redirect to the 'job/id' route on its respective id


## All Jobs page

#### when clicked on Start applying button then redirect to the '/alljobs' route

Here each job item has 2 buttons 
- 1 View details
- 2 Apply now

if you click on the **view details** button then you will redirect to the '/job/id' route

and if you click on the **Apply now** button then this jobs item is stored on local storage

## '/job/id' page

in this page has only one **Apply now** button then this jobs item is stored on local storage

> If You click on the **Apply now** button again after first time clicked then you will see a Tost and this Job will not be saved again on local storage
