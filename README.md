Frontend Assignment:

This project is a frontend application developed using React, TypeScript, and Vite as the build tool. It has been enhanced with TailwindCSS for fast and responsive styling, Storybook for interactive component documentation, and Vitest with React Testing Library for testing. The focus of this project is on creating reusable and well-structured components that can be easily tested, styled, and documented. The two major components implemented are an InputField and a DataTable, both of which showcase different states, variations, and functionalities that are commonly required in modern frontend applications.

Overview of the Project:

The InputField component is designed to handle different input use cases such as text fields, password fields with toggle visibility, error states with validation messages, and size variations. This makes the component versatile and suitable for various forms throughout an application.

The DataTable component provides a structured way of displaying tabular data with features such as column sorting and row selection. These features are implemented in a reusable manner so the table can adapt to different datasets and column definitions. Together, these components demonstrate the principles of reusability, modularity, and scalability in frontend development.

Installation and Setup:

To set up the project, ensure that Node.js (version 18 or above) is installed on your system. Once the project folder is opened in VS Code or a terminal, run the following command to install dependencies:

npm install


After installation, the development server can be started with:

npm run dev


The application will be available locally at http://localhost:5173/
.

If you want to explore the components in isolation using Storybook, you can start Storybook with:

npm run storybook -- --config-dir .storybook


This will open Storybook at http://localhost:6006/
. Here you can see the components rendered with different states and interact with them.

Testing the Components:

Testing plays a crucial role in ensuring the correctness and reliability of reusable components. The project uses Vitest as the testing framework with React Testing Library for rendering and interacting with React components in tests.

To run the tests, use:

npm test


This command will execute the test suites written for both the InputField and DataTable components. The tests cover rendering, user interaction (such as toggling password visibility), and functional behavior (such as sorting in the DataTable). These tests ensure that the components behave as expected under different scenarios.

Project Organization:

The project follows a clean folder structure to separate different concerns. All components are organized inside the src/components/ directory. Each component has its own folder that contains the implementation file (.tsx), the Storybook stories (.stories.tsx), and the corresponding test file (.test.tsx). This organization makes it easier to maintain and scale the project, as each component is self-contained with its code, documentation, and tests.

The .storybook/ directory holds the configuration for Storybook. Meanwhile, the root folder contains essential configuration files such as vite.config.ts, tailwind.config.js, and tsconfig.json that control the build, styling, and TypeScript setup respectively.

Final Notes:

This project is designed to be submission-ready for an academic or training assignment. It not only fulfills the requirement of building components but also demonstrates good practices such as code modularity, testing, documentation, and styling. The inclusion of Storybook adds an extra layer of professionalism, as it provides live, interactive documentation for evaluators or developers.

To further polish the submission, it is recommended to add screenshots of both the running app and Storybook interface into the README. This makes the project self-explanatory even to someone who does not run it locally. With this setup, the project looks modern, complete, and professional.
