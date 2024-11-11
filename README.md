# MeetKai Fullstack Technical Assesment

Welcome! In this exercise, you’ll be building a search feature for a Next.js app using the App Router. Your objective is to implement the following: 
- A server action that fetches GitHub repositories given a search query
- Searchbar UI and a UI to display the results. 
This exercise is designed to take 45 minutes to 1 hour.

## Objective

Implement a search feature that queries the [GitHub API](https://docs.github.com/en/rest/search?apiVersion=2022-11-28#search-repositories) for repositories. Your goal is to:

1. Set up a server action to fetch repositories from the GitHub API based on a user search query.
2. Display the search results on the page, including repository names, descriptions, number of forks, number of stars and the repo's owner information including name and avatar.

### Example API Request

Use the following endpoint to search for GitHub repositories:

```plaintext
https://api.github.com/search/repositories?q=<search_query>
```

Example: `https://api.github.com/search/repositories?q=tetris`

## Instructions

1. **Clone the Repo**: Start by cloning this repository to your local machine.
2. **Install Dependencies**: 
  ```bash 
  yarn
  ```
2. **Create the Search Feature**:
   - Complete the page in the `/search` directory.
   - Create a server action that takes a search query as input, calls the GitHub API, and returns the search results.
   - Display the list of repositories based on the search results.
4. **Run and Test**: Run the Next.js app locally to test your feature and ensure it displays results correctly.

## Bonus (Optional)

If you finish the main objective early, you can expand the feature by adding any of the following:

- **Pagination**: Allow users to view additional pages of results.
- **Filtering**:
  - By programming language.
  - By the number of stars.
  - By other relevant repository details.
  
These enhancements are optional and will not impact your overall assessment, but they’re a great way to demonstrate your skills.

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [GitHub API Documentation](https://docs.github.com/en/rest/search?apiVersion=2022-11-28#search-repositories)
- In addition to the above documentation, you may use whatever tools you'd like (LLMs, google, stackoverflow, etc...)

---
This repo is setup with tailwindcss, but you may feel free to use whatever design systems you are comfortable with.
Good luck, and feel free to ask questions if you need clarification!
