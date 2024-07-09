# LiLo APP
### Davide Ceresa - 2018 - 2021

![app_logo](./assets/images/icon.png)

# 1. Introduction and Goals

## 1.1 Context and Purpose

The LiLo-APP was developed in collaboration with the committee of the Liceo di Locarno. The primary goal of this application was to provide students with various types of information, such as general announcements, registration for self-managed days, notifications about teacher absences, and more.

## 1.2 Task Definition

The primary task of the LiLo-APP was to serve as an information hub for students at the Liceo di Locarno. The application was designed to fulfill several key functions:
- **Announcements**: Provide timely and relevant announcements to students regarding school events, schedule changes, and other important information.
- **Self-Managed Days Registration**: Facilitate the registration process for students participating in self-managed days, ensuring a smooth and organized sign-up experience.
- **Teacher Absence Notifications**: Notify students promptly about the absence of teachers, helping them stay informed and adjust their schedules accordingly.
- **General Information**: Serve as a repository for various pieces of information that students might need on a daily basis, improving communication between the school administration and the student body.

## 1.3 Quality Goals

The development of the LiLo-APP aimed to achieve several quality goals to ensure a reliable and user-friendly experience for students:
- **Usability**: The application should be easy to navigate and use, with an intuitive interface that allows students to quickly access the information they need.
- **Performance**: The app should load quickly and respond promptly to user interactions, providing a seamless experience without significant delays or downtime.
- **Reliability**: The application should be robust and stable, minimizing crashes and ensuring that the information provided is accurate and up-to-date.
- **Security**: Student data and information should be protected with appropriate security measures to ensure privacy and prevent unauthorized access.

## 1.4 Project Duration

The project officially lasted for three years. However, with the advent of Moodle due to the COVID-19 pandemic, the application became redundant and was eventually phased out.

## 1.5 User Engagement

During its active period, the application had around 400 users, a significant portion of whom used the app daily, especially during the period of self-managed days.

## 1.6 Personal Experience and Learning

From a personal perspective, developing LiLo-APP was a valuable learning experience. It marked the beginning of my journey into the world of programming. Throughout the development process, I continuously improved the project by fixing bugs, refining the code (refactoring), and adding new features.

The iterative improvement and hands-on experience gained from this project have significantly contributed to my skills and understanding of software development.

# 2. Context Delimitation

## 2.1 User Stories
Given that the project began when I had limited knowledge of software development, traditional user stories were not utilized. Instead, the development process was guided by frequent meetings with the student committee, who provided detailed instructions and feedback. This collaborative approach ensured that the app met the needs and expectations of its users.

## 2.2 Milestones
### Milestone 1: Launch Application
- Objective: Develop and launch the initial version of the LiLo-APP.
- Key Activities: Implement authentication, teacher absence notifications, and self-managed days registration features. The backend was managed by a colleague. 
- Timeline: Year 2018 - Year 2019

### Milestone 2: Add Features and Backend Implementation
- Objective: Enhance the application with additional features and improve backend infrastructure. 
- Activities: Add the communications feature and implement the backend using Node.js. 
- Timeline: Year 2019 - Year 2020

### Milestone 3: Refactoring, New Design, and Docker Implementation
- Objective: Improve the app’s performance, design, and deployment process.
- Activities: Refactor the codebase, introduce a new design, and implement Docker for easier deployment and management.
- Timeline: Year 2020 - Year 2021

## 2.3 Technical Context
TODO: DIAGRAMM

# 3. Solution Strategy

## 3.1 Technology Decisions
### Technology - [React Native](https://reactnative.dev/):

The decision to use React Native was driven by several key factors. Primarily, React Native allows for the creation of a single codebase that works on both Android and iOS devices, significantly reducing development time and effort. This cross-platform compatibility was essential for ensuring that the app could reach the widest possible audience of students.

Additionally, choosing React Native provided an opportunity to familiarize myself with features similar to those of React, a popular JavaScript library for building user interfaces. This familiarity was not only beneficial for the development of the LiLo-APP but also served as a stepping stone for future professional growth. By gaining expertise in React Native, I could effectively transfer my knowledge to SAP projects, leveraging the similarities between React and React Native to enhance my skill set and contribute to SAP development initiatives.

### Dev. Environment - [Expo](https://expo.dev/):

Expo was chosen as the development environment due to its ease of use and comprehensive feature set. Expo provides a range of tools and services that simplify the development process, allowing developers to focus on building the app rather than managing complex configurations. This streamlined approach was particularly valuable given the limited time and resources available for the project, enabling rapid prototyping and iteration to meet the evolving needs of the student committee.

