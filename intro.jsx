//react is used to create single page appllication , becoz the html has only one div that is rendered in the root element and the content is changed dynamically
//react dom is a virtual dom which runs parallel to the browser dom  of react and dom is  a tree structure for elements
//create root is a function that creates root elem in the dom and render is a function that renders the app component in the root element.
//app is a function that returns jsx elements, so this function basically has a html structure that is rendered in the root element
//name the component with a uppercase letter
// while returning jsx element in a component you can return only one element, if you want more elemnets like few heading or paragraphs then wrap those elements in a div or a fragment

//VIRTUAL DOM
//create root behind the scene creates a virtual dom which is the copy of browser dom and it is tree structure of elements

//browser reload m complete dom structure is formed again but in react only the changes made are rendered in dom and not the whole dom structure is rendered again
//suppose the elements are connected to the network and they are being updated again and again
//is case m  id i would have stayed a bit then i wont have to make the intermediate update i can directly make the final changes in the dom

//react fibre
//virtual dom ko update karne wali algorithm h fibre

// reconcilition - comparing browser dom tree and react ka dom tree jo creteRoot se aaya h to determine which parts need to be changed

//### What is React Fiber?

// **React Fiber** is a rework of React's core algorithm to improve performance, particularly in animations, layouts, and user interactions, by breaking rendering work into smaller chunks and spreading it across multiple frames.

// ### Key Goals

// 1. **Incremental Rendering**: Breaks rendering into chunks, spreading work over multiple frames.
// 2. **Pause, Abort, Reuse**: Can pause, abort, or reuse rendering work.
// 3. **Prioritize Updates**: Assigns priority to updates, ensuring critical tasks happen first.
// 4. **Concurrency**: Handles tasks concurrently for better efficiency.

// ### Important Concepts

// - **Reconciliation**: Efficiently updates the UI by comparing new and old UI trees.
// - **Scheduler**: Determines when and what work to do, prioritizing smooth interactions.

// ### Fiber Structure

// - **Type and Key**: Identifies components and helps update lists.
// - **Child and Sibling**: Form a tree structure of fibers.
// - **Return**: Tracks the return address after completing a fiber.
// - **Props**: Holds current and previous properties of components.
// - **Priority**: Indicates the importance of work.
// - **Alternate**: Tracks current and work-in-progress fibers for efficient updates.

// ### Benefits

// 1. **Smooth Experience**: Avoids blocking the main thread for smoother interactions.
// 2. **Efficient Updates**: Prioritizes critical updates.
// 3. **Flexible Work Handling**: Can pause, abort, or reuse work for better performance.

// ### Summary

// React Fiber enhances React's performance by improving how updates are managed, prioritizing tasks, and allowing flexible work handling, leading to smoother and more efficient user experiences.
