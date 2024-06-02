# Audiophile e-Commerce App

Welcome to the Audiophile e-Commerce app! This frontend application allows users to explore and shop for audio products across different categories. Below are the key features of the app:

## Features

1. **Browse Products by Category:**

   - Users can view a wide range of audio products, including headphones, earphones, and speakers.
   - Each category provides a curated list of products with detailed information.

2. **Product Details:**

   - Clicking on a specific product reveals its detailed information, such as specifications, pricing, and other options.
   - Users can learn about product features, customer reviews, and more.

3. **Add to Cart:**

   - When users find a product they like, they can add it to their shopping cart.
   - The cart keeps track of selected items.

4. **View Cart Details:**

   - Users can access their cart at any time to review the items they've added.
   - The cart displays the total price and quantity of items.

5. **Checkout Process:**

   - To complete their purchase, users proceed to checkout.
   - They provide shipping information and review their order.

6. **Payment and Confirmation:**
   - Users can make payments securely using their preferred method (e-Money, Cash on Delivery, etc.).
   - After successful payment, they receive a thank-you notification on the app and an email confirmation.

## Technologies Used

- **React.js:** The app is built using React.js, a popular JavaScript library for building user interfaces.
- **Tailwind CSS:** Tailwind CSS provides utility classes for styling components, ensuring a consistent and responsive design.
- **Axios:** Axios is used to make API requests to the backend for product data.

## Testing

To ensure the quality and reliability of our codebase, we follow a robust testing approach. We use the following tools and practices:

- **Jest:** Jest is our preferred testing framework for unit testing React components and utility functions.
- **React Testing Library:** We write integration tests using React Testing Library to simulate user interactions and verify component behavior.
- **Mocking API Requests:** We mock API requests using Jest to isolate components during testing and avoid actual network calls.
- **Continuous Integration (CI):** Our CI pipeline runs tests automatically on every push to the repository.

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/njoanc/audiophile.git
   cd audiophile
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Development Server:**

   ```bash
   npm run start
   ```

4. **Open in Your Browser:**
   Visit [http://localhost:5173](http://localhost:5173) to explore the Audiophile app.

## Contributing

Contributions are welcome! If you'd like to improve the app or add new features, feel free to submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