## 3.2 Dependencies and Libraries
### Form Validation - [Formik](https://formik.org/): 
Formik was used to manage form state and validation, providing a robust and flexible solution for handling user input. By leveraging Formik's capabilities, the app could ensure data integrity and user-friendly interactions, enhancing the overall user experience.

### Navigation - [React Navigation](https://reactnavigation.org/):
React Navigation was utilized to manage navigation, enabling seamless transitions between screens and ensuring a cohesive user journey. By leveraging React Navigation, the app could provide intuitive navigation paths that guided users through the various features and functionalities, enhancing usability and engagement.

### HTTP Requests - [Axios](https://axios-http.com/):
Axios was employed to handle HTTP requests, facilitating communication with the backend server and enabling data retrieval and submission. By integrating Axios into the app, it could efficiently interact with the backend services, ensuring timely and accurate data exchange to support the app's functionality.

### Animations - [Lottie](https://lottiefiles.com/):
Lottie was used to incorporate animations, enhancing visual appeal and engagement for users. By integrating Lottie animations, the app could provide dynamic and interactive elements that captured users' attention and created a more immersive experience, contributing to a positive user perception and increased usability.

## 3.3 Personal Considerations
### Limitations of React Native

One of the key challenges encountered during the development of the LiLo-APP was the limited set of advanced functionalities provided by React Native out-of-the-box. While React Native offers a robust framework for building cross-platform applications, it often requires the integration of external libraries to implement more complex features.

### Discovering the Community

This necessity to integrate external libraries led to the realization of the immense and vibrant community surrounding React Native. The availability of numerous third-party libraries and the active participation of developers globally provided a wealth of resources and support. This community-driven ecosystem was instrumental in overcoming various development hurdles and implementing needed features.

### Overreliance on External Libraries

However, relying heavily on external libraries also posed its own set of challenges. In hindsight, I may have overused external libraries, sometimes opting for them without thoroughly evaluating their maintenance status and community support. On a few occasions, I encountered issues with unmaintained libraries, which delayed the development process. These instances highlighted the importance of carefully selecting external dependencies, ensuring they are well-supported and actively maintained to avoid potential setbacks.

# 4. Building Block View

# 5. Deployment View

# 6. Quality Requirements

# 7. Risks and Technical Debt
| Title:   | Description:                                                                                                                               | Estimated Time: |
|----------|--------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
| Tests    | Part not covered during the development of the project (Yikes!!), it would be great to increase the code coverage of the project (60-80%). | 20h             |  
| Refactor | During the last years I gained more experience about Clean Code and Best Practices, it would be great to implement them.                   | 10h             |
|          | **Total:**                                                                                                                                 | **30h**         |

# 8. Reflection
The decision to develop the LiLo-APP was rooted in a personal desire to create a meaningful tool that would benefit the student community at Liceo di Locarno. This project provided an excellent opportunity to apply theoretical knowledge in a practical context and to experience the full lifecycle of software development firsthand.

## 8.1 Learning and Skill Development

Embarking on this project allowed me to gain a comprehensive understanding of the software development process. I improved my technical skills in areas such as:

- **Programming Languages and Frameworks:** Enhanced my proficiency in JavaScript and React Native, which were crucial for the app’s development.
- **Mobile Development:** Gained hands-on experience with mobile application development, understanding the nuances of creating apps for both Android and iOS platforms.
- **Backend Development:** Collaborated on the backend development, which was initially managed by a colleague, and later contributed to its enhancement using Node.js.

## 8.2 Non-Technical Skills

Beyond technical skills, the project helped me develop important non-technical skills, including:

- **Project Management:** Learned to plan, organize, and manage the development process, setting milestones and ensuring timely completion of tasks.
- **Problem-Solving:** Improved my ability to identify, analyze, and solve problems efficiently, whether they were related to code bugs or design challenges.
- **Communication and Collaboration:** Enhanced my communication skills through frequent meetings with the student committee, ensuring their requirements were met and their feedback was incorporated.

## 8.3 Preparation for Future Challenges

This project also served as a preparatory step for future professional endeavors. The skills and experience gained from developing the LiLo-APP have equipped me to tackle more complex projects, including those within the SAP ecosystem. The familiarity with React Native and the broader React framework will be particularly beneficial in any future SAP development initiatives.

In summary, the LiLo-APP project was a pivotal experience that contributed significantly to my growth as a developer. It provided a solid foundation of technical skills, improved my problem-solving abilities, and prepared me for the challenges of professional software development.

**About arc42**

arc42, the template for the documentation of software and system architectures.

Template Version 8.2 EN (based on AsciiDoc Version), January 2023

Created, maintained, and © by Dr. Peter Hruschka, Dr. Gernot Starke, and contributors. See <https://arc42.org>.
