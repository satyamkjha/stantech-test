# Personal Finance Tracker

This project is a ReactJS application for a personal finance tracker. It allows users to track their income and expenses, categorize them, and display summary statistics.

## Approach

### Technologies Used

- **ReactJS**: Frontend framework for building user interfaces.
- **Context API**: For managing global state within the application.
- **Chart.js**: Used for displaying a breakdown of expenses by category.
- **JSON Server**: Mock API used to store and fetch financial data (income and expenses).

### Components

1. **AddTransaction**: Component to add new income or expense transactions.
2. **TransactionList**: Displays a list of transactions.
3. **Summary**: Displays total income, total expenses, and balance.
4. **CategoryBreakdown**: Displays a breakdown of expenses by category using Chart.js.

### Styling

- **CSS-in-JS**: Styled-components used for component-level styling.
- Responsive design ensuring compatibility with different screen sizes.

### Additional Features

- Error handling for API calls.
- Loading spinner while data is being fetched.
- Filtering transactions by date range.

## How to Install and Run Locally

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/satyamkjha/stantech-test.git

   ```

2. Navigate into the project directory:

   ```bash
   cd stantech-test

   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Installation

1. Start the JSON Server (mock API):

   ```bash
   npm run server

   ```

2. In another terminal, start the React application:

   ```bash
   npm start

   ```

3. Open your browser and navigate to:
   ```bash
   http://localhost:3000
   ```

##### Author

Satyam Kumar Jha
