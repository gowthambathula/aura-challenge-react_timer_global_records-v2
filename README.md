# Aura Code Challenge

This challenge will allow you to demonstrate your knowledge of React and modeling data.
It is intended to replicate development stories that could come up on the job.
After you submit the completed project we will schedule a follow-up code review.

## Getting started

- This bundle includes a React application.
- Node.js v10.19.0 or greater is required.
- All the tooling you need to complete the exercises has already been added.
- In a terminal run `npm i`.
- In a browser visit `http://localhost:4000`. The home page contains links to the two exercises.
- Redux DevTools have been configured for you as a convenience if you choose to use them. Install the [Chrome extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) if you haven't already.
- All of your work should live in `src/pages`, `src/services`, and `src/components`.
- You do not need to modify `src/_internal`.

## Part I: React Timer

### Acceptance Criteria

- Implement a timer that counts down from one minute.
- On page mount, the timer should display all zeroes along with an "expired" message.
- Clicking the "Reset" button sets the timer to one minute.
- Clicking the "Start" button starts the timer.
- Once the timer expires the "expired" message should be displayed.
- The timer format should be `m:ss` no matter the time.
- The `useState` hook has been added for you but other React hooks are also fair game.

## Part II: Global Records

### Acceptance Criteria

- Replace the imported data file with 'global' state to populate the `Record` components.
- `util/mockFetch` contains a `mockFetch` utility which you should use to retrieve the data and store in state.
- You have three options for state management:
  1. Redux, which has already been configured for you.
  2. `useReducer` hook, which is preferable if you do not choose Redux.
  3. React Context
- The data should be stored in an extensible manner. Imagine if we had to store hundreds of records, not just ten.
- If you choose Redux all your work should live in `src/services/records`. Some notes on the service:
  - The `index.js` file must export a valid Redux reducer named `records`. A placeholder has been added for you.

### Sample Record Object

```
{
  id: 123,
  artist: {
    name: 'Some artist',
    id: 456,
  },
  album: {
    title: 'Some record,
    imageSrc: '/some/asset/path.jpg'
  }
}
```

## Suggestions

- Spend as much or as little time as you wish on this challenge.
- Many implementation details are up to you — be prepared to explain your decisions.
- Details matter but you should strive to deliver complete features.
- Consider how you can prove that both features work as intended.

## Submitting your work

- Commit changes as you normally would on a feature branch.
- Push to GitHub or another git service. If you create a private GitHub repo please add "okanthony" as a viewer.
- Share the repository link with us.

## Package Scripts

| command              | description                     |
| :------------------- | :------------------------------ |
| `npm start`          | Start dev server on port `4000` |
| `npm run format:fix` | Format files with `prettier`    |
| `npm test`           | Execute tests with `jest`       |
